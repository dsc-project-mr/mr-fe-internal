import { Dispatch, ReactNode, SetStateAction } from 'react'
import Tabs, { TabsProps } from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/system/Box'
import Person from '@mui/icons-material/Person'
import Drafts from '@mui/icons-material/Drafts'
import UploadFile from '@mui/icons-material/UploadFile'
import Lock from '@mui/icons-material/Lock'
import { DocumentStatus } from 'constants/DocumentStatus'

interface IconTextProps {
  icon: ReactNode
  text: string
}

const IconText = ({ icon, text }: IconTextProps) => {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
      {icon}
      <Box sx={{ marginLeft: 1 }}>{text}</Box>
    </Box>
  )
}

type DocumentListTabsProps = {
  children: ReactNode
  status: DocumentStatus
  setStatus: Dispatch<SetStateAction<DocumentStatus>>
} & TabsProps

/**
 * Common DocumentListTabs component.
 *
 * @example
 * ```ts
 * const Example = () => {
 *   const [status, setStatus] = useState(DocumentStatus.All);
 *   return (
 *     <DocumentListTabs status={status} setStatus={setStatus}>
 *       <div>Status: {status}</div>
 *     </DocumentListTabs>
 *   )
 * }
 * ```
 */
const DocumentListTabs = ({
  children,
  status,
  setStatus,
  ...props
}: DocumentListTabsProps) => {
  return (
    <Box>
      <Tabs value={status} onChange={(_, v) => setStatus(v)} {...props}>
        <Tab
          label={<IconText icon={<Person />} text="All" />}
          value={DocumentStatus.All}
        />
        <Tab
          label={<IconText icon={<Drafts />} text="Draft" />}
          value={DocumentStatus.Draft}
        />
        <Tab
          label={<IconText icon={<UploadFile />} text="Published" />}
          value={DocumentStatus.Published}
        />
        <Tab
          label={<IconText icon={<Lock />} text="Archived" />}
          value={DocumentStatus.Archived}
        />
      </Tabs>
      {children}
    </Box>
  )
}

export default DocumentListTabs
