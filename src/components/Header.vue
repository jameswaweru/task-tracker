<template>
    <header>
       
        <div class="relative overflow-x-hidden">
          <nav class="z-30 fixed right-0 left-0 ">
            <div class="relative">
              
              <div class="bg-blue-100 relative z-30">
                <div class="h-20 container relative flex flex-row justify-between items-center">
                  <!--Menu icon start -->
                  <div class="block lg:hidden ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </div> 
                  <!--Menu icon end -->
                  <div class="text-xl font-semibold">Task Reminder</div>

                  <!-- cart layout start in small screen -->
                  <div class="block lg:hidden mr-4">
                    <AddTaskButton @toggle-add-task="$emit('toggle-add-task')" />
                </div> 
                    <!-- cart layout end in small screen -->
                    
                    <!-- end div for large screens-->
                    <div class="hidden lg:flex relative flex flex-row w-2/5 justify-between">
                     <div class="nav-item relative cursor-pointer">
                       <div class="relative flex justify-center">
                         <span class="">Services</span>
                         </div> 
                         <div id="Services_dropdown" class="opacity-0 font-normal dropdown absolute pt-4" style="width: 30rem; transform: translate(0px, 25px);"><!----></div>
                         </div> 
                         <div class="nav-item relative cursor-pointer">
                           <div class="relative flex justify-center">
                             <span class="">Company</span>
                             </div> 
                             <div id="Company_dropdown" class="opacity-0 font-normal dropdown absolute pt-4" style="width: 10rem; transform: translate(0px, 25px);"><!---->
                             </div>
                             </div> <a href="/contact-us" class="">
                             <div class="nav-item">
                               <span>Contact Us</span></div></a> 
                               <div class="nav-item text-tibu-pink flex flex-row space-x-1 tibu-transition transform hover:-translate-y-0.5 hover:text-tibu-pink cursor-pointer">
                                 <div class="relative"><svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6">
                                 <path d="M14.25 11.3333H17.0833V7.08333H21.3333V4.25H17.0833V0H14.25V4.25H10V7.08333H14.25V11.3333Z" fill="#F40057"></path>
                                 <path d="M8.74083 19.0625L8.78333 18.8925L10.0583 16.5833H20.6125C21.675 16.5833 22.61 16.0025 23.0917 15.1242L28.56 5.19333L26.095 3.83333H26.0808L24.5225 6.66667L20.6125 13.75H10.6675L10.4833 13.3675L7.31 6.66667L5.96417 3.83333L4.6325 1H0V3.83333H2.83333L7.93333 14.5858L6.02083 18.0567C5.79417 18.4533 5.66667 18.9208 5.66667 19.4167C5.66667 20.975 6.94167 22.25 8.5 22.25H25.5V19.4167H9.095C8.91083 19.4167 8.74083 19.2608 8.74083 19.0625Z" fill="#F40057"></path>
                                 <path d="M5.68066 26.4998C5.68066 24.9415 6.9415 23.6665 8.49983 23.6665C10.0582 23.6665 11.3332 24.9415 11.3332 26.4998C11.3332 28.0582 10.0582 29.3332 8.49983 29.3332C6.9415 29.3332 5.68066 28.0582 5.68066 26.4998Z" fill="#F40057"></path>
                                 <path d="M17 26.4998C17 24.9415 18.2608 23.6665 19.8192 23.6665C21.3775 23.6665 22.6525 24.9415 22.6525 26.4998C22.6525 28.0582 21.3775 29.3332 19.8192 29.3332C18.2608 29.3332 17 28.0582 17 26.4998Z" fill="#F40057"></path></svg> 
                                 <div class="absolute -top-2 -left-2">
                                   <div class="opacity-0 animate-ping h-4 w-4 rounded-full bg-tibu-blue" style="opacity: 0; visibility: hidden;"></div>
                                   </div> 
                                   <div class="absolute -top-2 -left-2">
                                     <div class="opacity-0 h-4 w-4 rounded-full bg-tibu-blue flex items-center justify-center text-white" style="opacity: 0; visibility: hidden;">
                                       <span style="font-size: 7px;">0</span>
                                       </div>
                                       </div>
                                       </div>
              Cart
            </div>
            </div>
             <!-- end div for large screens-->

            </div>

            </div> 
            </div>
          </nav>
        </div>
      
    </header>
</template>

<script>

import AddTaskButton from '@/components/AddTaskButton'

    export default {
        props : ['title'],
        components : {
            AddTaskButton
        },
        emits: ['toggle-add-task']

    }
</script>