import { shots } from './screens'

// Single place to edit your content. Items marked TODO need your confirmation.

export const profile = {
  name: 'Mohamed Monge',
  title: 'Mobile Developer',
  subtitle: 'Software Dev | CS Student',
  location: 'Egypt',
  intro:
    'Mobile developer focused on building clean, user-friendly app experiences with Flutter, Firebase, and modern UI patterns.',
  about: [
    'I am a mobile developer based in Egypt, building practical apps and learning through real projects that solve everyday problems.',
    'My work includes authentication flows, API integrations, local storage, responsive UI design, and app features that feel polished and easy to use.',
    'I am currently growing my skills as a software developer while building projects that combine technical quality with a strong user experience.',
  ],
  instagram: 'https://www.instagram.com/mohamedd_mongee/',
  x: 'https://x.com/UrFavMongee',
  facebook: 'https://www.facebook.com/mohamed.monge.56',
  whatsapp: 'https://wa.me/201159550736',
  github: 'https://github.com/mohamedmonge58-create',
  linkedin: 'https://www.linkedin.com/in/mohamed-monge-71675b380/',
  email: '',
}

export const skills: { group: string; items: string[] }[] = [
  { group: 'Mobile Development', items: ['Flutter', 'React Native'] },
  { group: 'Programming Languages', items: ['Dart', 'JavaScript', 'TypeScript'] },
  { group: 'State Management', items: ['Provider', 'ChangeNotifier'] },
  { group: 'Backend & APIs', items: ['Node.js', 'Express.js', 'REST APIs', 'Prisma'] },
  { group: 'Databases & Cloud', items: ['Firebase Authentication', 'Cloud Firestore', 'PostgreSQL', 'SharedPreferences'] },
  { group: 'UI/UX & Styling', items: ['UI/UX', 'Responsive Design'] },
  { group: 'Development Tools', items: ['Git', 'GitHub', 'Android Studio', 'VS Code'] },
]

export type Project = {
  title: string
  summary: string
  features: string[]
  stack: string[]
  status?: string
  image?: string
  screens?: string[]
  github?: string
  live?: string
  visible: boolean
}

export const projects: Project[] = [
  {
    title: 'Islami',
    summary: 'Islamic app with Quran reading, reciters, offline audio, prayer times and Adhan alerts.',
    features: [
      'Quran with search, recent surahs, ayah highlight and tafsir',
      'Reciters list with background playback and offline surah downloads',
      'Prayer times by location with countdown and Adhan alerts',
      'Azkar counters, hadith and Qibla direction',
    ],
    stack: ['Flutter', 'Dart', 'REST APIs', 'just_audio', 'audio_service', 'Dio', 'Kotlin (Android alarms)'],
    status: 'Preparing for Google Play release',
    screens: shots.islamii,
    github: 'https://github.com/mohamedmonge58-create/islamii_app',
    visible: true,
  },
  {
    title: 'Evently',
    summary: 'Event management app with authentication, event creation, favorites and theme settings.',
    features: [
      'Firebase sign up and login with persistent sessions',
      'Create, edit and browse events stored in Cloud Firestore',
      'Favorites, onboarding, light and dark themes',
    ],
    stack: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Provider', 'SharedPreferences'],
    screens: shots.evently,
    github: 'https://github.com/mohamedmonge58-create/Evently',
    visible: true,
  },
  {
    title: 'Movies App',
    summary: 'Flutter movie discovery app with splash screens, authentication, movie browsing, search, details, and profile editing.',
    features: [
      'Splash screens and app launch experience',
      'Login, create account and reset password flows',
      'Browse, search and explore movie collections',
      'Movie details screens with rich metadata and visuals',
      'Profile screen and edit profile functionality',
    ],
    stack: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Firebase Storage', 'Dio', 'BLoC', 'GoRouter', 'Google Sign-In'],
    screens: shots.moviesApp,
    github: 'https://github.com/mohamedmonge58-create/movies_app',
    visible: true,
  },
  {
    title: 'Coffee App',
    summary: 'Coffee shop app with welcome flow, authentication, favorites, cart, checkout, and profile screens.',
    features: [
      'Welcome and onboarding flow',
      'Sign in, register and password recovery screens',
      'Coffee shop home screen and browsing experience',
      'Favorites list and clear favorites actions',
      'Cart review, order confirmation and profile screen',
    ],
    stack: ['Flutter', 'Dart', 'Dio', 'BLoC', 'GoRouter', 'SharedPreferences', 'Cached Network Image'],
    screens: shots.coffeeApp,
    github: 'https://github.com/mohamedmonge58-create/coffee_shop',
    visible: true,
  },
  {
    title: 'M3loma',
    summary: 'Educational platform project currently in development, with a Flutter app and backend work in progress.',
    features: [],
    stack: ['Flutter', 'Dart', 'Node.js', 'PostgreSQL', 'Next.js'],
    status: 'In progress',
    screens: shots.m3loma,
    github: 'https://github.com/mohamedmonge58-create/M3loma-',
    visible: true,
  },
  {
    title: 'News App',
    summary: 'News reader with categories, search and article details in Arabic and English.',
    features: ['News by category and search via REST APIs', 'Arabic and English with saved language', 'Light and dark themes'],
    stack: ['Flutter', 'Dart', 'REST APIs', 'Provider', 'SharedPreferences', 'url_launcher'],
    screens: shots.news,
    github: 'https://github.com/mohamedmonge58-create/News_App',
    visible: true,
  },
]

export const education = [
  {
    title: "Bachelor's Degree, Computer Science",
    institution: 'Faculty of Science, Tanta University',
    period: '2020 – 2024',
    text: 'GPA: 2.64 (C+). Built a foundation in software development, problem solving, and practical app building.',
  },
]

export const projectExperience = [
  {
    title: 'Islamii App',
    text: 'Built a Flutter app for Quran reading, prayer times, Azkar, reciters, and offline audio features with REST API integration and local persistence.',
    stack: ['Flutter', 'Dart', 'REST APIs', 'SharedPreferences', 'audio_service', 'Dio'],
  },
  {
    title: 'Evently',
    text: 'Implemented Firebase authentication, Firestore CRUD, onboarding, favorites, and theme state in a polished app with a clear mobile UX.',
    stack: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Provider'],
  },
  {
    title: 'News App',
    text: 'Integrated NewsAPI data with category browsing, search, caching, and light/dark theme switching in a Flutter app.',
    stack: ['Flutter', 'Dart', 'Provider', 'REST APIs', 'url_launcher'],
  },
  {
    title: 'M3loma',
    text: 'Worked on a learning platform app and backend architecture with Flutter, Node.js, Prisma, PostgreSQL, and JWT-based API patterns.',
    stack: ['Flutter', 'Dart', 'Node.js', 'PostgreSQL', 'Prisma', 'Express.js'],
  },
]

export const learning = [
  { title: 'Flutter & Dart', text: 'Building and publishing public projects on GitHub, from API apps to Firebase-backed apps and mobile product flows.' },
  { title: 'Backend integration', text: 'Working with Node.js, Express, TypeScript, PostgreSQL, Prisma, and JWT-authenticated API patterns for mobile projects.' },
  { title: 'React Native', text: 'Learning React Native to broaden my mobile development skills alongside Flutter-based work.' },
]
