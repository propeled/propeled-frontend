import { Container, } from 'react-bootstrap'
import StudentPage from '../../components/students/student_page'
import MeetingPreview from '../../components/meeting_preview'
import GoalPreview from '../../components/students/goal_preview'

const goals = [
  {
    id: 3458,
    title: "Complete application to Mercer",
    description: "Because Mercer is one of the schools on your list of possible schools to attend, finish your application to Mercer",
    tags: [
      "apply-to-college"
    ]
  },
  {
    id: 3458,
    title: "Complete application to Mercer",
    description: "Because Mercer is one of the schools on your list of possible schools to attend, finish your application to Mercer",
    tags: [
      "apply-to-college"
    ]
  },
  {
    id: 3458,
    title: "Complete application to Mercer",
    description: "Because Mercer is one of the schools on your list of possible schools to attend, finish your application to Mercer",
    tags: [
      "apply-to-college"
    ]
  }
]

export default function Dashboard() {
  return (
    <StudentPage active="/student/dashboard">
      <Container>
        <h1>
          Hi, Jake!
        </h1>
      </Container>
      <Container>
        <MeetingPreview/>
        <GoalPreview goals={goals}/>
      </Container>
    </StudentPage>
  )
}
