.
<template>
  <section class="middle" v-show="todolist.length > 0">
    <ul>
      <transition-group name="listItem" appear>
        <listitem
          v-for="todoobj in todolist"
          :key="todoobj.ID"
          :todoobj="todoobj"
          @deleteTodo="emit('deleteTodo', $event)"
          @checkTodo="emit('checkTodo', $event)"
          @editTodo="emit('editTodo', $event)"
        />
      </transition-group>
    </ul>
  </section>
</template>

<script setup>
import { ref } from "vue";
import listitem from "./listitem.vue";

const emit = defineEmits(["deleteTodo", "checkTodo", "editTodo"]);
const props = defineProps({
  todolist: {
    type: Array, // 大寫 A
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.middle {
  @include borderSet(2px, solid, #aaa, 4px);
  padding: 0 0px;
  transition: all .4s ease ;
  overflow: hidden;
 
  ul {
    margin: 0;
    padding: 0;
  
  }
}

.listItem-enter-active,
.listItem-leave-active {
  transition: all 0.6s ease-out;
}
.listItem-enter-from,
.listItem-leave-to {
  opacity: 0;
  background-color: auto;
  transform: translateX(90%);
}
.listItem-enter-to,
.listItem-leave-from {
  opacity: 1;
  
  background-color: #ffffff;
  transform: translateX(0);
}
</style>
