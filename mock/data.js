import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Palisson Technologies | Bringing You Innovation', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This is a portfolio website for Palisson Technologies. Palisson Technologies is a front-end development company currently based in East London, South Africa. Founded in 2020, our focus is on developing modern and attractive user interfaces, but without neglecting the core functionalities of a website such as fast page load speeds, responsive design and ease of use.', // e.g: Welcome to my website desc
};

// HERO DATA
export const heroData = {
  title: 'Hello, we are', // introductory greeting
  name: 'Palisson Technologies', // title name
  subtitle: 'here to bring you innovation', // second line
  cta: 'Learn More', // call to action button
};

// ABOUT DATA
export const aboutData = {
  img: 'Logo Variation.jpg',
  paragraphOne: 'Palisson Technologies is a front-end development company currently based in East London, South Africa. Founded in 2020, our focus is on developing modern and attractive user interfaces, but without neglecting the core functionalities of a website such as fast page load speeds, responsive design and ease of use.',
  paragraphTwo: 'Under the lead of Luyolo Paliso, this startup is keen on becoming a game changer in the field of web development locally, and in the near future, nationally.',
  paragraphThree: 'At Palisson Technologies we use a wide variety of technologies to create websites. The most notable ones are React, Bootstrap, Bulma, HTML and JavaScript.',
  paragraphFour: 'For more information about the CEO, have a look at the resume below.',
  resume: 'https://yolopaliso.co.za/assets/Luyolo_Paliso_CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'forkify.png',
    title: 'Forkify Recipe Web Application',
    info: "This is a JavaScript web application which is built around MVC and multiple ES6 concepts such as promises, AJAX and API calls, asynchronous Javascript and much more. It is designed to call recipes from an API and display them on the UI. Thereafter serving suggestions will be shown and with the option of adding them onto a shopping list. More features include, 'liking' a recipe which is stored in a section on the page that displays all of the 'liked' recipes.",
    info2: '',
    url: 'https://yolopaliso.co.za/forkify/index.html',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'budget.png',
    title: 'Budgeting Web Application',
    info: 'This is a budgeting app which functions using Javascript. It entails various aspects of Javascript such as DOM manipulation, event delegation, string manipulation and OOP (Object Orientated Programming).',
    info2: '',
    url: 'https://yolopaliso.co.za/BudgetWebApp/index.html',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'eagle-ropes.png',
    title: 'Eagle Ropes (Pty) Ltd',
    info: 'Using modern web development technologies such as React, HTML, Bulma/Bootstrap and JavaScript, we were able to create a sleek, intuitive and attractive portfolio site for Eagle Ropes (Pty) Ltd.',
    info2: '',
    url: 'https://eagle-ropes.co.za',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'LM Logo.jpg',
    title: 'LM Holdings (Pty) Ltd',
    info: 'Using modern web development technologies such as React, HTML, Bulma/Bootstrap and JavaScript, we were able to create a sleek, intuitive and attractive portfolio site for LM Holdings (Pty) Ltd.',
    info2: '',
    url: 'https://lm-holdings.co.za',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Africanize logo-2.png',
    title: 'Africanize',
    info: 'On this particular project we offered our UI/UX design skills, focusing on creating an intuitive and easy to use experience for end users.',
    info2: '',
    url: 'https://africanize-app.web.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Hery Lemo logo.jpg',
    title: 'Hery Lemo Beauty',
    info: 'On this particular project we offered our web design skills in order to showcase a new and upcoming brand in the most compelling and attractive form.',
    info2: '',
    url: 'https://herylemobeauty.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Final Go For Glow logo.png',
    title: 'Go For Glow',
    info: 'On this particular project we offered our web development skills by creating a fully functional eCommerce platform for the purpose of buying and selling beauty products.',
    info2: '',
    url: 'https://gofor-glow.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'web-design.png',
    title: 'Luyolo Paliso | Design Project Work',
    info: 'A brief look at our graphic design projects',
    info2: '',
    url: 'https://yolopaliso.co.za/project-work.html',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Keen on working with us? Great! Get in contact with us simply by clicking on the button below', // cta text
  btn: 'Contact Us', // text in the button
  email: 'luyolopaliso@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/palisson_tech',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/luyolo-paliso-812681138',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yolopalisson',
    },
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://wa.me/27842169522',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
