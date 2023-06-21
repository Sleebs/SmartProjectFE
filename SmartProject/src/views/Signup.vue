<template>
    <div class="study-room" ref="studyRoom">
        <div class="table" v-for="table in tables" :key="table.id"
            :style="{ top: table.top + 'px', left: table.left + 'px', width: '140px', height: '70px' }"
            @mousedown="startDrag(table, $event)" :class="{ dragging: table.dragging }">
            {{ table.label }}
        </div>
    </div>

    <button @click="addTable">add</button>

    {{ tables }}
</template>
  
<script>
export default {
    data() {
        return {
            tables: [
                { id: 1, label: 'Table 1', top: 50, left: 50, dragging: false },
                { id: 2, label: 'Table 2', top: 200, left: 150, dragging: false },
                { id: 3, label: 'Table 3', top: 250, left: 350, dragging: false },
            ],
            draggingTable: null,
            offset: { x: 0, y: 0 },
        };
    },
    mounted() {
        // Load positions from local storage
        const savedTables = JSON.parse(localStorage.getItem('tables')) || {};
        this.tables = this.tables.map(table => ({ ...table, ...savedTables[table.id] }));

        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    },
    beforeUnmount() {
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    },
    methods: {
        renderTable(table) {
            return h(
                'div',
                {
                    class: 'table',
                    style: { top: `${table.top}px`, left: `${table.left}px` }
                },
                [
                    h('div', { class: 'table-number' }, table.number),
                    h('span', { class: 'table-coordinates' }, `(${table.left}, ${table.top})`)
                ]
            );
        },
        addTable() {
            this.tables.push({ id: 3, label: 'Table 3', top: 250, left: 350, dragging: false })
        },
        startDrag(table, event) {
            this.draggingTable = table;
            this.offset.x = event.pageX - table.left;
            this.offset.y = event.pageY - table.top;
            table.dragging = true;
        },
        handleMouseMove(event) {
            if (this.draggingTable) {
                const studyRoomBounds = this.$refs.studyRoom.getBoundingClientRect();
                const x = event.pageX - this.offset.x - studyRoomBounds.left;
                const y = event.pageY - this.offset.y - studyRoomBounds.top;
                this.draggingTable.left = x;
                this.draggingTable.top = y;

                // Save positions to local storage
                const tables = JSON.parse(localStorage.getItem('tables')) || {};
                tables[this.draggingTable.id] = { top: y, left: x };
                localStorage.setItem('tables', JSON.stringify(tables));
            }
        },
        handleMouseUp() {
            if (this.draggingTable) {
                this.draggingTable.dragging = false;
                this.draggingTable = null;
            }
        },
    },
};
</script>
  
<style>
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