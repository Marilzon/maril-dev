const css = `
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
    * {
      margin: 0;
      padding: 0;
      border: none;
    }
    body {
      height: 100vh;
    }

    #root {
      font-family: 'Mulish', sans-serif;
      height: 100vh;
      padding: 3%;
    }
  </style>
`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', css)
