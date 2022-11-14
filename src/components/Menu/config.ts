import { MenuEntry } from 'moonwalkerswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://bsc-moonwalker-swap.vercel.app/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://bsc-moonwalker-swap.vercel.app/pool',
      },
    ],
  },
   {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
   },
   {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
   },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://moon-walker-swap-info-main.vercel.app',
      },
      {
        label: 'Tokens',
        href: 'https://moon-walker-swap-info-main.vercel.appp/tokens',
      },
      {
       label: 'Pairs',
       href: 'https://moon-walker-swap-info-main.vercel.app/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://moon-walker-swap-info-main.vercel.app/accounts',
      },
    ],
  },
  {
     label: 'IFO',
     icon: 'IfoIcon',
     href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/CryptoCoder50',
      },
      {
        label: 'Docs',
        href: 'https://moonwalkerjim.gitbook.io/bsc-moonwalkerswap-docs/',
      },
      {
        label: 'Blog',
        href: 'https://moonastrojim.medium.com/',
      },
    ],
  },
]

export default config
