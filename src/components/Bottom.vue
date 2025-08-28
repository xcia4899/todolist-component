<template>
  <section class="bottom borderLine">
    <div><input type="checkbox" />2/3已完成事項</div>
    <button>清除已完成事項</button>
  </section>
</template>

<script setup>
import { ref } from "vue";

defineProps({});
</script>

<style lang="scss" scoped>
.bottom {
  padding: 16px 8px;
  @include borderSet(1px, solid, #aaa, 4px);
  display: flex;
  justify-content: space-between;
}
button{
    background-color: rgb(255, 87, 57);
    color: #eee;
}
</style>
