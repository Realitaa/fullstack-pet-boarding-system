<script setup lang="ts">
defineProps({
  collapsed: {
    type: Boolean,
  },
});
</script>

<template>
  <div class="flex gap-2">
    <UTooltip
      :content="{ side: 'right' }"
      class="group"
      :ui="{
        content:
          'flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-12 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto',
      }"
      v-if="collapsed"
    >
      <template #content>
        <DashboardTime />
      </template>

      <UButton
        variant="ghost"
        icon="lucide:clock"
        class="text-dimmed hover:text-default transition-colors"
      />
    </UTooltip>
    <template v-else>
      <UIcon
        name="lucide:clock"
        class="text-dimmed m-3 flex size-5 justify-center items-center"
      />
      <DashboardTime class="text-sm font-light" />
    </template>
  </div>
</template>
