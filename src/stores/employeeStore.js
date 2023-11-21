import { defineStore } from "pinia"

export const useTaskStore = defineStore( 'taskStore', {
   state: () => ( {
      Tasks: [], 
   } ),
   getters: {
      totalCount: ( state ) => {
         return state.Tasks.length
      },
   },
   actions: {
      addTask ( task ) {
         this.Tasks.push( task )
         console.log( this.Tasks )
      },
      deleteTask ( id ) {
         this.Tasks = this.Tasks.filter( t => t.id !== id )
      },
   },
} )
