import React, { FC } from 'react'
/* eslint-disable-next-line import/no-extraneous-dependencies */
import 'leaflet/dist/leaflet.css'
import { MapContainer, Polygon, TileLayer } from 'react-leaflet'
import { AOI } from '../../../types'
import { Map } from '../styled-components'
import MapPlaceholder from './MapPlaceholder'

type Props = {
  aoi: AOI
}

const MapOverview: FC<Props> = ({ aoi }) => {
  const {
    geometry: { coordinates }
  } = aoi

  // In case of using Leaflet Maps, I had to reverse coordinates,
  // since leaflet insteadof using [x, y] coords,like every single map it takes [y, x]
  // so below array iteration is necessary to get right place on the map
  const reversedCoordsForLeafletMap = coordinates[0]?.map((coordinate) => coordinate.reverse())

  if (!reversedCoordsForLeafletMap) {
    return <MapPlaceholder />
  }

  return (
    <Map data-testid="map-overview">
      {reversedCoordsForLeafletMap.length && (
        <MapContainer
          style={{ width: '100%', height: '100%' }}
          bounds={reversedCoordsForLeafletMap}
          boundsOptions={{ padding: [1, 1] }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Polygon positions={reversedCoordsForLeafletMap} />
        </MapContainer>
      )}
    </Map>
  )
}
export default MapOverview
