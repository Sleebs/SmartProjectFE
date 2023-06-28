<template>
    <div className="w-full h-full flex flex-wrap ml-40 space-x-12">
        <div v-for="r in rooms" :key="r.label" className="rounded-xl" style="background-color: #003f7f3d;"
            :style="{ height: r.height + 'px', width: r.width + 'px' }">
            {{ r.label }}
        </div>
        <div className="rounded-xl text-center place-items-center"
            style="height: 400px; width: 600px; background-color: red;" @click="addRoom">
            <font-awesome-icon :icon="['fas', 'plus']" style="font-size: 70px; margin-top: 25%;" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const rooms = ref([])

function addRoom() {
    const newRoom = {
        label: `Room ${rooms.value.length + 1}`,
        height: 400,
        width: 600,
    }
    rooms.value.push(newRoom)
}
</script>

<style scoped></style>