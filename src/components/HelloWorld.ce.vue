<script setup lang="ts">
import { Table as TableV2} from '@ow3/table-vue'

const { message = 'Welcome!' } = defineProps<{
  message: string
}>()

// reactive state
let count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  // eslint-disable-next-line no-console
  console.log(`The initial count is ${count}.`)
  // eslint-disable-next-line no-console
  console.log(`The message is ${message}.`)
})
</script>

<template>
  <h1 class="font-bold text-3xl text-red-800">
    {{ message }}
  </h1>
  <button type="button"
    class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-base py-2 px-4 text-gray-700 inline-flex items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    @click="increment">
    Count is: {{ count }}
  </button>

  <TableV2
    source="http://3.85.80.143:7700"
    password="NtUvZv5Q87e355b807622149c350ac38679645b4e2603a1d3eb48cda080f977e76329aeb"
    type="orders"
    columns="
      id: Order,
      customer_name: Customer,
      customer_po: PO#,
      part_name: Parts,
      created_at: Ordered,
      due_at: Due,
      stage_name: Status"
    sort="id:desc"
    sorts="created_at, customer_name, customer_po, due_at, id, part_name, stage_name"
    filters="
      created_at: date-range,
      customer_name: multi-select,
      customer_po: multi-select,
      document_types: multi-select,
      due_at: date-range,
      id: multi-select,
      invoice_number: multi-select,
      part_name: multi-select,
      stage_name: multi-select,
      vendor_name: multi-select"
      actions="Info"
      per-page="10"
      selectable="true"
    >
    TEAT
    <!-- <template #part_name="partNameProps">
          <div v-for="(part, x) in partNameProps.value" :key="x" class="text-yellow-600">
            {{ part }}
          </div>
        </template> -->
  </TableV2>
</template>

<style scoped>
@unocss-placeholder
</style>
