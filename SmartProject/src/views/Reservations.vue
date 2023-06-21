<script setup lang="ts">
import Calendar from "../components/Calendar.vue";
import TableRow from "../components/TableRow.vue";
</script>

<template>
  <div className="flex justify-around mt-6">
    <Calendar className="w-2/8 items-center" />
    <div className="flex gap-20 w-6/8 flex-col items-center	">
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
