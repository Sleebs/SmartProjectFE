<script setup lang="ts">
import Signup from "./Signup.vue";
import Table from "../components/Table/Table.vue";
import HTable from "../components/HoursTable/HTable.vue";
import { onMounted } from "vue";

import { useUserStore } from "../stores/userStore";
import { storeToRefs } from "pinia";

const userStore = useUserStore();

const { users } = storeToRefs(userStore);

const test = [{ name: "pippo", surname: "pluto" }];

onMounted(() => {
  userStore.allUsers;
});
</script>

<template>
  <div className="flex w-full h-1/2">
    <Signup />
    <div className=" overflow-auto h-full w-3/4">
      <HTable data="test" />
    </div>
  </div>
  <div className="h-1/2 overflow-auto">
    <Table />
  </div>
</template>

<style scoped></style>
