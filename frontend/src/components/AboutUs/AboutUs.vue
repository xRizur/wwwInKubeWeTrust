<template>
  <div class="container mx-auto p-4">
    <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 class="text-xl font-bold mb-4">O nas</h2>
      <p class="text-justify mb-4">
        Jesteśmy młodą, dynamiczną drużyną specjalistów z dziedziny DevOps. Złożeni z trzech niezależnych freelancerów,
        łączymy nasze siły, aby dostarczać innowacyjne rozwiązania, które napędzają cyfrową transformację w
        przedsiębiorstwach.
      </p>
      <p class="text-justify mb-4">
        Nasza misja to tworzenie efektywnych i skalowalnych systemów, które pomagają firmom w osiągnięciu ich celów
        biznesowych. Wierzymy, że prawdziwa wartość technologii tkwi nie tylko w kodzie, ale przede wszystkim w ludziach.
        Dlatego stawiamy na bliską współpracę z naszymi klientami, aby dostosowywać nasze usługi do ich indywidualnych
        potrzeb.
      </p>
      <p class="text-justify mb-4">
        Wizją naszej firmy jest bycie liderem w dziedzinie DevOps wśród młodych specjalistów. Dążymy do tego, by każde
        przedsięwzięcie, które podejmujemy, było nie tylko technologicznie zaawansowane, ale również dostarczało wartość
        biznesową dla naszych klientów.
      </p>
      <p class="text-justify mb-4">
        Jako trójka młodych entuzjastów technologii, stale podnosimy swoje kwalifikacje, uczestniczymy w branżowych
        konferencjach i szkolimy się, aby sprostać wymaganiom dynamicznie zmieniającego się rynku IT. Nasze świeże
        spojrzenie, połączone z głębokim zrozumieniem technologii, pozwala nam dostarczać usługi najwyższej jakości.
      </p>
      <p class="text-justify">
        Zapraszamy do współpracy!
      </p>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <TeamMember v-for="person in teamMembers" :key="person.id" :member="person" />
    </div>
  </div>
</template>
  
<script>
import TeamMember from '@/components/AboutUs/TeamMember.vue';

export default {
  name: 'AboutUsPage',
  components: {
    TeamMember
  },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'Maciej Pająk',
          position: 'Site Reliability Engineer',
          university: 'Uj',
          certificates: ['Hashicorp Certified: Terraform Associate (003)', 'Cert 2'],
          photo: require('../../assets/images/people_images/face-1.png')
        },
        {
          id: 2,
          name: 'Jar0_Slaw',
          position: 'Application Administrator',
          university: 'PJATK',
          certificates: ['Kubernetes'],
          photo: require('../../assets/images/people_images/face-2.png')
        },
        {
          id: 3,
          name: 'Imię i nazwisko',
          position: 'Stanowisko',
          university: 'Nazwa uczelni',
          certificates: ['Cert 1', 'Cert 2'],
          photo: require('../../assets/images/people_images/face-3.png')
        },
      ]
    }
  }
}
</script>
  