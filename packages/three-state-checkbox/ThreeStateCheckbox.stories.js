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

    return el
}

export const Unstyled = Template.bind({})

const AdvancedTemplate = (args) => {
    const el = document.createElement("div")

    el.innerHTML = /*html*/ `
        <blue-three-state-checkbox id="myCheckbox"></blue-three-state-checkbox>
        <label for="myCheckbox">Click</label>

        <input type="checkbox" checked>

        <div style="font-size: 2rem">
            Hey <blue-three-state-checkbox id="myCheckbox"></blue-three-state-checkbox> Hello
        </div>

        <br>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diamond" viewBox="0 0 16 16">
            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diamond-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg>

        <br>

        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-diamond" viewBox="0 0 16 16">
            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>

        <br>

        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-diamond-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"/>
        </svg>
    `

    return el
}

export const WithLabel = AdvancedTemplate.bind({})
