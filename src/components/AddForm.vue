<template>
   <form @submit.prevent=" submitHandler ">
      <h1 class="text-prim pb-2">NEW EMPLOYEE</h1>
      <div class="w-full h-0 border-prim border-t-[1px]" />
      <h2 class="section-title"> <span /> Personal Info</h2>
      <div class="md:flex justify-between my-2 gap-3 w-full">
         <div class="md:w-1/2 flex flex-col ">
            <label>Name</label>
            <input v-model=" nameRef " required type="text" placeholder="Name" />
         </div>
         <div class="md:w-1/2 flex flex-col ">
            <label>Phone</label>
            <input v-model=" phoneRef " required placeholder="Phone" type="tel" />
         </div>
      </div>
      <div class="md:flex justify-between my-2 gap-3">
         <div class=" md:w-1/2 flex flex-col ">
            <label>Start Date</label>
            <input v-model=" dateRef " required type="date" />
         </div>
         <div class="md:w-1/2 flex flex-col ">
            <label>Email</label>
            <input v-model=" emailRef " required type="email" placeholder="Email" />
         </div>
      </div>
      <h2 class="section-title"> <span /> Position Info</h2>
      <div class="md:flex justify-between my-2 gap-3 w-full">
         <div class="md:w-1/2 flex flex-col ">
            <label>Position</label>
            <input v-model=" positionRef " type="text" placeholder="position" />
         </div>
         <div class="md:w-1/2 flex flex-col ">
            <label>Department</label>
            <input v-model=" departRef " type="text" placeholder="department" />
         </div>
      </div>
      <div class="md:flex justify-between my-2 gap-3">
         <div class=" md:w-1/2 flex flex-col ">
            <label>Office Location</label>
            <select v-model=" locationRef ">
               <option value="" disabled selected hidden class=" font-semibold">Select one</option>
               <option value="EGY">EGY</option>
               <option value="SA">SA</option>
               <option value="UEA">UEA</option>
            </select>
         </div>
         <div class="md:w-1/2 flex flex-col ">
            <label>Attendance Profile</label>
            <select v-model=" attendRef " placeholder="select one">
               <option value="" disabled selected hidden>Select one</option>
               <option value="on site">On site</option>
               <option value="Remote">Remote</option>
            </select>
         </div>
      </div>
      <div class="w-full h-0 border-zinc-300 border-t-[1px] my-4" />
      <div class="flex justify-end">
         <button type="submit"
            class="px-2 py-1 bg-prim text-white text-[13px] rounded-[5px]">Save</button>
      </div>
   </form>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/employeeStore'

const TaskStore = useTaskStore()
const nameRef = ref( '' )
const dateRef = ref( '' )
const emailRef = ref( '' )
const phoneRef = ref( '' )
const positionRef = ref( '' )
const departRef = ref( '' )
const locationRef = ref( '' )
const attendRef = ref( '' )
const submitHandler = () => {
   TaskStore.addTask( {
      id: Math.floor( Math.random() * 99999 ),
      name: nameRef.value,
      date: dateRef.value,
      email: emailRef.value,
      phone: phoneRef.value,
      position: positionRef.value,
      department: departRef.value,
      location: locationRef.value,
      attend: attendRef.value
   } )
   nameRef.value = ''
   dateRef.value = ''
   emailRef.value = ''
   phoneRef.value = ''
   positionRef.value = ''
   departRef.value = ''
   locationRef.value = ''
   attendRef.value = ''
}

</script>


<style scoped>
select {
   font-size: 14px;
   color: rgb(65, 63, 63);
   font-weight: 600;
}
</style>