<script setup lang="ts">
import Tr from "./Tr.vue";
import { defineProps } from "vue";

interface User {
  id: number;
  firstName: string;
  username: string;
  lastName: string;
  phoneNumber: string;
  roles: Role;
  site: string;
}
interface Role {
  id: number;
  name: ERole;
}
enum ERole {
  "Milano",
  "Torino",
}

const { data } = defineProps<{ data: User[] }>();

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
        <Tr v-for="u in data" name="u.name" surname="u.surname" />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
