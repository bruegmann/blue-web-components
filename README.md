# Blue Web Components

Right now this repo is a playground to get experience with creating Web Components.<br/>
[What are Web Components?](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

Goal is to make the components simple, independent and flexible to use.

If you are using React, [Blue React](https://bruegmann.github.io/blue-react) might be a good libary of producitve components.

## Usage

### Install as NPM package

Install from GitHub repository:

```
npm i github:bruegmann/blue-web-components
```

Import it in your code:

```js
import { Sidebar } from "blue-web-components/packages/sidebar/Sidebar.js"
import "blue-web-components/packages/sidebar/Sidebar.js"
```

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

Web Component support different attributes. Take a look at the source code and search for "`getAttribute`" to find out which can be used.

## Styling

By default the Web Components have pretty basic styling. You can customize it using CSS Variables (Custom Properties). All CSS Variables by Blue Web Components start with `--blue-`.

## Development

Use this command to run the site on a simple web server:

```
npx --yes http-server . -o
```
