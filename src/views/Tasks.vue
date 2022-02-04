<template>
    <div class="mt-24">

      <div class="flex flex-row justify-end">
        <button @click="toggleAddTaskForm()" class="ml-5 mr-5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{{ btnText }}</button>
      </div>


        <div v-show="showAddTask">
          <AddTask @add-task="addTask" />
        </div>
        

        <div :key="task.id" v-for="task in tasks">
            <Task @toggle-reminder="toggleTask" @delete-task="deleteTask" :task = "task" />
        </div>
    </div>
    
</template>

<script>

import Task from '../components/Task.vue'
import AddTask from '../components/AddTask.vue'

export default {
    name: 'Tasks',
    components: {
        Task,
        AddTask
    },
    data(){
        return {
        tasks:[],
        showAddTask: false,
        btnText: 'Show Add Task'
        }
    },

    methods:{
      toggleAddTaskForm(){
        this.showAddTask = !this.showAddTask;
        if(this.showAddTask){
          this.btnText = "Hide"
        }else{
          this.btnText = "Show Add Task"
        }
        console.log('toggle add task form ',this.showAddTask )
      },
      addTask(task){
        console.log('about to add a task>>', task)
        this.tasks = [...this.tasks , task]
      },
      deleteTask(id){
        console.log('task',id)
        if(confirm('Are you sure')){
          this.tasks = this.tasks.filter((task) => task.id !== id)
        }
      },
      toggleTask(id){
         console.log('task to toggle',id)
         this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task)
      }

    },

  created(){
    this.tasks = [
      {
        id:1,
        text: 'Doctors Appointment',
        day: 'March 1st at 2:30 Pm',
        reminder: true
      },
      {
        id:2,
        text: 'John Appointment',
        day: 'June 1st at 2:30 Pm',
        reminder: false
      },
      {
        id:3,
        text: 'Church Going',
        day: 'Feb 1st at 2:30 Pm',
        reminder: true
      },
      {
        id:4,
        text: 'John Appointment',
        day: 'June 1st at 2:30 Pm',
        reminder: false
      },
      {
        id:5,
        text: 'Church Going',
        day: 'Feb 1st at 2:30 Pm',
        reminder: true
      },
      {
        id:6,
        text: 'John Appointment',
        day: 'June 1st at 2:30 Pm',
        reminder: false
      },
      {
        id:7,
        text: 'Church Going',
        day: 'Feb 1st at 2:30 Pm',
        reminder: true
      }
    ]
  },
   emits:['delete-task', 'toggle-reminder']
}
</script>