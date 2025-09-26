<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todoobj.completed"
        @change="handleCheck(todoobj.ID)"
      />
      <span v-show="!todoobj.isEdit">
        {{ todoobj.title }}
      </span>
      <input
        class="edit"
        type="text"
        v-show="todoobj.isEdit"
        v-model="updateOgj"
        @keyup.enter="saveEdit"
        @keyup.esc="cancelEdit"
      />
    </label>
    <div class="btns">
      <button class="blue" @click="edit" v-show="!todoobj.isEdit">修改</button>
      <button @click="del" v-show="!todoobj.isEdit">刪除</button>
      <button class="green" @click="saveEdit" v-show="todoobj.isEdit">
        儲存
      </button>
      <button @click="cancelEdit" v-show="todoobj.isEdit">取消</button>
    </div>
  </li>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["deleteTodo", "checkTodo", "editTodo"]);
const props = defineProps({
  todoobj: {
    type: Object,
    required: true,
  },
});
const updateOgj = ref(props.todoobj.title);
props.todoobj.isEdit = false;

console.log("old", updateOgj.value);

function del() {
  // props.deleteTodo(props.todoobj.ID);
  emit("deleteTodo", props.todoobj.ID);
}
function edit() {
  updateOgj.value = props.todoobj.title; //點修改時，更新輸入框的值為目前標題
  console.log("編輯中", updateOgj.value);
  props.todoobj.isEdit = true;
}
function saveEdit() {
  emit("editTodo", { ID: props.todoobj.ID, title: updateOgj.value });
  console.log("修改後", updateOgj.value);
  props.todoobj.isEdit = false;
}
function cancelEdit() {
  // updateOgj.value = props.todoobj.title;
  // emit("editTodo", { ID: props.todoobj.ID, title: updateOgj.value });
  console.log("取消編輯", updateOgj.value);
  props.todoobj.isEdit = false;
}

function handleCheck(ID) {
  //通知父層元件改變對應對象的completed狀態
  // props.checkTodo(ID);
  // console.log("check", ID);
  emit("checkTodo", ID);
}
</script>

<style lang="scss" scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  list-style: none;
  transition: all 0.2s linear;

  @media (max-width: 400px) {
    //  padding: 8px 16px;
    align-items: flex-start;
  }
  label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 12px;
    word-break: break-all;
  }
  .btns {
    display: flex;
    gap: 8px;
    @media (max-width: 400px) {
      flex-direction: column;
      gap: 4px;
    }
  }
  /* 觸控預設：顯示 */
  button {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.2s, visibility 0.2s;
  }
  input {
    color: #eee;
    @include objectSet(16px, 16px);
  }
  .edit {
    flex: 0.8;
    width: 100%;
    height: 32px;
    background-color: #eee;
    color: #333;
    // border: 1px solid #bbb;
    @include borderSet(1px, solid, #bbb, 4px);
    padding: 4px 8px;
  }
}
/* 桌機限定：預設隱藏，滑過父項時顯示 */
@media (hover: hover) and (any-pointer: fine) {
  li {
    button {
      opacity: 0;
      visibility: hidden;
    }
    &:hover {
      background-color: #fff;
      button {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>
