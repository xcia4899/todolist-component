<template>
  <li>
    <label
      ><input type="checkbox" :checked="todoobj.completed" />
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
});

function del() {
  props.deleteTodo(props.todoobj.ID);
}
</script>

<style lang="scss" scoped>
li {
  display: flex;
  justify-content: space-between;
  padding: 8px 8px;
  list-style: none;
  //   background-color: #474747;
  button {
    opacity: 0;
    visibility: hidden;
  }
  input {
    color: #eee;
    @include objectSet(16px, px);
  }
  &:hover {
    background-color: #ddd;
    button {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
