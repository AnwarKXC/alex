<template>
	<div class="flex gap-4 justify-center items-center text-xl font-semibold tracking-widest">
	</div>
	<section class="text-lg font-semibold ">
		<div class="flex flex-col md:flex-row justify-center md:justify-around items-center gap-2 my-5 md:my-0">
			<h2 class="md:py-10">All employees &nbsp; ({{ TaskStore.totalCount }})</h2>
			<input type="text" v-model=" searchQuery " placeholder="Search for employee"
			/>
		</div>
		<div class="flex gap-5 flex-wrap justify-center">
			<div v-for="    task     of     filterdEmployee    " :key=" task.id ">
				<TaskDetails :task=" task " />
			</div>
			<p class=" text-center text-2xl"
				v-if=" TaskStore.Tasks.length === 0 && searchQuery === '' ">
				No Employee 😟
			</p>
			<p class="text-red-700 text-center text-2xl"
				v-if=" TaskStore.Tasks.length !== 0 &&filterdEmployee.length === 0 && searchQuery !== '' ">
				Not Found 404 🥲
			</p>
		</div>
		<button class="px-2 py-1 my-5 bg-[#f05252]  text-white text-xs rounded-[5px]" @click="TaskStore.$reset">Delete All</button>
	</section>
</template>

<script setup>
import TaskDetails from './TaskDetails.vue'
import { ref, computed } from 'vue'
import { useTaskStore } from '/src/stores/employeeStore'

const TaskStore = useTaskStore()
const searchQuery = ref( "" )
const filterdEmployee = computed( () => { return TaskStore.Tasks.filter( ( task ) => task.name.includes( searchQuery.value ) ) } )
</script>

<style scoped></style>
