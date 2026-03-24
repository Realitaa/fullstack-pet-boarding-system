<script setup>
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "id",
  },
});

const title = "Sistem Penitipan Hewan";

useSeoMeta({
  title,
  ogTitle: title,
});
</script>

<template>
  <UApp>
    <UMain>
      <NuxtPage class="bg-slate-50 dark:bg-accented/50" />
    </UMain>
  </UApp>
</template>
