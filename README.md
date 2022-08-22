# Blue Web Components

[![npm version](https://img.shields.io/npm/v/blue-web-components)](https://www.npmjs.com/package/blue-web-components)

This library provides different kind of Web Components.<br/>
[What are Web Components?](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

Goal is to make the components simple, independent and flexible to use.

If you are using React, [Blue React](https://bruegmann.github.io/blue-react) might be a good libary of producitve components.

## Usage

### Install as NPM package

Install from NPM:

```
npm i blue-web-components
```

Install from GitHub repository:

```
npm i github:bruegmann/blue-web-components
```

Import it in your code:

```js
import { Sidebar } from "blue-web-components/packages/sidebar/Sidebar.js"
import "blue-web-components/packages/sidebar/Sidebar.js"
```

TypeScript support is not all that great yet, but you can declare it anyway.
In a React app with TypeScript import it and declare it once globally:

```tsx
import { DOMAttributes } from "react"

// @ts-ignore
import { Sidebar } from "blue-web-components/packages/sidebar/Sidebar.js"
import "blue-web-components/packages/sidebar/Sidebar.js"

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>

declare global {
    namespace JSX {
        interface IntrinsicElements {
            ["blue-sidebar"]: CustomElement<Sidebar>
        }
    }
}
```

### Embedding directly to HTML

```html
<script
    type="module"
    src="https://raw.githubusercontent.com/bruegmann/blue-web-components/main/packages/sidebar/Sidebar.js"
></script>
```

### Use a Blue Web Component

```html
<blue-sidebar></blue-sidebar>
```

Web Components support different attributes, properties and events. Take a look at the [docs](https://bruegmann.github.io/blue-web-components/) to find out more.

## Styling

By default the Web Components have pretty basic styling. You can customize it using CSS Variables (Custom Properties). All CSS Variables by Blue Web Components start with `--blue-`.

## Development

Use this command to run the site on a simple web server:

```
npm start
```

This will start [Storybook](https://storybook.js.org/).
