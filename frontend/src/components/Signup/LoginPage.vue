<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-lg">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Logowanie
          </h2>
        </div>
        <form class="mt-8 space-y-4">
          <input 
            type="email" 
            placeholder="Adres email" 
            class="block w-full p-3 mb-4 bg-gray-200 rounded"
          >
          <input 
            type="password" 
            placeholder="Hasło" 
            class="block w-full p-3 mb-4 bg-gray-200 rounded"
          >
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
  export default {
    name: 'LoginPage'
  }
  </script>
  