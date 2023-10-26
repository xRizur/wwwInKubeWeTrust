<template>
    <div v-if="isOpen" class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded shadow-lg w-1/2">
        <h2 class="text-2xl mb-4">Edytuj Task</h2>
        <input v-model="taskName" type="text" class="border p-2 rounded w-full mb-4" placeholder="Nazwa taska">
        <button @click="save" class="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 transition">Zapisz</button>
        <button @click="close" class="ml-4 text-gray-600 hover:text-gray-800 transition">Anuluj</button>
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
  