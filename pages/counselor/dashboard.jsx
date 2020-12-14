import { Container } from 'react-bootstrap'
import CounselorPage from '../../components/counselors/counselor_page'
import MeetingPreview from '../../components/meeting_preview'

export default function Dashboard() {
  return (
    <CounselorPage active="/counselor/dashboard">
      <Container>
        <h1>
          Hi, Jake!
        </h1>
      </Container>
      <Container>
        <MeetingPreview/>
      </Container>
    </CounselorPage>
  )
}
