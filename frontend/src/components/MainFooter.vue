<template>
<footer class="bg-purple-600 text-white p-6">
    <div class="container mx-auto flex justify-between items-center">
        <router-link to="/">
  <div class="logo">
    <img src="../assets/images/brand/brand-logo.png" alt="Logo" class="h-10 w-auto">
  </div>
</router-link>

      <!-- Linki -->
      <div class="flex space-x-4">
        <a href="#" class="hover:text-blue-400">Polityka prywatności</a>
        <a href="#" class="hover:text-blue-400">Regulamin</a>
        <a href="#" class="hover:text-blue-400">Wsparcie</a>
      </div>

      <!-- Informacje prawne -->
      <div class="text-sm">
        © 2023 InKubeWeTrust. Wszystkie prawa zastrzeżone.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
}
</script>