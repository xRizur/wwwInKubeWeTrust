<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="absolute inset-0 bg-black opacity-50 z-10"></div>

    <div class="bg-white rounded-lg shadow-lg p-8 max-w-md z-20">
      <h2 class="text-2xl font-semibold mb-6 text-center">Stwórz Nowy Projekt</h2>

      <div class="flex flex-col space-y-4">
        <label for="projectName" class="text-sm font-medium text-gray-600">Nazwa projektu</label>
        <input id="projectName" v-model="projectName" placeholder="Wpisz nazwę projektu"
          class="border rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <div class="flex justify-between">
          <button @click="createProject" class="cta bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
            Stwórz Projekt
          </button>
          <button @click="closeModal" class="text-blue-500 hover:text-blue-600 transition">
            Zamknij
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    ownerId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      projectName: ''
    };
  },
  methods: {
    async createProject() {
      try {
        const response = await axios.post('http://localhost:3000/projects', {
          name: this.projectName,
          ownerId: this.ownerId // Upewnij się, że ownerId jest dostępne
        });
        this.$emit('project-created', response.data);
        this.projectName = '';
        this.closeModal();
      } catch (error) {
        console.error("Nie udało się stworzyć projektu.", error);
      }
    },

    closeModal() {
      this.$emit('close-modal');
    }
  }
}
</script>
  