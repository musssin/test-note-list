export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Моя заметка',
      body: '2',
      note_type: 'default',
      created_at: '19.03.2024'
    },
    {
      id: 2,
      title: 'Вторая заметка',
      body: 'Тело второй заметки',
      note_type: 'event',
      created_at: '19.03.2024'
    },
  ];
});
