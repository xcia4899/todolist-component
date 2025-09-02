<template>
  <div class="list-space stack borderLine">
    <h2>事件清單</h2>
    <Top  
      @addTodo="addTodo"
    />
    <Middle
      :todolist="todolist"
      @deleteTodo="deleteTodo"
      @checkTodo="checkTodo" 
      @editTodo="editTodo"
    />
    <Bottom
      :todolist="todolist"
      @checkAll="checkAll"
      @clearAllCompleted="clearAllCompleted"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import Top from "@/components/Top.vue";
import Middle from "@/components/Middle.vue";
import Bottom from "@/components/Bottom.vue";

// import { storeToRefs } from 'pinia'
// import { useTodoStore } from '@/stores/todo'
// const todo = useTodoStore()
// const { todos: todolist } = storeToRefs(todo)  // Pinia 的 todos 取代原本的 todolist

const todolist = ref([]);

const list = [
  { ID: "1", title: "打球(預設)", completed: false },
  { ID: "2", title: "健身(預設)", completed: false },
];

onMounted(() => {
  try {
    const savedTodos = localStorage.getItem("todolist")
    todolist.value = savedTodos ? JSON.parse(savedTodos) : list
  } catch (e) {
    console.error("todolist 讀取失敗", e)
    todolist.value = list
  }
});

watch(
  todolist,
  (newVal, oldVal) => {
    // console.log("todolist 改變:", newVal);
    localStorage.setItem("todolist", JSON.stringify(newVal));
  },
  { deep: true }
);


//新增
function addTodo(todeobj) {
  todolist.value.unshift(todeobj);
  //   console.log('執行方法',todolist);
}
function checkTodo(ID) {
  const t = todolist.value.find(item => item.ID === ID)
  if (t) t.completed = !t.completed
}
//刪除
function deleteTodo(ID) {
  if (!window.confirm("確定要刪除嗎？")) return;
  todolist.value = todolist.value.filter((item) => item.ID !== ID);
  // console.log("todolist內容", todolist);
}
//修改
function editTodo(updateOgj) {
  const t = todolist.value.find(item => item.ID === updateOgj.ID)
  if (t) {
    t.title = updateOgj.title
  }
}
//全選or取消全選
function checkAll(done) {
  todolist.value.forEach((item) => {
    item.completed = done;
  });
}
//清除已完成事項
function clearAllCompleted() {
  if (!window.confirm("確定要清除已完成事項嗎？")) return;
  todolist.value = todolist.value.filter((todo) => todo.completed === false);
}
</script>

<style lang="scss" scoped>
.list-space {
  //   height: 600px;
  padding: 16px;
  min-width: 300px;
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
