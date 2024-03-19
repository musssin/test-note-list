<template>
  <div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-12 gap-6 ">
      <EditNote :note="selectedNote" class="col-span-12 md:col-span-6  md:order-2" @save="save" @remove="remove" />
      <NotesList v-if="data" :notes="data" class="col-span-12 md:col-span-6 md:order-1" />
      <div v-else>Loading...</div>


    </div>
  </div>
</template>
<script setup lang="ts">
import { useSelectNote } from '~/composables/useSelectNote';
import type { Note } from '~/models/Note';

const URL = '/api/servers'

const { data, pending, error } = useFetch<Array<Note>>(URL, {
  method: 'get'
})

const { selectedNote } = useSelectNote()

const save = (note: Note) => {
  if (note.id === -1) {
    note.id = data.value.length + 1
    data.value.push(note)
    return
  }

  const edited: Note = data.value?.find((n: Note) => n.id === note.id)
  if (edited) {
    edited.title = note.title
    edited.body = note.body
    edited.note_type = note.note_type
    edited.event_date = note.event_date
  }
}

const remove = (note: Note) => {
  data.value = data.value.filter((n: Note) => n.id !== note.id)
}
</script>