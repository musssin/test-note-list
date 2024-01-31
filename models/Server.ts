import ServerTypes from './ServerTypes'
type Server = {
  id: number,
  customer_id: string,
  server_name: string,
  server_type: ServerTypes,
  active: boolean;
}
export default Server