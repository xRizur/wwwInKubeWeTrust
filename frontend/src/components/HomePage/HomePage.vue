<template>
  <section class="flex flex-col items-center justify-center bg-gray-100 h-screen">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      <div 
      v-for="tech in technologies" 
      :key="tech.alt"
      class="bg-white p-12 rounded shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
      >
      <img :src="tech.src" :alt="tech.alt" class="w-24 h-24 mb-2 mx-auto">
    <p class="text-center">{{ tech.description }}</p>
      </div>
    </div>
  </section>


  <section class="bg-purple-700 text-white py-16">
    <div class="flex space-x-8">
      <!-- ... inne elementy ... -->
      <div class="flex-1">
        <count-up :end-val="8" class="text-6xl font-bold" />B+
        <p>Managed in Kubernetes Resources</p>
      </div>
      <div class="flex-1">
        <count-up :end-val="90" class="text-6xl font-bold" />%
        <p>Successful Deployments</p>
      </div>
      <div class="flex-1">
        <count-up :end-val="95" class="text-6xl font-bold" />%
        <p>Happy Clients</p>
      </div>
    </div>
  </section>

    <section class="flex flex-col items-center justify-center bg-gray-100 py-16"></section>
</template>

<script>
import CountUp from 'vue-countup-v3'
// import TechnologyModal from './TechnologyModal.vue';

// export default {
//   components: {
//     TechnologyModal
//   },
//   data() {
//     return {
//       modalOpen: false,
//       selectedTechnology: {
//         name: '',
//         description: ''
//       }
//     };
//   },
//   methods: {
//     openModal(name, description) {
//       this.selectedTechnology.name = name;
//       this.selectedTechnology.description = description;
//       this.modalOpen = true;
//     }
//   }
// }
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
      },
      {
        src: require('../../assets/images/technology_logos/terraform.png'),
        alt: 'Terraform Icon',
        description: 'Terraform Solutions'
      }
    ]
    }
  }
}


</script>

<style scoped>
</style>