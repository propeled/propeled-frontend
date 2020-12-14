import { Badge, Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import StudentPage from "../../components/students/student_page";

export default function Goal(props) {
  return (<>
    <StudentPage>
      <div>
        <Button variant="outline-primary" className="float-md-right">Start</Button>
        <h1>#1351 Complete application to Mercer</h1>
        <Badge pill variant="primary">College Prep</Badge>{' '}
        <Badge pill variant="primary">College Prep</Badge>
        <p>
          In addition to several other colleges, you listed Mercer as one of your
          top college choices. In order to even have a chance to get accepted
          into Mercer, you must fill out your application.
        </p>
        <h3>Subgoals</h3>
        <ListGroup>
          <ListGroup.Item>
            <Row>
                <Col>
                  <Button variant="link">
                    #1431 Write college essay
                  </Button>
                </Col>
                <Col>
                  <Button variant="link" className="float-md-right">
                    <Badge pill variant="primary">Done</Badge>
                  </Button>
                </Col>
              </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
                <Col>
                  <Button variant="link">
                    #1431 Write college essay
                  </Button>
                </Col>
                <Col>
                  <Button variant="link" className="float-md-right">
                    <Badge pill variant="primary">Done</Badge>
                  </Button>
                </Col>
              </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <Button variant="link">
                  + New subgoal
                </Button>
              </Col>
            </Row>
            </ListGroup.Item>
        </ListGroup>
      </div>
    </StudentPage>
  </>)
}