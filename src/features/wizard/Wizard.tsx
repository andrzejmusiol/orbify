import React, { useEffect } from 'react'
import * as yup from 'yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import TextInput from './components/text-input/TextInput'
import TextArea from './components/text-area/TextArea'
import DatePicker from './components/date-picker/DatePicker'
import Uploader from './components/uploader/Uploader'
import SubmitButton from './components/buttons/SubmitButton'
import { FromData } from '../types'
import Error from './components/notifications/Error'
import usePostMap from '../../api/postMap'
import MapOverview from './components/map/MapOverview'
import Success from './components/notifications/Success'
import { FormWrapper, WizardWrapper } from './components/styled-components'
import Header from './components/header/Header'
import MapPlaceholder from './components/map/MapPlaceholder'

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
        postMapMutation.mutate(data)
      })
      .catch((err) => console.error(err))
  }

  return (
    <WizardWrapper data-testid="wizard">
      <FormProvider {...methods}>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Header text="Map creation wizard" />
          <TextInput placeholder="Map of exampl location..." />
          <Error message={errors.name?.message} />
          <TextArea placeholder="This map represents..." />
          <DatePicker placeholder="Pick a date..." />
          <Uploader />
          <SubmitButton disabled={!name || !description || !date || !aoi} />
          {postMapMutation.isError && <Error message="Something went wrong, please check coordinates and try again" />}
          {postMapMutation.isSuccess && <Success message="Good job! You made it!" />}
        </FormWrapper>
      </FormProvider>
      {aoi ? <MapOverview aoi={JSON.parse(aoi)} /> : <MapPlaceholder />}
    </WizardWrapper>
  )
}

export default Wizard
