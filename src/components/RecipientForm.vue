<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  recipientToEdit: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['submit', 'cancel'])

const form = reactive({
  name:'',
  email:'',
  company:'',
  status:'Active'
})

watch(
  () => props.recipientToEdit,
  (recipient) => {
    if (recipient) {
      form.name = recipient.name
      form.email = recipient.email
      form.company = recipient.company
      form.status = recipient.status
    } else {
      resetForm()
    }
  },
)

function handleSubmit(){
  emit('submit',{
    name: form.name,
    email: form.email,
    company: form.company,
    status: form.status
  })
  resetForm()
}

function handleCancel() {
  resetForm()
  emit('cancel')
}

function resetForm(){
  form.name = ''
  form.email = ''
  form.company = ''
  form.status = 'Active'
}
</script>

<template>
  <section class="form-card">
    <h2>{{ recipientToEdit ? 'Edit Recipient' : 'Add Recipient' }}</h2>
     <form class="recipient-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model.trim="form.name"
          type="text"
          placeholder="Enter recipient name"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model.trim="form.email"
          type="email"
          placeholder="Enter email address"
          required
        />
      </div>

      <div class="form-group">
        <label for="company">Company</label>
        <input
          id="company"
          v-model.trim="form.company"
          type="text"
          placeholder="Enter company name"
          required
        />
      </div>

      <div class="form-group">
        <label for="status">Status</label>

        <select id="status" v-model="form.status">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div class="form-actions">
        <button type="submit" class="primary-button">
          {{ recipientToEdit ? 'Update Recipient' : 'Add Recipient' }}
        </button>

        <button v-if="recipientToEdit"
          type="button"
          class="secondary-button"
          @click="handleCancel">Cancel</button>
      </div>
    </form>
  </section>
</template>
