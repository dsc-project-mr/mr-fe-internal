export const sidebarData: SidebarData[] = [
  {
    title: 'Campaigns',
    route: '/campaigns',
    subheaders: [
      {
        title: 'Donations',
        route: '/donations',
        tabs: [],
      },
      {
        title: 'Email',
        route: '/',
        tabs: [],
      },
    ],
  },
  {
    title: 'Content',
    route: '/content',
    subheaders: [
      {
        title: 'Article',
        route: '/article',
        tabs: ['View Article', 'Edit Article'],
      },
      {
        title: 'Website Home Page',
        route: '/',
        tabs: ['Home'],
      },
      {
        title: 'Website Contact Page',
        route: '/',
        tabs: ['Contact'],
      },
    ],
  },
  {
    title: "Customer's Database",
    route: '/',
    subheaders: [],
  },
  {
    title: 'Social Media Analytics',
    route: '/',
    subheaders: [],
  },
  {
    title: 'User Accounts (Internal Portal)',
    route: '/user-management',
    subheaders: [],
  },
  {
    title: 'Settings',
    route: '/settings',
    subheaders: [],
  },
]

export type SidebarData = {
  title: string
  route: string
  subheaders: SubheaderData[]
}

export type SubheaderData = {
  title: string
  route: string
  tabs: string[]
}
