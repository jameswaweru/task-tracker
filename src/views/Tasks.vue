<template>
    <div class="mt-24">

      <div class="flex flex-row justify-end">
        <button @click="toggleAddTaskForm()" class="ml-5 mr-5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{{ btnText }}</button>
      </div>


        <div v-show="showAddTask">
          <AddTask @add-task="addTask" />
        </div>
        

        <div v-if="tasks.length">
          <div :key="task.id" v-for="task in tasks">
            <Task @toggle-reminder="toggleTask" @delete-task="deleteTask" :task = "task" />
          </div>
        </div>
        <div v-else>
          <p class="text-xs">Loading pasks</p>
        </div>
        
    </div>
    
</template>

<script>

import Task from '../components/Task.vue'
import AddTask from '../components/AddTask.vue'
//import axios from 'axios'
import TasksService from '../services/TasksService'

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

    mounted(){

    },

    methods:{
      async fetchTasks() {
        const res = await fetch('http://localhost:8084/api/v2/test/getTasks')
        const data = await res.json()
        console.log('tasks:',data.data)
        return data;
      },
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

        const token = "";

        const headers = {
            headers: { Authorization: `Bearer ${token}` }
        };

        console.log('about to add a task>>', task)
        
        TasksService.postTask(task, headers)
        .then(response => {
          this.tasks = response.data.data,
          console.log('<<<<<<<<>>>>>>>'+response.data.data)
        })
        .catch(error => {
          console.log('There was an error:' + error)
          console.log(error.response.data);  
          console.log(error.response.status);  
          console.log(error.response.headers);  
          // if ('statusDescription' in error.response) {
          //   console.log("errror has description:"+error.response.statusDescription)
          // }
          if(error.response.data.hasOwnProperty('statusDescription')){
            console.warn(error.response.data.statusDescription)
          }
        }) .finally(() => {
          console.log('Loading finished')
        })

        // this.tasks = [...this.tasks , task]
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

  // async created(){
  //   // this.tasks =  
   
  //   this.tasks = await this.fetchTasks()
  //   console.log('>>>>>>>>>', this.tasks)
  // },
   created(){

      const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNTQ3MjY3NjU5NzciLCJleHAiOjE2NDQzNTkzNTAsImlhdCI6MTY0NDMyMzM1MH0.jxAY9Bg_BjiwBNscHdL-pEBOlqGQk7F_7vr_pFHUGYI";

        const headers = {
            headers: { Authorization: `Bearer ${token}` }
        };


    //  axios.get('http://localhost:8084/api/v2/test/getTasks')
    TasksService.getTasks(headers)
     .then(response => {
       this.tasks = response.data.data,
       console.log('<<<<<<<<>>>>>>>'+response.data.data)
     })
     .catch(error => {
       console.log('There was an error:' + error.response)
     })

   },
   emits:['delete-task', 'toggle-reminder'],
   
}
</script>

// [
//        {
//         id:1,
//         text: 'Doctors Appointment',
//         day: 'March 1st at 2:30 Pm',
//         reminder: true
//       },
//       {
//         id:2,
//         text: 'John Appointment',
//         day: 'June 1st at 2:30 Pm',
//         reminder: false
//       },
//       {
//         id:3,
//         text: 'Church Going',
//         day: 'Feb 1st at 2:30 Pm',
//         reminder: true
//       },
//       {
//         id:4,
//         text: 'John Appointment',
//         day: 'June 1st at 2:30 Pm',
//         reminder: false
//       },
//       {
//         id:5,
//         text: 'Church Going',
//         day: 'Feb 1st at 2:30 Pm',
//         reminder: true
//       },
//       {
//         id:6,
//         text: 'John Appointment',
//         day: 'June 1st at 2:30 Pm',
//         reminder: false
//       },
//       {
//         id:7,
//         text: 'Church Going',
//         day: 'Feb 1st at 2:30 Pm',
//         reminder: true
//       }
//     ];