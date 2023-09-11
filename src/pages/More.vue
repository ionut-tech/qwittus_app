<template>
  <div class="q-pa-md">
    <q-option-group
      :options="options"
      type="toggle"
      v-model="group"
    />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      group: ref([]),

      options: [
        { label: 'Dark mode', value: 'dark' },
        { label: 'Content options', value: 'friend', color: 'red' },
        { label: 'Reset profile picture', value: 'upload', color: 'green' },
        { label: 'Fast log in', value: 'auth', color: 'green' },
        { label: 'Hide comments', value: 'show', color: 'green' },
        { label: 'Hide likes', value: 'hide', color: 'green' },
        { label: 'Remove ads', value: 'remove', color: 'green' },
        { label: 'Lite mode', value: 'lite', color: 'green' },
        { label: 'Remove search bar', value: 'rmv', color: 'green' }
      ]
    }
  }
}
</script>
