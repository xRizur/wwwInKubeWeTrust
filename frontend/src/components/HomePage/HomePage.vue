<template>
  <section class="bg-gray-100 py-12">
    <div class="text-center my-4">
      <h1 class="text-4xl font-bold mb-2">Witamy w InKubeWeTrust</h1>
      <p class="text-xl">Twoje centrum innowacji DevOps i zarządzania infrastrukturą chmurową.</p>
    </div>
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 px-4">
        <div v-for="tech in technologies" :key="tech.alt"
          class="bg-white p-4 rounded shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
          <img :src="tech.src" :alt="tech.alt" class="w-12 h-12 mb-2 mx-auto">
          <p class="text-center text-xs">{{ tech.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-purple-700 text-white py-12">
    <div class="max-w-4xl mx-auto text-center">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="flex flex-col items-center">
          <div class="flex items-baseline">
            <count-up :end-val="25" class="text-5xl font-bold" />
            <span class="text-5xl font-bold">+</span>
          </div>
          <p class="mt-2">Projects Managed in Kubernetes</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex items-baseline">
            <count-up :end-val="99" class="text-5xl font-bold" />
            <span class="text-5xl font-bold">%</span>
          </div>
          <p class="mt-2">Successful Deployments</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex items-baseline">
            <count-up :end-val="95" class="text-5xl font-bold" />
            <span class="text-5xl font-bold">%</span>
          </div>
          <p class="mt-2">Happy Clients</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gray-200 py-12">
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-2">Zainteresowany? Skontaktuj się z nami!</h2>
      <p class="mb-4">
        Jesteśmy gotowi sprostać Twoim wyzwaniom. Skontaktuj się z nami, aby omówić Twoje potrzeby i zobaczyć, jak możemy
        Ci pomóc.
      </p>
      <router-link to="/contactus"
        class="inline-block bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 mt-4">Skontaktuj się z
        nami</router-link>
    </div>
  </section>
</template>

<script>
import CountUp from 'vue-countup-v3'
export default {
  components: {
    'count-up': CountUp
  },
  name: 'TechnologyList',
  data() {
    return {
      technologies: [
        {
          src: require('../../assets/images/technology_logos/Kubernetes.svg'),
          alt: 'DevOps Icon',
          description: 'Kubernetes Services'
        },
        {
          src: require('../../assets/images/technology_logos/Microsoft_Azure.svg.png'),
          alt: 'Cloud Icon',
          description: 'Cloud Management'
        },
        {
          src: require('../../assets/images/technology_logos/terraform.png'),
          alt: 'Terraform Icon',
          description: 'Terraform Solutions'
        },
        {
          src: require('../../assets/images/technology_logos/Jenkins_logo.svg.png'),
          alt: 'Terraform Icon',
          description: 'CI / CD Pipelines'
        },
        {
          src: require('../../assets/images/technology_logos/Grafana_logo.svg.png'),
          alt: 'Terraform Icon',
          description: 'Monitoring'
        }
      ]
    }
  }
}


</script>

<style scoped></style>