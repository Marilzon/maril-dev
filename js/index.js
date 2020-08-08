const root = document.querySelector('#root')

//OBJETOS
const profile = {
  name: "Marilzon de Sousa",
  city: "Bauru",
  age: 28,
  phone: "(14) 9 9140-9482",
  email: "maxmaril@hotmail.com",
  education: "Analise e Desenvolvimento de Sistemas - Universidade Estácio de Sá (Cursando)",
  courses: [
    "Inglês Básico, CNA",
    "GoStack – Desenvolvimento WEB e MOBILE, RocketSeat."
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
//
function addElement(tag, content) {
  let text = `
    <${tag}>${content}</${tag}>
  `
  root.insertAdjacentHTML('beforeend', text)
}
//
addElement('h1', 'Maril - Desenvolvedor Front-end')
addElement('p', `
  Olá, sou <u>${profile.name}</u> moro atualmente em ${profile.city}, tenho ${profile.age} anos
  e estou em busca de oportunidades como <strong>Desenvolvedor Front-end</strong>
`)
addElement(`div class='column-container'`, `
  <p>Telefone: ${profile.phone}</p>
  <p>E-mail: <a href='#'><u>${profile.email}</u></a></p>
`)
addElement(`div class='evenly-container' `, `
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
`)
addElement('ul', `<h3>Formação acadêmica:</h3>
  <li>${profile.education}</li>
`)
addElement('ul', `<h3>Cursos:</h3>
  <li>${profile.courses[0]}</li>
  <li>${profile.courses[1]}</li>
`)
addElement('ul', `<h3>Skills:</h3>
  <li>
    <button>${profile.skills[0]}</button>
    <button>${profile.skills[1]}</button>
    <button>${profile.skills[2]}</button>
  </li>
`)
