export class ThreeStateCheckbox extends HTMLElement {
    _checked = null // null | true | false

    get checked() {
        return this._checked
    }

    set checked(_checked) {
        this._checked = _checked
    }

    constructor() {
        super()

        this.attachShadow({ mode: "open" })

        this.render()
    }

    connectedCallback() {
        this._onClick = this._onClick.bind(this)
        this.addEventListener("click", this._onClick)
    }

    disconnectedCallback() {
        this.removeEventListener("click", this._onClick)
    }

    _onClick() {
        this.checked = this.checked === true ? false : this.checked === false ? null : true
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/ `
            <style>
                :host {
                    display: inline-block;

                    width: 1em;
                    height: 1em;
                    position: relative;
                }

                .box {
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;

                    padding: 0;
                    cursor: default;
                    border: 1px solid;

                    /* Rotate */
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                }

                .x-line, .y-line {
                    position: absolute;

                    background: currentColor;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .x-line {
                    width: 100%;
                    height: 1px;
                }

                .y-line {
                    width: 1px;
                    height: 100%;
                }
            </style>

            <div class="box"></div>

            ${
                this.checked === true
                    ? `<div class="x-line"></div><div class="y-line"></div>`
                    : this.checked === false
                    ? `<div class="x-line"></div>`
                    : ""
            }
        `
    }
}

customElements.define("blue-three-state-checkbox", ThreeStateCheckbox)
