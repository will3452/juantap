<script lang="ts" setup>
  const links = [
  [
    {
      label: 'Manage Loan', 
    }
  ],  
  [],
    [
      {
        label: 'My Profile',
        to: '/my-profile',
        icon: 'i-heroicons-user'
      }
    ]
  ]; 
</script>

<template>
  <div class="p-4">
    <UHorizontalNavigation :links="links" :ui="{wrapper: `bg-primary relative px-2 rounded-xl`, base: 'text-white', icon: `flex-shrink-0 w-5 h-5 relative`}"/>
  </div>
  <UContainer>
  </UContainer>
</template>

<style scoped></style>
