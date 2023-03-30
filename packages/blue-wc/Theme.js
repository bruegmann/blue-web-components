export class Theme extends HTMLElement {
    constructor() {
        super()

        const template = document.createElement("template")
        template.innerHTML = /* html */ `
            <style>
                :host {
                    --blue-control-size: calc(3rem - var(--blue-sidebar-button-margin) * 2);
                    
                    --blue-sidebar-bg: rgba(38, 31, 49, 0.9);
                    --blue-sidebar-button-bg: transparent;
                    --blue-sidebar-button-bg-hover: rgba(255, 255, 255, 0.7);
                    --blue-sidebar-button-border-radius: 0.5rem;
                    --blue-sidebar-button-margin: 0.25rem;
                    --blue-sidebar-button-transition: background 0.2s;
                    --blue-sidebar-width-closed: calc(var(--blue-control-size) + var(--blue-sidebar-button-margin) * 2);
                    --blue-sidebar-transition: width 0.5s ease-in-out;
                }
            </style>
            <slot></slot>
        `

        const shadowRoot = this.attachShadow({
            mode: "open"
        })
        shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

customElements.define("blue-theme", Theme)
