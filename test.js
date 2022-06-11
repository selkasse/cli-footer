import footer from './index.js'

let flags = {
  clear: {
    type: `boolean`,
    default: true,
    alias: `c`,
    desc: `Clear the console`,
  },
  debug: {
    type: `boolean`,
    default: false,
    alias: `d`,
    desc: `Print debug info`,
  },
  version: {
    type: `boolean`,
    alias: `v`,
    desc: `Print CLI version`,
  },
}

console.log(`***************** TEST 1 *****************`)
console.log(footer('footer-test', flags))
console.log()
console.log(`***************** TEST 2 *****************`)
console.log(footer())
console.log()
console.log(`***************** TEST 3 *****************`)
console.log(footer('footer-test', 'foo'))
console.log()
console.log(`***************** TEST 4 *****************`)
console.log(footer('footer-test'))
console.log()

flags = {
  ...flags,
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

console.log(`***************** TEST 5 *****************`)
console.log(footer('footer-test', flags))
console.log()
console.log(`***************** TEST 6 *****************`)
console.log(footer('footer-test', flags, 1))
console.log()
console.log(`***************** TEST 7 *****************`)
console.log(footer('footer-test', flags, 2))
console.log()
console.log(`***************** TEST 8 *****************`)
console.log(footer('footer-test', flags, 4))
console.log()
console.log(`***************** TEST 9 *****************`)
console.log(footer('footer-test', flags, 5))
console.log()
