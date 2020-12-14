import { Badge, Button, Card, CardGroup, Col, Container, Row, Table } from "react-bootstrap";

function MeetingCards() {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <Card.Link href="/meetings/1023">
                  <Card.Title>Meeting with Mike</Card.Title>
                </Card.Link>
                <Card.Subtitle className="mb-2 text-muted">
                  5:00pm on Zoom{' '}
                  <Card.Link href="/students/2343">
                    <Badge variant="primary" pill>MK</Badge>
                  </Card.Link>
                </Card.Subtitle>
              </Col>
              <Col className="float-md-right">
                <Button className="float-md-right" variant="outline-primary">
                  Join
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </CardGroup>
      <Container>
        <Button variant="link" href="/meetings">See all meetings</Button>
      </Container>
    </>
  );
}

export default function MeetingPreview() {
  return (
    <div>
      <h2>Today's meetings</h2>
      <MeetingCards/>
    </div>
  )
}
