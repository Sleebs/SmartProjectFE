<script setup lang="ts">
import Calendar from "../components/Calendar.vue";
import TableRow from "../components/TableRow.vue";
</script>

<template>
  <div className="flex justify-around pt-20  ">
    <Calendar className="w-2/8 items-center h-full" />
    <div className="flex gap-20 w-6/8 flex-col items-center	h-full bg-gray-200 p-10 rounded-3xl">
      <TableRow />
      <TableRow />
      <TableRow />
    </div>
  </div>
</template>

<style>
.table-head {
  position: relative;
  left: -13%;
}
</style>
<!-- ricordo il posto che ho gia' scelto e lo tengo preselezionato -->
