import React from 'react'
import { MapPlaceholderWrapper } from '../styled-components'
import PinIcon from './PinIcon'

const MapPlaceholder = () => (
  <MapPlaceholderWrapper data-testid="map-placeholder">
    <PinIcon />
  </MapPlaceholderWrapper>
)

export default MapPlaceholder
