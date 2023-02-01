import { InputSplitted } from "./InputSplitted"
import "./InputSplitted"

const story = {
    title: "InputSplitted",
    parameters: {
        docs: {
            description: {
                component: "Group of input fields. Perfect e.g. for entering PIN or TOTP."
            }
        },
        actions: {
            handles: ["changeValue", "focus"]
        }
    },
    component: "blue-input-splitted",
    argTypes: {
        changeValue: { action: "changeValue", description: "Event that will be fired when the value changes." },
        lightDom: {
            name: "light-dom",
            type: { name: "boolean", required: false },
            description: "If `true` the Shadow DOM will not be used but the Light DOM instead.",
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
                "Class name will passed to the input elements. Make sure `light-dom` is enabled if you want to use this for styling.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "" }
            },
            control: {
                type: "text"
            }
        },
        control1Id: {
            name: "control-1-id",
            type: { name: "string", required: false },
            description:
                'ID will passed to the first input element. Allows you to use `<label for="your-control-1-id">`. Only necessary when using `light-dom`.',
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
    "box-shadow",
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
    length: 4,
    lightDom: false
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

    el.addEventListener("changeValue", ({ detail }) => {
        console.log(detail)
    })

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

    wrapper.innerHTML = /*html*/ `
<style>
    #${wrapper.id} blue-input-splitted {
        --blue-input-splitted-border: 1px solid #dee2e6;
        --blue-input-splitted-border-radius: .375rem;
        --blue-input-splitted-padding: .375rem .75rem;
        --blue-input-splitted-text-align: center;

        display: flex;
        gap: 0.25rem;
    }

    #${wrapper.id} blue-input-splitted:focus {
        --blue-input-splitted-border: 1px solid #86b7fe;
        --blue-input-splitted-box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);

    }

    /* If the input elements are bordered red, shadow is open. */
    #${wrapper.id} input {
        border-color: red !important;
    }
</style>

<blue-input-splitted length="4"></blue-input-splitted>
`
    return wrapper
}).bind({})

StylingWithCSSVariables.parameters = {
    docs: {
        source: {
            state: "open"
        },
        description: {
            story: "Even if `light-dom` isn't enabled, you can still use CSS variables to style the input elements."
        }
    }
}

export const UseLabel = (() => {
    const wrapper = document.createElement("div")
    wrapper.innerHTML = /*html*/ `
    <label for="my-pin-input-1">Enter a PIN</label>
    <blue-input-splitted id="my-pin-input-1" length="4"></blue-input-splitted>
`
    return wrapper
}).bind({})

UseLabel.parameters = {
    docs: {
        source: {
            state: "open"
        },
        description: {
            story: ""
        }
    }
}

export const UseLabelWithoutShadow = (() => {
    const wrapper = document.createElement("div")
    wrapper.innerHTML = /*html*/ `
    <label for="my-pin-input">Enter a PIN</label>
    <blue-input-splitted light-dom control-1-id="my-pin-input" length="4"></blue-input-splitted>
`
    return wrapper
}).bind({})

UseLabelWithoutShadow.parameters = {
    docs: {
        source: {
            state: "open"
        },
        description: {
            story: ""
        }
    }
}
