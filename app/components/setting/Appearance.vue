<script setup lang="ts">
const colorMode = useColorMode();

const setColorMode = computed({
  get() {
    return colorMode.preference;
  },
  set(mode: "system" | "light" | "dark") {
    colorMode.preference = mode;
  },
});
</script>

<template>
  <div class="space-y-4">
    <UPageFeature
      title="Pengaturan Tampilan"
      description="Perbarui pengaturan tampilan untuk akun Anda."
    />

    <UFieldGroup size="lg">
      <UButton
        color="neutral"
        :variant="setColorMode === 'light' ? 'solid' : 'subtle'"
        label="Terang"
        icon="i-lucide-sun"
        @click="setColorMode = 'light'"
      />
      <UButton
        color="neutral"
        :variant="setColorMode === 'dark' ? 'solid' : 'subtle'"
        label="Gelap"
        icon="i-lucide-moon"
        @click="setColorMode = 'dark'"
      />
      <UButton
        color="neutral"
        :variant="setColorMode === 'system' ? 'solid' : 'subtle'"
        label="Sistem"
        icon="i-lucide-monitor"
        @click="setColorMode = 'system'"
      />
    </UFieldGroup>
  </div>
</template>
