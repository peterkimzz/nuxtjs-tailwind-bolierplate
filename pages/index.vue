<template>
  <div id="page">
    <h1 class="text-primary">nuxt tailwindcss</h1>

    <div class="flex">
      <vue-button @click="FetchImage">Get started</vue-button>
      <vue-button @click="FetchImage">Read more</vue-button>
    </div>

    <div>
      <div>{{ input }}</div>
      <vue-input v-model="input" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  methods: {
    async FetchImage() {
      try {
        const result = await this.$axios.get(
          `https://unavatar.now.sh/github/peterkimzz`
        )
        this.src = data
      } catch (err) {}
    }
  }
}
</script>

<style lang="postcss" scoped>
#page {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23af83d4' fill-opacity='0.15'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
