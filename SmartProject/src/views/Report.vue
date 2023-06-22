<script setup lang="ts">
import ReportCalendar from "../components/ReportCalendar.vue";
import Table from "../components/Table/Table.vue";
import HTable from "../components/HoursTable/HTable.vue";
</script>

<template>
  <div className="flex">
    <div className="w-1/2 flex flex-col items-center">
      <!-- <div className=" inline-block"> -->
      <ReportCalendar />
      <ReportCalendar />
      <!-- </div> -->
    </div>
    <div className="w-1/2 ">
      <HTable className="h-1/2 w-full" />

      <Table className="h-1/2" />
    </div>
  </div>
</template>

<style scoped></style>
