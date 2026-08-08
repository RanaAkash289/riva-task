<script setup>
import { computed,ref } from 'vue'
import BulkActions from '@/components/BulkActions.vue'
import RecipientForm from '@/components/RecipientForm.vue'
import RecipientTable from '@/components/RecipientTable.vue'
import SearchBar from '@/components/SearchBar.vue'
import { userecipientStore } from '@/stores/recipientStore'
import { recipientFilter } from '@/utils/recipientFilters'

const recipientStore = userecipientStore()
const recipientToEdit = ref(null)
const selectedRecipientIds = ref([])
const searchTerm = ref('')

const filterSearchRecipient = computed(()=>{
 return recipientFilter(
  recipientStore.recipients,
  searchTerm.value
 )
})

function handleSearch(value){
  searchTerm.value=value
}
function handleSaveRecipient(recipientData) {
  if (recipientToEdit.value) {
    recipientStore.updateRecipient(
      recipientToEdit.value.id,
      recipientData,
    )

    recipientToEdit.value = null
  } else {
    recipientStore.addRecipient(recipientData)
  }
}

function handleEditRecipient(recipient) {
  recipientToEdit.value = { ...recipient }
}

function handleCancelEdit() {
  recipientToEdit.value = null
}

function handleDeleteRecipient(recipient) {
  const confirmed = window.confirm(
    `Are you sure you want to delete ${recipient.name}?`,
  )

  if (confirmed) {
    recipientStore.deleteRecipient(recipient.id)
    selectedRecipientIds.value = selectedRecipientIds.value.filter((id)=>id !== recipient.id)
    if (
      recipientToEdit.value &&
      recipientToEdit.value.id === recipient.id
    ) {
      recipientToEdit.value = null
    }
  }
}

function handleToggel(id){
  if(selectedRecipientIds.value.includes(id)){
    selectedRecipientIds.value = selectedRecipientIds.value.filter((ids)=>ids !== id)
  }else{
    selectedRecipientIds.value.push(id)
  }
}

function handleSelectAll(checkedSel){
   if (checkedSel) {
    selectedRecipientIds.value = filterSearchRecipient.value.map((recipient) => recipient.id)
  } else {
    selectedRecipientIds.value = []
  }
}

function handleBulkDelete() {
  const confirmed = window.confirm(
    `Are you sure you want to delete ${selectedRecipientIds.value.length} recipients?`,
  )
  if (confirmed) {
    recipientStore.deleteRecipients(selectedRecipientIds.value)
    selectedRecipientIds.value = []
  }
}

function handleBulkStatusChange(status) {
  recipientStore.updateRecipientsStatus(selectedRecipientIds.value,status)
  selectedRecipientIds.value = []
}
</script>

<template>
  <main class="app-container">
    <header class="page-header">
      <h1>Recipients List Manager</h1>
      <p>Manage and organize your recipient records.</p>

      <p class="recipient-count">
        Total recipients: {{ recipientStore.recipientCount }}
      </p>
    </header>
    <RecipientForm :recipient-to-edit="recipientToEdit"
      @submit="handleSaveRecipient"
      @cancel="handleCancelEdit"/>

    <SearchBar :search-term="searchTerm"
      @search="handleSearch" />

    <BulkActions
      :selected-count="selectedRecipientIds.length"
      @delete-selected="handleBulkDelete"
      @change-status="handleBulkStatusChange"
    />
    <RecipientTable :recipients="filterSearchRecipient"
      :selected-ids="selectedRecipientIds"
      @edit="handleEditRecipient"
      @delete="handleDeleteRecipient"
      @toggle-select="handleToggel"
      @select-all="handleSelectAll"
      />

  </main>
</template>
