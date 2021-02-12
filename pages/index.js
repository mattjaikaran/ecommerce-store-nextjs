import { Row, Col } from 'react-bootstrap'
import Layout from '@components/Layout'
import ProductCard from '@components/ProductCard'
import Categories from '@components/Categories'
import LeftSideImgCard from '@components/LeftSideImgCard'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <Layout className={styles.container}>
      <div>
        <h1>Welcome to Ecommerce Store</h1>
        <h6>Built with NextJS</h6>
      </div>
      <div>
        <ProductCard />
        <Categories />
        <Row>
          <Col>
            <LeftSideImgCard />
          </Col>
          <Col>
            <LeftSideImgCard />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Home