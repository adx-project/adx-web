<template>
</template>
<script>
export default {
  data() {
    return {
      path: "Cookies"
    }
  },
  created() {
    this.$nuxt.$emit('breadcrumb', this.path);
  }
}
</script>
