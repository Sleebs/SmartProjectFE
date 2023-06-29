<script setup lang="ts">
const { name, surname } = defineProps<{
  name?: string;
  surname?: string;
}>();
</script>

<template>
  <tr>
    <th>20</th>
    <td>
      <p>{{ name }}</p>
      <p>{{ surname }}</p>
    </td>
    <td className="odd:bg-base-200">x</td>
    <td className="odd:bg-base-200">x</td>
    <td className="odd:bg-base-200">x</td>
    <td className="odd:bg-base-200">x</td>
    <td className="odd:bg-base-200">x</td>
  </tr>
</template>

<style scoped>
tr:nth-child(odd) {
}
</style>
