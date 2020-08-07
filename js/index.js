const root = document.querySelector('#root')

//OBJETO
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
  e estou em busca de oportunidades como <strong>Desenvolvedor Front-end</strong><hr>
`)

addElement('p', `<strong>Telefone - Whats</strong>: ${profile.phone}`)

addElement('p', `<strong>E-Mail:</strong> <a href='#'>${profile.email}</a>`)

addElement('ul', `<h3>Currículo e Redes Profissionais:</h3>
  <li>
    <a target='_blank' href='${profile.social.curriculum}'>
      Currículo
    </a>
      -
    <a target='_blank' href='${profile.social.github}'>
      GitHub
    </a>
     -
    <a target='_blank' href='${profile.social.linkedin}'>
      LinkedIn
    </a>
  </li>
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
