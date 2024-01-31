import { ref, onMounted, onUnmounted, toValue } from 'vue'
import type Server from '~/modules/Server'

const selectedServer = ref<Server | null>(null)

export function useSelectServer() {

  function selectServer(server: Server) {
    const s = toValue(server)
    if (selectedServer.value?.id === s.id) selectedServer.value === null
    else selectedServer.value = s
  }
  // expose managed state as return value
  return { selectedServer, selectServer }
}