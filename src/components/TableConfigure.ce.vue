<script setup lang="ts">
// import { MeiliSearch } from 'meilisearch'

const props = defineProps<{
  source?: string
  host?: string // alias of `source`
  src?: string // alias of `source`
  index?: string
  cols?: string
  query?: string
  sorts?: string
  filters?: string
}>()

onMounted(async() => {
  // eslint-disable-next-line no-console
  console.log('props', props)
})
</script>
