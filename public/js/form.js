
(function () {
  // popup menu
  const maxRowNum = 24
  for (let rowNum = 1; rowNum <= maxRowNum; rowNum++) {
    const input = document.getElementById('action__input_' + rowNum)
    const toggleMenu = () => {
      const menu = document.getElementById('action__menu_' + rowNum)
      menu.classList.toggle('hidden')
    }
    input.addEventListener('click', toggleMenu)
  }

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

  const rowCheckBox = document.getElementsByClassName('table__cell--checkbox')

  const clickCheckBox = (e) => {
    const checkBox = e.target.parentElement.parentElement
    if (e.target.checked) {
      checkBox.classList.add('table__row--checked')
    } else {
      checkBox.classList.remove('table__row--checked')
    }
  }

  for (let rowNum = 0; rowNum <= maxRowNum; rowNum++) {
    rowCheckBox[rowNum].addEventListener('click', clickCheckBox)
  }

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
  rowCheckBox[0].addEventListener('click', checkBoxAll)
}
)()
