
(function () {
  const tbody = document.querySelector('.table__body')
  const thead = document.querySelector('.table__header')

  // popup menu
  tbody.addEventListener('click', function toggleMenu (e) {
    if (e.target.matches('.cell__action__icon')) {
      const menu = e.target.nextElementSibling
      menu.classList.toggle('hidden')
    }
  })

  // dark mode
  const darkModeToggle = document.getElementById('dark__mode__toggle')
  const darkModeToggleHandler = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }
  darkModeToggle.addEventListener('change', darkModeToggleHandler)

  // change background color when row being selected

  const clickCheckBox = (e) => {
    const checkBox = e.target.parentElement.parentElement
    if (e.target.checked) {
      checkBox.classList.add('table__row--checked')
    } else {
      checkBox.classList.remove('table__row--checked')
    }
  }

  tbody.addEventListener('click', clickCheckBox)

  // select all rows when header row being selected
  const checkBoxAll = (e) => {
    const allRows = document.querySelectorAll('tbody > tr')
    if (e.target.checked) {
      allRows.forEach(el => {
        el.classList.add('table__row--checked')
        el.querySelector('input').checked = 'checked'
      })
    } else {
      allRows.forEach(el => {
        el.classList.remove('table__row--checked')
        el.querySelector('input').checked = ''
      })
    }
  }
  thead.addEventListener('click', checkBoxAll)
}
)()
