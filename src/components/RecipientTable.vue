<script setup>
import { computed } from 'vue'
import RecipientRow from './RecipientRow.vue'

const props = defineProps({
  recipients: {
    type: Array,
    default: () => [],
  },

  selectedIds:{
    type: Array,
    default: () => [],
  }
})
const emit = defineEmits(['edit', 'delete','toggle-select','select-all'])
const selectedAll = computed(()=>{
  return(
    props.recipients.length > 0 && props.recipients.every((res)=>
      props.selectedIds.includes(res.id)
    )
  )
})
</script>

<template>
  <section class="table-card">
    <div v-if="props.recipients.length > 0" class="table-wrapper">
      <table class="recipient-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" :checked="selectedAll" @change="emit('select-all', $event.target.checked)"/>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <RecipientRow
            v-for="recipient in props.recipients"
            :key="recipient.id"
            :recipient="recipient"
            :selected="props.selectedIds.includes(recipient.id)"
            @edit="emit('edit', $event)"
            @delete="emit('delete', $event)"
            @toggle-select="emit('toggle-select', $event)"
          />
        </tbody>
      </table>
    </div>
    <p v-else class="empty-message">No Recipient available</p>
  </section>
</template>
