<script setup lang="ts">
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
            <font-awesome-icon
              :icon="['fas', 'circle-plus']"
              style="font-size: large"
            />
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
            <font-awesome-icon :icon="['fas', 'circle-info']" />
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
</template>

<style></style>
