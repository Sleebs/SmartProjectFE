<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useRoomStore } from "../stores/roomStore"

const roomStore = useRoomStore()
const { rooms } = storeToRefs(roomStore)

roomStore.getRooms()

const isOpen = ref(false);
const inputValue = ref("");

function addRoom() {
    const newRoom = {
        nameRoom: inputValue.value,
        height: 400,
        width: 600,
        idSede: {
            idSede: 1
        }
    }

    fetch("http://localhost:8080/api/addRoom", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJjby5zdGVmYW5pQGFnbXNvbHV0aW9ucy5uZXQiLCJpYXQiOjE2ODc5NDg3OTUsImV4cCI6MTY4ODAzNTE5NX0.DG35jIGjyon68PJ2Be2PuClcRJ68ZDkwY5Ofcq79p5vD4zYsoGh4SIQWfhJLK8PyqupW5FFaE3R7qz6W9prI9g"
        },
        body: JSON.stringify(newRoom),
    })
        .then((resp) => resp.json())
        .then((data) => (utente.value = data)) // fare il pars del nome in position e date della sedia
        .catch((err) => console.error(err));

    isOpen.value = false
}
</script>

<template>
    <div className="w-full h-full flex flex-wrap">
        <div v-for="r in rooms" :key="r.label" className="rounded-xl m-auto mt-8" style="background-color: #003f7f3d;"
            :style="{ height: r.height + 'px', width: r.width + 'px' }">
            <RouterLink to="/signup">
                <p className="w-full h-full">{{ r.nameRoom }}</p>
            </RouterLink>
        </div>
        <div className="rounded-xl text-center m-auto mt-8" style="height: 400px; width: 600px; background-color: red;"
            @click="isOpen = true">
            <font-awesome-icon :icon="['fas', 'plus']" style="font-size: 70px; margin-top: 25%;" />
        </div>
    </div>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-10">
        <div class="fixed inset-0 bg-gray-900 opacity-50 pointer-events-none"></div>
        <div class="bg-white p-6 rounded shadow-xl z-10">
            <h2 class="text-lg font-semibold mb-4">Area Label</h2>

            <!-- Input field -->
            <input type="text" v-model="inputValue" class="border p-2 mb-4">

            <!-- Save button -->
            <button @click="addRoom" class="bg-blue-500 text-white px-4 py-2 rounded">Save</button>

            <!-- Close button -->
            <button @click="isOpen = false" class="absolute top-4 right-4">
                <font-awesome-icon :icon="['fas', 'close']" />
            </button>
        </div>
    </div>
</template>

<style scoped></style>