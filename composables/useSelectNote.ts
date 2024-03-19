import { ref,  toValue } from 'vue'
import type {Note} from '~/modules/Note'

const selectedNote = ref<Note | null>(null)

export function useSelectNote() {

  function selectNote(Note: Note) {
    const s = toValue(Note)
    if (selectedNote.value?.id === s.id) selectedNote.value === null
    else selectedNote.value = s
  }
  // expose managed state as return value
  return { selectedNote, selectNote }
}