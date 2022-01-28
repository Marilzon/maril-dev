const root = document.querySelector('#root');
const profile = {
  name: 'Marilzon de Sousa',
  city: 'Lençóis Paulista - SP',
  age: 29,
  education: '  Analise e Desenvolvimento de Sistemas - Estácio de Sá (2020-2022)',
  courses: [
    '  Inglês Básico, CNA',
    '  Programação Shell Script, UDEMY',
    '  Blockchain com NODEJS, UDEMY',
    '  Blockchain Avançado, FIAP',
    '  Python, FIAP',

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
    javaScriptSvg: './images/js.svg',
  },
  skills: [
    'HTML5',
    'CSS 3',
    'JavaScript: NodeJS, ReactJS',
    'Blockchain com node.js',
  ],
  portfolio: [
    'https://marilzon.github.io/handlerArrays',
    'https://marilzon.github.io/FizzBuzz',
    'https://marilzon.github.io/airplane-game/',
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

const title = `
  <h1>Maril</h1>
  <small class='subtitle'>SQL | Python | Javascript</small>
`;
const myResume = `
  Olá, sou <u>${profile.name}</u> moro atualmente em ${profile.city}, tenho ${profile.age} anos,
   minhas principais stacks atualmente são <strong>Python, Javascript e SQL</strong>
`;
const socialLinks = `
  <a class='link' target='_blank' href='${profile.social.curriculum}'>
    <img class='svg' src='${profile.images.curriculumSvg}' alt='Curriculo logo'>
    Curriculo
  </a>
  <a class='link' target='_blank' href='${profile.social.github}'>
    <img class='svg' src='${profile.images.githubSvg}' alt='Github logo'>
    Github
  </a>
  <a class='link' target='_blank' href='${profile.social.linkedin}'>
    <img class='svg' src='${profile.images.linkedInSvg}' alt='Linkedin logo'>
    LinkedIn
  </a>
`;
const contact = `
<h4>Contato:</h4>
  <input
    class='inputEmail'
    type='text'
    value=${profile.social.email}
    readonly='true'
    id='myInput'
>
  <div class='evenly-container'>
    <a class='link' target='_blank' href='${profile.social.whatsapp}'>
        <img class='svg' src='${profile.images.whatsappSvg}' alt='Whatsapp logo'>
        ${profile.social.phone}
    </a>
    <a class='link' onclick='copyValue()'>
      <img class='svg' src='${profile.images.emailSvg}' alt='E-mail logo'>
      <span class='underline-text'>${profile.social.email}</span>
    </a>
  </div>
`;
const education = `
  <h4 class='text-center'>Formação acadêmica:</h4>
  <span>${profile.education}</span>
`;
const courses = `
  <h4>Cursos:</h4>
  <li>${profile.courses[0]}</li>
  <li>${profile.courses[1]}</li>
  <li>${profile.courses[2]}</li>
  <li>${profile.courses[3]}</li>
  <li>${profile.courses[4]}</li>
`;
const skills = `
  <h4>Habilidades:</h4>
  <li>${profile.skills[0]}</li>
  <li>${profile.skills[1]}</li>
  <li>${profile.skills[2]}</li>
  <li>${profile.skills[3]}</li>
`;
const projects = `
  <h4>Projetos:</h4>
  <div class='evenly-container'>
    <a class='project' href='${profile.portfolio[0]}' target='_blank'>
      handlerArrays
      <hr/>
      <small class='subtitle'>
        Projeto que demonstra manipulações de Arrays com funcões JavaScript.
      </small>
    </a>

    <a class='project' href='${profile.portfolio[1]}' target='_blank'>
      FizzBuzz
      <hr/>
      <small class='subtitle'>
        Jogo de números baseado em funções JavaScript e CSS 3.
      </small>
    </a>

    <a class='project' href='${profile.portfolio[2]}' target='_blank'>
      Airplane Game
      <hr/>
      <small class='subtitle'>
        Jogo de combate de helicopteros e resgate de refem, feito em HTML5 CSS3 e JS com jQuery.
      </small>
    </a>

  </div>
`;
addElement(`div class='title'`, title);
addElement('div class=resume', myResume);
addElement('div class=evenly-container', socialLinks);
addElement(`div`, education);
addElement(`ul `, courses);
addElement(`ul `, skills);
addElement('div', contact);
addElement('div', projects);
