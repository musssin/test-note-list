<template>
    <ul role="list" class="">
        <ServerCard v-for="server of servers" :key="server.server_name" :server="server" @click="selectServer(server)" />
    </ul>
</template>
  
<script setup lang="ts">
import type Server from '~/models/Server';

const props = defineProps<{
    servers: Array<Server>
}>();
const { selectServer } = useSelectServer()
</script>