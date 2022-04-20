<script setup lang="ts">
import { MeiliSearch } from 'meilisearch'

const props = defineProps<{
  host: string
  index: string
  cols: string
  // searchable?: string -> TODO: determines whether the search input is displayed
  // sorts?: string -> TODO: determines whether the sorts are displayed, e.g. "name, price, created_at"
  // sortable?: string -> TODO: determines whether the sorts are displayed, alias sorts
  // filters?: string -> TODO: determines whether the filters are displayed, e.g. "traits_Head, traits_Body, traits_Background"
  // filterable?: string -> TODO: determines whether the filters are displayed, alias filters
  // actionable?: string -> TODO: determines whether the "edit"/action button is displayed
  // perPage?: number -> TODO: determines the items displayed per page
  // usePagination?: boolean -> TODO: determines whether to display/use the pagination feature
}>()

const client = new MeiliSearch({
  host: props.host,
  apiKey: '',
})

const index = $ref(client.index(props.index))

let settings = $ref()
let results = $ref()

// reactive state
let sort = $ref('')

const isSorted = $computed(() => sort !== '')
const columns = $computed(() => props.cols.split(','))

function toggleSort(order: string) {
  if (isSorted)
    sort = ''
  else
    sort = order
}

async function search(q: string) {
  // eslint-disable-next-line no-console
  console.log('index before is', index)

  results = await index.search(q)

  // eslint-disable-next-line no-console
  console.log('index after is', index)
}

async function getSettings() {
  settings = await index.getSettings()
}

onMounted(async() => {
  await search('11')
  await getSettings

  // eslint-disable-next-line no-console
  console.log('props', props)
  // eslint-disable-next-line no-console
  console.log('columns', columns)
  // eslint-disable-next-line no-console
  console.log('settings', settings)
})
</script>

<template>
  <div class="table-v2 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">
          Users
        </h1>
        <p class="mt-2 text-sm text-gray-700">
          A list of all the users in your account including their name, title, email and role.
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
          Add user
        </button>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th v-for="col in columns" :key="col" scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" @click="toggleSort(col)">
                    <a href="#" class="group inline-flex">
                      {{ col }}
                      <span :class="sort === 'name' ? `invisible text-gray-400 group-hover:visible group-focus:visible` : `bg-gray-200 text-gray-900 group-hover:bg-gray-300`" class="ml-2 flex-none rounded">
                        <!-- Heroicon name: solid/chevron-down -->
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </a>
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    Lindsay Walton
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    Front-end Developer
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    lindsay.walton@example.com
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    Member
                  </td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                  </td>
                </tr>

              <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../styles/index.css";
</style>
