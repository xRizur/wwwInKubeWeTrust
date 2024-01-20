<template>
  <div
    class="team-member bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-500 cursor-pointer group h-screen">
    <div class="photo-container relative mb-4">
      <img :src="member.photo" :alt="member.name"
        class="w-32 h-32 mx-auto rounded-full border-4 border-transparent group-hover:border-purple-600">
    </div>
    <h3 class="text-lg font-bold">{{ member.name }}</h3>
    <p class="text-sm">{{ member.position }}</p>
    <p>Uczelnia: {{ member.university }}</p>
    <p>Certyfikaty: {{ member.certificates.join(', ') }}</p>
  </div>
</template>
  
  
<script>
export default {
  props: {
    member: {
      type: Object,
      required: true
    }
  }
}
</script>
  
<style scoped>
.team-member:hover .photo-container img {
  transform: scale(1.05);
}
</style>
  