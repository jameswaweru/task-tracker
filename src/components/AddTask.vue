<template>
<div class=" bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
  <!-- <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Task Reminder</h2>
  </div> -->

  <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
      <form class="mb-0 space-y-6" @submit="onSubmit">
        <div>
          <label for="task" class="block text-sm font-medium text-gray-700">Task Name</label>
          <div class="mt-1">
            <input id="task" name="task" v-model="text"  type="text"  class="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-red-400 " />
          </div>
        </div>

        <div>
          <label for="time" class="block text-sm font-medium text-gray-700">Day And Time</label>
          <div class="mt-1">
            <input id="time" name="time" v-model="day"  type="text"  class="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-red-400" />
          </div>
        </div>

        <div class="flex items-center">
          <input id="terms-and-privacy" name="terms-and-privacy" v-model="reminder" type="checkbox" class="rounded border-green-500 text-green-800 focus:ring-1 focus:ring-black" />
          <label for="terms-and-privacy" class="ml-2 block text-sm text-gray-900"
            >Set Reminder</label>
        </div>

        <div>
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add</button>
        </div>
      </form>
    </div>
  </div>
</div>    
</template>

<script>

export default {
    data(){
        return{
            text: '',
            day : '',
            reminder: false
        }
    },
    setup() {
       
    },
    methods:{
        onSubmit(e){
            e.preventDefault()
            if(!this.day){
                alert('Please add a task')
                return
            }
            const newTask = {
                id: Math.floor(Math.random() * 100000),
                text: this.text,
                day: this.day,
                reminder: this.reminder
            }

            console.log(newTask)
            this.$emit('add-task', newTask)

            this.text = ''
            this.day = ''
            this.reminder = false
        }
    }
}
</script>