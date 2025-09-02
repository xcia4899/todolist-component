// src/stores/todo.js
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  // const todolist = ref([
  //   { ID: '1', title: '打球(預設)', completed: false },
  //   { ID: '2', title: '健身(預設)', completed: false },
  // ])

  // // 持久化
  // watch(todolist, v => localStorage.setItem('todolist', JSON.stringify(v)), { deep: true })

  // // 載入
  // try {
  //   const saved = localStorage.getItem('todolist')
  //   if (saved) todolist.value = JSON.parse(saved)
  // } catch {
  //   console.error("todolist 讀取失敗", e)
  //   todolist.value = list
  // }

  // actions
  function checkTodo(ID) {
    const t = todolist.value.find(i => i.ID === ID)
    if (t) t.completed = !t.completed
  }

  function addTodo(todoobj) {
    todolist.value.unshift(todoobj)
  }

  function deleteTodo(ID) {
    if (!window.confirm('確定要刪除嗎？')) return
    todolist.value = todolist.value.filter(i => i.ID !== ID)
  }

  function checkAll(done) {
    todolist.value.forEach(i => { i.completed = done })
  }

  function clearAllCompleted() {
    if (!window.confirm('確定要清除已完成事項嗎？')) return
    todolist.value = todolist.value.filter(i => !i.completed)
  }

  return {  addTodo, checkTodo, deleteTodo, checkAll, clearAllCompleted }
})
