<script setup lang="ts"></script>

<template>
  <dialog id="my_modal_3" class="modal">
    <form method="dialog" class="modal-box w-11/12 max-w-5xl">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>
      <div class="flex justify-evenly">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Nome</span>
          </label>
          <input
            type="text"
            class="input input-bordered input-sm w-full max-w-xs text-primary"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Cognome</span>
          </label>
          <input
            type="text"
            class="input input-bordered input-sm w-full max-w-xs text-primary"
          />
        </div>
      </div>
      <div class="flex justify-evenly">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="text"
            class="input input-bordered input-sm w-full max-w-xs text-primary"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="text"
            class="input input-bordered input-sm w-full max-w-xs text-primary"
          />
        </div>
      </div>
      <div class="flex justify-evenly">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Telefono</span>
          </label>
          <input
            type="text"
            class="input input-bordered input-sm w-full max-w-xs text-primary"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Sede</span>
          </label>
          <input
            type="text"
            class="input input-bordered input-sm w-full max-w-xs text-primary"
          />
        </div>
      </div>
      <div class="flex justify-evenly">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Responsabile</span>
          </label>
          <input
            type="text"
            class="input input-bordered input-sm w-full max-w-xs text-primary"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Tipo utente</span>
          </label>
          <input
            type="text"
            class="input input-bordered input-sm w-full max-w-xs text-primary"
          />
        </div>
      </div>
      <div class="flex justify-end">
        <button
          class="btn btn-sm text-primary"
          style="margin-top: 2%; margin-right: 11%"
        >
          Aggiungi
        </button>
      </div>
    </form>
  </dialog>
</template>

<style></style>
