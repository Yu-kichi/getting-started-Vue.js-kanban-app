<template>
<button
  :class = "classes"
  :disabled = "disabled"
  type = "button"
  @click = "handleClick"
>
<slot />
</button>
</template>

<script>
export default{
  name: 'KbnButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false // disabledはボタンを押せなくする効果。
    }
  },
  // クラスに合わせて動的に生成
  computed: {
    classes () {
      const cls = this.type === 'text' ? ('-' + this.type) : ''
      return [`kbn-button${cls}`]
    }
  },
  methods: {
    handleClick (ev) {
      this.$emit('click', ev)
    }
  }
}
</script>

<style scoped>
.kbn-button{
  padding: .6em 1.3em;
}
.kbn-button-text{
  border:none;
  padding-right:0;
  padding-left:0;
}
</style>
