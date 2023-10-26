<template>
    <div class="p-4 space-y-4">
      <NewProject @project-created="addProject" />
      <button 
        @click="openModal" 
        class="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
      >
        Dodaj Task
      </button>
      <NewTaskModal :isOpen="isModalOpen" @task-created="addTask" />

      <ul>
        <ul>
  <li v-for="project in projects" :key="project.id">
    {{ project.name }}
    <button @click="deleteProject(project.id)">Usuń</button>
    <router-link :to="{ name: 'ProjectDetails', params: { id: project.id } }">Szczegóły</router-link>
  </li>
</ul>

</ul>

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import NewProject from './NewProject.vue';
  import NewTaskModal from './NewTaskModal.vue';
  
  export default {
    components: {
      NewProject,
      NewTaskModal
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
      },
      openModal() {
        this.isModalOpen = true;
      },
      addTask(task) {
        const lastProject = this.projects[this.projects.length - 1];
        lastProject.tasks.push(task);
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
  