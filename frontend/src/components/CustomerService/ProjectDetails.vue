<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <div class="flex items-center space-x-4">
      <router-link :to="{ name: 'customer-service' }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          class="h-6 w-6 cursor-pointer text-blue-500 hover:text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path>
        </svg>
      </router-link>
      <h1 v-if="project.name" class="text-3xl">Lista Projektow</h1>
    </div>
    <div class="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 class="text-3xl mb-4" v-if="project.name">{{ project.name }}</h1>
      <h1 class="text-3xl mb-4" v-else>Domyślna nazwa projektu</h1>
      <p class="mb-4 text-gray-600">Szczegóły projektu...</p>

      <button @click="openModal" class="cta bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
        Dodaj Task
      </button>
      <NewTaskModal :isOpen="isModalOpen" :currentProjectId="+$route.params.id" @task-created="addTask"
        @close-modal="isModalOpen = false" />
      <EditTaskModal :isOpen="isEditModalOpen" :task="editingTask" @close-modal="isEditModalOpen = false"
        @task-updated="updateTask" />

      <div class="border-t-2 border-blue-200 mt-6 pt-6">
        <h2 class="text-2xl mb-4">Lista zadań:</h2>
        <ul v-if="project.tasks && project.tasks.length">
          <li v-for="task in project.tasks" :key="task.id" class="p-2 border-b-2 border-gray-200 flex justify-between">
            {{ task.name }}
            <div>
              <button @click="openEditModal(task)"
                class="bg-yellow-500 text-white rounded px-2 py-1 hover:bg-yellow-600 transition">Edytuj</button>
              <button @click="deleteTask(task.id)" class="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600 transition">Usuń</button>
            </div>
          </li>

        </ul>
        <p class="text-gray-500" v-else>Brak zadań w tym projekcie.</p>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
import NewTaskModal from './NewTaskModal.vue';
import EditTaskModal from './EditTaskModal.vue';


export default {
  components: {
    NewTaskModal,
    EditTaskModal
  },
  data() {
    return {
      project: {},
      isModalOpen: false,
      isEditModalOpen: false,
      editingTask: {}
    };

  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    addTask() {
      this.isModalOpen = false;
      this.fetchTasks();
    },
    async fetchTasks() {
      try {
        const response = await axios.get(`http://localhost:3000/projects/${this.$route.params.id}/tasks`);
        this.project.tasks = response.data;
      } catch (error) {
        console.error("Nie udało się pobrać tasków.", error);
      }
    },
    async deleteTask(taskId) {
      try {
        await axios.delete(`http://localhost:3000/tasks/${taskId}`);
        this.fetchTasks();
      } catch (error) {
        console.error("Nie można usunąć zadania.", error);
      }
    },
    openEditModal(task) {
      this.editingTask = task;
      this.isEditModalOpen = true;
    },
    async updateTask(updatedTask) {
      try {
        await axios.put(`http://localhost:3000/tasks/${updatedTask.id}`, { name: updatedTask.name });
        this.fetchTasks();
      } catch (error) {
        console.error("Nie udało się edytować taska.", error);
      }
    }
  },
  async created() {
    try {
      const response = await axios.get(`http://localhost:3000/projects/${this.$route.params.id}`);
      this.project = response.data;
      this.fetchTasks(); 
    } catch (error) {
      console.error("Nie udało się pobrać szczegółów projektu.", error);
    }
  }
}
</script>
  