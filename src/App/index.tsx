import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import { Header, Image, Paragraph } from './styles'
import logo from '../logo.svg'
import theme from '../styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <GlobalStyles />
        <Image src={logo} alt="logo" />
        <Paragraph>ReactJS + Typescript + Styled Components project template</Paragraph>
      </Header>
    </ThemeProvider>
  )
}

export default App
