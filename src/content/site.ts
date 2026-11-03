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
  location: string
  dates: string
  details: string[]
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
  top: string
  workAreas: string
  experience: string
  work: string
  about: string
  contact: string
}

export type NavLink = {
  label: string
  href: string
}

export type SiteContent = {
  name: string
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
    top: '[Hero heading]',
    workAreas: '[Work areas]',
    experience: '[Experience]',
    work: '[Work]',
    about: '[About]',
    contact: '[Contact]',
  },
  statusLine: '[Status line, e.g. Open to new roles · Based in City]',

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
      role: '[Job title]',
      company: '[Company]',
      location: '[City, Country]',
      dates: '[Start – End]',
      bullets: ['[What I did and the result.]', '[What I did and the result.]'],
      tags: ['[Tag]', '[Tag]'],
    },
    {
      role: '[Job title]',
      company: '[Company]',
      location: '[City, Country]',
      dates: '[Start – End]',
      bullets: ['[What I did and the result.]', '[What I did and the result.]'],
      tags: ['[Tag]', '[Tag]'],
    },
  ],

  education: [
    {
      school: '[School]',
      degree: '[Degree / Program]',
      location: '[City, Country]',
      dates: '[Start – End]',
      details: ['[Honors, focus, or relevant coursework.]'],
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
