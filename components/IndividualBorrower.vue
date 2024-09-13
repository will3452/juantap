<script lang="ts" setup></script>

<template>
  <UCard>
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-user"/>
          <div class="text-gray-900">
            Individual Borrower
          </div>
        </div>
      </template>
      <UTable :columns="[
        {
          label: 'Account No.',
          key: 'account',
        },
        {
          label: 'Name',
          key: 'name',
        },
        {
          label: 'Birthday',
          key: 'birthday',
        },
        {
          label: 'Gender',
          key: 'gender',
        },
        {
          label: 'Address',
          key: 'address',
        },
        {
          label: 'Email',
          key: 'email',
        },
        {
          label: 'Phone No.',
          key: 'phone',
        },
        {
          label: 'Actions',
          key: 'action',
        },
      ]"></UTable>
    </UCard>
</template>

<style scoped></style>
