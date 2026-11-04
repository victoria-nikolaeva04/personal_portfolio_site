export type AreaId = 'build' | 'think' | 'design' | 'lead'

export type Area = {
  id: AreaId
  name: string
  subtitle: string
  description: string
  tools: string[]
}

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

export type Project = {
  slug: string
  title: string
  areas: AreaId[]
  description: string
  stack: string[]
  thumbnail: string
  thumbnailAlt: string
  github?: string
  liveUrl?: string
}

export type FieldNote = {
  date: string
  tag: string
  title: string
}

export type Hobby = {
  name: string
  description: string
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
  caseStudyHref: string
  githubLabel: string
  liveLabel: string
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

export type ContactCopy = {
  note: string
  heading: string
  roles: string
}

export type ToolboxCopy = {
  heading: string
  note: string
}

export type SiteContent = {
  name: string
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
  areas: Area[]
  jobs: Job[]
  education: Education[]
  projects: Project[]
  fieldNotes: FieldNote[]
  hobbies: Hobby[]
  funFact: string
  toolbox: ToolboxGroup[]
  contact: ContactLink[]
}

export const site: SiteContent = {
  name: 'Victoria Nikolaeva',
  skipLink: 'Skip to content',
  toolboxCopy: {
    heading: 'Skills',
    note: "What's on the bench?",
  },
  contactCopy: {
    note: 'say hello',
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
    caseStudyHref: '#',
    githubLabel: 'View source on GitHub',
    liveLabel: 'Visit the live site',
    emptyMessage: 'No projects yet',
  },
  hero: {
    photo: '/portfolio_pic.webp',
    photoAlt: 'Portrait of Victoria Nikolaeva, smiling',
    greeting: "Hi, I'm",
    lead: 'I',
    phrases: [
      'am a Software Developer',
      'am a UX/UI Designer',
      'am an AI engineer',
      'am always learning',
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
      { label: 'Resume', href: '#resume' },
    ],
    cta: { label: 'Say hi', href: '#contact' },
  },
  sections: {
    workAreas: '[Work areas]',
  },
  statusLine: 'Open to Work, Nov. 2026',

  areas: [
    {
      id: 'build',
      name: 'Build',
      subtitle: '[Short subtitle]',
      description: '[One or two sentences about this area of work.]',
      tools: ['[Tool A]', '[Tool B]', '[Tool C]'],
    },
    {
      id: 'think',
      name: 'Think',
      subtitle: '[Short subtitle]',
      description: '[One or two sentences about this area of work.]',
      tools: ['[Tool A]', '[Tool B]', '[Tool C]'],
    },
    {
      id: 'design',
      name: 'Design',
      subtitle: '[Short subtitle]',
      description: '[One or two sentences about this area of work.]',
      tools: ['[Tool A]', '[Tool B]', '[Tool C]'],
    },
    {
      id: 'lead',
      name: 'Lead',
      subtitle: '[Short subtitle]',
      description: '[One or two sentences about this area of work.]',
      tools: ['[Tool A]', '[Tool B]', '[Tool C]'],
    },
  ],

  jobs: [
    {
      role: 'Frontend Engineer',
      company: 'TCGSpot',
      location: 'Mantua, NJ',
      dates: 'Jul. 2025 - Mar. 2026',
      bullets: ['[What I did and the result.]', '[What I did and the result.]'],
      tags: ['[Tag]', '[Tag]'],
    },
    {
      role: 'Undergraduate Researcher',
      company: 'Univeristy of Delaware - Sensify Labs',
      location: 'Newark, DE',
      dates: 'Sep. 2024 - Dec. 2025',
      bullets: ['[What I did and the result.]', '[What I did and the result.]'],
      tags: ['[Tag]', '[Tag]'],
    },
    {
      role: 'Web Developer & Graphic Design Intern',
      company: 'Delmarva Digital',
      location: 'Laural, DE',
      dates: 'Jun. 2024 - Aug. 2024',
      bullets: ['[What I did and the result.]', '[What I did and the result.]'],
      tags: ['[Tag]', '[Tag]'],
    },
    {
      role: 'Seasonal Teaching Assistant',
      company: 'Univeristy of Delaware - CIS Department',
      location: 'Newark, DE',
      dates: 'Aug. 2023 - Dec. 2025',
      bullets: ['[What I did and the result.]', '[What I did and the result.]'],
      tags: ['[Tag]', '[Tag]'],
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
        'Technical Writing',
      ],
    },
  ],

  projects: [
    {
      slug: 'Arcana Noctis',
      title: 'Arcana Noctis',
      areas: ['build'],
      description: '[What the project is and why it matters.]',
      stack: ['[Tech A]', '[Tech B]'],
      thumbnail: '',
      thumbnailAlt: '[Screenshot of the project]',
      github: '#',
      liveUrl: '#',
    },
    {
      slug: 'Soundmate',
      title: 'Soundmate',
      areas: ['think', 'design'],
      description: '[What the project is and why it matters.]',
      stack: ['[Tech A]', '[Tech B]'],
      thumbnail: '',
      thumbnailAlt: '[Screenshot of the project]',
      github: '#',
      liveUrl: '#',
    },
    {
      slug: 'AI Career Quiz',
      title: 'AI Career Quiz',
      areas: ['lead'],
      description: '[What the project is and why it matters.]',
      stack: ['[Tech A]', '[Tech B]'],
      thumbnail: '',
      thumbnailAlt: '[Screenshot of the project]',
      github: '#',
      liveUrl: '#',
    },
  ],

  fieldNotes: [
    { date: '2026-11-03', tag: 'Work', title: 'Working on this portfolio!' },
    {
      date: '2026-10-29',
      tag: 'Adventure',
      title: "Went to Adobe's ColdFusion Confrence!",
    },
    { date: '2026-10-28', tag: 'Work', title: 'Finish up Arcana Noctis!' },
  ],

  hobbies: [
    { name: 'Sketching', description: '[A line about it.]' },
    { name: 'Practicing Yoga', description: '[A line about it.]' },
    { name: 'Taking Care of my Plants', description: '[A line about it.]' },
  ],

  funFact: 'Whenever I need to focus, I like to wear a crown ',

  toolbox: [
    { name: 'Languages', items: ['Python', 'TypeScript', 'Swift', 'HTML', 'CSS'] },
    {
      name: 'Frameworks & Libraries',
      items: ['React', 'Python Panda', 'Python Matplotlib'],
    },
    { name: 'Tools & DevOps', items: ['VsCode', 'Agile Methodology', 'Scrum Methodology'] },
    {
      name: 'Design & Collaboration',
      items: ['Figma', 'Wireframing', 'Teamwork'],
    },
  ],

  contact: [
    { label: 'Email me', href: 'mailto:vnikolaeva04@gmail.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/victoria-nikolaeva04' },
    { label: 'GitHub', href: 'https://github.com/victoria-nikolaeva04' },
  ],
}
