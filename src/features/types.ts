type Properties = {
  description: string
}

type Geometry = {
  type: string
  coordinates: [[number, number][]]
}

export type AOI = {
  id: string
  bbox: string
  type: string
  geometry: Geometry
  properties: Properties
}

export type FromData = {
  name: string
  description: string
  date: string
  aoi: string
}
