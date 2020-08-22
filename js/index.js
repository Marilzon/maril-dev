const root = document.querySelector('#root')

//OBJETOS
const profile = {
  name: "Marilzon de Sousa",
  city: "Bauru",
  age: 28,
  phone: "(14) 9 9140-9482",
  whatsapp: "https://api.whatsapp.com/send?phone=5514991409482&text=Ol%C3%A1%20marilzon!",
  email: "maxmaril@hotmail.com",
  education: " • Analise e Desenvolvimento de Sistemas - Universidade Estácio de Sá",
  courses: [
    " • Inglês Básico, CNA",
    " • GoStack – Bootcamp desenvolvimento WEB e MOBILE, RocketSeat"
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/marilzon",
    github: "https://github.com/Marilzon",
    curriculum: "https://github.com/Marilzon/maril-dev/blob/master/Marilzon%20%20de%20Sousa%20-%20CURRICULO.pdf"
  },
  images: {
    curriculumSvg: "./images/curriculum.svg",
    githubSvg: "./images/github.svg",
    linkedInSvg: "./images/linkedin.svg",
    whatsappSvg: "./images/whatsapp.svg"
  },
  skills: [
    " • HTML5",
    " • CSS 3",
    " • JavaScript: stacks NodeJS, ReactJS e React-Native "
  ]
}
//Functions
function addElement(tag, content) {
  let text = `
    <${tag}>${content}</${tag}>
  `
  root.insertAdjacentHTML('beforeend', text)
}
/*Textos e Marcacões*/
const title = 'Maril - Desenvolvedor Front End'

const myResume = `
  Olá, sou <u>${profile.name}</u> moro atualmente em ${profile.city}, tenho ${profile.age} anos
  e estou em busca de oportunidades como <strong>Desenvolvedor Front-end</strong>
`
const contact = `
  <a class="svg-link" target='_blank' href="${profile.whatsapp}">
    <p class="justify-container">
      <img class="svg" src="${profile.images.whatsappSvg} " alt="Whatsapp logo">
      Telefone: ${profile.phone}
    </p>
  </a>
  <p>E-mail: <a href='#'><u>${profile.email}</u></a></p>
`
const socialLinks = `
<a class="svg-link" target='_blank' href='${profile.social.curriculum}'>
  <img class="svg" src="${profile.images.curriculumSvg} " alt="Curriculo logo">
  Curriculo
</a>

<a class="svg-link" target='_blank' href='${profile.social.github}'>
  <img class="svg" src="${profile.images.githubSvg} " alt="Github logo">
  Github
</a>

<a class="svg-link" target='_blank' href='${profile.social.linkedin}'>
  <img class="svg" src="${profile.images.linkedInSvg} " alt="Linkedin logo">
  LinkedIn
</a>
`
const education = `
  <h3>Formação acadêmica:</h3>
  <span>${profile.education} (Cursando)</span>
`
const courses = `
  <h3>Cursos:</h3>
  <li>${profile.courses[0]}</li>
  <li>${profile.courses[1]}</li>
`
const skills = `
  <h3>Habilidades:</h3>
  <li>${profile.skills[0]}</li>
  <li>${profile.skills[1]}</li>
  <li>${profile.skills[2]}</li>
`
const portfolio = `
  <h3>Projetos:</h3>
  <div class="evenly-container">
    <a class="project-link" href='#'>
      PROJETO
    </a>
    <a class="project-link" href='#'>
      PROJETO
    </a>
    <a class="project-link" href='#'>
      PROJETO
    </a>
  </div>
`
// Chamando elementos pela função addElement

addElement('h1', title)
addElement(`p class='resume'`, myResume)
addElement(`div class='evenly-container' `, socialLinks)
addElement('div', education)
addElement('ul', courses)
addElement('ul', skills)
addElement(`div`, portfolio)
addElement(`div class='column-container'`, contact)
