export type Area = {
  id: string
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

export type ProjectStatus = 'live' | 'in-progress' | 'archived'

export type Project = {
  slug: string
  title: string
  areas: Area['id'][]
  status: ProjectStatus
  description: string
  role: string
  stack: string[]
  thumbnail: string
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
  work: string
  about: string
  contact: string
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

export type SiteContent = {
  name: string
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
  hero: {
    photo: 'public/portfolio_pic.webp',
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
    secondaryCta: { label: 'Download resume', href: 'public/Victoria_Nikolaeva_Resume_2026.pdf' },
  },
  experience: {
    heading: 'Experience',
    intro: 'The soil that nuture my knowledge',
    resumeLabel: 'Download resume (PDF)',
    resumeHref: 'public/Victoria_Nikolaeva_Resume_2026.pdf',
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
    work: '[Work]',
    about: '[About]',
    contact: '[Contact]',
  },
  statusLine: 'Open to Work, Nov. 2026',

  areas: [
    {
      id: '[area-1]',
      name: '[Work area 1]',
      subtitle: '[Short subtitle]',
      description: '[One or two sentences about this area of work.]',
      tools: ['[Tool A]', '[Tool B]', '[Tool C]'],
    },
    {
      id: '[area-2]',
      name: '[Work area 2]',
      subtitle: '[Short subtitle]',
      description: '[One or two sentences about this area of work.]',
      tools: ['[Tool A]', '[Tool B]', '[Tool C]'],
    },
    {
      id: '[area-3]',
      name: '[Work area 3]',
      subtitle: '[Short subtitle]',
      description: '[One or two sentences about this area of work.]',
      tools: ['[Tool A]', '[Tool B]', '[Tool C]'],
    },
    {
      id: '[area-4]',
      name: '[Work area 4]',
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
      slug: '[project-one]',
      title: '[Project one]',
      areas: ['[area-1]'],
      status: 'live',
      description: '[What the project is and why it matters.]',
      role: '[My role]',
      stack: ['[Tech A]', '[Tech B]'],
      thumbnail: '[/images/project-one.png]',
    },
    {
      slug: '[project-two]',
      title: '[Project two]',
      areas: ['[area-2]', '[area-3]'],
      status: 'in-progress',
      description: '[What the project is and why it matters.]',
      role: '[My role]',
      stack: ['[Tech A]', '[Tech B]'],
      thumbnail: '[/images/project-two.png]',
    },
    {
      slug: '[project-three]',
      title: '[Project three]',
      areas: ['[area-4]'],
      status: 'archived',
      description: '[What the project is and why it matters.]',
      role: '[My role]',
      stack: ['[Tech A]', '[Tech B]'],
      thumbnail: '[/images/project-three.png]',
    },
  ],

  fieldNotes: [
    { date: '[YYYY-MM-DD]', tag: '[Tag]', title: '[Field note title]' },
    { date: '[YYYY-MM-DD]', tag: '[Tag]', title: '[Field note title]' },
    { date: '[YYYY-MM-DD]', tag: '[Tag]', title: '[Field note title]' },
  ],

  hobbies: [
    { name: '[Hobby]', description: '[A line about it.]' },
    { name: '[Hobby]', description: '[A line about it.]' },
    { name: '[Hobby]', description: '[A line about it.]' },
  ],

  funFact: '[A fun fact about me.]',

  toolbox: [
    { name: '[Group 1]', items: ['[Item]', '[Item]', '[Item]'] },
    { name: '[Group 2]', items: ['[Item]', '[Item]', '[Item]'] },
    { name: '[Group 3]', items: ['[Item]', '[Item]', '[Item]'] },
  ],

  contact: [
    { label: 'Email', href: '[mailto:you@example.com]' },
    { label: 'LinkedIn', href: '[https://linkedin.com/in/your-handle]' },
    { label: 'GitHub', href: '[https://github.com/your-handle]' },
  ],
}
