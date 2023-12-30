import React from 'react'
import "./SearchBar.css"
import { FaSearch } from 'react-icons/fa';
import {BsMicFill} from 'react-icons/bs';

function SearchBar() {
    return (<>
        <div className='Searchbar-Container'>
            <div className="Searchbar-Container2">
                <div className='Search_div'>
                    <input type='text' className='iBox_SeacrchBar' placeholder='search'/>
                    <FaSearch className="searchIcon_Searchbar" /> 
                    <BsMicFill className="mic_Searchbar" /> 
                  

                                

                    </div>
            </div>
        </div>
    </>

    )
}

export default SearchBar
