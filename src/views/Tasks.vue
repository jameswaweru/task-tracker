<template>
    <div class="mt-24">
        <div :key="task.id" v-for="task in tasks">
            <Task :task = "task" />
        </div>
    </div>
    
</template>

<script>

import Task from '../components/Task.vue'

export default {
    name: 'Tasks',
    components: {
        Task
    },
    data(){
        return {
        tasks:[]
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
      }
    ]
  }
}
</script>