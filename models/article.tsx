import { ArticleType, ContentState } from 'constants/Content'

export interface ArticleRowData {
  _id: string
  title: string
  author: string
  updatedBy: string
  latestEditorEmail: string
  state: ContentState
  tags: string[]
  type: string
  imageUrl: string
  contentUrl: string
  createdAt: Date
  updatedAt: Date
  __v: number
  id: string
}

function createData(
  _id: string,
  title: string,
  author: string,
  updatedBy: string,
  latestEditorEmail: string,
  state: ContentState,
  tags: string[],
  type: ArticleType,
  imageUrl: string,
  contentUrl: string,
  createdAt: Date,
  updatedAt: Date,
  __v: number,
  id: string
): ArticleRowData {
  return {
    _id,
    title,
    author,
    updatedBy,
    latestEditorEmail,
    state,
    tags,
    type,
    imageUrl,
    contentUrl,
    createdAt,
    updatedAt,
    __v,
    id,
  }
}

const date_created = new Date(2012, 4, 20)
const last_modified = new Date(2013, 4, 20)

const date_created2 = new Date('2010-08-17T12:01:55.277Z')
const last_modified2 = new Date('2014-12-31T12:01:55.277Z')

export const ARTICLE_ROWS: ArticleRowData[] = [
  createData(
    '1',
    'Midnights',
    'Taylor Swift',
    'Taylor',
    'taylorswift@umgstores.com',
    ContentState.PUBLISHED,
    [],
    ArticleType.EXTERNAL,
    'https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png',
    'https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3',
    new Date(2022, 10, 21),
    new Date(2022, 12, 31),
    1.1,
    '3276trf76gcwe67er23'
  ),
  createData(
    '2',
    'Mercy Relief Continues',
    'Jason',
    'JasonJason',
    'a@gmail.com',
    ContentState.ARCHIVED,
    [],
    ArticleType.INTERNAL,
    'dsfdsfdsfs',
    'dsfdsgfdsgfs',
    date_created,
    last_modified,
    1.2,
    '3276trf76gcfdsfswe67er23'
  ),
  createData(
    '3',
    'Midnights (3am Edition)',
    'tswift',
    'MasonJason',
    't.s@gmail.com',
    ContentState.DRAFT,
    [],
    ArticleType.INTERNAL,
    'dsfdsfdsfs',
    'dsfdsgfdsgfs',
    date_created,
    last_modified,
    1.2,
    '6gcfdsfswe67er23'
  ),
  createData(
    '4',
    'Red',
    'tswift',
    'MasonJason',
    't.s@gmail.com',
    ContentState.DRAFT,
    [],
    ArticleType.INTERNAL,
    'dsfdsfdsfs',
    'dsfdsgfdsgfs',
    date_created2,
    last_modified2,
    1.2,
    '6gcfdsfswe67er23'
  ),
  createData(
    '5',
    'folklore',
    'tayswift',
    'Lmao',
    't.s@gmail.com',
    ContentState.PUBLISHED,
    [],
    ArticleType.EXTERNAL,
    'dsfdsfdsfs',
    'dsfdsgfdsgfs',
    date_created2,
    last_modified2,
    1.2,
    '6gcfdsfde67er23'
  ),
  createData(
    '6',
    'Mercy Relief holds inauguration for whomever whoever Mercy Relief holds inauguration for whomever whoever',
    'Gottem',
    'Bruh',
    'gmail.com',
    ContentState.ARCHIVED,
    [],
    ArticleType.INTERNAL,
    'dsfdsfdsfs',
    'dsfdsgfdsgfs',
    date_created,
    last_modified,
    1.3,
    '6gcfdsfder23'
  ),
  createData(
    '7',
    'What can we do to sfgreghtrgtegerge',
    'Gottem',
    'Bruh',
    'gmail.com',
    ContentState.ARCHIVED,
    [],
    ArticleType.INTERNAL,
    'dsfdsfdsfs',
    'dsfdsgfdsgfs',
    date_created,
    last_modified,
    1.3,
    '6gcfdsfder23'
  ),

  // createData('one', date_created, last_modified, ContentState.ARCHIVED),
  // createData('two', date_created, last_modified, ContentState.ARCHIVED),
  // createData('three', date_created, last_modified, ContentState.ARCHIVED),
  // createData('four', date_created, last_modified, ContentState.DRAFT),
  // createData('five', date_created, last_modified, ContentState.DRAFT),
  // createData('six', date_created2, last_modified2, ContentState.DRAFT),
  // createData('seven', date_created2, last_modified2, ContentState.PUBLISHED),
  // createData('eight', date_created2, last_modified2, ContentState.PUBLISHED),
  // createData('nine', date_created2, last_modified2, ContentState.PUBLISHED),
  // createData('ten', date_created2, last_modified2, ContentState.PUBLISHED),
]
