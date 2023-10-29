<template>
  <div v-if="isOpen" class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-50 bg-gray-700">
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
      <h2 class="text-2xl font-semibold mb-6 text-center">Edytuj Task</h2>
      <div class="flex flex-col space-y-4">
        <label for="taskName" class="text-sm font-medium text-gray-600">Nazwa taska</label>
        <input 
          id="taskName"
          v-model="taskName"
          placeholder="Wpisz nazwę taska"
          class="border rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div class="flex justify-between">
          <button 
            @click="save" 
            class="bg-green-500 text-white rounded-md px-6 py-3 hover:bg-green-600 transition transform hover:scale-105"
          >
            Zapisz
          </button>
          <button 
            @click="close" 
            class="text-gray-600 hover:text-gray-800 transition"
          >
            Anuluj
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    task: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      taskName: this.task.name
    };
  },
  watch: {
    task(newVal) {
      this.taskName = newVal.name;
    }
  },
  methods: {
    close() {
      this.$emit('close-modal');
    },
    save() {
      this.$emit('task-updated', { ...this.task, name: this.taskName });
      this.close();
    }
  }
}
</script>

<style scoped>
</style>
