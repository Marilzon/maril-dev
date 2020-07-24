const api_url = 'https://github.com/Marilzon/maril-dev/blob/master/js/profile.json'
const root = document.querySelector('#root')

async function getProfile() {
  const response = await fetch(api_url)
  const data = await response.json()
  console.log(data)
}


function title(tag, content) {
    let title = `
        <${tag}>
            ${content}
        </${tag}>`

    root.insertAdjacentHTML('beforeend', title)
}

function profile(tag, content) {
    let profile = `
        <${tag}>
            ${content}
        </${tag}>`
    root.insertAdjacentHTML('beforeend', profile)
}

title('h1', 'Marilzon de Sousa - Desenvolvedor Front-end')

profile('div', 'Perfil')
