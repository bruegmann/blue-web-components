class Sidebar extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: "open" })
        this.shadowRoot.innerHTML = /*html*/ `
            <style>
                :host {
                    display: block;
                    width: var(--blue-sidebar-width, 16.563rem);
                    background: var(--blue-sidebar-bg, silver);
                    transition: var(--blue-sidebar-transition);
                }

                :host([closed]) {
                    width: var(--blue-sidebar-width-closed, var(--blue-control-size, 3rem));
                }

                #toggleBtn {
                    width: var(--blue-control-size, 3rem);
                    height: var(--blue-control-size, 3rem);
                    border: none;
                    border-radius: var(--blue-sidebar-button-border-radius);
                    background: var(--blue-sidebar-button-bg, darkgray);
                    color: var(--blue-sidebar-button-color, white);
                    cursor: pointer;
                    margin: var(--blue-sidebar-button-margin);
                    padding: var(--blue-sidebar-button-padding);
                }
                #toggleBtn:hover {
                    background: var(--blue-sidebar-button-bg-hover, gray);
                    color: var(--blue-sidebar-button-color-hover, white);
                }
            </style>

            <slot name="style"></slot>

            <button id="toggleBtn">
                <slot name="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                    </svg>
                </slot>
            </button>

            <slot id="menuItemsSlot"></slot>
        `
    }

    open_ = false

    get open() {
        return this.open_
    }

    set open(isOpen) {
        this.open_ = isOpen

        if (isOpen === true) {
            this.setAttribute("closed", "")
        } else {
            this.removeAttribute("closed")
        }
    }

    connectedCallback() {
        this._onClick = this._onClick.bind(this)
        const toggleBtn = this.shadowRoot.getElementById("toggleBtn")
        toggleBtn.addEventListener("click", this._onClick)

        this.open = this.getAttribute("closed") !== null
    }

    disconnectedCallback() {
        const toggleBtn = this.shadowRoot.getElementById("toggleBtn")
        toggleBtn.removeEventListener("click", this._onClick)
    }

    _onClick() {
        this.open = !this.open
    }
}

customElements.define("blue-sidebar", Sidebar)
