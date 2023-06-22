<script setup lang="ts">
import Tr from "./Tr.vue";

const days = new Array(31); // da prendere dinamicamente;
</script>
<template>
  <div className="overflow-x-auto">
    <table className="table table-xs table-pin-rows table-pin-cols ">
      <thead>
        <tr>
          <th>Normativo</th>
          <th v-for="(day, i) in days">{{ i }}</th>
        </tr>
      </thead>
      <tbody>
        <Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
