<script setup lang="ts">
import Calendar from "../components/Calendar.vue";
import TableRow from "../components/TableRow.vue";
</script>

<template>
  <div className="flex justify-around mt-6">
    <Calendar className="w-1/4" />
    <div className="flex gap-20 w3/4 flex-col">
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
