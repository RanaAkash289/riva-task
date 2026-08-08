<script setup>
defineProps({
  recipient: {
    type: Object,
    required: true
  },

  selected:{
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['edit', 'delete', 'toggle-select'])
</script>

<template>
  <tr>
    <td><input type="checkbox" :checked="selected" @change="emit('toggle-select',recipient.id)"/></td>
    <td>{{recipient.name}}</td>
    <td>{{recipient.email}}</td>
    <td>{{recipient.company}}</td>
    <td>{{recipient.status}}</td>
     <td>
      <button type="button"
        class="edit-button"
        @click="emit('edit', recipient)">Edit</button>
      <button type="button"
        class="delete-button"
        @click="emit('delete', recipient)">Delete</button>
    </td>
  </tr>
</template>
