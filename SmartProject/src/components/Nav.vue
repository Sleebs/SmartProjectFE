<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div className="navbar bg-base-100">
    <div className="flex-none ">
      <a className="btn btn-ghost normal-case text-xl">AGM SMORT</a>
    </div>
    <div class="flex-1 ml-16">
      <a className="btn btn-ghost normal-case text-xl">AGENDA</a>

      <a className="btn btn-ghost normal-case text-xl">REPORT</a>

      <a className="btn btn-ghost normal-case text-xl">PRESENZA</a>
      <a className="btn btn-ghost normal-case text-xl">UTENTI</a>

      <a className="btn btn-ghost normal-case text-xl">SEDI</a>
      <a className="btn btn-ghost normal-case text-xl">
        <font-awesome-icon :icon="['fas', 'scroll']" />
        REGOLE
      </a>
    </div>

    <div className="flex-none gap-2">

      <div className="dropdown dropdown-end">
        <label tabIndex="{0}" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://images.pexels.com/photos/6608313/pexels-photo-6608313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </label>
        <ul
          tabIndex="{0}"
          className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  <RouterView></RouterView>
</template>

<style></style>
