import { ContentState } from 'constants/Content'

export interface ArticleRowData {
  name: string
  date_created: Date
  last_modified: Date
  status: ContentState
}

function createData(
  name: string,
  date_created: Date,
  last_modified: Date,
  status: ContentState
): ArticleRowData {
  return {
    name,
    date_created,
    last_modified,
    status,
  }
}

const date_created = new Date(2012, 4, 20)
const last_modified = new Date(2013, 4, 20)

const date_created2 = new Date(2014, 4, 20)
const last_modified2 = new Date(2015, 4, 20)

export const ARTICLE_ROWS: ArticleRowData[] = [
  createData(
    'Mercy Relief Continues',
    date_created,
    last_modified,
    ContentState.ARCHIVED
  ),
  createData(
    'Mercy Relief holds inauguration for whomever whoever Mercy Relief holds inauguration for whomever whoever',
    date_created,
    last_modified,
    ContentState.ARCHIVED
  ),
  createData(
    'What can we do to sfgreghtrgtegerge',
    date_created,
    last_modified,
    ContentState.ARCHIVED
  ),
  createData('one', date_created, last_modified, ContentState.ARCHIVED),
  createData('two', date_created, last_modified, ContentState.ARCHIVED),
  createData('three', date_created, last_modified, ContentState.ARCHIVED),
  createData('four', date_created, last_modified, ContentState.DRAFT),
  createData('five', date_created, last_modified, ContentState.DRAFT),
  createData('six', date_created2, last_modified2, ContentState.DRAFT),
  createData('seven', date_created2, last_modified2, ContentState.PUBLISHED),
  createData('eight', date_created2, last_modified2, ContentState.PUBLISHED),
  createData('nine', date_created2, last_modified2, ContentState.PUBLISHED),
  createData('ten', date_created2, last_modified2, ContentState.PUBLISHED),
]
