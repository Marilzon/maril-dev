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
  jobs: [
    "06/04/2020 - Atualmente, Operador de Telesserviços, Paschoalotto Serviços Financeiros.",
    "01/01/2018 - 03/04/2020: Técnico de Informática freelancer.",
    "25/02/2016 - 04/07/2017: Promotor de Vendas, RTM TASSE ASSESSORIA DE MERCADO LTDA."
  ],
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
addElement('p', `
  Olá, sou <em>${profile.name}</em> moro atualmente em ${profile.city}, tenho ${profile.age} anos
  e estou em busca de oportunidades como <strong>Desenvolvedor Front-end</strong>`)
addElement('p', `Telefone - Whats: ${profile.phone}`)
addElement('p', `E-Mail: <u>${profile.email}</u>`)
addElement('ul', `Redes sociais:
  <li>
    <a target='_blank' href='https://www.linkedin.com/in/marilzon'>
      ${profile.social.linkedin}
    </a>
  </li>
  <li>
    <a target='_blank' href='https://github.com/Marilzon'>
      ${profile.social.github}
    </a>
  </li>
`)
addElement('p', `Formação acadêmica: ${profile.education}`)
addElement('ul', `Cursos:
  <li>${profile.courses[0]}</li>
  <li>${profile.courses[1]}</li>
`)
addElement('ul', `Skills:
  <li>${profile.skills[0]}</li>
  <li>${profile.skills[1]}</li>
  <li>${profile.skills[2]}</li>
`)
addElement('ul', `Ultimas experiências profissionais:
  <li>${profile.jobs[0]}</li>
  <li>${profile.jobs[1]}</li>
  <li>${profile.jobs[2]}</li>
`)
