<script setup lang="ts">
import ModalModify from "../components/ModalModify.vue";
import ModalAdd from "../components/ModalAdd.vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/userStore"

const userStore = useUserStore()
const { users } = storeToRefs(userStore)

userStore.allUsers()

let titolo = ["Nome", "Cognome", "Email", "Responsabile"];
</script>

<template>
  <div>
    <table className="table">
      <thead class="text-primary">
        <tr>
          <th>
            <button onclick="my_modal_3.showModal()">
              <font-awesome-icon :icon="['fas', 'circle-plus']" style="font-size: large" />
            </button>
          </th>
          <th>Nome</th>
          <th>Cognome</th>
          <th>Email</th>
          <th>Responsabile</th>
          <th>Sede</th>
          <th>Tipo utente</th>
          <th>Postazione</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="u in users">
          <td class="text-primary">
            <div class="dropdown">
              <label tabindex="0"><font-awesome-icon :icon="['fas', 'ellipsis-vertical']" /></label>
              <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 h-30">
                <li>
                  <button class="btn btn-link btn-xm flex content-center" onclick="my_modal_4.showModal()">
                    <font-awesome-icon :icon="['fas', 'pencil']" /> Modifica
                  </button>
                </li>
                <li>
                  <button class="btn btn-link btn-xm flex content-center">
                    <font-awesome-icon :icon="['fas', 'trash']" /> Elimina
                  </button>
                </li>
              </ul>
            </div>
          </td>
          <td>{{ u.firstName }}</td>
          <td>{{ u.lastName }}</td>
          <td>{{ u.username }}</td>
          <td></td>
          <td>{{ u.site }}</td>
          <td>{{ u.roles[0].name }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  <ModalModify></ModalModify>
  <ModalAdd></ModalAdd>
</template>

<style scoped></style>
