import { Button, ButtonGroup, Table } from "react-bootstrap";

export default function GoalPreview(props) {
  const table = props.goals.map(goal => (
    <tr key={goal.id}>
      <td>
        <Button variant="link" href={`/goals/${goal.id}`}>{goal.title}</Button>
      </td>
      <td>
        <ButtonGroup variant="secondary" size="sm" className="float-md-right">
          <Button>Start</Button>
          <Button variant="secondary">Edit</Button>
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  ))
  return (
      <div>
        <h2>Goals</h2>
        <Table size="sm" responsive>
          <tbody>
            {table}
          </tbody>
        </Table>
      </div>
  )}