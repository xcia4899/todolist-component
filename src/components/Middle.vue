.
<template>
  <section class="middle borderLine">
    <ul>
      <li>
        <label><input type="checkbox" />打球</label>
        <button class="delital">刪除</button>
      </li>
      <li>
        <label><input type="checkbox" />健身</label>
        <button class="delital">刪除</button>
      </li>
      <li>
        <label><input type="checkbox" />跑步</label>
        <button class="delital">刪除</button>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from "vue";

defineProps({});
</script>

<style lang="scss" scoped>
.middle {
  padding: 8px;
  @include borderSet(1px, solid, #aaa, 4px);

  ul {
    padding: 0;
    li {
      display: flex;
      justify-content: space-between;
      padding: 08px 0px;
      list-style: none;
      //   background-color: #474747;
      input {
        color: #eee;
        @include objectSet(16px, px);
      }
    }
  }
}
</style>
