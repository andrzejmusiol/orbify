import React from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import TextInput from './components/text-input/TextInput'
import TextArea from './components/text-area/TextArea'
import DatePicker from './components/date-picker/DatePicker'
import Uploader from './components/uploader/Uploader'
import SubmitButton from './components/buttons/SubmitButton'
import { FromData } from '../types'
import Error from './components/errors/Error'

export const WizardWrapper = styled.div`
  max-width: 10rem;
`

const Wizard = () => {
  const schema = yup.object({
    name: yup.string().required().max(50),
    description: yup.string().required(),
    date: yup.string().required(),
    aoi: yup.string().required()
  })

  const methods = useForm<FromData>({
    resolver: yupResolver(schema)
  })

  const {
    handleSubmit,
    watch,
    formState: { errors }
  } = methods
  const name = watch('name')
  const description = watch('description')
  const date = watch('date')
  const aoi = watch('aoi')

  const onSubmit: SubmitHandler<FromData> = (data) => {
    const val = schema.validate(data)
    val.then((res) => console.warn(res)).catch((err) => console.warn(err))
  }

  return (
    <WizardWrapper data-testid="wizard">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput placeholder="Name..." />
          <Error message={errors.name?.message} />
          <TextArea placeholder="Description..." />
          <DatePicker placeholder="Pick a date..." />
          <Uploader />
          <SubmitButton disabled={!name || !description || !date || !aoi} />
        </form>
      </FormProvider>
    </WizardWrapper>
  )
}

export default Wizard
