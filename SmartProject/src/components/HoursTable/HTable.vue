<script setup lang="ts">
import Tr from "./Tr.vue";

const days = new Array(30); // da prendere dinamicamente;
</script>
<template>
  <div className="overflow-x-auto">
    <table className="table table-xs table-pin-rows table-pin-cols ">
      <thead>
        <tr>
          <th>Normativo</th>
          <th>Nome</th>
          <th v-for="(day, i) in days">{{ i + 1 }}</th>
        </tr>
      </thead>
      <tbody>
        <Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
