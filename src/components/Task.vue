<template>

    <div v-if="task">
        <div id="task" @click="onToggle(task.id)" :class=" [task.reminder ? 'task-reminder-true' : 'task-reminder-false']">
            <div class="flex flex-row mt-4 mb-2">
                <div class="ml-5">
                <p class="font-semibold">{{task.text}}</p>
                <p class="text-xs">Day</p>
                <p class="text-xs font-roboto">Is Reminder</p>
                </div>
            </div>

            <div @click="onDelete(task.id)" class="mr-4 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Loading Taskkkkkkkkkkk</p>
    </div>
</template>

<script>
export default {

    name: 'Tasks',
    props: {
        task: Object
    },
    methods: {
        onDelete(id){
            console.log("id:"+id)
            this.$emit('delete-task', id)
        },
        onToggle(id){
            console.log('toggle task ', id)
            this.$emit('toggle-reminder', id)
        }
    }
}
</script>