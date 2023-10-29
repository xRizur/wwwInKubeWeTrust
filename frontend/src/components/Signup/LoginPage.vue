<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Logowanie
        </h2>
      </div>
      <form @submit.prevent="login" class="mt-8 space-y-4">
        <input 
          v-model="email"
          type="email" 
          placeholder="Adres email" 
          class="block w-full p-3 mb-4 bg-gray-200 rounded"
        >
        <input 
          v-model="password"
          type="password" 
          placeholder="Hasło" 
          class="block w-full p-3 mb-4 bg-gray-200 rounded"
        >
        <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
        <button class="w-full p-3 bg-indigo-600 text-white rounded">
          Zaloguj się
        </button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-indigo-600 hover:text-indigo-900">Nie pamiętasz hasła?</a>
      </div>
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">Nie masz jeszcze konta? <router-link to="/sign-up" class="text-indigo-600 hover:text-indigo-900">Zarejestruj się</router-link></p>
      </div>
      <div class="mt-4 flex justify-between">
        <div class="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center">Logo Google</div>
        <div class="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center">Logo GitHub</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'; // Upewnij się, że masz Axios zainstalowany w swoim projekcie

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async login() {
      const loginData = {
        email: this.email,
        password: this.password,
      };

      try {
        const response = await axios.post('http://localhost:3001/login', loginData);

        if (response.status === 200) {
          // Zapisz token JWT do localStorage
          localStorage.setItem('token', response.data.token);
          
          // Ustaw domyślny nagłówek Authorization dla Axios
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;

          this.$router.push('/userprofile'); // Przekierowanie po udanym logowaniu
        } else {
          this.errorMessage = response.data.message || 'Błąd logowania. Spróbuj ponownie.';
        }
      } catch (error) {
        this.errorMessage = 'Błąd połączenia z serwerem.';
      }
    }
  }
}
</script>

<style scoped>
  /* ... Twoje style pozostają bez zmian ... */
</style>