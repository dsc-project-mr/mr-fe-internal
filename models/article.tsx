import { ArticleType, ContentState } from 'constants/content'

export interface Article {
  _id: string
  title: string
  author: string
  updatedBy: string
  latestEditorEmail: string
  state: string
  tags: string[]
  type: string
  imageUrl: string
  contentUrl: string
  createdAt: string
  updatedAt: string
  __v: number
  id: string
}

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

export function mapResponseToArticleRowData(res: Article): ArticleRowData {
  return {
    _id: res._id,
    title: res.title,
    author: res.author,
    updatedBy: res.updatedBy,
    latestEditorEmail: res.latestEditorEmail,
    state: res.state as ContentState,
    tags: res.tags,
    type: res.type as ArticleType,
    imageUrl: res.imageUrl,
    contentUrl: res.contentUrl,
    createdAt: new Date(res.createdAt),
    updatedAt: new Date(res.updatedAt),
    __v: res.__v,
    id: res._id,
  }
}

export function mapGetAllResponseToArticleRowData(
  res: Article[]
): ArticleRowData[] {
  return res.map((content) => mapResponseToArticleRowData(content))
}

const date_created = new Date(2012, 4, 20)
const last_modified = new Date(2013, 4, 20)

const date_created2 = new Date('2010-08-17T12:01:55.277Z')
const last_modified2 = new Date('2014-12-31T12:01:55.277Z')

export const SampleContentResponse = {
  _id: '63bd53b3a9e78b04587d913b',
  title: 'new article aft update',
  author: '639f299c5b0af3b82a92c2b2',
  updatedBy: '639f299c5b0af3b82a92c2b2',
  latestEditorEmail: 'johndoe@gg.com',
  state: 'Draft',
  tags: [],
  type: 'External',
  imageUrl: '',
  contentUrl: '',
  createdAt: '2023-01-10T12:01:55.277Z',
  updatedAt: '2023-01-10T12:01:55.277Z',
  __v: 0,
  id: '63bd53b3a9e78b04587d913b',
}

const SampleContentResponseTwo = {
  _id: '63bd53b3a9e78b04587d913b',
  title: 'Adsfdsfds',
  author: '639f299c5b0af3b82a92c2b2',
  updatedBy: '639f299c5b0af3b82a92c2b2',
  latestEditorEmail: 'johndoe@gg.com',
  state: 'Archived',
  tags: [],
  type: 'Internal',
  imageUrl: '',
  contentUrl: '',
  createdAt: '2022-01-10T12:01:55.277Z',
  updatedAt: '2022-01-10T12:01:55.277Z',
  __v: 0,
  id: '63bd53b3a9e78b04587d913b',
}

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
  mapResponseToArticleRowData(SampleContentResponse),
  mapResponseToArticleRowData(SampleContentResponseTwo),
]
