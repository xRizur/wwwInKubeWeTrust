<template>
    <div class="flex flex-col space-y-2">
      <input 
        v-model="projectName" 
        placeholder="Nazwa projektu" 
        class="border rounded p-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        @click="createProject" 
        class="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
      >
        Stwórz Projekt
      </button>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        projectName: ''
      };
    },
    methods: {
      async createProject() {
        try {
          const response = await axios.post('http://localhost:3000/projects', { name: this.projectName });
          this.$emit('project-created', response.data);
          this.projectName = '';
        } catch (error) {
          console.error("Nie udało się stworzyć projektu.", error);
        }
      }
    }
  }
  </script>
  