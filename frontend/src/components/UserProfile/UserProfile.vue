<template>
  <div v-if="isLogged" class="p-8 bg-gray-100 min-h-screen">
    <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div class="col-span-1">
          <h1 class="text-xl font-semibold mb-4">Informacje o użytkowniku</h1>
          <form @submit.prevent="updateUserData" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Imię</label>
              <input v-model="userData.name" type="text" placeholder="Imię"
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <input v-model="userData.email" type="email" placeholder="Email"
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Numer telefonu</label>
              <input v-model="userData.phone" type="tel" placeholder="Numer telefonu"
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Nowe hasło</label>
              <input v-model="userData.password" type="password" placeholder="Nowe hasło"
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div class="flex items-center">
            </div>
            <button type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Aktualizuj
              dane</button>
            <p v-if="updateMessage" class="mt-4 text-green-600">{{ updateMessage }}</p>
          </form>
        </div>

        <div class="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-green-100 p-6 rounded-xl">
            <h2 class="text-lg font-semibold mb-4">Twoje Projekty</h2>
            <ul>
              <li v-for="project in userProjects" :key="project.id" class="mb-2">
                <router-link :to="{ name: 'ProjectDetails', params: { id: project.id } }"
                  class="text-blue-600 hover:text-blue-800">{{ project.name }}</router-link>
              </li>
            </ul>
          </div>
        </div>

        <button @click.prevent="logout"
          class="w-full py-2 mt-4 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Wyloguj się
        </button>
      </div>
    </div>
  </div>
  <div v-else class="p-8 bg-gray-100 min-h-screen flex justify-center items-center">
    <div class="text-center">
      <p class="text-xl mb-4">Aby uzyskać dostęp do tej strony, musisz się zalogować.</p>
      <router-link to="/login" class="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">Zaloguj
        się</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isLogged: !!localStorage.getItem('token'),
      userData: {
        name: '',
        email: '',
        username: '',
        phone: '',
        password: ''
      },
      userProjects: [],
      updateMessage: '',
      consentGiven: false
    };
  },
  methods: {
    async fetchUserData() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/api/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response && response.data) {
          this.userData = response.data;
          this.fetchUserProjects(response.data.id);
        }
      } catch (error) {
        console.error('Błąd podczas pobierania danych użytkownika:', error);
      }
    },
    async updateUserData() {
      try {
        const token = localStorage.getItem('token');
        await axios.put('http://localhost:3001/api/user', this.userData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.updateMessage = 'Dane zaktualizowane pomyślnie';
        setTimeout(() => this.updateMessage = '', 3000);
      } catch (error) {
        console.error('Błąd podczas aktualizacji danych użytkownika:', error);
      }
    },
    async fetchUserProjects(userId) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:3000/projects?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.userProjects = response.data;
      } catch (error) {
        console.error('Błąd podczas pobierania projektów:', error);
      }
    },
    logout() {
      localStorage.removeItem('token');
      axios.defaults.headers.common['Authorization'] = null;
      this.$router.push('/');
    }
  },
  mounted() {
    if (this.isLogged) {
      this.fetchUserData();
    }
  }
}
</script>

<style></style>
