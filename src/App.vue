<template>
  <div class="list-space stack borderLine">
    <h2>事件清單</h2>
    <Top :addTodo="addTodo" />
    <Middle :todolist="todolist" :deleteTodo="deleteTodo" :checkTodo="checkTodo"/>
    <Bottom :todolist="todolist" :checkAll="checkAll" :clearAllCompleted="clearAllCompleted"/>
  </div>
</template>

<script setup>
import Top from "@/components/Top.vue";
import Middle from "@/components/Middle.vue";
import Bottom from "@/components/Bottom.vue";

import { ref, computed } from "vue";
const todolist = ref([
  { ID: "1", title: "打球", completed: true },
  { ID: "2", title: "健身", completed: false },
  { ID: "3", title: "跑步", completed: true },
  { ID: "4", title: "游泳", completed: false },
]);

function checkTodo(ID) {
  todolist.value.forEach((item) => {
    if (item.ID === ID) {
      item.completed = !item.completed;
    }
  });
}

function addTodo(todeobj) {
  todolist.value.unshift(todeobj);
  //   console.log('執行方法',todolist);
}

function deleteTodo(ID) {
   if (!window.confirm('確定要刪除嗎？')) return
  todolist.value = todolist.value.filter((item) => item.ID !== ID);
  // console.log("todolist內容", todolist);
}
//全選or取消全選
function checkAll(done){
  todolist.value.forEach(item=>{
    item.completed=done
  })
}
//清除已完成事項
function clearAllCompleted(){
  if (!window.confirm('確定要清除已完成事項嗎？')) return
  todolist.value = todolist.value.filter((todo) => todo.completed ===false);
}
</script>

<style lang="scss" scoped>
.list-space {
  //   height: 600px;
  padding: 16px;
  min-width: 450px;
  max-width: 600px;
  background-color: #eee;
  @include borderSet(2px, solid, #333, 8px);
}
.stack {
  display: grid;
  gap: 16px;
  margin: 100px auto;
}
h2 {
  text-align: center;
  margin: 0;
  padding: 8px 0;
  font-size: 28px;
}
</style>
