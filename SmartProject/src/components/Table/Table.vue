<script setup lang="ts">
import Tr from "./Tr.vue";
</script>

<template>
  <table
    class="table table-xs table-pin-rows table-pin-cols table-zebra mah-h-full"
  >
    <thead>
      <tr>
        <th></th>
        <td></td>
        <td></td>
        <td>Name</td>
        <td>Cognome</td>
        <td>Luogo</td>
        <td>Data</td>
        <td>Ora</td>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <Tr
        avatar="https://images.pexels.com/photos/6608313/pexels-photo-6608313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="samuele"
        surname="Raposo"
      />
      <!-- PAGINAZIONE - NUMERO DIPENDENTI A SECONDA DELLA STANZA -->
      <Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr /><Tr />
    </tbody>
  </table>
</template>

<style></style>
