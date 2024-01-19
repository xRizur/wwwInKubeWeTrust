<template>
  <footer class="bg-purple-600 text-white p-6">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/">
        <div class="logo">
          <img src="../../assets/images/brand/brand-logo.png" alt="Logo" class="h-10 w-auto">
        </div>
      </router-link>

      <div class="flex space-x-4">
        <p class="text-white-600">InKubeWeTrust Sp.Z.o.o</p>
        <router-link to="/about-us" class="hover:text-blue-400">O nas</router-link>
        <router-link to="/contactus" class="hover:text-blue-400">Kontakt</router-link>
      </div>

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