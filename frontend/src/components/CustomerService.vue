<template>
    <div class="p-6">
      <div class="mb-4">
        <button @click="createNewProject" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Dodaj nowy projekt
        </button>
      </div>
      <div>
        <ul>
          <li v-for="project in projects" :key="project.id" class="mb-2">
            <router-link :to="`/customer-service/${project.id}`">{{ project.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          // Przykładowe dane projektów; w rzeczywistości będą pobierane z serwera.
          { id: 1, name: "Projekt 1" },
          { id: 2, name: "Projekt 2" },
          // ...
        ],
      };
    },
    methods: {
      createNewProject() {
        // Logika dodawania nowego projektu (np. otwarcie okna modalnego).
      },
    },
  };
  </script>
  