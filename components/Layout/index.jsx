import { Container } from 'react-bootstrap'
import Header from '@components/Header'
import Footer from '@components/Footer'
import './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header /> 
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout