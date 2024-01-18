<template>
  <div v-if="isLogged" class="p-8 bg-gray-100 min-h-screen">
    <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Dane użytkownika -->
        <div class="col-span-1">
          <h1 class="text-xl font-semibold mb-4">Informacje o użytkowniku</h1>
          <form @submit.prevent="updateUserData" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Imię</label>
              <input v-model="userData.name" type="text" placeholder="Imię" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <input v-model="userData.email" type="email" placeholder="Email" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm" />
            </div>
            <!-- Dodaj więcej pól według potrzeb -->
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600">Aktualizuj dane</button>
          </form>
        </div>

        <!-- Kafelki z informacjami -->
        <div class="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Kafel z balansem -->
          <div class="bg-blue-100 p-6 rounded-xl">
            <h2 class="text-lg font-semibold mb-4">Balanse</h2>
            <!-- Tutaj wyświetl balans użytkownika -->
          </div>
          <!-- Kafel z projektami -->
          <div class="bg-green-100 p-6 rounded-xl">
            <h2 class="text-lg font-semibold mb-4">Projekty</h2>
            <!-- Tutaj wyświetl listę projektów użytkownika -->
          </div>
          <!-- ... Można dodać więcej kafelków według potrzeb -->
        </div>

        <button @click.prevent="logout" class="w-full py-2 mt-4 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Wyloguj się
        </button>
      </div>
    </div>
  </div>
  <div v-else class="p-8 bg-gray-100 min-h-screen flex justify-center items-center">
    <div class="text-center">
      <p class="text-xl mb-4">Aby uzyskać dostęp do tej strony, musisz się zalogować.</p>
      <router-link to="/login" class="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">Zaloguj się</router-link>
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
        // Dodaj więcej pól według potrzeb
      }
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
        // Informuj użytkownika o sukcesie lub błędzie
      } catch (error) {
        console.error('Błąd podczas aktualizacji danych użytkownika:', error);
      }
    },
      logout() {
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = null;
        this.$router.push('/');
      }
    },
    watch: {
      '$route': function() {
        this.isLogged = !!localStorage.getItem('token');
      }
    },
    mounted() {
    if (this.isLogged) {
      this.fetchUserData();
    }
  }
  }
  </script>