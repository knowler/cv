import React, { Component } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { Box, Text } from '@components/primitives'
import theme from '@theme'
import MDXDocument from '@content/test.mdx'

const Resume = () => (
  <ThemeProvider theme={theme}>
    <main>
      <Global
        styles={{
          '*': { boxSizing: 'border-box' },
          body: {
            fontFamily: 'azo-sans-web',
            margin: 0
          }
        }}
      />
      <MDXDocument />
    </main>
  </ThemeProvider>
)

export default Resume
