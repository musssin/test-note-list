<template>
    <div
        :class="[isSelected ? 'border-2' : '', 'flex justify-between gap-x-6 py-5 px-4 w-full cursor-pointer rounded-md border-gray-700 shadow-md ']">

        <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="icon" alt="" />
            <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">{{ note.title }}</p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500 ">{{ note.body }}</p>
            </div>
        </div>
        <div class=" shrink-0 flex flex-col items-end">
            <p class="text-sm leading-6 text-gray-900">{{ note.created_at }}</p>
            <p class="text-sm leading-6 text-gray-900">{{ note.note_type }}</p>

        </div>
    </div>
</template>

<script setup lang="ts">
import type { Note } from '~/models/Note';

const props = defineProps<{
    note: Note
}>()
const classList = ['border-2', 'shadow-sm']
// const icon = ref('')
// watch(props, () => {
//     icon.value = `/icons/${props.note.note_type}.svg`
// },
//     { immediate: true, deep: true })
const { selectedNote } = useSelectNote()
// const isSelected = (name: string) => selectedNote.value?.note_name === name

const icon = computed(() => {
    return `/icons/${props.note.note_type}.svg`
})
const isSelected = computed(() => {
    return props.note.title === selectedNote.value?.title
})
</script>~/models/Note