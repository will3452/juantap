<script lang="ts" setup>
  definePageMeta({
    layout: 'guest', 
  }); 
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div  class="w-full md:w-1/3">
      <div class="flex justify-center">
        <img src="~/assets/logo_white.png" class="w-[200px]"/>
      </div>
      <UCard>
      <UForm class="space-y-4">
        <UFormGroup label="Email">
          <UInput size="lg"/>
        </UFormGroup>
        <UFormGroup label="Password">
          <UInput size="lg"/>
        </UFormGroup>
        <UButton block size="lg" icon="i-heroicons-key">LOGIN</UButton>
      </UForm>
    </UCard>
    </div>
    
  </div>
</template>

<style scoped>
</style>
