

<template>
  <main class="container  p-2">
    <header class="flex justify-between items-center py-3 gap-4 ">
      <h1 class=" font-serif text-2xl md:text-3xl font font-bold">Logo</h1>
      <p class=" font-medium text-sm md:text-lg opacity-75"> {{ date.toLocaleString( "en-US", options
      ) }}</p>
    </header>
    <div class="flex justify-end md:px-10 my-5">
  <button @click=" toggleModal "
              className="px-2 py-1 bg-prim text-white text-[13px] rounded-[5px]">Add
          Employee</button>

    </div>
    <EmployeesList />
    <Modal :modalActive=" modalActive " @close-modal=" toggleModal ">
      <AddForm />
    </Modal>
  </main>
</template>


<script setup>
import { ref, onMounted } from "vue"
import EmployeesList from "./components/EmployeesList.vue"
import Modal from './components/Modal.vue'
import AddForm from "./components/AddForm.vue"

//Date
const date = ref( new Date() )
const updateDate = () => {
  date.value = new Date()
}
onMounted( () => {
  setInterval( updateDate, 1000 )
} )
const options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
}


//modal control
const modalActive = ref( false )
const toggleModal = () => {
  modalActive.value = !modalActive.value
}
</script>
<style scoped></style>
./stores/employeeStore