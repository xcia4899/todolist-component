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
  if (!title.value.trim())  return;
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
//sass 顏色API
@use "sass:color";

.top {
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  @include borderSet(2px, solid, #aaa, 4px);

  input {
    flex: 0.9;
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
      background: color.scale(#359df1, $lightness: -20%);
      cursor: pointer;
    }
  }
}
</style>
