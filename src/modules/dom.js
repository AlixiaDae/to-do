import TodoProject from "./todoproject";
import Todo from "./todo";
import nav from "./navBar";
import '../style.css'

const dom = (() => {
    const main = document.createElement('div')
    main.classList.add('main')
    document.body.appendChild(main)

    main.appendChild(nav())
})()

export default dom