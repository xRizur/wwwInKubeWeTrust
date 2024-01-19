<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Rejestracja
        </h2>
      </div>
      <form @submit.prevent="register" class="mt-8 space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input v-model="fullName" type="text" placeholder="Pełne imię i nazwisko" class="p-3 bg-gray-200 rounded">
          <input v-model="username" type="text" placeholder="Nazwa użytkownika" class="p-3 bg-gray-200 rounded">
        </div>

        <input v-model="email" type="email" placeholder="Adres email" class="block w-full p-3 mb-4 bg-gray-200 rounded">
        <input v-model="phone" type="tel" placeholder="Numer telefonu" class="block w-full p-3 mb-4 bg-gray-200 rounded">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input v-model="password" type="password" placeholder="Hasło" class="p-3 bg-gray-200 rounded">
          <input v-model="confirmPassword" type="password" placeholder="Potwierdź hasło" class="p-3 bg-gray-200 rounded">
        </div>
        <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
        <button class="w-full p-3 bg-indigo-600 text-white rounded">
          Zarejestruj się
        </button>
      </form>
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">Masz już konto? <router-link to="/login"
            class="text-indigo-600 hover:text-indigo-900">Zaloguj się</router-link></p>
      </div>
      <div class="mt-4 flex justify-between">
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
    validateInput() {
      if (!this.email.includes('@')) {
        this.errorMessage = 'Nieprawidłowy adres email';
        return false;
      }
      if (this.password.length < 8) {
        this.errorMessage = 'Hasło musi mieć co najmniej 8 znaków';
        return false;
      }
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Hasła się nie zgadzają';
        return false;
      }
      return true;
    },
    async register() {
      if (!this.validateInput()) {
        return;
      }

      const userData = {
        fullName: this.fullName,
        username: this.username,
        email: this.email,
        phoneNumber: this.phone,
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

<style scoped></style>