import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  a {
    color: coral !important;
  }
  .connect-button {
    background-color: coral;
  }
  .color-white {
    color: #ffffff !important;
  }
  .bg-coral {
    background-color: coral !important;
  }
`

export default GlobalStyle
