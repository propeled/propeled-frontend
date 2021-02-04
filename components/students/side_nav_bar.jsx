import { Nav } from "react-bootstrap";

export default function SideNavBar(props) {
  return (<Nav defaultActiveKey={props.active} variant="pills" className="flex-column">
    <Nav.Link href="/student/dashboard">My dashboard</Nav.Link>
    <Nav.Link href="/student/meetings">My meetings</Nav.Link>
    <Nav.Link href="/student/goals">My goals</Nav.Link>
    <Nav.Link href="/student/tracks">My tracks</Nav.Link>
    <Nav.Link href="/student/timeline">My timeline</Nav.Link>
    <Nav.Link href="/student/faqs">My questions</Nav.Link>
    <Nav.Link href="/student/settings">Settings</Nav.Link>
</Nav>)
}
 