<template>
  <input
    :value="value"
    :placeholder="placeholder"
    @input="e => $emit('input', e.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Placeholder'
    }
  }
}
</script>

<style lang="postcss" scoped></style>
