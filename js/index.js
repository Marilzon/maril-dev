const root = document.querySelector('#root');
const profile = {
  name: 'Marilzon de Sousa',
  city: 'Lençóis Paulista - SP',
  age: 28,
  education: ' • Analise e Desenvolvimento de Sistemas - Universidade Estácio de Sá (2020-2022)',
  courses: [
    ' • Inglês Básico, CNA',
    ' • GoStack – Bootcamp desenvolvimento WEB e MOBILE, RocketSeat',
  ],
  social: {
    phone: '(14) 9 9140-9482',
    whatsapp: 'https://api.whatsapp.com/send?phone=5514991409482&text=Ol%C3%A1%20marilzon!',
    email: 'maxmaril@hotmail.com',

    linkedin: 'https://www.linkedin.com/in/marilzon',
    github: 'https://github.com/Marilzon',
    curriculum: 'https://github.com/Marilzon/maril-dev/blob/master/Marilzon%20%20de%20Sousa%20-%20CURRICULO.pdf',
  },
  images: {
    curriculumSvg: './images/curriculum.svg',
    githubSvg: './images/github.svg',
    linkedInSvg: './images/linkedin.svg',
    whatsappSvg: './images/whatsapp.svg',
    emailSvg: './images/email.svg',
  },
  skills: [
    ' • HTML5',
    ' • CSS 3',
    ' • JavaScript: stacks Node.js, React e React-Native ',
  ],
  portfolio: [
    'https://marilzon.github.io/handlerArrays',
    'https://marilzon.github.io/FizzBuzz',
  ],
};

function addElement(tag, content) {
  const text = `
    <${tag}>${content}</${tag}>
  `;
  root.insertAdjacentHTML('beforeend', text);
}

function copyValue() {
  const copyText = document.querySelector('#myInput');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
  Swal.fire({
    position: 'bottom',
    icon: 'success',
    title: 'Email copiado!',
    showConfirmButton: false,
    timer: 1500,
  });
}

const title = 'Maril - Desenvolvedor Front End';
const myResume = `
  Olá, sou <u>${profile.name}</u> moro atualmente em ${profile.city}, tenho ${profile.age} anos
  e estou em busca de oportunidades na area de <strong>Desenvolvedimento WEB</strong>
`;
const socialLinks = `
  <a class='svg-link' target='_blank' href='${profile.social.curriculum}'>
    <img class='svg' src='${profile.images.curriculumSvg}' alt='Curriculo logo'>
    Curriculo
  </a>
  <a class='svg-link' target='_blank' href='${profile.social.github}'>
    <img class='svg' src='${profile.images.githubSvg}' alt='Github logo'>
    Github
  </a>
  <a class='svg-link' target='_blank' href='${profile.social.linkedin}'>
    <img class='svg' src='${profile.images.linkedInSvg}' alt='Linkedin logo'>
    LinkedIn
  </a>
`;
const contact = `
<h3>Contato:</h3>
  <input
    class='inputEmail'
    type='text'
    value=${profile.social.email}
    readonly='true'
    id='myInput'
>
  <div class='evenly-container'>
    <a class='svg-link' target='_blank' href='${profile.social.whatsapp}'>
        <img class='svg' src='${profile.images.whatsappSvg}' alt='Whatsapp logo'>
        ${profile.social.phone}
    </a>
    <a class='svg-link' onclick='copyValue()'>
      <img class='svg' src='${profile.images.emailSvg}' alt='E-mail logo'>
      <span class='underline-text'>${profile.social.email}</span>
    </a>
`;
const education = `
  <h3>Formação acadêmica:</h3>
  <span>${profile.education} (Cursando)</span>
`;
const courses = `
  <h3>Cursos:</h3>
  <li>${profile.courses[0]}</li>
  <li>${profile.courses[1]}</li>
`;
const skills = `
  <h3>Habilidades:</h3>
  <li>${profile.skills[0]}</li>
  <li>${profile.skills[1]}</li>
  <li>${profile.skills[2]}</li>
`;
const projects = `
  <h3>Projetos:</h3>
  <a href='${profile.portfolio[0]}' target='_blank'> • Manupulando Arrays com JavaScript</a>
  <br>
  <a href='${profile.portfolio[1]}' target='_blank'> • JavaScript FizzBuzz</a>
`;
addElement('h1', title);
addElement('p class=resume', myResume);
addElement('div class=evenly-container ', socialLinks);
addElement('div', education);
addElement('ul', courses);
addElement('ul', skills);
addElement('div', contact);
addElement('div', projects);