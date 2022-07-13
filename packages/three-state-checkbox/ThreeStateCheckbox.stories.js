import { ThreeStateCheckbox } from "./ThreeStateCheckbox"
import "./ThreeStateCheckbox"

export default {
    title: "ThreeStateCheckbox",
    component: "blue-three-state-checkbox"
}

const Template = (args) => {
    // const el = document.createElement("div")

    // el.innerHTML = /*html*/ `
    //     <blue-three-state-checkbox></blue-three-state-checkbox>
    //     <label>Click</label>
    // `

    // return el

    const el = new ThreeStateCheckbox()

    return el
}

export const Unstyled = Template.bind({})
