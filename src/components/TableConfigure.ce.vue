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

const state = setInitialState()
const host = getHost()
const client = getSearchClient()
const index = client.index(props.index)
const settings = await getSettings()

function setInitialState() {
  if (localStorage['table-store'])
    return useStorage('table-store', localStorage['table-store'])

  return useStorage('table-store', props)
}

function getHost() {
  if (props.source ?? props.host ?? props.src)
    return props.source ?? props.host ?? props.src

  return state.source ?? state.host ?? state.src ?? ''
}

function getSearchClient() {
  return new MeiliSearch({
    host,
    apiKey: '',
  })
}

async function getSettings() {
  return index.getSettings()
}

// eslint-disable-next-line no-console
console.log('settings is', settings)
state.settings = settings
</script>

<!-- Workaround for: "Component is missing template or render function" -->
<template><span class="hidden" /></template>
