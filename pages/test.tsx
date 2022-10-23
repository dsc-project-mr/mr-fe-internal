import Sidebar from 'components/Sidebar/Sidebar'
import type { NextPage } from 'next'

const Test: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Sidebar />
      <h1>Test</h1>
    </div>
  )
}

export default Test
