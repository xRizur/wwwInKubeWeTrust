<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white p-4 rounded shadow-lg w-1/2">
        <input 
          v-model="taskName" 
          placeholder="Nazwa tasku" 
          class="border rounded p-2 shadow w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        />
        <textarea 
          v-model="taskDescription" 
          placeholder="Opis tasku" 
          class="border rounded p-2 shadow w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        ></textarea>
        <button 
          @click="createTask" 
          class="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition w-full"
        >
          Dodaj Task
        </button>
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
    currentProjectId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      taskName: '',
      taskDescription: ''
    };
  },
  methods: {
    async createTask() {
      try {
        const response = await axios.post(`http://localhost:3000/projects/${this.currentProjectId}/tasks`, {
          name: this.taskName,
          description: this.taskDescription
        });
        this.$emit('task-created', response.data);
        this.taskName = '';
        this.taskDescription = '';
      } catch (error) {
        console.error('Nie udało się dodać zadania:', error);
      }
    }
  }
}
</script>

<style scoped>
.modal {
  /* Stylizacja modalu */
}
</style>
