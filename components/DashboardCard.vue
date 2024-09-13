<script lang="ts" setup>
    const { title, subTitle, amount } = defineProps(['title', 'subTitle', 'amount'])
</script>

<template>
  <UCard class="col-span-4 md:col-span-1">
        <div class="space-y-2">
          <div>
            <div class="font-bold text-xl text-gray-700">
              {{ title }}
            </div>
            <div>
              {{ subTitle }}
            </div>
          </div>
        <div class="text-2xl font-bold text-gray-800">
          {{ amount }}
        </div>
        </div>
        <template #footer>
          <slot />
        </template>
    </UCard>
</template>

<style scoped></style>
