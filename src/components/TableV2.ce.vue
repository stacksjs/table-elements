<script setup>
import TableApp from './Table.vue'
// import '../../node_modules/@ow3/table-vue/dist/style.css'
</script>

<template>
  <TableApp
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
          stage_name: Status" sort="id:desc"
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
    <!-- <template #part_name="partNameProps">
          <div v-for="(part, x) in partNameProps.value" :key="x" class="text-yellow-600">
            {{ part }}
          </div>
        </template> -->
  </TableApp>
</template>

<style scoped>
@unocss-placeholder
</style>
