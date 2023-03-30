export class Layout extends HTMLElement {
    constructor() {
        super()

        const template = document.createElement("template")
        template.innerHTML = /* html */ `
            <style>
                .blue-layout {
                    min-height: 100%;
                    position: relative;
                    display: flex;
                }

                .blue-layout > :first-child {
                    flex-shrink: 0;
                }
            </style>

            <div class="blue-layout">
                <slot name="sidebar"></slot>

                <slot></slot>
            </div>

            <div class="blue-status-circle blue-loading blue-status-loading">
                <div class="spinner-bounce-circle">
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div class="blue-status-circle blue-status-success">{this.props.statusIcons!.success}</div>

            <div class="blue-status-circle blue-status-info">{this.props.statusIcons!.info}</div>

            <div class="blue-status-circle blue-status-warning">{this.props.statusIcons!.warning}</div>

            <div class="blue-status-circle blue-status-danger">{this.props.statusIcons!.danger}</div>

            <div class="blue-status-alert alert">
                <button type="button" class="btn-close float-end mb-1" aria-label="Close"></button>
                <div class="alert-body"></div>
            </div>
        `

        const shadowRoot = this.attachShadow({
            mode: "open"
        })
        shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

customElements.define("blue-layout", Layout)
