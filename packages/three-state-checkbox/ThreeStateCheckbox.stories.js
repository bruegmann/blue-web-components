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
    el.addEventListener("change", (ev) => {
        console.log("change event listener")
        console.log({ checked: ev.target._checked })
    })

    el.onchange = (ev) => {
        console.log("onchange property")
        console.log({ checked: ev.target._checked })
    }

    return el
}

export const Unstyled = Template.bind({})

const AdvancedTemplate = (args) => {
    const el = document.createElement("div")

    el.innerHTML = /*html*/ `
        <blue-three-state-checkbox id="myCheckbox" checked></blue-three-state-checkbox>
        <label for="myCheckbox">Click</label>
    `

    return el
}

export const WithLabel = AdvancedTemplate.bind({})
