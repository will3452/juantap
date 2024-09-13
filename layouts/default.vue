<script lang="ts" setup>
  const links = [
    {
      label: 'Home', 
      icon: 'i-heroicons-home',
      to: '/dashboard', 
    },
    {
      label: 'Borrowers', 
      icon: 'i-heroicons-users',
      to: '/borrowers', 
    },
    {
      label: 'Loan', 
      icon: 'i-heroicons-credit-card',
      to: '/loan', 
    },
    {
      label: 'Payments', 
      icon: 'i-heroicons-banknotes',
      to: '/payments', 
    },
    {
      label: 'Logout', 
      icon: 'i-heroicons-power',
      to: '/', 
    }
  ]; 
</script>

<template>
  <div>
    <div class="grid grid-cols-12">
      <div class="col-span-2">
        <div class="flex items-center">
          <img src="~/assets/logo_black.png" class="w-[100px]"/> <span class="font-bold text-2xl tracking-wide">JuanTap</span>
        </div>
        <UVerticalNavigation :links="links" :ui="{active: 'before:bg-primary text-white rounded-xl', padding: 'p-4', icon: { active: 'text-white'}, wrapper: 'mx-4', base: 'before:rounded-xl'}"/>
      </div>
      <div class="col-span-10 bg-[#F1F1F1]">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
  * { 
    font-family: sans-serif;
  }
</style>
