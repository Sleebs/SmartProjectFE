




<template>
  <div className="flex justify-around pt-20  pl-20">
    <ReportCalendar/>
  </div>
  <div className="flex justify-around pt-20  pl-20">
    <ReportCalendar/>
  </div>
  <div class="overflow-x-auto pt-20 px-16">

  <table class="table table-xs table-pin-rows table-zebra table-pin-cols">
      <thead>

      <tr>
        <th></th>
        <td>Check</td>
        <td>Name</td>
        <td>Job</td>
        <td>company</td>
        <td>location</td>
        <td>Last Login</td>
        <td>Favorite Color</td>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr>
<th></th>
        <td>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>

        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Littel, Schaden and Vandervort</td>
        <td>Canada</td>
        <td>12/16/2020</td>
        <td>Blue</td>
        <th>1</th>
      </tr>
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Zemlak, Daniel and Leannon</td>
        <td>United States</td>
        <td>12/5/2020</td>
        <td>Purple</td>
        <th>2</th>
      </tr>
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Carroll Group</td>
        <td>China</td>
        <td>8/15/2020</td>
        <td>Red</td>
        <th>3</th>
      </tr>
      </tbody>

    </table>
  </div>

</template>



<script setup lang="ts">

import { ref } from 'vue';
import ReportCalendar from "../components/ReportCalendar.vue";




</script>



<style>

.weekend {

  background-color: #ddd;

}

</style>