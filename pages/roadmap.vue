<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="person in roadmap" :key="person.email" class="flex justify-between gap-x-6 py-5">
      <div class="flex min-w-0 gap-x-4">
        <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="person.imageUrl" alt="" />
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">{{ person.name }}</p>
        </div>
      </div>
      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">{{ person.role }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup>
const roadmap = [
  {
    name: 'Анимация транзишн при выборе сервера',
    email: '',
    role: 'Не сделано',
    imageUrl:
      'https://cdn.icon-icons.com/icons2/2941/PNG/512/setting_settings_icon_183789.png',
    lastSeen: '-',
    lastSeenDateTime: '',
  },
  {
    name: 'Адаптив для списка и редактирование серверов',
    email: '',
    role: 'Cделано',
    imageUrl:
      'https://cdn.icon-icons.com/icons2/2941/PNG/512/setting_settings_icon_183789.png',
    lastSeen: '-',
    lastSeenDateTime: '',
  },
  {
    name: 'Локализация (i18n)',
    role: 'Не сделано',
    imageUrl:
      'https://cdn.icon-icons.com/icons2/2941/PNG/512/setting_settings_icon_183789.png',
    lastSeen: '',
  },
]
</script>