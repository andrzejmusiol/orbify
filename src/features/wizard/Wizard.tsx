import React, { useEffect } from 'react'
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
import usePostMap from '../../api/postMap'

export const WizardWrapper = styled.div`
  max-width: 10rem;
`

const Wizard = () => {
  const postMapMutation = usePostMap()
  const schema = yup.object({
    name: yup.string().required().max(25),
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
    formState: { errors },
    reset
  } = methods
  const name = watch('name')
  const description = watch('description')
  const date = watch('date')
  const aoi = watch('aoi')

  useEffect(() => {
    if (postMapMutation.isSuccess) {
      reset()
    }
  }, [postMapMutation.isSuccess, reset])

  const onSubmit: SubmitHandler<FromData> = (data) => {
    const val = schema.validate(data)
    val
      .then(() => {
        postMapMutation.mutate({ body: data })
      })
      .catch((err) => console.warn(err))
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
        {postMapMutation.isError && <Error message="Something went wrong, please try again" />}
      </FormProvider>
    </WizardWrapper>
  )
}

export default Wizard
