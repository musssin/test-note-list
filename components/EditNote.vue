<template>
    <div class="border-2 border-gray-700 rounded-md shadow-md h-full w-full">
        <form class="p-4" @submit.prevent="save">
            <h2 class="text-base font-semibold leading-7 text-gray-900"> {{ !note || note?.id === -1 ? 'Новая заметка' :
            `Редактирование` }}</h2>

            <div class="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 ">
                <div class="col-span-6">
                    <label for="servername" class="block text-sm font-medium leading-6 text-gray-900">Заголовок</label>
                    <div class="mt-2">
                        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300  sm:max-w-md">
                            <input type="text" name="servername" v-model="form.title" required
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Моя заметка" />
                        </div>
                    </div>
                </div>

                <div class="col-span-6">
                    <label for="notetype" class="block text-sm font-medium leading-6 text-gray-900">Вид</label>
                    <div class="mt-2">
                        <select v-model="form.note_type" name="notetype"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ri ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ">
                            <!-- <option v-for="type of types" :key="type">{{ type }} </option> -->
                            <option>{{ types[0] }} </option>
                            <option>{{ types[1] }} </option>
                            <option>{{ types[2] }} </option>
                        </select>
                    </div>
                </div>

                <div class="col-span-12">
                    <div class="mt-2">
                        <textarea type="text" name="notebody" v-model="form.body" required
                            class="w-full  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Текст заметки" />
                    </div>
                </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button v-if="note && note.id !== -1" type="button"
                    class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    @click="remove">Удалить</button>
                <button type="submit"
                    class="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Сохранить</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import type { Note } from '~/models/Note';
import NoteTypes from '~/models/NoteTypes';
const props = defineProps<{
    note?: Note
}>()
const emit = defineEmits(['save'])
const form = ref<Note>({
    id: -1,
    title: '',
    body: '',
    note_type: NoteTypes.default,
    created_at: new Date().toLocaleDateString(),
    event_date: null,

})
watch(props, () => {

    if (props.note) form.value = { ...props.note }
},
    {
        deep: true
    })

const types = Object.values(NoteTypes)

const save = () => {
    emit('save', form.value)
}
const remove = () => {
    emit('remove', form.value)
    form.value = {
        id: -1,
        title: '',
        body: '',
        note_type: NoteTypes.default,
        created_at: new Date().toLocaleDateString(),
        event_date: null,

    }
}
</script>