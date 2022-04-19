import { defineCustomElement } from 'vue'
import Table from './components/TableV2.ce.vue'
import './styles/index.css'

// console.log('Table.styles', Table.styles) // ["/* inlined css */"]

// convert into custom element constructor
const TableCustomElement = defineCustomElement(Table)

// export individual elements
// export { TableCustomElement, AnotherCustomElement };

// export function register() {
customElements.define('table-v2', TableCustomElement)
// }
