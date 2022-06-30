import { ToDo } from "./ToDo"

export default {
    title: "ToDo",
    // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
    argTypes: {
        list: { type: { name: "string", required: false } }
    }
}

const Template = (args) => {
    const el = new ToDo()

    console.log(el)

    if (args.list) {
        el.setAttribute("list", args.list)
    }

    return el
}

export const Unstyled = Template.bind({})
