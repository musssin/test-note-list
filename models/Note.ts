import NoteTypes from './NoteTypes'
export type Note = {
  id: number,
  title: string,
  body: string,
  note_type: NoteTypes,
  created_at: Date;
  event_date?: Date;
}