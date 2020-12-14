import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import HeaderNavBar from '../header_nav_bar'
import SideNavBar from './side_nav_bar'

export default function StudentPage(props) {
  return (
    <div>
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <HeaderNavBar/>
      <Container className="md-container">
      <Row>
      <Col sm={2}>
        <SideNavBar active={props.active}/>
      </Col>
      <Col sm={8}>
        {props.children}
        </Col>
        </Row>
      </Container>
    </div>
  )
}
