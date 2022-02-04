<template>
  <Header @toggle-add-task="$emit('toggle-add-task')" title="wewew" />
  <router-view/>
</template>

<script>
import Header from '@/components/Header'


export default {

  components: {
    Header
  },
  emits: ['toggle-add-task']

}
</script>


