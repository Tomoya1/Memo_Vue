<template>
  <div
    :style="{
      top: `${posY}px`,
      left: `${posX}px`
    }"
    class="memo">
    <drag-handler
      @dragStart="$emit('dragStart', $event)"
    />
    <remove @remove="$store.commit('remove', index)" />
    <text-box
      :text="text"
      @inputed="onInputed" />
  </div>
</template>

<script>
import DragHandler from '~/components/DragHandler.vue'
import TextBox from '~/components/TextBox.vue'
import Remove from '~/components/Remove.vue'

export default {
  components: {
    DragHandler,
    TextBox,
    Remove
  },
  props: {
    posX: {
      type: Number,
      required: true
    },
    posY: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    onInputed(text) {
      this.$store.commit('setText', {
        text: text,
        index: this.index
      })
      this.$emit('inputed', text)
    }
  }
}
</script>

<style scoped>
.memo {
  position: fixed;
  width: 200px;
  height: 300px;
  background: #ff0;
}
</style>
