import { Theme } from "../blue-wc/Theme"
import { Sidebar } from "./Sidebar"

export default {
    title: "Sidebar",
    component: "blue-sidebar",
    args: {
        closed: false
    },
    argTypes: {
        closed: {
            name: "closed",
            type: { name: "boolean", required: false },
            description: "Set attribute to close the sidebar.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: undefined }
            },
            control: {
                type: "boolean"
            }
        },
        ["dynamic-size"]: {
            name: "dynamic-size",
            type: { name: "number", required: false },
            description:
                "Set attribute to close the sidebar automatically depending on the window width. Set an empty string to use default value of `992` or set a custom value.",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: undefined }
            },
            control: {
                type: "text"
            }
        }
    }
}

const Template = (args) => {
    const el = new Sidebar()

    for (const a in args) {
        if (args[a] === true) {
            el.setAttribute(a, "")
        } else if (args[a] === false) {
            el.removeAttribute(a)
        } else {
            el.setAttribute(a, args[a])
        }
        el[a] = args[a]
    }

    return el
}

export const Unstyled = Template.bind({})

const CustomizedTemplate = (args) => {
    const wrapper = document.createElement("div")
    wrapper.setAttribute("id", "styled")
    wrapper.className = "site"
    wrapper.appendChild(Template(args))

    const style = document.createElement("style")
    style.textContent = /*css*/ `
        #styled {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Roboto,
                Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            margin-top: 4rem;

            --blue-sidebar-bg: rgba(38, 31, 49, 0.9);
            --blue-sidebar-button-bg: transparent;
            --blue-sidebar-button-bg-hover: rgba(255, 255, 255, 0.7);
            --blue-sidebar-button-border-radius: 0.5rem;
            --blue-sidebar-button-margin: 0.25rem;
            --blue-sidebar-button-transition: background 0.2s;
            --blue-control-size: calc(3rem - var(--blue-sidebar-button-margin) * 2);
            --blue-sidebar-width-closed: calc(var(--blue-control-size) + var(--blue-sidebar-button-margin) * 2);
            --blue-sidebar-transition: width 0.5s ease-in-out;
        }

        /* Make sidebar overlay over content on smaller screens */
        @media (max-width: 992px) {
            #styled blue-sidebar {
                position: absolute;
                top: 0;
                bottom: 0;
            }

            #styled blue-sidebar:not([closed]) {
                box-shadow: 1rem 0.5rem 1rem rgba(0, 0, 0, 0.267);
            }

            #styled blue-sidebar + .content {
                margin-left: var(--blue-sidebar-width-closed);
            }
        }

        #styled blue-sidebar {
            flex-shrink: 0;
        }

        #styled blue-sidebar a {
            text-decoration: none;
            color: white;
            display: block;
            width: 100%;
        }

        .site {
            display: flex;
            height: 400px;
            border: 2px solid silver;
            position: relative;
        }

        .content {
            padding: 1rem;
            overflow-y: auto;
            overflow-x: hidden;
        }
    `
    wrapper.appendChild(style)

    const content = document.createElement("div")
    content.className = "content"
    content.innerHTML = /*html*/ `
        <h4>Here could be app's content</h4>

        <a href="https://github.com/bruegmann/blue-web-components" target="_blank">On GitHub</a>

        <p>
            Attribute <code>dynamic-size</code> for <code>&lt;blue-sidebar&gt;</code> automatically expands
            or closed sidebar depending on window width. Updates when window resizes. Default breakpoint is
            992 px but you can also set something else:<br />
            <code>&lt;blue-sidebar dynamic-size="1200"&gt;&lt;/blue-sidebar&gt;</code>
        </p>
        <p></p>
    `
    wrapper.appendChild(content)

    return wrapper
}

export const Customized = CustomizedTemplate.bind({})
Customized.args = {
    ["dynamic-size"]: ""
}

const ThemedTemplate = (args) => {
    const theme = new Theme()
    const wrapper = document.createElement("div")
    theme.appendChild(wrapper)
    wrapper.className = "site"

    wrapper.appendChild(Template(args))

    const style = document.createElement("style")
    style.textContent = /*css*/ `
        .site {
            display: flex;
            height: 400px;
            border: 2px solid silver;
            position: relative;
        }

        .site > *:first-child {
            flex-shrink: 0;
        }

        .content {
            padding: 1rem;
            overflow-y: auto;
            overflow-x: hidden;
        }
    `
    wrapper.appendChild(style)

    const content = document.createElement("div")
    content.className = "content"
    content.innerHTML = /*html*/ `
        <h4>Here could be app's content</h4>

        <a href="https://github.com/bruegmann/blue-web-components" target="_blank">On GitHub</a>

        <p>
            Attribute <code>dynamic-size</code> for <code>&lt;blue-sidebar&gt;</code> automatically expands
            or closed sidebar depending on window width. Updates when window resizes. Default breakpoint is
            992 px but you can also set something else:<br />
            <code>&lt;blue-sidebar dynamic-size="1200"&gt;&lt;/blue-sidebar&gt;</code>
        </p>
        <p></p>
    `
    wrapper.appendChild(content)

    return theme
}

export const Themed = ThemedTemplate.bind({})
Themed.args = {
    ["dynamic-size"]: ""
}
