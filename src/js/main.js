const mediaQuery = window.matchMedia('(max-width: 768px)')

function handleMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    const hamburgerMenu = document.querySelector('.hamburger-btn')
    const exitBtn = document.querySelector('.btn-x')
    const navUl = document.querySelector('.nav-ul')
    const navColorChange = document.querySelector('.gray-part')
    const mobileSocials = document.querySelector('.mobile-socials')

    hamburgerMenu.addEventListener('click', () => {
      console.log('hamburger button clicked', hamburgerMenu)
      navUl.style.height = navUl.scrollHeight + 'px'
      const windowHeight = window.innerHeight
      const heightMinus116px = windowHeight - 116
      navUl.style.height = heightMinus116px + 'px'
      console.log(navUl.height)
      // navUl.style.height = '100vh - 92px'
      navColorChange.style.backgroundColor = 'white'
      hamburgerMenu.classList.toggle('hidden')
      exitBtn.classList.remove('hidden')
      exitBtn.classList.add('flex')
      mobileSocials.classList.remove('hidden')
      mobileSocials.classList.add('flex')
    })
    exitBtn.addEventListener('click', () => {
      console.log('exit button clicked', exitBtn)
      navUl.style.height = '0px'
      hamburgerMenu.classList.remove('hidden')
      exitBtn.classList.add('hidden')
      navColorChange.style.backgroundColor = 'rgb(229 231 235)'
      mobileSocials.classList.remove('mobile-show')
      mobileSocials.classList.add('hidden')
    })

    const ulParts = document.querySelectorAll('.nav-li')

    ulParts.forEach((ulPart) => {
      const subNav = ulPart.querySelector('.sub-nav')
      const btnBack = ulPart.querySelector('.btn-arrow-left-short')

      ulPart.addEventListener('click', () => {
        console.log('Button clicked!', ulPart)

        removeClassFlex()
        const backPointer = ulPart.querySelector('.back-pointer')
        const liContent = ulPart.firstChild.textContent
        backPointer.innerHTML = liContent
        subNav.classList.remove('hidden')
        subNav.classList.add('fadeInRight')
        subNav.style.height = '100vh'
        mobileSocials.classList.add('hidden')
      })

      btnBack.addEventListener('click', () => {
        console.log('back clicked', btnBack)
        const removeFade = () => {
          subNav.classList.remove('fadeOutRight')
          subNav.classList.remove('closed')
          subNav.classList.add('hidden')
        }
        // subNav.classList.add('closed')
        subNav.classList.add('fadeOutRight')

        mobileSocials.classList.add('mobile-show')
        const interval = setTimeout(removeFade, 2000)
      })
    })

    const accordions = document.querySelectorAll('.accordion')

    accordions.forEach((accordion) => {
      const accBtn = accordion.querySelector('.acc-btn')
      // console.log(accBtn)
      const accText = accordion.querySelector('.acc-text')
      // console.log(accText)
      const icon90 = accordion.querySelector('.icon-arrow-down-90')
      // console.log(icon90)

      accBtn.addEventListener('click', () => {
        console.log('accBtn clicked', accBtn)
        accordion.classList.toggle('opened')

        if (accordion.classList.contains('opened')) {
          accText.style.display = 'flex'
          accText.style.height = accText.scrollHeight + 'px'
          icon90.classList.add('rotate180')
        } else {
          accText.style.display = 'none'
          accText.style.height = '0px'
          icon90.classList.remove('rotate180')
        }
      })
    })

    const removeClassFlex = () => {
      ulParts.forEach((ulPart) => {
        const subNav = ulPart.querySelector('.sub-nav')
        subNav.classList.remove('flex')
      })
    }
  } else {
    const ulParts = document.querySelectorAll('.nav-li')

    ulParts.forEach((ulPart) => {
      const navUl = document.querySelector('.nav-ul')
      navUl.classList.add('hidden')
      const subNav = ulPart.querySelector('.sub-nav')

      ulPart.addEventListener('mouseenter', () => {
        removeClassFlex()
        subNav.classList.remove('hidden')
        subNav.classList.add('flex')
      })

      ulPart.addEventListener('mouseleave', () => {
        removeClassFlex()
        subNav.classList.add('hidden')
      })
    })

    const removeClassFlex = () => {
      ulParts.forEach((ulPart) => {
        const subNav = ulPart.querySelector('.sub-nav')
        subNav.classList.remove('flex')
      })
    }
  }
}

mediaQuery.addEventListener('change', handleMediaChange)
handleMediaChange(mediaQuery)
