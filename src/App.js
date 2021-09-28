import React from 'react'
import CategoryList from './Components/Categories/index'
import ProductsList from './Components/Products/index'
import FilterList from './Components/Filters/index'
import './bootstrap.min.css'
import './App.css'
function App() {
  return (
    <div >
      <section className='header-section'>
        <h1 className="home-title" > Our e-commerce store </h1>
        <CategoryList />
      </section>
      <section className='body-section'>
      <ProductsList />
      <FilterList />
      </section>
    </div>
  );
}

export default App;
