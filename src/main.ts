import { defineCustomElement } from 'vue'
import TableV2 from './components/TableV2.ce.vue'

// console.log('TableV2.styles', TableV2.styles) // ["/* inlined css */"]

// convert into custom element constructor
const TableV2CustomElement = defineCustomElement(TableV2)

// export individual elements
// export { TableV2CustomElement, AnotherCustomElement };

// export function register() {
customElements.define('table-v2', TableV2CustomElement)
// }
