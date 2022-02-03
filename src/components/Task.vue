<template>
<div id="task" :class=" [task.reminder ? 'shadow-md rounded-lg m-4 p-1 border border-l-8 flex justify-between items-center' : 'shadow-md rounded-lg m-4 p-1 flex justify-between items-center']">
           <div class="flex flex-row mt-4 mb-2">
             <div class="ml-5">
               <p class="font-semibold">{{task.text}}</p>
               <p class="text-xs">Day</p>
               <p class="text-xs font-roboto">Is Reminder</p>
             </div>
           </div>

           <div class="mr-4">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
           </div>
</div>
</template>

<script>
export default {

    name: 'Tasks',
    props: {
        task: Object
    }
}
</script>