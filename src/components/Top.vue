<template>
  <section class="top borderLine">
    <input
      type="text"
      placeholder="輸入代辦事項，enter新增或滑鼠新增"
      v-model="title"
      @keyup.enter="add"
    />
    <button class="blue" @click="add">新增</button>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const title = ref("");

const emit = defineEmits(['addTodo'])
const props = defineProps({
  // addTodo: {
  //   type: Function,
  //   required: true,
  // },
});

function add() {
  if (!title.value.trim())  return;
  const todeobj = {
    ID: Date.now(),
    title: title.value.trim(),
    completed: false,
  };
  // props.addTodo(todeobj);
  // emit事件
  emit('addTodo', todeobj)
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
    // flex: 0.9;
    width: 70%;
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

}
</style>
