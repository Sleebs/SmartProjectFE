<script setup lang="ts"></script>

<template>
  <div className="desk bg-success"></div>
</template>

<style>
.desk {
  position: relative;
  width: 140px;
  height: 70px;
  border-radius: 5px;
}

.desk::before {
  content: "";
  position: absolute;
  top: -25px;
  left: 40%;
  width: 20%;
  height: 20px;
  background-color: inherit;
  border-radius: 5px;
}

.desk:hover {
  background-color: red;
}
</style>
