import FeedbackPopup from 'components/FeedbackPopup'
import type { NextPage } from 'next'
import useSWR from 'swr'

const FeedbackPopupPage: NextPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { data, isValidating, error = true } = useSWR('/getData')

  return (
    <div>
      <FeedbackPopup
        isOpen={error}
        title="Title"
        desc="Description of Information"
        severity="success"
      />
      <h1>Feedback Popup Page. Refresh to Trigger</h1>
    </div>
  )
}

export default FeedbackPopupPage
