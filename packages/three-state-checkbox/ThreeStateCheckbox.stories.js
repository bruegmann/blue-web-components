import { ThreeStateCheckbox } from "./ThreeStateCheckbox"
import "./ThreeStateCheckbox"

export default {
    title: "ThreeStateCheckbox",
    component: "blue-three-state-checkbox",
    argTypes: {
        checked: {
            name: "checked",
            type: { name: "boolean", required: false },
            description:
                "State of the checkbox. 'checked' or 'checked=\"true\"' for '+', 'checked=\"false\"' for '-', 'checked=\"null\"' or missing attribute for unchecked.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: undefined }
            },
            control: {
                type: "boolean"
            }
        },
        readonly: {
            name: "readonly",
            type: { name: "boolean", required: false },
            description: "",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: undefined }
            },
            control: {
                type: "boolean"
            }
        },
        disabled: {
            name: "disabled",
            type: { name: "boolean", required: false },
            description: "",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: undefined }
            },
            control: {
                type: "boolean"
            }
        },
        change: {
            name: "change",
            type: { name: "event", required: false },
            description:
                "**Event** - Fires when the value of `checked` changes. [How to handle events in React](https://www.robinwieruch.de/react-web-components/)"
        }
    }
}

const Template = (args) => {
    const el = new ThreeStateCheckbox()

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

    el.addEventListener("click", () => console.log("click!"))
    el.addEventListener("change", (event) => {
        console.log("change event listener")
        console.log(event)
    })

    el.onchange = ({ target }) => {
        console.log({ checked: target.checked })
    }

    return el
}

export const Unstyled = Template.bind({})

const AdvancedTemplate = (args) => {
    const el = document.createElement("div")

    el.innerHTML = /*html*/ `
        <style>
            #myCheckbox {
                --blue-three-state-checkbox-color: white;
                --blue-three-state-checkbox-bg: blue;
                --blue-three-state-checkbox-border-bg: black;
            }
        </style>
        <blue-three-state-checkbox id="myCheckbox" checked></blue-three-state-checkbox>
        <label for="myCheckbox">Click</label>
    `

    return el
}

export const WithLabel = AdvancedTemplate.bind({})

const ReactivityTemplate = (args) => {
    const el = Template(args)

    el.id = "myReactiveCheckbox"

    const container = document.createElement("div")
    container.appendChild(el)

    const btn = document.createElement("button")
    btn.innerText = "Toggle readonly"
    btn.onclick = () => {
        el.setAttribute("readonly", "")
    }
    container.appendChild(btn)

    return container
}

export const Reactivity = ReactivityTemplate.bind({})
