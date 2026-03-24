<script setup lang="ts">
defineProps({
  class: {
    type: String,
  },
});

const { date, time } = useClock();
</script>

<template>
  <div :class="class">
    <p class="tabulate-nums">{{ date }}</p>
    <p class="tabulate-nums">{{ time }}</p>
  </div>
</template>
