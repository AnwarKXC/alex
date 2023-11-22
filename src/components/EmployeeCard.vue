<template>
	<div class="p-3 w-[330px]  border border-zinc-200 overflow-hidden">
		<div class="flex justify-center items-center gap-4">
			<div class="flex justify-center w-16 border-r-zinc-200 border-r-[1.5px]">
				<p class="text-6xl">👤</p>
			</div>
			<div class="flex-grow w-[200px]">
				<h3 class="text-zinc-900 leading-5 capitalize truncate">{{ task.name }}</h3>
				<h4 class="text-zinc-800 text-sm"><span class="text-[10px] text-zinc-600">position:</span>
					{{ task.position }}</h4>
				<h5 class="text-xs text-zinc-800 leading-3"><span
						class="text-[10px] text-zinc-600">department:</span> {{ task.department }}</h5>
				<div class="text-[10px] text-zinc-600 leading-4 mt-1  ">
					<div class=" truncate">Email: <span class="text-black text-[11px] ">{{ task.email
					}}</span></div>
					<div class=" truncate">Phone: <span class="text-black text-[11px]">{{ task.phone
					}}</span></div>
					<div>Start from: <span class="text-black text-[11px]">{{ task.date }}</span></div>
					<div>Location: <span class="text-black text-[11px]">{{ task.location }}</span></div>
					<div>Attendance: <span class="text-black text-[11px]">{{ task.attend }} </span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useTaskStore } from '../stores/employeeStore'

export default {
	props: {
		task: Object,
	},
	setup () {
		const TaskStore = useTaskStore()
		return { TaskStore }
	},
}
</script>
