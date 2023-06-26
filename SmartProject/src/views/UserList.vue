<script setup lang="ts">
import ModalModify from "../components/ModalModify.vue";
import ModalAdd from "../components/ModalAdd.vue";
let titolo = ["Nome", "Cognome", "Email", "Responsabile"];
let listUsers = [
  {
    id: 1,
    nome: "Andrea",
    cognome: "Accolla",
    email: "andrea.accolla@agmsolutions.net",
    resp: "",
    sede: "Milano",
    tipoUser: "Post. fissa",
    post: "A1",
  },
  {
    id: 2,
    nome: "Simone",
    cognome: "Albadoro",
    email: "simone.albadoro@agmsolutions.net",
    resp: "Rossi",
    sede: "Torino",
    tipoUser: "Post. var.",
    post: "--",
  },
  {
    id: 3,
    nome: "Marco",
    cognome: "Amedura",
    email: "marco.amedura@agmsolutions.net",
    resp: "Rossi",
    sede: "Torino",
    tipoUser: "Admin",
    post: "A2",
  },
  {
    id: 4,
    nome: "Francesco",
    cognome: "Antoniozzi",
    email: "francesco.antoniozzi@agmsolutions.net",
    resp: "Barbagallo",
    sede: "Milano",
    tipoUser: "Coll. est.",
    post: "A3",
  },
  {
    id: 5,
    nome: "Furio",
    cognome: "Barbagallo",
    email: "furio.barbagallo@agmsolutions.net",
    resp: "",
    sede: "Milano",
    tipoUser: "Post. fissa",
    post: "A4",
  },
  {
    id: 6,
    nome: "Andrea",
    cognome: "Bellandi",
    email: "andrea.bellandi.saladini@agmsolutions.net",
    resp: "Barbagallo",
    sede: "Milano",
    tipoUser: "Post. var.",
    post: "--",
  },
];
</script>

<template>
  <div>
    <table className="table">
      <thead class="text-primary">
        <tr>
          <th>
            <button onclick="my_modal_3.showModal()">
              <font-awesome-icon
                :icon="['fas', 'circle-plus']"
                style="font-size: large"
              />
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
        <tr v-for="list in listUsers" :key="list.id">
          <td class="text-primary">
            <div class="dropdown">
              <label tabindex="0"
                ><font-awesome-icon :icon="['fas', 'ellipsis-vertical']"
              /></label>
              <ul
                tabindex="0"
                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 h-30"
              >
                <li>
                  <button
                    class="btn btn-link btn-xm flex content-center"
                    onclick="my_modal_4.showModal()"
                  >
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
          <td>{{ list.nome }}</td>
          <td>{{ list.cognome }}</td>
          <td>{{ list.email }}</td>
          <td>{{ list.resp }}</td>
          <td>{{ list.sede }}</td>
          <td>{{ list.tipoUser }}</td>
          <td>{{ list.post }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <ModalModify></ModalModify>
  <ModalAdd></ModalAdd>
</template>

<style scoped></style>
