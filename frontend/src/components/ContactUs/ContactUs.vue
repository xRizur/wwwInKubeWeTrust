<template>
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <div class="md:flex md:justify-between md:items-start gap-8 mb-10">
        <!-- Sekcja mapy -->
        <div class="md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.3075785888256!2d21.006724015795007!3d52.23192347975768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ededf9!2sWarszawa!5e0!3m2!1spl!2spl!4v1649632289044!5m2!1spl!2spl"
            width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <!-- Sekcja kontaktu -->
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold mb-4">Kontakt</h2>
          <p class="mb-4">
            <strong>InKubeWeTrust</strong><br>
            1234 Kodowa Ulica, 00-001 Warszawa<br>
            Email: kontakt@InKubeWeTrust.pl<br>
            Tel: +48 123 456 789
          </p>
          <p>
            Godziny pracy:<br>
            Poniedziałek - Piątek: 9:00 - 17:00
          </p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-6 md:p-10">
        <h2 class="text-2xl font-bold text-center mb-4">Napisz do nas</h2>
        <p class="text-center text-gray-600 mb-8">
          Chętnie odpowiemy na Twoje pytania i przygotujemy indywidualną ofertę.
        </p>
        <form @submit.prevent="submitForm" class="w-full max-w-xl mx-auto">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="first-name">
                Imię
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="first-name" type="text" placeholder="Twoje imię">
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="email" type="email" placeholder="example@mail.com">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">
                Wiadomość
              </label>
              <textarea
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48"
                id="message" placeholder="Wpisz swoją wiadomość tutaj..."></textarea>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 text-right">
            <button class="cta bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800" type="submit">
              Wyślij
            </button>
            </div>
          </div>
        </form>
      </div>
      <div v-if="showMessage" class="fixed bottom-3 right-3 bg-green-200 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
    <span class="block sm:inline">Wiadomość wysłana pomyślnie!</span>
  </div>
    </div>
  </section>
</template>
  
<script>
export default {
  data() {
    return {
      showMessage: false,
    };
  },
  methods: {
    submitForm() {
      this.showMessage = true;
      setTimeout(() => this.showMessage = false, 3000);
    }
  }
}
</script>

  
<style scoped>
</style>