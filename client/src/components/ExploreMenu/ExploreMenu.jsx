import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import { Link, Route, Routes } from 'react-router-dom';
import Categories from '../../pages/categories/Categories';

const ExploreMenu = (props) => {

    const { category, setCategory } = props;

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Browse Jugaad Requests</h1>
            <p className='explore-menu-text'>Discover various categories to assist with.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                    <Link to={item.link_location}>
                        <div key={index} className="explore-menu-list-item" onClick={() => {
                            setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name);
                        }}>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.title} />
                            <p>{item.menu_name}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <hr />

            {/* <Routes>
                <Route path='/' element={<Categories name='all' />} />
                <Route path='/category/clothes' element={<Categories name='clothes' />} />
                <Route path='/category/bike' element={<Categories name='bike' />} />
                <Route path='/category/car' element={<Categories name='car' />} />
                <Route path='/category/projects' element={<Categories name='projects' />} />
                <Route path='/category/daily-use' element={<Categories name='essentials' />} />
                <Route path='/category/pg-rooms' element={<Categories name='pg-rooms' />} />
                <Route path='/category/books' element={<Categories name='books' />} />
            </Routes> */}

        </div>
    )
}

export default ExploreMenu