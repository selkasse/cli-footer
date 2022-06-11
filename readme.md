<h4 align="center">

Create a CLI help footer to use with `meow` and `meow-cli-help`

<br>
<br>

</h4>

The footer supplies help text for boolean flags that default to `true`
<br>
<br>
Example: `--no-clear`, `--no-debug`, etc.

<br>

# cli-footer

## Install

```sh
npm install cli-footer
```

<br>

## Usage

```js
import makeFooter from 'cli-footer'

const flags = {
  beer: {
    type: `boolean`,
    default: true,
    desc: `Print a beer to the console`,
  },
  fear: {
    type: `boolean`,
    default: true,
    desc: `Share your fears with the console`,
  },
  steer: {
    type: `boolean`,
    default: true,
    desc: `Pass the wheel to the console`,
  },
}
```

<br />

## API

### alert(options)

#### ❯ options

Type: `object`<br>
Default: `{}`

You can specify the options below.

##### ❯ type

Type: `string`<br>
Default: `error`

##### ❯ msg

Type: `string`<br>
Default: `You forgot to define all options.` (Error message)

##### ❯ name

Type: `string`<br>
Default: `''` (Empty string)

<br>

<small>**KEY**: `📦 NEW`, `👌 IMPROVE`, `🐛 FIX`, `📖 DOC`, `🚀 RELEASE`, and `🤖 TEST`

> _I use [Emoji-log](https://github.com/ahmadawais/Emoji-Log), you should try it and simplify your git commits._

</small>

<br>

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.
