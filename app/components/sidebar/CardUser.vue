<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";

defineProps({
  collapsed: {
    type: Boolean,
  },
});

const items = ref<DropdownMenuItem[]>([
  {
    label: "Settings",
    icon: "i-lucide-cog",
    to: "/settings",
  },
  {
    label: "Logout",
    icon: "i-lucide-log-out",
    color: "error",
  },
]);
</script>

<template>
  <UDropdownMenu
    :items="items"
    :content="{
      align: collapsed ? 'end' : 'center',
      side: collapsed ? 'right' : 'top',
      sideOffset: 4,
    }"
    :ui="{
      content: collapsed ? 'w-full' : 'w-(--reka-dropdown-menu-trigger-width)',
    }"
  >
    <div class="w-full">
      <UAvatar
        src="https://github.com/benjamincanac.png"
        v-if="collapsed"
        class="mb-3 hover:bg-accented hover:cursor-pointer"
      />
      <UCard
        :ui="{ body: 'p-1.5 sm:p-3' }"
        class="w-full hover:bg-accented group hover:cursor-pointer"
        v-else
      >
        <div class="flex items-center gap-2 w-full">
          <UAvatar src="https://github.com/benjamincanac.png" />
          <p class="font-bold overflow-hidden text-ellipsis">Realitaa</p>
        </div>
      </UCard>
    </div>
  </UDropdownMenu>
</template>
