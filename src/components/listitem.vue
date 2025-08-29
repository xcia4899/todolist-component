<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todoobj.completed"
        @change="handleCheck(todoobj.ID)"
      />

      <span>
        {{ todoobj.title }}
      </span>
   
    </label>
    <button class="delital" @click="del">刪除</button>
  </li>
</template>

<script setup>
const props = defineProps({
  todoobj: {
    type: Object,
    required: true,
  },
  deleteTodo: {
    type: Function,
    required: true,
  },
  checkTodo: {
    type: Function,
    required: true,
  },
 
});

function del() {
  props.deleteTodo(props.todoobj.ID);
}
function handleCheck(ID) {
  //通知父層元件改變對應對象的completed狀態
  props.checkTodo(ID);
  // console.log("check", ID);
}
</script>

<style lang="scss" scoped>
li {
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  list-style: none;
  //   background-color: #474747;

  button {
    opacity: 0;
    visibility: hidden;
  }
  input {
    color: #eee;
    @include objectSet(16px, 16px);
  }

  &:hover {
    background-color: #fff;
    button {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
