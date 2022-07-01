import { addons } from "@storybook/addons"
import BlueTheme from "./BlueTheme"
import favicon from "./assets/icon.ico"

const link = document.createElement("link")
link.setAttribute("rel", "shortcut icon")
link.setAttribute("href", favicon)
document.head.appendChild(link)

addons.setConfig({
    theme: BlueTheme
})
