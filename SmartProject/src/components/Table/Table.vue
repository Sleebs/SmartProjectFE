<script setup lang="ts">
import Tr from "./Tr.vue";
</script>

<template>
  <table class="table table-xs table-pin-rows table-zebra table-pin-cols">
    <thead>
      <tr>
        <th></th>
        <td>Check</td>
        <td>Name</td>
        <td>Job</td>
        <td>company</td>
        <td>location</td>
        <td>Last Login</td>
        <td>Favorite Color</td>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <Tr
        avatar="https://images.pexels.com/photos/6608313/pexels-photo-6608313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Tr /><Tr />
    </tbody>
  </table>
</template>

<style></style>
