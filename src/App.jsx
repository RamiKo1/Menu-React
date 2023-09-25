import { useState } from 'react'
import menu from './data'
import Title from './Title'
import Menu from './Menu'
import Categories from './Categories'

//!1
//!Get item category Into Array
// const tempCategories = menu.map((item) => item.category)
// // console.log(tempCategories)
// //Add && Remove duplicate
// const tempSet = new Set(tempCategories)
// // console.log(tempSet)
// const tempItems = ['All', ...tempSet]
// console.log(tempItems)

//! 2 in one line
const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  console.log(categories)

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
