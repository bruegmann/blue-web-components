import { InputSplitted } from "./InputSplitted"
import "./InputSplitted"

export default {
    title: "InputSplitted",
    parameters: {
        docs: {
            description: {
                component: "Group of input fields. Perfect e.g. for entering PIN or TOTP."
            }
        }
    },
    component: "blue-input-splitted",
    argTypes: {
        shadow: {
            name: "shadow",
            type: { name: "boolean", required: false },
            description: "If `true` the shadow DOM will be used.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: {
                type: "boolean"
            }
        },
        length: {
            name: "length",
            type: { name: "string", required: false },
            description: "",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: 0 }
            },
            control: {
                type: "number"
            }
        },
        value: {
            name: "value",
            type: { name: "string", required: false },
            description: "",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "" }
            },
            control: {
                type: "text"
            }
        },
        controlClass: {
            name: "control-class",
            type: { name: "string", required: false },
            description: "",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "" }
            },
            control: {
                type: "text"
            }
        }
    }
}

export const Unstyled = ((args) => {
    const el = new InputSplitted()

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
}).bind({})
Unstyled.args = {
    length: 4
}

export const Reactive = ((args) => {
    const wrapper = document.createElement("div")

    wrapper.innerHTML = /*html*/ `<style>
        .form-control {
            padding: .375rem .75rem;
            margin: 1px;
            border: 1px solid gray;
            border-radius: .375rem;
            width: 2em;
            text-align: center;
        }

        .primary {
            border-color: blue;
        }

        .red {
            border-color: red;
        }
        </style>`

    const el = new InputSplitted()
    el.id = "reactive-input-splitted"
    el.controlClass = "form-control"

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

    wrapper.appendChild(el)

    wrapper.appendChild(document.createElement("br"))
    wrapper.appendChild(document.createElement("br"))

    const lengthInput = document.createElement("input")
    lengthInput.id = "reactive-length-input"
    lengthInput.type = "number"
    lengthInput.value = 4
    wrapper.appendChild(lengthInput)

    const setLengthBtn = document.createElement("button")
    setLengthBtn.innerText = "Set length"
    setLengthBtn.addEventListener("click", () => {
        document.getElementById(el.id).setAttribute("length", document.getElementById(lengthInput.id).value)
    })
    wrapper.appendChild(setLengthBtn)

    let setPrimaryControlClass = document.createElement("button")
    setPrimaryControlClass.innerText = "Set controlClass"
    setPrimaryControlClass.addEventListener("click", () => {
        document.getElementById(el.id).controlClass = "form-control primary"
    })
    wrapper.appendChild(setPrimaryControlClass)

    setPrimaryControlClass = document.createElement("button")
    setPrimaryControlClass.innerText = "Set controlClass via attr"
    setPrimaryControlClass.addEventListener("click", () => {
        document.getElementById(el.id).setAttribute("control-class", "form-control red")
    })
    wrapper.appendChild(setPrimaryControlClass)

    return wrapper
}).bind({})
Reactive.args = {
    length: 4,
    value: "hi"
}
Reactive.parameters = {
    docs: {
        description: {
            story: "Reactive changes while the application is running."
        }
    }
}
