<template>
  <div>
    <button @click.prevent="test" class="btn btn-danger">Test</button>
    <Hoho @clickedHoho="fromTheChild"></Hoho>
  </div>
</template>

<script>
import Hoho from './Hoho'
export default {
  methods: {
    test () {
      this.$emit('clicked', 'Hello World from Hello')
    },
    fromTheChild (value) {
      this.$emit('clickedHoho', value)
    }
  },
  components: {
    Hoho
  }
}
</script>

<style>
</style>
