export default defineEventHandler(() => {
  return [
    {
      id: 1,
      customer_id: 'user1',
      server_name: 'server7',
      server_type: 'vds',
      active: true
    },
    {
      id: 2,
      customer_id: 'user5',
      server_name: 'server2',
      server_type: 'dedicated',
      active: false
    },
    {
      id: 3,
      customer_id: 'user3',
      server_name: 'server4',
      server_type: 'hosting',
      active: true
    },
    {
      id: 4,
      customer_id: 'user1',
      server_name: 'server71',
      server_type: 'vds',
      active: true
    },
    {
      id: 5,
      customer_id: 'user5',
      server_name: 'server21',
      server_type: 'dedicated',
      active: true
    },
    {
      id: 6,
      customer_id: 'user3',
      server_name: 'server41',
      server_type: 'hosting',
      active: false
    },
  ];
});
