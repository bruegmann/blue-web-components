import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport"

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
            tabletLandscape: {
                name: "Tablet landscape",
                styles: {
                    width: "1112px",
                    height: "834px"
                }
            }
        }
    },
    viewMode: "docs",
    previewTabs: { "storybook/docs/panel": { index: -1 } }
}
