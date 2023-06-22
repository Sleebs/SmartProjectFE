<script setup lang="ts">
const { avatar } = defineProps<{
  avatar?: string;
  name?: string;
  surname?: string;
  location?: string;
  date?: Date;
}>();
</script>

<template>
  <tr>
    <th>20</th>
    <td>
      <p>nome</p>
      <p>cognome</p>
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
