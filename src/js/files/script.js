// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js'
// Підключення списку активних модулів
import { flsModules } from './modules.js'

function showMoreCustom(showAmount) {
  const imageItems = document.querySelectorAll('[show-more-item]')
  const showMoreBtn = document.querySelector('[show-more-btn]')
  showAmount = 6

  function loop() {
    for (let i = 0; i < showAmount; i++) {
      if (showAmount <= imageItems.length) imageItems[i].style.display = 'block'
    }
  }
  loop()

  showMoreBtn.onclick = () => {
    showAmount += 3
    loop()
    if (showAmount >= imageItems.length) {
      showMoreBtn.style.display = 'none'
    }
  }
}
showMoreCustom(6)
