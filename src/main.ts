import { defineCustomElement } from 'vue'
import Table from './components/TableV2.ce.vue'

// convert into custom element constructor
const TableCustomElement = defineCustomElement(Table)

// export individual elements
// export { TableCustomElement, TableConfigureCustomElement };

// export function register() {
customElements.define('table-v2', TableCustomElement)
// }
