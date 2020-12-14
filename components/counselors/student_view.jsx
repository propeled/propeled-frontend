import { Badge, Card, CardGroup, Col, Row } from "react-bootstrap";

export default function StudentView(props) {
  return props.students.map(student => {
    const badges = student.tags.map(tag => 
      (
        <div>
          <Badge pill variant="primary">{tag}</Badge>{' '}
        </div>
      )
      )
    return (
      <CardGroup>
        <Card border={student.status}>
          <Card.Body>
            <Row>
              <Col>
                <Card.Link href={`/students/${student.id}`}>
                  <Card.Title>{student.firstName} {student.lastName}</Card.Title>
                </Card.Link>
                <Card.Subtitle className="mb-2 text-muted">{student.class}</Card.Subtitle>
              </Col>
              <Col>
                <Row>
                  {badges}
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </CardGroup>
    )}
  )
}