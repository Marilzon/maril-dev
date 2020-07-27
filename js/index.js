const root = document.querySelector('#root')

//OBJETO
let profile = {
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
    github: "https://github.com/Marilzon"
  },
  skills: [
    "HTML",
    "CSS",
    "JavaScript"
  ]
}
//FUNCOES
function addElement(tag, content) {
  let text = `
    <${tag}>${content}</${tag}>
  `
  root.insertAdjacentHTML('beforeend', text)
}
//addElement, TAG - CONTEUDO
addElement('h1', 'Maril - Desenvolvedor Front-end')

addElement('h3', `
  Olá, sou <u>${profile.name}</u> moro atualmente em ${profile.city}, tenho ${profile.age} anos
  e estou em busca de oportunidades como <strong>Desenvolvedor Front-end</strong><hr>
`)

addElement('p', `<strong>Telefone - Whats</strong>: ${profile.phone}`)

addElement('p', `<strong>E-Mail:</strong> <u>${profile.email}</u>`)

addElement('ul', `<h3>Redes sociais:</h3>
  <li>
    <a target='_blank' href='${profile.social.linkedin}'>
      LINKEDIN
    </a>
      -
    <a target='_blank' href='${profile.social.github}'>
      GITHUB
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
  <li>${profile.skills[0]}</li>
  <li>${profile.skills[1]}</li>
  <li>${profile.skills[2]}</li>
`)
