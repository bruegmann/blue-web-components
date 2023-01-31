export class InputSplitted extends HTMLElement {
    #observer

    #valueArray = []
    #refArray = []

    #shadow = false
    get shadow() {
        return this.#shadow
    }
    set shadow(_shadow) {
        this.#shadow = _shadow

        if (this.shadow === true) {
            this.attachShadow({ mode: "open", delegatesFocus: true })
            this.shadowRoot.innerHTML = ""
        } else {
            this.innerHTML = ""
        }

        this.#initDom()
    }

    #value = ""
    get value() {
        return this.#value
    }

    set value(_value) {
        this.#value = _value

        this.#valueArray = this.value.split("")
        for (let i = 0; i < this.length; i++) {
            if (this.#refArray[i]) this.#refArray[i].value = this.#valueArray[i] || ""
        }
    }

    #length = 0
    get length() {
        return this.#length
    }

    set length(_length) {
        this.#length = _length

        if (this.length > this.#refArray.length) {
            // Added length

            for (let j = 0; j < this.length; j++) {
                if (!this.#refArray[j]) {
                    this.#addInput(this.#refArray.length)
                }
            }
        } else if (this.length < this.#refArray.length) {
            // Removed length

            const difference = Math.abs(this.#refArray.length - this.length)

            for (let j = 0; j < difference; j++) {
                const el = this.#refArray.pop()
                el.remove()
            }
        }

        this.#refArray = [...this.#refArray]
    }

    #controlClass = ""
    get controlClass() {
        return this.#controlClass
    }
    set controlClass(value) {
        this.#controlClass = value

        for (const el of this.#refArray) {
            el.className = this.controlClass
        }
    }

    constructor() {
        super()

        // this.attachShadow({ mode: "open", delegatesFocus: true })
    }

    connectedCallback() {
        this.#initDom()
        // this.checked = getChecked(this)
        this.#observe()
    }

    #addInput(i) {
        const input = document.createElement("input")
        this.#refArray.push(input)

        input.type = "text"
        input.className = this.controlClass
        input.maxLength = 1
        input.value = this.#valueArray[i] || ""
        input.addEventListener("input", ({ target }) => {
            if (target.value !== "" && this.#refArray[i + 1]) {
                this.#refArray[i + 1].focus()
            }
            this.#valueArray[i] = target.value
            this.value = this.#valueArray.join("")
        })
        input.addEventListener("keydown", ({ key, target }) => {
            if (key === "Backspace" && target.value === "" && this.#refArray[i - 1] !== undefined) {
                this.#refArray[i - 1].focus()
            }
        })

        if (this.shadow) this.shadowRoot.appendChild(input)
        else this.appendChild(input)
    }

    #initDom() {
        this.value = this.getAttribute("value") || ""
        this.length = getLength(this)

        if (this.shadow) this.shadowRoot.innerHTML = ""
        else this.innerHTML = ""

        this.#valueArray = this.value.split("")

        this.#refArray = []
        for (let i = 0; i < this.length; i++) {
            this.#addInput(i)
        }
    }

    #observe() {
        // Observer prüft, ob sich HTML-Attribute geändert haben.
        // Props-Änderungen werden ohne bemerkt.
        this.#observer =
            this.#observer ||
            new MutationObserver((mutations) => {
                mutations.forEach((m) => {
                    if (m.attributeName === "value") {
                        this.value = this.getAttribute("value") || this.value
                    }

                    if (m.attributeName === "length") {
                        this.length = getLength(this)
                    }

                    if (m.attributeName === "control-class") {
                        this.controlClass = this.getAttribute("control-class") || this.controlClass
                    }
                })
            })

        this.#observer.observe(this, {
            attributeFilter: ["value", "length", "control-class"],
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

function getLength(element) {
    const attr = element.getAttribute("length")
    if (attr) return parseInt(attr)
}

customElements.define("blue-input-splitted", InputSplitted)
