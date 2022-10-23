export const sidebar_data: SidebarData[] = [
  {
    title: 'Campaigns',
    subheaders: [
      { title: 'Donations', tabs: [] },
      { title: 'Email', tabs: [] },
    ],
  },
  {
    title: 'Content',
    subheaders: [
      { title: 'Article', tabs: ['View Article', 'Edit Article'] },
      { title: 'Website Home Page', tabs: ['Home'] },
      { title: 'Website Contact Page', tabs: ['Contact'] },
    ],
  },
  {
    title: "Customer's Database",
    subheaders: [],
  },
  {
    title: 'Social Media Analytics',
    subheaders: [],
  },
  {
    title: 'User Accounts (Internal Portal)',
    subheaders: [],
  },
  {
    title: 'Settings',
    subheaders: [],
  },
]

export type SidebarData = {
  title: string
  subheaders: SubheaderData[]
}

export type SubheaderData = {
  title: string
  tabs: string[]
}
