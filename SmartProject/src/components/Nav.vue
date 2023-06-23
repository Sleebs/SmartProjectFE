<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
-lines-pen

<template>
  <div className="navbar bg-base-100">
    <RouterLink to="/" className="flex-none ">
      <img
        className="btn btn-ghost normal-case text-xl"
        src="../../src/assets/images/img.png"
      />
    </RouterLink>
    <div class="flex-1 ml-16">
      <RouterLink to="/userList" className="btn btn-ghost normal-case text-xl">
        <font-awesome-icon :icon="['fas', 'book']" />
        AGENDA
      </RouterLink>

      <RouterLink to="/report" className="btn btn-ghost normal-case text-xl">
        <font-awesome-icon :icon="['fas', 'calendar-days']" />
        REPORT
      </RouterLink>

      <RouterLink to="/" className="btn btn-ghost normal-case text-xl">
        <font-awesome-icon :icon="['fas', 'people-group']" />
        PRESENZA
      </RouterLink>
      <RouterLink to="" className="btn btn-ghost normal-case text-xl">
        <font-awesome-icon :icon="['fas', 'user']" />
        UTENTI
      </RouterLink>
      <RouterLink to="/sedi" className="btn btn-ghost normal-case text-xl">
        <font-awesome-icon :icon="['fas', 'building-columns']" />
        SEDI
      </RouterLink>
      <RouterLink to="/" className="btn btn-ghost normal-case text-xl">
        <font-awesome-icon :icon="['fas', 'scroll']" />
        REGOLE
      </RouterLink>
    </div>

    <div className="flex-none gap-2 ">
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
          className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-10"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><router-link to="/login">Logout</router-link></li>
        </ul>
      </div>
    </div>
  </div>
  <RouterView></RouterView>
</template>

<style></style>
