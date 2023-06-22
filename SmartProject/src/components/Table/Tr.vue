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
  <tr className="">
    <th></th>
    <td>
      <label>
        <input type="checkbox" className="checkbox" />
      </label>
    </td>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img :src="avatar" alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </div>
    </td>

    <td>{{ name }}</td>
    <td>{{ surname }}</td>
    <td>{{ location }}</td>
    <td>Data</td>
    <td>Ora</td>
    <th></th>
  </tr>
</template>

<style></style>
