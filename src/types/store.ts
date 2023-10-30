export interface Store {
  nid: number
  season: number
  episode: number
  characteristic: string
  name: string
  coordinates: number[]
  foodKind: string
  address: string
  phone: string
  images: string[]
  description: string
  menus: { name: string; price: string }[]
}
