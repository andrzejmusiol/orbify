import React from 'react'

const Uploader = () => (
  <label htmlFor="file-uploader">
    Area of interest (file only)
    <input type="file" data-testid="file-uploader" name="file-uploader" id="file-uploader" />
  </label>
)

export default Uploader
