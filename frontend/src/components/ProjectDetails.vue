<template>
    <div>
      <h1 v-if="project.name">{{ project.name }}</h1>
      <h1 v-else>Domyślna nazwa projektu</h1>
      <p>Szczegóły projektu...</p>
      <button 
        @click="openModal" 
        class="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
      >
        Dodaj Task
      </button>
      <NewTaskModal 
        :isOpen="isModalOpen" 
        :currentProjectId="+$route.params.id"
        @task-created="addTask"
      />
      <ul v-if="project.tasks && project.tasks.length">
  <li v-for="task in project.tasks" :key="task.id">{{ task.name }}</li>
</ul>
<p v-else>Brak zadań w tym projekcie.</p>

    </div>
</template>

<script>
import axios from 'axios';
import NewTaskModal from './NewTaskModal.vue';

export default {
  components: {
    NewTaskModal
  },
  data() {
    return {
      project: {},
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    addTask() {
  this.isModalOpen = false;
  this.fetchTasks(); // Odświeżenie listy tasków
},
  async fetchTasks() {
  try {
    const response = await axios.get(`http://localhost:3000/projects/${this.$route.params.id}/tasks`);
    this.project.tasks = response.data;
  } catch (error) {
    console.error("Nie udało się pobrać tasków.", error);
  }
},
  },
  async created() {
  try {
    const response = await axios.get(`http://localhost:3000/projects/${this.$route.params.id}`);
    this.project = response.data;
    this.fetchTasks(); // pobierz taski dla projektu po jego szczegółach
  } catch (error) {
    console.error("Nie udało się pobrać szczegółów projektu.", error);
  }
}

}
</script>
