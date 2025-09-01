<template>
  <section class="bottom borderLine">
    <div>
      <label>
        <input type="checkbox" v-model="isAll" />
        <span>已完成{{ todocomplated }}項 / 共{{ total }}項</span>
      </label>
    </div>
    <button @click="clearAll">清除已完成事項</button>
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
function clearAll(){
  // props.clearAllCompleted()
  emit('clearAllCompleted')
}

const total = computed(() => props.todolist.length);

const todocomplated = computed(() =>
  props.todolist.reduce((count, todo) => count + (todo.completed ? 1 : 0), 0)
);
//get set 方式雙向綁定
const isAll = computed({
  get: () => todocomplated.value === total.value && total.value > 0,
  // set: (val) => props.checkAll(val)
  set: (val) => emit('checkAll', val)
})


</script>

<style lang="scss" scoped>
.bottom {
  padding: 16px 16px;

  @include borderSet(2px, solid, #aaa, 4px);
  display: flex;
  justify-content: space-between;
}
</style>
