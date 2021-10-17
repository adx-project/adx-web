<template>
  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
      <ol>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          {{ this.viewPath}}
        </li>
      </ol>
      <h2>{{ this.viewPath }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    viewPath: []
  }),

  props: ['path'],

  created() {
    this.$nuxt.$on('breadcrumb', data => {
      this.viewPath = data;
    })
  }
}
</script>
