const root = document.querySelector('#root')

let profile = {
  name: "Marilzon de Sousa",
  city: "Bauru",
  age: 28,
  phone: "(14) 991-409-482",
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

function element(tag, content) {
  let text = `
    <${tag}>${content}</${tag}>
  `
  root.insertAdjacentHTML('beforeend', text)
}

element('h1', 'Maril - DEV')
element('p', profile.name)
element('p', profile.city)
element('p', profile.age)
element('p', profile.phone)
element('p', profile.email)
element('p', profile.education)
element('div', `Cursos:
  <li>${profile.courses[0]}</li>
  <li>${profile.courses[1]}</li>
`)
element('div', `Redes sociais:
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
element('div', `Ultimas experiências profissionais:
  <li>${profile.jobs[0]}</li>
  <li>${profile.jobs[1]}</li>
  <li>${profile.jobs[2]}</li>
`)
element('div', `Skills:
  <li>${profile.skills[0]}</li>
  <li>${profile.skills[1]}</li>
  <li>${profile.skills[2]}</li>
`)
