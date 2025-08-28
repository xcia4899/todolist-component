<template>
  <section class="top borderLine">
    <input
      type="text"
      placeholder="輸入代辦事項，enter新增或滑鼠新增"
      v-model="title"
      @keyup.enter="add"
    />
    <button @click="add">新增</button>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const title = ref("");


const props = defineProps({
  addTodo: {
    type: Function,
    required: true,
  },
});



function add() {
  const todeobj = {
    ID: Date.now(),
    title: title.value.trim(),
    completed: false,
  };
  props.addTodo(todeobj);
  title.value = "";
}
</script>

<style lang="scss" scoped>
.top {
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  @include borderSet(1px, solid, #aaa, 4px);

  input {
    width: 80%;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0 8px;
    background-color: #eee;
    &:focus {
      border-color: #359df1;
      outline: none;
      background-color: #fff;
    }
  }
  button {
    background-color: #359df1;
    &:hover {
      background-color: darken(#359df1, 10%);
      cursor: pointer;
    }
  }
}
</style>
