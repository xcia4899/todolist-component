<template>
  <div class="list-space stack borderLine">
    <h2>事件清單</h2>
    <Top :addTodo="addTodo" />
    <Middle :todolist="todolist" :deleteTodo="deleteTodo" />
    <Bottom />
  </div>
</template>

<script setup>
import Top from "@/components/Top.vue";
import Middle from "@/components/Middle.vue";
import Bottom from "@/components/Bottom.vue";

import { ref } from "vue";
const todolist = ref([
  { ID: "1", title: "打球", completed: true },
  { ID: "2", title: "健身", completed: false },
  { ID: "3", title: "跑步", completed: true },
]);

function addTodo(todeobj) {
  todolist.value.unshift(todeobj);
  //   console.log('執行方法',todolist);
}

function deleteTodo(ID) {
  todolist.value = todolist.value.filter((item) => {
    const keep = item.ID !== ID;
    // console.log("檢查:", item.title, "是否保留?", keep);
    return keep;
  });

  console.log("todolist內容", todolist);
}
</script>

<style lang="scss" scoped>
.stack {
  display: grid;
  gap: 16px;
}
</style>
