import React from 'react'
import { useFormContext } from 'react-hook-form'

const Uploader = () => {
  const { register, setValue } = useFormContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader()
    if (e.target.files) {
      fileReader.readAsText(e.target.files[0], 'UTF-8')
      fileReader.onload = (event) => {
        setValue('aoi', event.target?.result)
      }
    }
  }

  return (
    <label htmlFor="file-uploader">
      Area of interest (file only)
      <input type="file" data-testid="file-uploader" id="file-uploader" onChange={handleChange} />
      <input type="text" {...register('aoi')} style={{ visibility: 'hidden' }} />
    </label>
  )
}

export default Uploader
