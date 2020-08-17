const root = document.querySelector('#root')

//OBJETOS
const profile = {
  name: "Marilzon de Sousa",
  city: "Bauru",
  age: 28,
  phone: "(14) 9 9140-9482",
  email: "maxmaril@hotmail.com",
  education: "Analise e Desenvolvimento de Sistemas - Universidade Estácio de Sá",
  courses: [
    "Inglês Básico, CNA",
    "GoStack – BootCamp desenvolvimento WEB e MOBILE, RocketSeat"
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/marilzon",
    github: "https://github.com/Marilzon",
    curriculum: "https://github.com/Marilzon/maril-dev/blob/master/Marilzon%20%20de%20Sousa%20-%20CURRICULO.pdf"
  },
  images: {
    curriculumSvg: "./images/curriculum.svg",
    githubSvg: "./images/github.svg",
    linkedInSvg: "./images/linkedin.svg"
  },
  skills: [
    "HTML",
    "CSS",
    "JavaScript"
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
const title = 'Maril - Desenvolvedor Front-end'

const myResume = `
  Olá, sou <u>${profile.name}</u> moro atualmente em ${profile.city}, tenho ${profile.age} anos
  e estou em busca de oportunidades como <strong>Desenvolvedor Front-end</strong>
`
const contacts = `
  <p>Telefone: ${profile.phone}</p>
  <p>E-mail: <a href='#'><u>${profile.email}</u></a></p>
`
const socialLinks = `
<a class="svg-link" target='_blank' href='${profile.social.curriculum}'>
  <img class="svg" src="${profile.images.curriculumSvg}" alt="Curriculo logo">
  Curriculo
</a>

<a class="svg-link" target='_blank' href='${profile.social.github}'>
  <img class="svg" src="${profile.images.githubSvg}" alt="Github logo">
  Github
</a>

<a class="svg-link" target='_blank' href='${profile.social.linkedin}'>
  <img class="svg" src="${profile.images.linkedInSvg}" alt="Linkedin logo">
  LinkedIn
</a>
`
const education = `
  <h3>Formação acadêmica:</h3>
  <li>${profile.education} (Cursando)</li>
`
const courses = `
  <h3>Cursos:</h3>
  <li>${profile.courses[0]}</li>
  <li>${profile.courses[1]}</li>
`
const skills = `
  <h3>Skills:</h3>
  <button>${profile.skills[0]}</button>
  <button>${profile.skills[1]}</button>
  <button>${profile.skills[2]}</button>
`
// Chamando elementos pela função addElement

addElement('h1', title)
addElement(`p class='resume'`, myResume)
addElement(`div class='column-container'`, contacts)
addElement(`div class='evenly-container' `, socialLinks)
addElement('ul', education)
addElement('ul', courses)
addElement('div', skills)
