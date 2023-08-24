import FacebookIcon from '@/components/icons/FacebookIcon'
import InstagramIcon from '@/components/icons/InstagramIcon'
import TwitterIcon from '@/components/icons/TwitterIcon'
import WhatsappIcon from '@/components/icons/WhatsappIcon'
import { NavigateItemsType } from '@/typings/footer'

export const navigate: NavigateItemsType[] = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'About',
    path: '#about'
  },
  {
    title: 'Services',
    path: '#services'
  },
  {
    title: 'Terms & Conditions',
    path: '#terms'
  },
  {
    title: 'Contact',
    path: '#contact'
  }
]

export const shop: NavigateItemsType[] = [
  {
    title: 'Women',
    path: '#women'
  },
  {
    title: 'Men',
    path: '#'
  },
  {
    title: 'Jackets',
    path: '#'
  },
  {
    title: 'New Arrivals',
    path: '#'
  },
  {
    title: 'Hot Picks',
    path: '#'
  }
]
export const explore: NavigateItemsType[] = [
  {
    title: 'T-shirts',
    path: '#'
  },
  {
    title: 'My Orders',
    path: '#'
  },
  {
    title: 'wishlist',
    path: '#'
  },
  {
    title: 'Coats',
    path: '#'
  }
]

export const socialLinks = [
  {
    title: 'Facebook',
    path: 'https://www.facebook.com/',
    icon: FacebookIcon
  },
  {
    title: 'Twitter',
    path: 'https://twitter.com/',
    icon: TwitterIcon
  },
  {
    title: 'Instagram',
    path: 'https://www.instagram.com/',
    icon: InstagramIcon
  },
  {
    title: 'Whatsapp',
    path: 'https://www.whatsapp.com/',
    icon: WhatsappIcon
  }
]
