<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <div class="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 class="text-3xl mb-4">Customer Service</h1>
      <button 
        @click="openModal" 
        class="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition mb-6"
      >
        Nowy Projekt
      </button>
      <!-- Obsługa zdarzenia close-modal -->
      <NewProject :isOpen="isModalOpen" @project-created="addProject" @close-modal="closeModal" />

      
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-200">
            <th class="p-2 border">Nazwa Projektu</th>
            <th class="p-2 border">Akcje</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.id">
            <td class="p-2 border">{{ project.name }}</td>
            <td class="p-2 border flex justify-around">
              <button @click="deleteProject(project.id)" class="text-red-500 hover:underline">Usuń</button>
              <router-link :to="{ name: 'ProjectDetails', params: { id: project.id } }" class="text-blue-500 hover:underline">Szczegóły</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NewProject from './NewProject.vue';

export default {
  components: {
    NewProject
  },
  data() {
    return {
      projects: [],
      isModalOpen: false
    };
  },
  methods: {
    addProject(project) {
      this.projects.push(project);
      this.isModalOpen = false;
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async deleteProject(id) {
      try {
        await axios.delete(`http://localhost:3000/projects/${id}`);
        this.projects = this.projects.filter(project => project.id !== id);
      } catch (error) {
        console.error("Nie udało się usunąć projektu.", error);
      }
    }
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/projects');
      this.projects = response.data;
    } catch (error) {
      console.error("Nie udało się pobrać projektów.", error);
    }
  }
}
</script>
