import React from 'react'
import { Container, Input } from './styles'

const Searcher = ({ value, onChange, onSubmit }) => {
  return (
    <Container>
      <Input
        onChange={onChange}
        onSubmitEditing={onSubmit}
        value={value}
        placeholder="Buscar ..."
        underlineColorAndroid="transparent"
      />
    </Container>
  )
}

export default Searcher
