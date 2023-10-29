<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Rejestracja
        </h2>
      </div>
      <form @submit.prevent="register" class="mt-8 space-y-4">
        <input 
          v-model="fullName"
          type="text" 
          placeholder="Pełne imię i nazwisko" 
          class="block w-full p-3 mb-4 bg-gray-200 rounded"
        >
        <input 
          v-model="username"
          type="text" 
          placeholder="Nazwa użytkownika" 
          class="block w-full p-3 mb-4 bg-gray-200 rounded"
        >
        <input 
          v-model="email"
          type="email" 
          placeholder="Adres email" 
          class="block w-full p-3 mb-4 bg-gray-200 rounded"
        >
        <input 
          v-model="phone"
          type="tel" 
          placeholder="Numer telefonu" 
          class="block w-full p-3 mb-4 bg-gray-200 rounded"
        >
        <input 
          v-model="password"
          type="password" 
          placeholder="Hasło" 
          class="block w-full p-3 mb-4 bg-gray-200 rounded"
        >
        <input 
          v-model="confirmPassword"
          type="password" 
          placeholder="Potwierdź hasło" 
          class="block w-full p-3 mb-4 bg-gray-200 rounded"
        >
        <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
        <button class="w-full p-3 bg-indigo-600 text-white rounded">
          Zarejestruj się
        </button>
      </form>
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">Masz już konto? <router-link to="/login" class="text-indigo-600 hover:text-indigo-900">Zaloguj się</router-link></p>
      </div>
      <div class="mt-4 flex justify-between">
        <div class="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center">Logo Google</div>
        <div class="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center">Logo GitHub</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      fullName: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Hasła się nie zgadzają';
        return;
      }

      const userData = {
        fullName: this.fullName, // Zmieniono z "full_name" na "fullName"
        username: this.username,
        email: this.email,
        phoneNumber: this.phone, // Zmieniono z "phone_number" na "phoneNumber"
        password: this.password,
      };

      try {
        const response = await fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (response.status === 201) {
          this.$router.push('/login'); 
        } else {
          this.errorMessage = 'Błąd podczas rejestracji. Spróbuj ponownie.';
        }
      } catch (error) {
        this.errorMessage = 'Błąd połączenia z serwerem.';
      }
    }
  }
}
</script>

<style scoped>
  /* Dodaj tu ewentualne style specyficzne dla tej strony */
</style>