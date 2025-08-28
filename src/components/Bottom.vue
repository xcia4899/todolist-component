<template>
  <section class="bottom borderLine">
    <div>
      <input type="checkbox" />
      <span>2/3已完成事項</span>
    </div>
    <button>清除已完成事項</button>
  </section>
</template>

<script setup>
import { ref } from "vue";

defineProps({});
</script>

<style lang="scss" scoped>
.bottom {
  padding: 16px 16px;

  @include borderSet(1px, solid, #aaa, 4px);
  display: flex;
  justify-content: space-between;
}

</style>
