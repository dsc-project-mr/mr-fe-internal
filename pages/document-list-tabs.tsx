import DocumentListTabs, { DocumentStatus } from 'components/DocumentListTabs'
import type { NextPage } from 'next'
import { useState } from 'react'

const DocumentListTabsPage: NextPage = () => {
  const [status, setStatus] = useState(DocumentStatus.All)
  return (
    <DocumentListTabs status={status} setStatus={setStatus}>
      <div>
        Filter Status: {status}. This status is a number as that is what TS
        enums compile down to.
      </div>
    </DocumentListTabs>
  )
}

export default DocumentListTabsPage
