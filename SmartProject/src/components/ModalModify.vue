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
          <input type="text" class="input input-bordered input-sm w-full max-w-xs text-primary" />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Cognome</span>
          </label>
          <input type="text" class="input input-bordered input-sm w-full max-w-xs text-primary" />
        </div>
      </div>
      <div class="flex justify-evenly">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" class="input input-bordered input-sm w-full max-w-xs text-primary" />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" class="input input-bordered input-sm w-full max-w-xs text-primary" />
        </div>
      </div>
      <div class="flex justify-evenly">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Telefono</span>
          </label>
          <input type="text" class="input input-bordered input-sm w-full max-w-xs text-primary" />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Sede</span>
          </label>
          <input type="text" class="input input-bordered input-sm w-full max-w-xs text-primary" />
        </div>
      </div>
      <div class="flex justify-evenly">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Responsabile</span>
          </label>
          <input type="text" class="input input-bordered input-sm w-full max-w-xs text-primary" />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Tipo utente</span>
          </label>
          <input type="text" class="input input-bordered input-sm w-full max-w-xs text-primary" />
        </div>
      </div>
      <div class="flex text-primary" style="margin-left: 11.5%; padding-top: 2%">
        <p>Postazione A1</p>
      </div>
      <div class="flex justify-end" style="margin-right: 12%">
        <p class="text-primary font-bold">Admin</p>
        <input type="checkbox" class="checkbox" style="margin-right: 3%" />
        <p class="text-error font-bold">Disabilita</p>
        <input type="checkbox" class="checkbox" />
        <button class="btn btn-sm text-primary mx-4" style="margin-right: 3%">
          Aggiorna
        </button>
        <button class="btn btn-sm text-primary">Cancella</button>
      </div>
    </form>
  </dialog>
</template>

<style></style>

<!--assegna stanze, assegna postazione solo per FixedUser e admin -->