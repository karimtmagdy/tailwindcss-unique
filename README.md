# Tailwind Unique

[![License][license-image]][license-url]
[![npm version](https://img.shields.io/npm/v/tailwind-unique.svg?style=flat-square)](https://www.npmjs.org/package/tailwind-unique)
[![npm downloads](https://img.shields.io/npm/dm/tailwind-unique.svg?style=flat-square)](https://npm-stat.com/charts.html?package=tailwind-unique)
[![npm License](https://img.shields.io/npm/dm/tailwind-unique.svg?style=flat-square)](https://npm-stat.com/charts.html?package=tailwind-unique)

<!-- Variables -->

[license-url]: https://opensource.org/licenses/MIT
<!-- [license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge -->
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square

https://img.shields.io/npm/l/badge-maker.svg
## Installation

```js
npm install tailwind-unique
```

## Usage

```js
import { Button } from "tailwind-unique";
```

### Example

```js
import { Button, ToggleCircle } from "tailwind-unique";
function Header() {
  return (
    <Button mode="switch" width="xl" color={"warning"}>
      <ToggleCircle width="xl" />
    </Button>
  );
}

function Page() {
  return <Button text="login" />;
}
function App() {
  return <Button size="sm">Hello World</Button>;
}
```

### More Examples

```js
function Menu() {
  return <Button mode="menu">Hello World</Button>;
}
```

### Notes

- The package has not been completed yet, it is a version under trial when it is complete, I will let you know that, I hope this is not disappointing, thank you.

- Currently, one official component are available:

### information

- This template provides minimal setup for component operation by Tailwind Unique with Vite.js and some rules that meet the trick to display a distinct interface to the user.

- [@tailwind-unique](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
