import { Layout } from "./Layout"
import "./Layout"

import "../sidebar/Sidebar"
import "./Theme"

const story = {
    title: "Layout",
    parameters: {
        docs: {
            description: {
                component: "The main component."
            }
        },
        actions: {
            handles: ["changeValue", "focus"]
        }
    },
    component: "blue-layout",
    argTypes: {}
}

export default story

export const Unstyled = ((args) => {
    const wrapper = document.createElement("div")

    wrapper.innerHTML = /* html */ `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
        <blue-theme>
            <blue-layout>
                <blue-sidebar slot="sidebar">
                    <a href="">My links</a>
                </blue-sidebar>
            </blue-layout>
        </blue-theme>
    `

    return wrapper
}).bind({})
