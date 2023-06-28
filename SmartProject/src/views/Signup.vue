<template>
  <div class="study-room" ref="studyRoom" style="-webkit-user-select: none">
    <div class="table" v-for="table in tables" :key="table" :style="{
      top: table.top + 'px',
      left: table.left + 'px',
      width: '100px',
      height: '50px',
      transform: `rotate(${table.rotationAngle}deg)`,
    }" @click="startDrag(table, $event)" @contextmenu.prevent="stopDrag(table, $event)"
      :class="{ dragging: table.dragging }" ref="seat" @dblclick.prevent="rotateTable(table)">
      <p style="margin-top: -16px;" :style="{ transform: `rotate(${-table.rotationAngle}deg)` }">{{ table.label }}</p>

      <div style="
          width: 30px;
          height: 18px;
          margin-left: 36%;
          margin-top: -75px;
          background-color: #ddd;
          border-radius: 5px;
          border: 1px solid #999;
        "></div>
    </div>
  </div>

  <div v-if="showInput" className="m-5">
    <input v-model="inputValue" type="text" />
    <button @click="addTable">Save</button>
  </div>

  <button className="btn btn-primary m-4" @click="showInput = true">add</button>

  <button className="btn btn-primary m-4" @click="removeTable">remove</button>

  <button className="btn btn-primary m-4" @click="saveTables">save</button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const studyRoom = ref(null);

const tables = ref([]);
const showInput = ref(false)
const inputValue = ref('')

const draggingTable = ref(null);
const offset = ref({ x: 0, y: 0 });

function rotateTable(table) {
  table.rotationAngle = (table.rotationAngle + 90) % 360;
}

function renderTable(table) {
  return h(
    "div",
    {
      class: "table",
      style: { top: `${table.top}px`, left: `${table.left}px` },
    },
    [
      h("div", { class: "table-number" }, table.number),
      h(
        "span",
        { class: "table-coordinates" },
        `(${table.left}, ${table.top})`
      ),
    ]
  );
}

function addTable() {
  tables.value.push({
    rotationAngle: 0,
    label: inputValue.value,
    top: 250,
    left: 350,
    dragging: false,
  });
  showInput = false
}

function removeTable() {
  tables.value.pop();
}

function saveData() {
  tables.array.forEach(element => {

  });
}

function startDrag(table, event) {
  draggingTable.value = table;
  offset.value.x = event.pageX - table.left;
  offset.value.y = event.pageY - table.top;
  table.dragging = true;
}

function stopDrag(table, event) {
  table.dragging = false;
}

function handleMouseMove(event) {
  if (draggingTable.value) {
    const studyRoomBounds = studyRoom.value.getBoundingClientRect();
    const x = event.pageX - offset.value.x - studyRoomBounds.left;
    const y = event.pageY - offset.value.y - studyRoomBounds.top;
    draggingTable.value.left = x;
    draggingTable.value.top = y;

    // Save positions to local storage
    const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
    savedTables[draggingTable.value.id] = { top: y, left: x };
    localStorage.setItem("tables", JSON.stringify(savedTables));
  }
}

function handleMouseUp() {
  if (draggingTable.value) {
    draggingTable.value.dragging = false;
    draggingTable.value = null;
  }
}

onMounted(() => {
  // Load positions from local storage
  const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
  tables.value = tables.value.map((table) => ({
    ...table,
    ...savedTables[table.id],
  }));

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
});
</script>

<style scoped>
.study-room {
  position: relative;
  width: 600px;
  height: 400px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  margin: 20px;
}

.table {
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: #ddd;
  border: 1px solid #999;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  line-height: 80px;
  cursor: pointer;
  transition: transform 0.2s ease-out;
}

.table.dragging {
  transform: scale(1.2);
}

@media (max-width: 767px) {
  .study-room {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .table {
    flex-basis: 45%;
    margin: 5%;
  }
}
</style>
