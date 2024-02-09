import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Paragraph, UploadLabel } from '../styled-components'

const Uploader = () => {
  const [fileName, setFileName] = useState<string | null | undefined>(null)
  const { register, setValue } = useFormContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader()
    const getFileName = e.target.value.split('/').pop()
    setFileName(getFileName)
    if (e.target.files) {
      fileReader.readAsText(e.target.files[0], 'UTF-8')
      fileReader.onload = (event) => {
        setValue('aoi', event.target?.result)
      }
    }
  }

  return (
    <>
      <Paragraph>Add file</Paragraph>
      <UploadLabel htmlFor="file-uploader">
        {fileName && 'Upload file (.txt only)'}
        <input type="file" data-testid="file-uploader" id="file-uploader" onChange={handleChange} />
        <input type="text" {...register('aoi')} style={{ visibility: 'hidden' }} />
      </UploadLabel>
    </>
  )
}

export default Uploader
