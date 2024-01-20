<template>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">

  <footer class="bg-purple-600 text-white p-6">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <router-link to="/">
        <div class="logo">
          <img src="../../assets/images/brand/brand-logo.png" alt="Logo" class="h-10 w-auto">
        </div>
      </router-link>

      <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
        <p class="text-white-600">InKubeWeTrust Sp.Z.o.o</p>
        <router-link to="/about-us" class="hover:text-blue-400">O Nas</router-link>
        <router-link to="/contactus" class="hover:text-blue-400">Kontakt</router-link>
      </div>

      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="https://www.facebook.com" target="_blank" class="hover:text-blue-500">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" class="hover:text-blue-700">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" class="hover:text-blue-400">
          <i class="fab fa-twitter"></i>
        </a>
      </div>

      <div class="text-sm mt-4 md:mt-0">
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

<style>
</style>
