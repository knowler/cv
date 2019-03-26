import styled from '@emotion/styled'
import { borders, opacity } from 'styled-system'
import { layout, skin, typography } from '@utils/styles'

export const Box = styled.div(
  skin,
  layout,
)

export const Text = styled.span(
  opacity,
  borders,
  typography,
)
