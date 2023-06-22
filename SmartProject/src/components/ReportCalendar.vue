<template>
  <VueDatePicker
    :min-date="new Date()"
    :disabled-dates="disabledDates"
    :preview-format="format"
    :disabled-week-days="[6, 0]"
    :enable-time-picker="false"
    :show-selected-dates="true"
    locale="it"
    cancelText="Annulla"
    selectText="Conferma"
    v-model="date"
    :inline="true"
    range
    :partial-range="false"
    @update:model-value="handleDateSelection"
    className="inline-block w-fit"
  />
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

const date = ref();

watch(date, (newVal) => {
  //console.log(newVal);
});
const handleDateSelection = (selectedDates) => {
  // Controllo solo se sono stati selezionati almeno 2 giorni
  if (selectedDates.length >= 2) {
    const lastSelectedDate = selectedDates[selectedDates.length - 1];
    const previousDate = selectedDates[selectedDates.length - 2];

    // Calcolo la differenza in giorni tra le due date
    const diffInDays = Math.floor(
      (lastSelectedDate - previousDate) / (1000 * 60 * 60 * 24)
    );

    // Controllo se la differenza in giorni è uguale o superiore a 7
    if (diffInDays >= 7) {
      // Rimuovi l'ultima data selezionata
      date.value = selectedDates.slice(0, selectedDates.length - 1);
      console.log("Non è consentito selezionare 7 giorni consecutivi.");
    }
    // Aggiorna le date selezionate
    date.value = selectedDates;
  } else {
    console.log("seleziona almeno 2 gg");
  }
};
const format = (date) => {
  //serve per non far comparire le date selezionate di fianco al button di conferma
  return;
};

// For demo purposes disables the next 2 days from the current date
//bisogna passargli array giorni festivi
const disabledDates = computed(() => {
  const today = new Date();

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const afterTomorrow = new Date(tomorrow);
  afterTomorrow.setDate(tomorrow.getDate() + 1);

  return [tomorrow, afterTomorrow];
});
</script>

<style>
.dp__theme_light {
  --dp-text-color: #212121;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #1976d2;
  --dp-primary-text-color: #f8f5f5;
  --dp-background-color: #ffffff;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ddd;
  --dp-menu-border-color: #ddd;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff6f60;
  --dp-highlight-color: rgba(25, 118, 210, 0.1);
}

:root {
  /*General*/
  --dp-font-family: -apple-system, blinkmacsystemfont, "Segoe UI", roboto,
    oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --dp-border-radius: 40px; /*Configurable border-radius*/
  --dp-cell-border-radius: 40px; /*Specific border radius for the calendar cell*/
  --dp-common-transition: all 0.1s ease-in; /*Generic transition applied on buttons and calendar cells*/

  /*Sizing*/
  --dp-button-heigh: 50px; /*Size for buttons in overlays*/
  --dp-month-year-row-height: 80px; /*Height of the month-year select row*/
  --dp-month-year-row-button-size: 50px; /*Specific height for the next/previous buttons*/
  --dp-button-icon-height: 100px; /*Icon sizing in buttons*/
  --dp-cell-size: 70px; /*Width and height of calendar cell*/
  --dp-cell-padding: 10px; /*Padding in the cell*/
  --dp-common-padding: 10px; /*Common padding used*/
  --dp-input-icon-padding: 35px; /*Padding on the left side of the input if icon is present*/
  --dp-input-padding: 6px 30px 6px 12px; /*Padding in the input*/
  --dp-menu-min-width: 260px; /*Adjust the min width of the menu*/
  --dp-action-button-height: 50px; /* sistema altezza bottone conferma*/
  --dp-action-buttons-padding: 2px 50px; /*Adjust padding for the action buttons in action row*/
  --dp-row-maring: 5px 5px; /*Adjust the spacing between rows in the calendar*/
  --dp-calendar-header-cell-padding: 0.5rem; /*Adjust padding in calendar header cells*/
  --dp-two-calendars-spacing: 10px; /*Space between multiple calendars*/
  --dp-overlay-col-padding: 3px; /*Padding in the overlay column*/
  --dp-time-inc-dec-button-size: 32px; /*Sizing for arrow buttons in the time picker*/
  --dp-menu-padding: 19px 8px; /*Menu padding*/

  /*Font sizes*/
  --dp-font-size: 1rem; /*Default font-size*/
  --dp-preview-font-size: 0.8rem; /*Font size of the date preview in the action row*/
  --dp-time-font-size: 0.8rem; /*Font size in the time picker*/

  /*Transitions*/
  --dp-animation-duration: 0.1s; /*Transition duration*/
  --dp-menu-appear-transition-timing: cubic-bezier(
    0.4,
    0,
    1,
    1
  ); /*Timing on menu appear animation*/
  --dp-transition-timing: ease-out; /*Timing on slide animations*/
}
.dp__calendar_row {
  gap: 5px;
}
</style>
