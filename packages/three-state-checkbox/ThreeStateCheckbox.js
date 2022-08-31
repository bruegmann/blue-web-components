export class ThreeStateCheckbox extends HTMLElement {
    #observer

    #checked = null // null | true | false

    get checked() {
        return this.#checked
    }

    set checked(_checked) {
        const oldChecked = this.#checked
        this.#checked = _checked
        this.#updateDom()

        if (oldChecked !== _checked) {
            this.dispatchEvent(new Event("change", { bubbles: true }))
        }
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

                #svg {
                    fill: var(--blue-three-state-checkbox-color, currentColor);
                }

                #diamond-bg {
                    fill: var(--blue-three-state-checkbox-bg, transparent);
                }

                #diamond {
                    fill: var(--blue-three-state-checkbox-border-bg, var(--blue-three-state-checkbox-color, currentColor));
                }

                .checked #svg {
                    fill: var(--blue-three-state-checkbox-color-checked, var(--blue-three-state-checkbox-color, currentColor));
                }
                .checked #diamond-bg {
                    fill: var(--blue-three-state-checkbox-bg-checked, var(--blue-three-state-checkbox-bg, transparent));
                }
                .checked #diamond {
                    fill: var(--blue-three-state-checkbox-border-bg-checked, var(--blue-three-state-checkbox-border-bg, var(--blue-three-state-checkbox-color, currentColor)));
                }

                .checked-true #svg {
                    fill: var(--blue-three-state-checkbox-color-checked-true, var(--blue-three-state-checkbox-color-checked, var(--blue-three-state-checkbox-color, currentColor)));
                }
                .checked-true #diamond-bg {
                    fill: var(--blue-three-state-checkbox-bg-checked-true, var(--blue-three-state-checkbox-bg-checked, var(--blue-three-state-checkbox-bg, transparent)));
                }
                .checked-true #diamond {
                    fill: var(--blue-three-state-checkbox-border-bg-checked-true, var(--blue-three-state-checkbox-border-bg-checked, var(--blue-three-state-checkbox-border-bg, var(--blue-three-state-checkbox-color, currentColor))));
                }

                .checked-false #svg {
                    fill: var(--blue-three-state-checkbox-color-checked-false, var(--blue-three-state-checkbox-color-checked, var(--blue-three-state-checkbox-color, currentColor)));
                }
                .checked-false #diamond-bg {
                    fill: var(--blue-three-state-checkbox-bg-checked-false, var(--blue-three-state-checkbox-bg-checked, var(--blue-three-state-checkbox-bg, transparent)));
                }
                .checked-false #diamond {
                    fill: var(--blue-three-state-checkbox-border-bg-checked-false, var(--blue-three-state-checkbox-border-bg-checked, var(--blue-three-state-checkbox-border-bg, var(--blue-three-state-checkbox-color, currentColor))));
                }
            </style>
            
            <button>
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="bi bi-diamond" viewBox="0 0 16 16">
                    <path id="diamond-bg" fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"/>
                    <path id="diamond" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                </svg>
            </button>
        `

        this.addEventListener("click", () => {
            if (!this.hasAttribute("readonly") && !this.hasAttribute("disabled")) {
                this.checked = this.checked === true ? false : this.checked === false ? null : true
            }
        })
        this.checked = getChecked(this)
    }

    connectedCallback() {
        this.checked = getChecked(this)
        this.#observe()
    }

    #updateDom() {
        const button = this.shadowRoot.querySelector("button")
        button.removeAttribute("class")

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
            button.setAttribute("class", "checked checked-true")
        }

        if (this.checked === false) {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
            path.setAttributeNS(null, "id", "minus")
            path.setAttributeNS(null, "d", "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z")
            svg.appendChild(path)
            button.setAttribute("class", "checked checked-false")
        }
    }

    #observe() {
        this.#observer =
            this.#observer ||
            new MutationObserver(() => {
                this.checked = getChecked(this)
            })

        this.#observer.observe(this, {
            attributeFilter: ["checked"],
            attributeOldValue: true,
            childList: true,
            subtree: true
        })
    }

    #unobserve() {
        if (this.#observer) {
            this.#observer.takeRecords()
            this.#observer.disconnect()
        }
    }

    disconnectedCallback() {
        this.#unobserve()
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
