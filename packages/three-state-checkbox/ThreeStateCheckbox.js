export class ThreeStateCheckbox extends HTMLElement {
    _observer

    _checked = null // null | true | false

    get checked() {
        return this._checked
    }

    set checked(_checked) {
        this._checked = _checked
        this._updateDom()
    }

    constructor() {
        super()

        this.attachShadow({ mode: "open", delegatesFocus: true })

        this.shadowRoot.innerHTML = /*html*/ `
            <style>
                :host(:disabled) {
                    opacity: .5;
                }

                button {
                    all: unset;
	                outline: revert;
                }
            </style>
            
            <button>
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-diamond" viewBox="0 0 16 16">
                    <path id="diamond" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                </svg>
            </button>
        `

        this.addEventListener("click", () => {
            if (!this.hasAttribute("readonly")) {
                this.checked = this.checked === true ? false : this.checked === false ? null : true
            }
        })
        this.checked = getChecked(this)
    }

    connectedCallback() {
        this._observe()
    }

    _updateDom() {
        const plus = this.shadowRoot.getElementById("plus")
        const minus = this.shadowRoot.getElementById("minus")
        if (plus) plus.remove()
        if (minus) minus.remove()

        const svg = this.shadowRoot.getElementById("svg")

        if (this.checked === true) {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
            path.setAttributeNS(null, "id", "plus")
            path.setAttributeNS(
                null,
                "d",
                "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            )
            svg.appendChild(path)
        }

        if (this.checked === false) {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
            path.setAttributeNS(null, "id", "minus")
            path.setAttributeNS(null, "d", "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z")
            svg.appendChild(path)
        }
    }

    _observe() {
        this._observer =
            this._observer ||
            new MutationObserver(() => {
                this.checked = getChecked(this)
            })

        this._observer.observe(this, {
            attributeFilter: ["checked"],
            attributeOldValue: true,
            childList: true,
            subtree: true
        })
    }

    _unobserve() {
        if (this._observer) {
            this._observer.takeRecords()
            this._observer.disconnect()
        }
    }

    disconnectedCallback() {
        this._unobserve()
    }

    static get formAssociated() {
        return true
    }
}

function getChecked(element) {
    if (!element || !element.hasAttribute("checked") || element.getAttribute("checked") === "null") {
        return null
    }

    if (element.getAttribute("checked") === "false") {
        return false
    } else {
        return true
    }
}

customElements.define("blue-three-state-checkbox", ThreeStateCheckbox)
