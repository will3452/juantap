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
    <UCard>
      <template #header>
        <div class="flex gap-2 items-start">
          <UIcon name="i-heroicons-pencil"/>
          <div>
            <div class="font-bold text-lg text-gray-900">
              Create Borrower's Profile
            </div>
            <div class="text-gray-800">
              Magdagdag ng bagong nanghihiram
            </div>
          </div>
        </div>
      </template>
      <UForm class="grid grid-cols-4 gap-4">
        <div class="space-y-4">
          <div>
            <div class="font-bold">
              Attach Borrower's Image
            </div>
            <div>Larawan ng ng hihiram</div>
          </div>
          <img src="~/assets/anonymous.webp" class="w-full rounded-xl" />
          <UFormGroup>
            <UInput type="file" icon="i-heroicons-photo"/>
          </UFormGroup>
        </div>
        <div class="col-span-3 space-y-4">
          <UFormGroup label="Borrower Type" description="Uri ng nanghihiram">
              <URadioGroup :options="[{label: 'Individual', value: 'Individual'},{label: 'Group', value: 'Group'},]" />
          </UFormGroup>
          <div class="grid grid-cols-3 gap-4">
            <UFormGroup label="Firstname" description="Panagalan">
              <UInput />
            </UFormGroup>
            <UFormGroup label="Middle Name" description="Gitnang pangalan">
              <UInput />
            </UFormGroup>
            <UFormGroup label="Last Name" description="Apelyido">
              <UInput />
            </UFormGroup>
            <UFormGroup label="Birthday" description="Kapanganakan">
              <UInput type="date"/>
            </UFormGroup>
            <UFormGroup label="Email" description="Adres-Sulatroniko">
              <UInput />
            </UFormGroup>
            <UFormGroup label="Number" description="Numero">
              <UInput />
            </UFormGroup>
            <UFormGroup class="col-span-2" label="Current Address" description="Kasalukuyang Tirahan">
              <UInput />
            </UFormGroup>
            <UFormGroup label="Gender" description="Kasarian">
              <URadioGroup :options="[{label: 'Male', value: 'Male'},{label: 'Female', value: 'Female'},]" />
            </UFormGroup>
          </div>
          <div class="flex gap-4">
            <UButton type="submit" size="lg" icon="i-heroicons-check">Save</UButton>
            <UButton type="button" @click="navigateTo('/borrowers')" variant="link" icon="i-heroicons-x-mark">Cancel</UButton>
          </div>
        </div>
      </UForm>
    </UCard>
  </div>
</template>

<style scoped></style>
