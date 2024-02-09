import styled, { css } from 'styled-components'
import colors from '../../../theme'

const sharedStyle = css`
  display: block;
  color: ${colors.black};
  border-radius: 5px;
  font-size: 12px;
  border: 1px solid ${colors.lightGrey};
  padding: 0.5rem 1rem;
  margin: 0.2rem 0 1rem;
  transition: 0.2s ease;
  font-family: 'Roboto Light', sans-serif;
  width: 100%;
  box-sizing: border-box;
  &::placeholder {
    color: ${colors.darkGrey};
  }
  &:focus,
  &:active {
    border: 1px solid ${colors.green};
    outline: 1px solid ${colors.green};
  }
`

export const WizardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: ${colors.white};
  border-radius: 25px;
  width: fit-content;
  height: fit-content;
  overflow: hidden;
  box-shadow: 0 4px 34px -18px rgba(66, 68, 90, 1);
`

export const WizardHeader = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 1rem;
  font-family: 'Roboto Light', sans-serif;
`

export const FormWrapper = styled.form`
  padding: 2rem 4rem;
`

export const Label = styled.label`
  font-family: 'Roboto Light', sans-serif;
  font-weight: bold;
  font-size: 0.8rem;
`

export const Paragraph = styled.p`
  font-family: 'Roboto Light', sans-serif;
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`

export const Input = styled.input`
  ${sharedStyle};
`

export const Area = styled.textarea`
  ${sharedStyle};
  min-height: 4rem;
`
export const FileDesc = styled.div`
  font-family: 'Roboto Light', sans-serif;
  font-size: 1rem;
  color: ${colors.purple};
`

export const UploadLabel = styled.label`
  display: inline-block;
  font-family: 'Roboto Light', sans-serif;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  color: ${colors.darkGrey};
  cursor: pointer;
  vertical-align: center;
  transition: 0.2s ease-in-out;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 2rem;
  border: 1px solid ${colors.lightGrey};
  &:hover {
    border: 1px solid ${colors.green};
  }
  input[type='file'] {
    display: none;
  }
`
export const Button = styled.button`
  border: none;
  padding: 1rem;
  width: 100%;
  border-radius: 5px;
  color: ${colors.white};
  display: inline-block;
  background: ${colors.green};
  font-family: 'Roboto Light', sans-serif;
  font-size: 1rem;
  margin: 1rem 0;
  cursor: pointer;
  text-align: center;
  transition: 0.2s ease-in-out;
  &:hover {
    background: ${colors.purple};
  }
  input[type='file'] {
    display: none;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`

export const Map = styled.div`
  width: 20rem;
  height: 36rem;
`

export const MapPlaceholderWrapper = styled(Map)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.purple};
`

export const Message = styled.div`
  width: 100%;
  text-align: center;
  font-family: 'Roboto Light', sans-serif;
  font-size: 1rem;
  margin: 1rem 0;
  font-weight: bold;
`

export const ErrorMessage = styled(Message)`
  font-size: 0.8rem;
  color: ${colors.red};
`
export const SuccessMessage = styled(Message)`
  color: ${colors.green};
`
