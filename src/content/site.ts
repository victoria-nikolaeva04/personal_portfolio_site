export type Job = {
  role: string
  company: string
  location: string
  dates: string
  bullets: string[]
  tags: string[]
}

export type Education = {
  school: string
  degree: string
  minor: string
  graduation: string
  honors: string
  coursework: string[]
}

export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  slug: string
  title: string
  description: string
  stack: string[]
  thumbnail: string
  thumbnailAlt: string
  images?: ProjectImage[]
  github?: string
  liveUrl?: string
}

export type Hobby = {
  name: string
}

export type ToolboxGroup = {
  name: string
  items: string[]
}

export type ContactLink = {
  label: string
  href: string
}

export type SectionHeadings = {
  workAreas: string
}

export type NavLink = {
  label: string
  href: string
}

export type Hero = {
  photo: string
  photoAlt: string
  greeting: string
  lead: string
  phrases: string[]
  subtitle: string
  primaryCta: NavLink
  secondaryCta: NavLink
}

export type ExperienceCopy = {
  heading: string
  intro: string
  resumeLabel: string
  resumeHref: string
  educationLabel: string
  courseworkLabel: string
  minorLabel: string
}

export type ProjectsCopy = {
  heading: string
  stackLabel: string
  caseStudyLabel: string
  githubLabel: string
  liveLabel: string
  noGithubLabel: string
  noLiveLabel: string
  emptyMessage: string
}

export type AboutCopy = {
  label: string
  intro: string
  hobbiesLabel: string
  funFactLabel: string
  notesHeading: string
  notesLink: NavLink
}

export type NotesCopy = {
  note: string
  heading: string
  allLabel: string
  emptyMessage: string
  minutesSuffix: string
  backLabel: string
  backToHomeLabel: string
  nextLabel: string
  notFoundNote: string
  notFoundHeading: string
  notFoundBody: string
}

export type ContactCopy = {
  note: string
  heading: string
  roles: string
}

export type ToolboxCopy = {
  heading: string
  note: string
}

export type CaseStudyCopy = {
  roleLabel: string
  teamLabel: string
  timelineLabel: string
  toolsLabel: string
  backLabel: string
  galleryLabel: string
  backToProjectsLabel: string
  previousLabel: string
  nextLabel: string
  comingSoon: string
  notFoundNote: string
  notFoundHeading: string
  notFoundBody: string
}

export type SiteContent = {
  name: string
  caseStudyCopy: CaseStudyCopy
  notesCopy: NotesCopy
  toolboxCopy: ToolboxCopy
  contactCopy: ContactCopy
  about: AboutCopy
  projectsCopy: ProjectsCopy
  experience: ExperienceCopy
  hero: Hero
  footer: {
    credit: string
    updated: string
  }
  skipLink: string
  nav: {
    links: NavLink[]
    cta: NavLink
  }
  sections: SectionHeadings
  statusLine: string
  jobs: Job[]
  education: Education[]
  projects: Project[]
  hobbies: Hobby[]
  funFact: string
  toolbox: ToolboxGroup[]
  contact: ContactLink[]
}

