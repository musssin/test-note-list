<template>
    <div
        :class="[isSelected ? 'border-2' : '', 'flex justify-between gap-x-6 py-5 px-4 w-full cursor-pointer rounded-md border-gray-700 shadow-md ']">

        <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="icon" alt="" />
            <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">{{ server.server_name }}</p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ server.customer_id }}</p>
            </div>
        </div>
        <div class=" shrink-0 flex flex-col items-end">
            <p class="text-sm leading-6 text-gray-900">{{ server.server_type }}</p>
            <div class="mt-1 flex items-center gap-x-1.5">
                <div class="flex-none rounded-full  p-1" :class="[server.active ? 'bg-emerald-500/20' : 'bg-red-500/20']">
                    <div class="h-1.5 w-1.5 rounded-full " :class="[server.active ? 'bg-emerald-500' : 'bg-red-500']" />
                </div>
                <p class="text-xs leading-5 text-gray-500">{{ server.active ? 'Online' : 'Offline' }}</p>
            </div>

        </div>
    </div>
</template>
  
<script setup lang="ts">
import type Server from '~/models/Server';

const props = defineProps<{
    server: Server
}>()
const classList = ['border-2', 'shadow-sm']
// const icon = ref('')
// watch(props, () => {
//     icon.value = `/icons/${props.server.server_type}.svg`
// },
//     { immediate: true, deep: true })
const { selectedServer } = useSelectServer()
// const isSelected = (name: string) => selectedServer.value?.server_name === name

const icon = computed(() => {
    return `/icons/${props.server.server_type}.svg`
})
const isSelected = computed(() => {
    return props.server.server_name === selectedServer.value?.server_name
})
</script>