import { Dropdown, DropdownButton, Navbar } from "react-bootstrap";

export default function HeaderNavBar() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="#home">Propel Education</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Collapse className="justify-content-end">
          <DropdownButton
            variant="outline-dark"
            menuAlign="right"
            title="Jake Derry"
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item eventKey="2">My profile</Dropdown.Item>
            <Dropdown.Item eventKey="3">My settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Logout</Dropdown.Item>
          </DropdownButton>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>)
}