import '../style.css'
import nav from './navBar'

const dom = (() => {
    const main = document.createElement('div')
    main.classList.add('main')
    document.body.appendChild(main)

    main.appendChild(nav())
})()

export default dom