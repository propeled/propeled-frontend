import { Badge, Nav } from "react-bootstrap";

export default function SideNavBar(props) {
  return (<Nav defaultActiveKey={props.active} variant="pills" className="flex-column">
    <Nav.Link href="/counselor/dashboard">My dashboard</Nav.Link>
    <Nav.Link href="/counselor/students">My students</Nav.Link>
    <Nav.Link href="/counselor/groups">&emsp; Student groups</Nav.Link>
    <Nav.Link href="/counselor/meetings">My meetings</Nav.Link>
    <Nav.Link href="/counselor/school">My school</Nav.Link>
    <Nav.Link href="/counselor/school/tracks">&emsp; Tracks</Nav.Link>
    <Nav.Link href="/counselor/school/faqs">&emsp; FAQs</Nav.Link>
    <Nav.Link href="/counselor/school/insights">&emsp; Insights</Nav.Link>
    <Nav.Link href="/counselor/school/integrations">&emsp; Integrations <Badge pill variant="light">NEW</Badge></Nav.Link>
    <Nav.Link href="/counselor/settings">Settings</Nav.Link>
</Nav>)
}