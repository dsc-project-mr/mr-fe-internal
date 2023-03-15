export enum ContentState {
  DRAFT = 'Draft',
  PUBLISHED = 'Published',
  ARCHIVED = 'Archived',
}

export enum ArticleType {
  EXTERNAL = 'External',
  INTERNAL = 'Internal',
}

export enum ContentFilters {
  STATE = 'State',
  TYPE = 'Type',
  DATE_OF_CREATION = 'Date Of Creation',
  DATE_LAST_MODIFIED = 'Last Modified',
  TAGS = 'Tags',
}

export const CONTENT_ARTICLE_URL = '/content/article/'
