<script lang="ts" setup></script>

<template>
  <UCard>
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-users"/>
          <div class="text-gray-900">
            Group Borrower
          </div>
        </div>
      </template>
      <UTable :columns="[
        {
          label: 'Account No.',
          key: 'account',
        },
        {
          label: 'Group Name',
          key: 'name',
        },
        {
          label: 'Members',
          key: 'member',
        },
        {
          label: 'Actions',
          key: 'action',
        },
      ]"></UTable>
    </UCard>
</template>

<style scoped></style>
