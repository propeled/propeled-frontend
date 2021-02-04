import { Container } from "react-bootstrap";
import CounselorPage from "../../components/counselors/counselor_page";
import StudentView from "../../components/counselors/student_view";

const students = [
  {id: 23532,
   firstName: "Jake",
   lastName: "Derry",
   class: "Class of 2021",
   status: "danger",
   tags: [
     "college-prep",
     "rural-area",
     "low-income-community"
   ]
  }
]

export default function Students() {
  return (
    <CounselorPage active="/counselor/students">
      <Container>
        <h1>
          Students
        </h1>
        <StudentView students={students}/>
      </Container>
    </CounselorPage>
  )
}