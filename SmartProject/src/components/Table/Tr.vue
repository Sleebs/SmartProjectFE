<script setup lang="ts">
const { avatar } = defineProps<{ avatar?: string }>();
const img =
  "https://images.pexels.com/photos/6608313/pexels-photo-6608313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
</script>

<template>
  <tr>
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
        <div>
          <div className="font-bold">Hart Hagerty</div>
          <div className="text-sm opacity-50">United States</div>
        </div>
      </div>
    </td>

    <td>Cy Ganderton</td>
    <td>Quality Control Specialist</td>
    <td>Littel, Schaden and Vandervort</td>
    <td>Canada</td>
    <td>12/16/2020</td>
    <td>Blue</td>
    <th>1</th>
  </tr>
</template>

<style></style>
