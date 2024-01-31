<template>
    <div class="border-2 border-gray-700 rounded-md shadow-md h-full w-full">
        <form v-if="server" class="p-4" @submit.prevent="save">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Редактирование данных</h2>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 ">
                <div>
                    <label for="servername" class="block text-sm font-medium leading-6 text-gray-900">Название</label>
                    <div class="mt-2">
                        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300  sm:max-w-md">
                            <input type="text" name="servername" v-model="form.server_name"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="janesmith" />
                        </div>
                    </div>
                </div>

                <div>
                    <label for="servertype" class="block text-sm font-medium leading-6 text-gray-900">Тип</label>
                    <div class="mt-2">
                        <select v-model="form.server_type" name="servertype" autocomplete="country-name"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ri ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ">
                            <!-- <option v-for="type of types" :key="type">{{ type }} </option> -->
                            <option>{{ types[0] }} </option>
                            <option>{{ types[1] }} </option>
                            <option>{{ types[2] }} </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Отмена</button>
                <button type="submit"
                    class="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Сохранить</button>
            </div>
        </form>
        <div v-else>
            <h2 class="mt-4 text-center text-base font-semibold leading-7 text-gray-900">Выберите сервер для редактирования
            </h2>
        </div>
    </div>
</template>

<script setup lang="ts">
import type Server from '~/models/Server';
import ServerTypes from '~/models/ServerTypes';
const props = defineProps<{
    server: Server
}>()
const emit = defineEmits(['save'])
const form = ref<Server>({
    id: 0,
    server_name: '',
    customer_id: '',
    server_type: ServerTypes.vds,
    active: false,

})
watch(props, () => {
    console.log(props.server);

    if (props.server) form.value = { ...props.server }
},
    {
        deep: true
    })

const types = Object.values(ServerTypes)

const save = () => {
    emit('save', form.value)
}
</script>