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
            body {
                color: #333;
                font-weight: bold;
            }

            #myCheckbox {
                --blue-three-state-checkbox-color-checked: yellowgreen;
                --blue-three-state-checkbox-bg-checked: currentColor;
                --blue-three-state-checkbox-border-bg-checked: currentColor;
            }

            #myCheckbox2 {
                --blue-three-state-checkbox-color-checked: white;

                --blue-three-state-checkbox-bg-checked-true: yellowgreen;
                --blue-three-state-checkbox-border-bg-checked-true: yellowgreen;
                --blue-three-state-checkbox-bg-checked-false: tomato;
                --blue-three-state-checkbox-border-bg-checked-false: tomato;
            }
        </style>
        <blue-three-state-checkbox id="myCheckbox" checked></blue-three-state-checkbox>
        <label for="myCheckbox">Fill when checked</label>
        <br>
        
        <blue-three-state-checkbox id="myCheckbox2" checked></blue-three-state-checkbox>
        <label for="myCheckbox2">Fill depending on checked true or false</label>
    `

    return el
}

export const WithLabelAndCustomStyle = AdvancedTemplate.bind({})
WithLabelAndCustomStyle.parameters = {
    docs: {
        description: {
            story: "Styled with CSS variables, so the control will have dark background when checked."
        }
    }
}