export const site: SiteContent = {
  name: 'Victoria Nikolaeva',
  skipLink: 'Skip to content',
  notesCopy: {
    note: "what I'm learning, as I learn it",
    heading: 'Field notes',
    allLabel: 'All',
    emptyMessage: 'No notes with that tag yet',
    minutesSuffix: 'min read',
    backLabel: '← All notes',
    backToHomeLabel: 'Back to home',
    nextLabel: 'Next note →',
    notFoundNote: 'hmm, nothing growing here',
    notFoundHeading: "That note doesn't exist (yet).",
    notFoundBody:
      'The link may be out of date. The notes list has everything that is ready to read.',
  },
  caseStudyCopy: {
    roleLabel: 'Role',
    teamLabel: 'Team',
    timelineLabel: 'Timeline',
    toolsLabel: 'Tools',
    backLabel: '← Back to projects',
    galleryLabel: 'Project screenshots',
    backToProjectsLabel: 'Back to all projects',
    previousLabel: '← Previous project',
    nextLabel: 'Next project →',
    comingSoon:
      'The full write-up for this project is still growing. Check back soon.',
    notFoundNote: 'hmm, nothing growing here',
    notFoundHeading: "That Project doesn't exist (yet).",
    notFoundBody:
      'The link may be out of date, or this project does not have a write-up yet. The projects list has everything that is ready to read.',
  },
  toolboxCopy: {
    heading: 'Skills',
    note: "What's on the bench?",
  },
  contactCopy: {
    note: 'Say Hello!',
    heading: "Let's grow something together!",
    roles:
      'Looking for a girl like me! Reach out whether you want to talk about projects, opportunities, or just saying hi!',
  },
  about: {
    label: 'Off the Clock',
    intro:
      'Outside of the job, I am a bubbly energetic person with alot of love for my friends and family. I am a big fan anything artistic and try everyday to have a little whimsy in my life!',
    hobbiesLabel: "When I'm not coding:",
    funFactLabel: 'Fun fact:',
    notesHeading: 'Field notes',
    notesLink: { label: 'All notes →', href: '#' },
  },
  projectsCopy: {
    heading: 'Projects',
    stackLabel: 'Stack',
    caseStudyLabel: 'Learn More →',
    githubLabel: 'View source on GitHub',
    liveLabel: 'Visit the live site',
    noGithubLabel: 'Source code not available',
    noLiveLabel: 'No live site yet',
    emptyMessage: 'No projects yet',
  },
  hero: {
    photo: '/portfolio_pic.webp',
    photoAlt: 'Portrait of Victoria Nikolaeva, smiling',
    greeting: "Hi, I'm",
    lead: 'I',
    phrases: [
      'build web apps',
      'design for people',
      'integrate AI into workflows',
      'shape products',
    ],
    subtitle: 'Recent CS Graduate with a lot of Heart',
    primaryCta: { label: 'See my work', href: '#work' },
    secondaryCta: {
      label: 'Download resume',
      href: '/Victoria_Nikolaeva_Resume_2026.pdf',
    },
  },
  experience: {
    heading: 'Experience',
    intro: 'The soil that nuture my knowledge',
    resumeLabel: 'Download resume (PDF)',
    resumeHref: '/Victoria_Nikolaeva_Resume_2026.pdf',
    educationLabel: 'Education',
    courseworkLabel: 'Coursework',
    minorLabel: 'Minor',
  },
  footer: {
    credit: 'Designed and built by',
    updated: 'Watered weekly ·  Last updated Nov. 2026',
  },
  nav: {
    links: [
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#work' },
      // { label: 'Field notes', href: '#notes' },
      { label: 'About', href: '#about' },
      // { label: 'Resume', href: '#resume' },
    ],
    cta: { label: 'Say hi', href: '#contact' },
  },
  sections: {
    workAreas: 'What I do',
  },
  statusLine: 'Open to Work, Nov. 2026',

  jobs: [
    {
      role: 'Frontend Engineer',
      company: 'TCGSpot',
      location: 'Mantua, NJ',
      dates: 'Jul. 2025 - Mar. 2026',
      bullets: [
        'Designed and implemented the frontend UI for a trading card mobile app using Figma and Swift.',
        'Worked with a cross-functional startup team on the design and development of the platform.',
        "Gathered requirements from 400+ potential end-users to validate the application's features.",
      ],
      tags: ['Swift', 'Figma', 'User research'],
    },
    {
      role: 'Undergraduate Researcher',
      company: 'University of Delaware - Sensify Labs',
      location: 'Newark, DE',
      dates: 'Sep. 2024 - Dec. 2025',
      bullets: [
        'Contributed to DoveChat, an AI therapist app supporting individuals with ADHD.',
        'Created an AI integration framework with the OpenAI API, turning research and product requirements into an initial app structure.',
        'Applied iterative design methods to evaluate and refine AI-assisted user experiences.',
      ],
      tags: ['OpenAI API', 'AI integration', 'Iterative design'],
    },
    {
      role: 'Web Developer & Graphic Design Intern',
      company: 'Delmarva Digital',
      location: 'Laurel, DE',
      dates: 'Jun. 2024 - Aug. 2024',
      bullets: [
        'Researched, designed, implemented, and reviewed tasks across multiple client projects.',
        'Built user-friendly front-end interfaces that met accessibility standards.',
        'Reviewed and refined client work to meet usability and performance standards.',
      ],
      tags: ['Frontend', 'Accessibility', 'Graphic design'],
    },
    {
      role: 'Seasonal Teaching Assistant',
      company: 'University of Delaware - CIS Department',
      location: 'Newark, DE',
      dates: 'Aug. 2023 - Dec. 2025',
      bullets: [
        'Supported 100+ students per semester across CISC 106, 108, 275, and 375.',
        'Reinforced software development concepts by guiding students through assignments, debugging, and technical questions.',
      ],
      tags: ['Teaching', 'Debugging', 'Mentoring'],
    },
  ],

  education: [
    {
      school: 'University of Delaware',
      degree: 'Bachelor of Arts & Science - Computer Science',
      minor: ' Interactive Media Design',
      graduation: 'Dec. 2025',
      honors: 'Awards: Hatem M. Khalil Memorial Award',
      coursework: [
        'Human-Computer Interaction',
        'Software Development',
        'Web Technologies',
        'DevOps',
        'Databases',
        'Data Structures',
        'Systems Programming',
        'Machine Organization & Assembly Language',
        'Technical Writing',
      ],
    },
  ],

  projects: [
    {
      slug: 'arcana-noctis',
      title: 'Arcana Noctis',
      description:
        'A tarot reading site built around the 78-card Rider-Waite-Smith deck, with daily readings, a card guide, and an AI Oracle that weaves your cards into one story.',
      stack: [
        'Python',
        'Flask',
        'Gemini API',
        'Pandas',
        'HTML/CSS',
        'PythonAnywhere',
      ],
      thumbnail: '',
      thumbnailAlt: 'A three-card reading on Arcana Noctis',
      github: 'https://github.com/victoria-nikolaeva04/project_tarot_card',
      liveUrl: 'https://vniko.pythonanywhere.com/',
    },
    {
      slug: 'soundmate',
      title: 'SoundMate',
      description:
        'A full-stack social music-matching platform that calculates listener compatibility from Spotify profile data, with friend connections and event creation and joining.',
      stack: [
        'TypeScript',
        'React',
        'NestJS',
        'Prisma',
        'Supabase',
        'Auth0',
        'Spotify API',
      ],
      thumbnail: '',
      thumbnailAlt: 'The Soundmate landing page',
      github: 'https://github.com/UD-CISC474-F25/SoundMate',
      liveUrl: 'https://soundmate.soundmatedevs.workers.dev/',
    },
    {
      slug: 'tcgspot',
      title: 'TCGSpot',
      description:
        'A trading card mobile app built with a cross-functional startup team. I designed and built the frontend and gathered requirements from 400+ potential users.',
      stack: ['Swift', 'SwiftUI', 'Figma'],
      thumbnail: '',
      thumbnailAlt: 'The TCGSpot team',
      liveUrl: 'https://tcg-spot.com/',
    },
    {
      slug: 'discord-bot',
      title: 'Discord Bot',
      description:
        'An interactive Discord bot command that pulls Google Calendar events into a Discord message, with a filter system. Built with Agile methods.',
      stack: ['TypeScript', 'Node.js', 'discord.js', 'MongoDB', 'Google API'],
      thumbnail: '',
      thumbnailAlt: 'The Discord Bot calendar feature',
      github: 'https://github.com/CISC375/SageTeamX',
    },
    {
      slug: 'ai-career-quiz',
      title: 'AI Career Quiz',
      description:
        'An interactive career suggestion platform that generates AI-driven reports on industries, average salaries, and job positions, built with Agile methods.',
      stack: ['TypeScript', 'React', 'React Native', 'OpenAI API', 'HTML/CSS'],
      thumbnail: '',
      thumbnailAlt: 'The AI Career Quiz',
      github: 'https://github.com/victoria-nikolaeva04/CISC275_Project-Quiz',
      liveUrl: 'https://vikiniki123.github.io/starter_helpi/',
    },
  ],

  hobbies: [
    { name: 'Sketching' },
    { name: 'Practicing Yoga' },
    {
      name: 'Taking Care of my Plants',
    },
  ],

  funFact: 'Whenever I need to focus, I like to wear a crown ',

  toolbox: [
    {
      name: 'Languages',
      items: [
        'Python',
        'TypeScript',
        'JavaScript',
        'Swift',
        'SQL',
        'HTML',
        'CSS',
      ],
    },
    {
      name: 'Frameworks & Libraries',
      items: [
        'React',
        'React Native',
        'SwiftUI',
        'NestJS',
        'Prisma',
        'Bootstrap',
        'Tailwind CSS',
        'Node.js',
        'Python Pandas',
        'Python Matplotlib',
      ],
    },
    {
      name: 'Tools & DevOps',
      items: [
        'Git',
        'GitHub',
        'VSCode',
        'REST APIs',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Supabase',
        'OpenAI API',
        'Agile Methodology',
        'Scrum Methodology',
      ],
    },
    {
      name: 'Design & Collaboration',
      items: [
        'Figma',
        'Framer',
        'Canva',
        'Adobe Suite',
        'Wireframing',
        'Design Thinking',
        'Teamwork',
        'Project Management',
        'Communication',
        'Leadership',
        'Mentoring',
        'Problem Solving',
        'Adaptability',
        'Time Management',
      ],
    },
  ],

  contact: [
    { label: 'Email me', href: 'mailto:vnikolaeva04@gmail.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/victoria-nikolaeva04' },
    { label: 'GitHub', href: 'https://github.com/victoria-nikolaeva04' },
  ],
}
