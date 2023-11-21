<template>
   <div class=" p-3 w-[350px] h-[175px] border border-zinc-200 overflow-hidden ">
      <div className="flex justify-center items-center gap-4">
         <div className="flex justify-center w-20  border-r-zinc-200 border-r-[1.5px]">
            <p class=" text-7xl">👤</p>
         </div>
         <div className=" flex-grow">
            <h3 className=" text-zinc-900 leading-5 capitalize">{{ task.name }}</h3>
            <h4 className="text-zinc-800 text-sm">{{ task.position }}</h4>
            <h5 className=" text-xs text-zinc-800 leading-3">{{ task.department }}</h5>
            <div className="text-[10px] text-zinc-600 leading-4 mt-1 ">
               <div>Attendance : <span class="text-black text-[11px]">{{ task.attend }} </span></div>
               <div>Phone : <span class="text-black text-[11px]">{{ task.phone }}</span></div>
               <div>Email : <span class="text-black text-[11px]">{{ task.email }}</span></div>
               <div>location : <span class="text-black text-[11px]">{{ task.location }}</span></div>
               <div>Start from : <span class="text-black text-[11px]">{{ task.date }}</span></div>
            </div>
         </div>
      </div>
   </div>
</template>

<script >
import { useTaskStore } from '../stores/employeeStore'

export default {
   props: {
      task: Object,
   },
   setup () {
      const TaskStore = useTaskStore()
      return { TaskStore }
   }
}
</script>