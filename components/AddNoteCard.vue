<template>
    <div
        :class="[isSelected ? 'border-2' : '', 'flex justify-between gap-x-6 py-5 px-4 w-full cursor-pointer rounded-md border-gray-700 shadow-md ']">

        <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="icon" alt="" />
            <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">Создать новую заметку</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Note } from '~/models/Note';

const props = defineProps<{
    note: Note
}>()
const { selectedNote } = useSelectNote()
const icon = computed(() => {
    return `/icons/add.svg`
})
const isSelected = computed(() => {
    return selectedNote.value?.id === -1
})
</script>