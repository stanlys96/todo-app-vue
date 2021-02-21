<template>
  <div>
    <button @click.prevent="testing" class="btn btn-danger">Hoho</button>
  </div>
</template>

<script>
export default {
  methods: {
    testing () {
      this.$emit('clickedHoho', 'From grand child HOHOHO')
    }
  }
}
</script>

<style>
</style>
