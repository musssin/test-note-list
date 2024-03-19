<template>
    <ul role="list" class="">
        <AddNoteCard @click="selectNote(newNote)" />
        <NoteCard v-for="note of notes" :key="note.note_name" :note="note" @click="selectNote(note)" />
    </ul>
</template>

<script setup lang="ts">
import { useSelectNote } from '~/composables/useSelectNote';
import type { Note } from '~/models/Note';
import NoteTypes from '~/models/NoteTypes';

const props = defineProps<{
    notes: Array<Note>
}>();
const { selectNote } = useSelectNote()
const newNote = {
    id: -1,
    title: '',
    body: '',
    note_type: NoteTypes.default,
    created_at: new Date().toLocaleDateString(),
    event_date: null,

}
</script>