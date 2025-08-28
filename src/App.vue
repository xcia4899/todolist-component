<template>
  <div class="list-space borderLine">
    <h2>事件清單</h2>
    <Top />
    <Middle />
    <Bottom />
  </div>
</template>

<script setup>
import Top from "@/components/Top.vue";
import Middle from "@/components/Middle.vue";
import Bottom from "@/components/Bottom.vue";
</script>

<style lang="scss">
// @use "../styles/_variables.scss" as *;
* {
  font-size: 20px;
  color: #222;
}

.borderLine {
  border: 1px solid #000;
}
button {
  padding: 2px 8px;
  background-color: #ffad41;
  @include borderSet(2px, none, #333, 4px);
}
.list-space {
  //   height: 600px;
  padding: 16px;
  width: 600px;
  background-color: #eee;
  @include borderSet(2px, solid, #333, 4px);
}
</style>
