<template>
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto my-10">
      <h2 class="text-2xl font-semibold mb-6 text-center">Stwórz Nowy Projekt</h2>
  
      <div class="flex flex-col space-y-4">
        <label for="projectName" class="text-sm font-medium text-gray-600">Nazwa projektu</label>
        <input 
          id="projectName"
          v-model="projectName" 
          placeholder="Wpisz nazwę projektu" 
          class="border rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <button 
          @click="createProject" 
          class="bg-blue-500 text-white rounded-md px-6 py-3 hover:bg-blue-600 transition transform hover:scale-105"
        >
          Stwórz Projekt
        </button>
      </div>
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
  