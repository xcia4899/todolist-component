<template>
  <section class="top borderLine">
    <input type="text" placeholder="輸入代辦事項，enter新增或滑鼠新增" />
    <button>新增</button>
  </section>
</template>

<script setup>
import { ref } from "vue";

defineProps({});
</script>

<style lang="scss" scoped>
.top {
  padding: 8px;
  display: flex;
  justify-content: space-between;
  @include borderSet(1px, solid, #aaa, 4px);

  input {
    width: 80%;
    height: 32px;
    border-radius: 4px;
    border: none;
    padding: 0 8px;
    background-color: #eee;
  }
}
</style>
