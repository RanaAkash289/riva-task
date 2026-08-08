<script setup>
defineProps({
  searchTerm:{
    type: String,
    default: ''
  }
})

const emit = defineEmits(['search'])

function handleInput(event){
  emit('search', event.target.value)
}
</script>

<template>
  <div class="search-container">
    <label for="recipient-search">Search Recipients</label>
    <input id="recipient-search" type="search" :value="searchTerm" placeholder="Search by Name of Email" @input="handleInput" />
  </div>
</template>
