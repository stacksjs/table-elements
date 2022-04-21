<script setup lang="ts">
import { MeiliSearch } from 'meilisearch'

const props = defineProps<{
  source?: string
  host?: string // alias of `source`
  src?: string // alias of `source`
  index: string // TODO: should be optional
  cols?: string
  query?: string
  sorts?: string
  filters?: string
}>()

const state = useStorage('table-source', {
  host: props.source ?? props.host ?? props.src,
  index: props.index,
  cols: props.cols,
  query: props.query,
  sorts: props.sorts,
  filters: props.filters,
  settings: '',
})

const client = getSearchClient()
const index = client.index(state.index)
state.settings = await index.getSettings()

function getSearchClient() {
  return new MeiliSearch({
    host: state.host,
    apiKey: '',
  })
}

// eslint-disable-next-line no-console
console.log('settings is', settings)
state.settings = settings

// eslint-disable-next-line no-console
console.log('state is', state)
</script>

<!-- Workaround for: "Component is missing template or render function" -->
<template><span class="hidden" /></template>
