<!-- TechnologyModal.vue -->
<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div class="bg-white p-8 rounded shadow-lg z-10">
        <h2 class="text-xl font-semibold mb-4">{{ technology.name }}</h2>
        <p>{{ technology.description }}</p>
        <button @click="closeModal" class="mt-4 p-2 bg-red-500 text-white rounded">Zamknij</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: Boolean,
      technology: Object
    },
    methods: {
  openModal(type) {
    this.isModalOpen = true;
    switch (type) {
      case 'kubernetes':
        this.modalContent = {
          title: 'Kubernetes Services',
          description: 'Opis usług Kubernetes...'
          // ...
        };
        break;
      // ... przypadki dla innych technologii
    }
  },
  closeModal() {
    this.isModalOpen = false;
  }
}
  }
  </script>
  