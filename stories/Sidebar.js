export class Sidebar extends HTMLElement {
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
                    transition: var(--blue-sidebar-button-transition);
                }
                
                @media (hover: hover) {
                    #toggleBtn:hover {
                        background: var(--blue-sidebar-button-bg-hover, gray);
                        color: var(--blue-sidebar-button-color-hover, white);
                    }
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

            <slot></slot>
        `

        this.close = this.close.bind(this)
        this.open = this.open.bind(this)
        this.toggle = this.toggle.bind(this)
        this.getDynamicSize = this.getDynamicSize.bind(this)
    }

    close() {
        this.setAttribute("closed", "")
    }

    open() {
        this.removeAttribute("closed")
    }

    toggle() {
        if (this.getAttribute("closed") !== null) {
            this.open()
        } else {
            this.close()
        }
    }

    getDynamicSize() {
        const attr = this.getAttribute("dynamic-size")
        if (attr === "") return 992
        if (attr === null) return null
        return parseInt(attr)
    }

    // static get observedAttributes() {
    //     return ["closed", "dynamic-size"]
    // }

    // attributeChangedCallback(name, oldValue, newValue) {
    //     if (oldValue === newValue) return
    //     // if (name === "closed") this.closed = newValue !== null
    //     // if (name === "dynamic-size") this.dynamicSize = newValue
    //     // this.render()
    // }

    connectedCallback() {
        // this.dynamicSize = this.getAttribute("dynamic-size")

        const toggleBtn = this.shadowRoot.getElementById("toggleBtn")
        this._onClick = this._onClick.bind(this)
        toggleBtn.addEventListener("click", this._onClick)

        // if (this.dynamicSize !== null) {
        this._onResize()
        this._onResize = this._onResize.bind(this)
        window.addEventListener("resize", this._onResize)
        // }

        this._onDocumentMouseDown = this._onDocumentMouseDown.bind(this)
        document.addEventListener("mousedown", this._onDocumentMouseDown)
    }

    disconnectedCallback() {
        const toggleBtn = this.shadowRoot.getElementById("toggleBtn")
        toggleBtn.removeEventListener("click", this._onClick)

        // if (this.dynamicSize !== null) {
        window.removeEventListener("resize", this._onResize)
        // }

        document.removeEventListener("mousedown", this._onDocumentMouseDown)
    }

    _onClick() {
        this.toggle()
    }

    _onResize() {
        const dynamicSize = this.getDynamicSize()
        if (dynamicSize !== null) {
            if (window.innerWidth < dynamicSize) {
                this.close()
            } else {
                this.open()
            }
        }
    }

    _onDocumentMouseDown(event) {
        const dynamicSize = this.getDynamicSize()
        if (!this.contains(event.target) && dynamicSize !== null) {
            // Clicked inside. Should close when dynamic size and on smaller screens.
            if (window.innerWidth < dynamicSize) {
                this.close()
            }
        }
    }
}

customElements.define("blue-sidebar", Sidebar)
