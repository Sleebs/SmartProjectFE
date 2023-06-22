<script setup lang="ts">
import ReportCalendar from "../components/ReportCalendar.vue";
import Table from "../components/Table/Table.vue";
</script>

<template>
  <div className="flex">
    <div>
      <ReportCalendar />
      <ReportCalendar />
    </div>
    <Table />
  </div>
</template>

<style scoped>
.weekend {
  background-color: #ddd;
}
</style>
