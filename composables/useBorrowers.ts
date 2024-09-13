import { ref } from 'vue'; 
export const useBorrowers = () => {
  const menu = [
    [
      {
        label: 'Active Borrowers', 
        to: '/borrowers',
      },
      {
        label: 'Individual', 
        to: '/individual',
      },
      {
        label: 'Group', 
        to: '/group',
      }
    ],
    [],
    [
      {
        label: 'New Borrower',
        to: 'new-borrower',
        icon: 'i-heroicons-plus', 
      }
    ], 
  ]
  return {
    menu, 
  }
}
