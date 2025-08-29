.
<template>
  <section  class="middle" v-show="todolist.length > 0">
    <ul >
      <listitem
        v-for="todoobj in todolist"
        :key="todoobj.id"
        :todoobj="todoobj"
        :deleteTodo="deleteTodo"
        :checkTodo="checkTodo"
       
      />
    </ul>
  </section>
</template>

<script setup>
import { ref } from "vue";
import listitem from "./listitem.vue";

const props = defineProps({
  todolist: {
    type: Array, // 大寫 A
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
</script>

<style lang="scss" scoped>
.middle {
  @include borderSet(2px, solid, #aaa, 4px);
  padding: 0 0px;
  overflow: hidden;
  ul {
    margin: 0;
    padding: 0;
  }
}
</style>
