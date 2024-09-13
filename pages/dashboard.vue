<script lang="ts" setup>
  const links = [
  [
    {
      label: 'Home', 
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
  <div class="p-4 space-y-4">
    <UHorizontalNavigation :links="links" :ui="{wrapper: `bg-primary relative px-2 rounded-xl`, base: 'text-white', icon: `flex-shrink-0 w-5 h-5 relative`}"/>
    <div class="grid grid-cols-4 gap-4">
      <CapitalCard />
      <DashboardCard title="AMOUNT DISBURSED" sub-title="Kabuuang napahiram" amount="16,000"/>
      <DashboardCard title="REMAINING CAPITAL" sub-title="Kasalukuyang puhunan" amount="34,000"/>
      <DashboardCard title="PAYMENTS RECEIVED" sub-title="Bayad mula sa nanghiram" amount="19,500"/>
      <DashboardCard title="TOTAL REVENUE" sub-title="Kabuuang kita" amount="3,500"/>
      <DashboardCard title="TOTAL CASH" sub-title="Kabuuang kita at puhunan" amount="53,500"/>
      <UCard class="col-span-2">
        <div class="text-lg font-bold text-gray-800">Revenue for the month of June</div>
      </UCard>
    </div>
  </div>
</template>

<style scoped></style>
