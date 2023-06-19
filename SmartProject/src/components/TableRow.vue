<script setup lang="ts">
import Desk from "./Desk.vue";
</script>

<template>
  <div className="flex">
    <div className="flex flex-col gap-5">
      <div className="flex gap-3 z-10">
        <Desk />
        <Desk />
      </div>
      <div className="flex rotate-180 gap-3" z-10>
        <Desk />
        <Desk />
      </div>
    </div>
    <div className="table-head rotate-90">
      <Desk />
    </div>
  </div>
</template>

<style scoped></style>
