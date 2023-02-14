export enum CampaignStatus {
  DRAFT = 'Draft',
  PUBLISHED = 'Published',
  ARCHIVED = 'Archived',
}

export type Campaign = {
  name: string
  content: string
  donors: number
  amount: number
  country: string
  status: CampaignStatus
}
