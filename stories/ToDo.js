export class ToDo extends HTMLElement {
    constructor() {
        super()

        this.list = ["Baked", "Black", "Refried"]

        this.attachShadow({ mode: "open" })
        this.render()
    }

    static get observedAttributes() {
        return ["list"]
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return

        if (name === "list") {
            this.list = newValue.split(",")
        }
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/ `
            <ul>
                ${this.list.map((i) => /*html*/ `<li>${i}</li>`).join("")}
            </ul>
        `
    }
}

customElements.define("to-do", ToDo)
