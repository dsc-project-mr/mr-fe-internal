export const sidebarData: SidebarData[] = [
  {
    title: 'Campaigns',
    route: '/campaigns',
    imgSrc: 'campaign_icon.png',
    subheaders: [
      {
        title: 'Donations',
        route: '/donations',
        imgSrc: 'donations_icon.png',
      },
      {
        title: 'Email',
        route: '/email',
        imgSrc: 'email_icon.png',
      },
    ],
  },
  {
    title: 'Content',
    route: '/content',
    imgSrc: 'content_icon.png',
    subheaders: [
      {
        title: 'Article',
        route: '/articles',
        imgSrc: 'article_icon.png',
      },
      {
        title: 'Website Home Page',
        route: '/',
        imgSrc: 'website_home_page_icon.png',
      },
    ],
  },
  {
    title: "Customer's Database",
    route: '/customers',
    imgSrc: 'customer_database_icon.png',
    subheaders: [],
  },
  {
    title: 'Social Media Analytics',
    route: '/analytics',
    imgSrc: 'social_media_analytics_icon.png',
    subheaders: [],
  },
  {
    title: 'User Accounts (Internal Portal)',
    route: '/users',
    imgSrc: 'user_accounts_icon.png',
    subheaders: [],
  },
  {
    title: 'Settings',
    route: '/settings',
    imgSrc: 'settings_icon.png',
    subheaders: [],
  },
  {
    title: 'Help',
    route: '/help',
    imgSrc: 'help_icon.png',
    subheaders: [],
  },
]

export type SidebarData = {
  title: string
  route: string
  imgSrc: string
  subheaders: SubheaderData[]
}

export type SubheaderData = {
  title: string
  route: string
  imgSrc: string
}
