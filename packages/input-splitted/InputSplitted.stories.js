import { InputSplitted } from "./InputSplitted"
import "./InputSplitted"

const story = {
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
            description:
                "Class name will passed to the input elements. Make sure `shadow` isn't enabled if you want to use this for styling.",
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

const cssProperties = [
    "display",
    "background-color",
    "border",
    "border-radius",
    "color",
    "margin",
    "padding",
    "text-align",
    "width"
]
for (const p of cssProperties) {
    story.argTypes[`--${story.component}-${p}`] = {
        name: `--${story.component}-${p}`,
        type: { name: "string", required: false },
        description: "CSS Variable / Custom Property",
        table: {
            type: { summary: "string" },
            defaultValue: { summary: "" }
        },
        control: {
            type: "text"
        }
    }
}

export default story

export const Unstyled = ((args) => {
    const el = new InputSplitted()

    for (const a in args) {
        if (a.startsWith("--")) {
            console.log("is CSS custom property")
            el.style.setProperty(a, args[a])
        } else if (args[a] === true) {
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

export const StylingWithCSSVariables = (() => {
    const wrapper = document.createElement("div")
    wrapper.id = "StylingWithCssVariables"

    wrapper.innerHTML = /*html*/ `<style>
        #${wrapper.id} input {
            border-color: red !important;
        }
        </style><p>If the input elements are bordered red, shadow is open.</p>`

    const el = new InputSplitted()
    el.setAttribute("shadow", "")
    el.setAttribute("length", "4")
    el.style.setProperty("--blue-input-splitted-border", "2px solid gray")
    el.style.setProperty("--blue-input-splitted-border-radius", "2em")
    el.style.setProperty("--blue-input-splitted-margin", "0 10px")
    el.style.setProperty("--blue-input-splitted-padding", "1rem")
    el.style.setProperty("--blue-input-splitted-text-align", "center")
    el.style.setProperty("--blue-input-splitted-width", "2em")

    wrapper.appendChild(el)

    return wrapper
}).bind({})

StylingWithCSSVariables.parameters = {
    docs: {
        description: {
            story: "When `shadow` is enabled, you can still use CSS variables to style the input elements."
        }
    }
}
