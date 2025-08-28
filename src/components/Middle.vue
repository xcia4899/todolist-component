.
<template>
  <section class="middle">
    <ul>
      <listitem
        v-for="todoobj in todolist"
        :key="todoobj.id"
        :todoobj="todoobj"
        :deleteTodo="deleteTodo"
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
});
</script>

<style lang="scss" scoped>
.middle {
  padding: 8px;
  @include borderSet(1px, solid, #aaa, 4px);

  ul {
    padding: 0;
    @include borderSet(1px, solid, #a8a8a8, 4px);
    overflow: hidden;
  }
}
</style>
