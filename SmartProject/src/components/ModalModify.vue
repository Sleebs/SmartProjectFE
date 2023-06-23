<script setup lang="ts"></script>

<template>
  <dialog id="my_modal_4" class="modal">
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
      <div class="flex text-primary" style="margin-left: 7.5%; padding: 2%">
        <p>Postazione A1</p>
      </div>
      <div class="flex justify-evenly">
        <div class="flex">
          <p class="text-primary font-bold">Admin</p>
          <input type="checkbox" class="checkbox" />
        </div>
        <div class="flex">
          <input type="checkbox" class="checkbox" />
          <p class="text-error font-bold">Disabilita</p>
        </div>
      </div>
      <div class="flex justify-end" style="margin-right: 6%; padding: 3%">
        <button class="btn btn-sm text-primary" style="margin-right: 3%">
          Aggiorna
        </button>
        <button class="btn btn-sm text-primary">Cancella</button>
      </div>
    </form>
  </dialog>
</template>

<style></style>

<!-- xs -->
<input
  type="text"
  placeholder="Type here"
  class="input input-bordered input-xs w-full max-w-xs"
/>
<!-- sm -->
<input
  type="text"
  placeholder="Type here"
  class="input input-bordered input-sm w-full max-w-xs"
/>
<!-- md -->
<input
  type="text"
  placeholder="Type here"
  class="input input-bordered input-md w-full max-w-xs"
/>
<!-- lg -->
<input
  type="text"
  placeholder="Type here"
  class="input input-bordered input-lg w-full max-w-xs"
/>
