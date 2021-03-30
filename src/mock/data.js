import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sophia Lui | Student', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'update.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1PRIgwkadfOX5CglzU-9cZvBmBYBYWlhntEpiVtNAkMI/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: 'Instagram Clone',
    info: 'Built an Instagram Clone to learn more about the development of accessing data from the backend. To do so, Back4App was used to fetch the data...',
    info2: 'Features: <Home Feed>: Photos from other users with their captions||<Compose>: Take a photo directly from camera and post it to user feed ', 
    url: '',
    repo: 'https://github.com/sophiaallui/instagram', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'Twitter Clone',
    info: 'Built a Twitter clone to learn about how to use existing API to create a bridge between the clone app and the real app. This clone accesses user data through OAUTH to personalize the clone timeline and content...',
    info2: '',
    url: '',
    repo: 'https://github.com/sophiaallui/SimpleTweet', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'Flixster',
    info: 'Built a movie review app to learn about accessing JSON files from online...',
    info2: '',
    url: '',
    repo: 'https://github.com/sophiaallui/Flixster', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sophiaallui@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sophia-lui/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sophiaallui',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
