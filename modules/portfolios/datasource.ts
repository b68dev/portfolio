import type { StaticImageData } from 'next/image'
import type { Locale } from '../i18n/routing'
import envsyncImage from './images/envsync.png'
import envsyncLogo from './images/EnvSync.svg'
import pacsearchImage from './images/pacsearch.png'
import pacsearchLogo from './images/pacsearchLogo.png'
import picobaseImage from './images/picobase-hero.png'
import picobaseLogo from './images/picobase_logo.png'
import soundsynthImage from './images/SoundSynth.png'
import soundsynthLogo from './images/soundsynthLogo.png'
import textShareLogo from './images/textShare.png'
import textShareImage from './images/textShareImage.png'
import synodeImage from './images/SynodeImage.png'
import synodeLogo from './images/SynodeLogo.png'

interface PaletteSwatch {
  background: string
  foreground: string
}

export interface Portfolio {
  title: Record<Locale, string>
  slug: string
  logo: StaticImageData
  image: StaticImageData
  palette: PaletteSwatch
  description: Record<Locale, string>
  timeframe: Record<Locale, string>
  website: string
  hasDetail: boolean
}

export const PORTFOLIOS: Portfolio[] = [
  {
    title: {
      en: 'EnvSync - Sync environment variables across multiple deployments',
    },
    slug: 'envsync',
    website: 'https://envsync.cloud/',
    hasDetail: true,
    logo: envsyncLogo,
    image: envsyncImage,
    palette: {
      background: '#030115',
      foreground: '#1DB954',
    },
    description: {
      en: 'Keep your .env files, configuration secrets, and environment variables perfectly synchronized across development, staging, and production environments.',
    },
    timeframe: {
      en: '2025 - now',
    },
  },
  {
    title: {
      en: 'Synode - Secure, Offline p2p Payment App',
    },
    slug: 'synode',
    palette: {
      background: '#000',
      foreground: '#fff',
    },
    description: {
      en: 'Synode is payment app from the future, to unplug and pay.',
    },
    timeframe: {
      en: '2024',
    },
    website: 'https://github.com/TheNestDevs/Synode',
    hasDetail: true,
    logo: synodeLogo,
    image: synodeImage,
  },
  {
    title: {
      en: 'Pacsearch - Pacman Package Finder',
    },
    slug: 'pacsearch',
    palette: {
      background: '#1657FF',
      foreground: '#fff',
    },
    description: {
      en: 'Pacsearch is a package finder tool that helps you find the right packages for your projects.',
    },
    timeframe: {
      en: '2023 - 2024',
    },
    website: 'https://pacsearch.vercel.app/',
    hasDetail: false,
    logo: pacsearchLogo,
    image: pacsearchImage,
  },
  {
    title: {
      en: 'SoundSynth - Capture Your Thoughts',
    },
    slug: 'soundsynth',
    palette: {
      background: '#faded9',
      foreground: '#f2583d',
    },
    description: {
      en: 'Record, transcribe, and organize your ideas effortlessly. The smart way to manage your audio notes.',
    },
    timeframe: {
      en: '2023 - 2024',
    },
    website: 'https://github.com/BRAVO68WEB/SoundSynthV2',
    hasDetail: false,
    logo: soundsynthLogo,
    image: soundsynthImage,
  },
  {
    title: {
      en: 'Picobase - Develop APIs in secs',
    },
    slug: 'picobase',
    website: 'https://picobase.dev',
    hasDetail: false,
    logo: picobaseLogo,
    image: picobaseImage,
    palette: {
      background: '#fff',
      foreground: '#613dc1',
    },
    description: {
      en: 'Generate your unopinionated API with Framework and Database you desire 😉',
    },
    timeframe: {
      en: '2024 - 2025',
    },
  },
  {
    title: {
      en: 'TextShare - Live Collaboration Platform',
    },
    slug: 'textshare',
    palette: {
      background: '#f55897',
      foreground: '#fff',
    },
    description: {
      en: 'TextShare is a live collaboration platform that allows users to share and edit text documents in real-time.',
    },
    timeframe: {
      en: '2023 - 2024',
    },
    website: 'https://textshare.bravo68web.partykit.dev/',
    hasDetail: false,
    logo: textShareLogo,
    image: textShareImage,
  },
]

export const LATEST_PORTFOLIO = PORTFOLIOS[0]
