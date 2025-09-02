<template>
  <section class="bottom borderLine">
    <label>
      <input type="checkbox" v-model="isAll" />
      <div><span>已完成{{ todocomplated }}項</span> <span>共{{ total }}項</span></div>
    </label>
    <button @click="clearAll">清除已完成</button>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  todolist: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(["checkAll", "clearAllCompleted"]);
function clearAll() {
  // props.clearAllCompleted()
  emit("clearAllCompleted");
}

const total = computed(() => props.todolist.length);

const todocomplated = computed(() =>
  props.todolist.reduce((count, todo) => count + (todo.completed ? 1 : 0), 0)
);
//get set 方式雙向綁定
const isAll = computed({
  get: () => todocomplated.value === total.value && total.value > 0,
  // set: (val) => props.checkAll(val)
  set: (val) => emit("checkAll", val),
});
</script>

<style lang="scss" scoped>
.bottom {
  padding: 16px 16px;
  @include borderSet(2px, solid, #aaa, 4px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  label{
    div{
      display: flex;
      gap: 12px;
      @media (max-width: 400px) {
        flex-direction: column;
        gap: 4px;
      }
    }
  }
  button{
    word-break: keep-all;
  }
}
</style>
