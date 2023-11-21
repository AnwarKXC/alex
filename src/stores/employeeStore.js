import { defineStore } from "pinia"

export const useTaskStore = defineStore( 'taskStore', {
   state: () => ( {
      Tasks: [], // Use camelCase for variable names
   } ),
   getters: {
      // Use camelCase for function names
      byDepartment () {
         return ( department ) => this.Tasks.filter( task => task.department === department )
      },
      byPosition () {
         return ( position ) => this.Tasks.filter( task => task.position === position )
      },
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
