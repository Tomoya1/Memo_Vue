<template>
  <div
    class="remove-button"
    @click="$emit('remove')"
  >
  x
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.remove-button {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 20px;
  cursor: pointer;
}
</style>
