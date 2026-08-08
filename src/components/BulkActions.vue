<script setup>
import { ref } from 'vue'

defineProps({
  selectedCount: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits([
  'delete-selected',
  'change-status',
])

const selectedStatus = ref('Active')

function handleStatusChange() {
  emit('change-status', selectedStatus.value)
}
</script>

<template>
  <div v-if="selectedCount > 0" class="bulk-actions">
    <span>Selected: {{ selectedCount }}</span>
    <select v-model="selectedStatus"><option value="Active">Active</option>
    <option value="Inactive">Inactive</option></select>
    <button type="button" class="secondary-button" @click="handleStatusChange">Change Status</button>
    <button type="button" class="delete-button" @click="emit('delete-selected')">Delete Selected</button>
  </div>
</template>
