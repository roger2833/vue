<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    todo() {
      return this.$store.state.todos[this.index];
    },
    complete: {
      get() {
        return this.todo.complete;
      },
      set(val) {
        this.$store.commit("UPDATE_TODO", {
          index: this.index,
          data: {
            content: this.todo.content,
            complete: val,
          },
        });
      },
    },
  },
  methods: {
    destroyHandler() {
      if (confirm(`是否確認刪除 ${this.todo.content} ?`)) {
        this.$store.commit("DELETE_TODO", this.index);
      }
    },
  },
};
</script>
<template src = "./template.html"></template>

<style src="./style.css">
</style>