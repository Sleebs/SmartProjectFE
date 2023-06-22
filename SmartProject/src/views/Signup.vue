<template>
  <div class="study-room" ref="studyRoom" style="-webkit-user-select: none">
    <div
      class="table"
      v-for="table in tables"
      :key="table.id"
      :style="{
        top: table.top + 'px',
        left: table.left + 'px',
        width: '140px',
        height: '70px',
        transform: `rotate(${table.rotationAngle}deg)`,
      }"
      @click="startDrag(table, $event)"
      @contextmenu.prevent="stopDrag(table, $event)"
      :class="{ dragging: table.dragging }"
      ref="seat"
      @dblclick.prevent="rotateTable(table)"
    >
      {{ table.label }}

      <div
        style="
          width: 40px;
          height: 40px;
          margin-left: 36%;
          margin-top: -130px;
          background-color: #ddd;
          border-radius: 5px;
          border: 1px solid #999;
        "
      ></div>
    </div>
  </div>

  <button @click="addTable">add</button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const studyRoom = ref(null);

const tables = ref([
  {
    id: 1,
    rotationAngle: 0,
    label: "Table 1",
    top: 50,
    left: 50,
    dragging: false,
  },
  {
    id: 2,
    rotationAngle: 0,
    label: "Table 2",
    top: 200,
    left: 150,
    dragging: false,
  },
  {
    id: 3,
    rotationAngle: 0,
    label: "Table 3",
    top: 250,
    left: 350,
    dragging: false,
  },
]);

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
    id: 3,
    rotationAngle: 0,
    label: "Table 3",
    top: 250,
    left: 350,
    dragging: false,
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
