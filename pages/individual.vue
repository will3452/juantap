<script lang="ts" setup>
  const links = [
  [
    {
      label: 'Manage Borrowers', 
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
  <div class="space-y-4 p-4">
    <UHorizontalNavigation :links="links" :ui="{wrapper: `bg-primary relative px-2 rounded-xl`, base: 'text-white', icon: `flex-shrink-0 w-5 h-5 relative`}"/>
    <UHorizontalNavigation :links="useBorrowers().menu"/>
    <div>
      <IndividualBorrower />
    </div>
  </div>
</template>

<style scoped></style>
