import React, { useState, useTransition } from 'react'
import "./SearchBar.css"
import { FaSearch } from 'react-icons/fa';
import {BsMicFill} from 'react-icons/bs';
import SearchList from './SearchList';

function SearchBar() {
   const [ searchQuery, setsearchQuery ] = useState("");
   const [ searchListA, setSearchListA] = useState(false);
   const TitleArray = ["video1","video2", "Animation video","Movies"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));
    return (<>
        <div className='Searchbar-Container'>
            <div className="Searchbar-Container2">
                <div className='Search_div'>
                    <input
                     type='text' 
                     className='iBox_SeacrchBar' 
                     placeholder='search'
                     onChange={e=>setsearchQuery(e.target.value)}
                     value={searchQuery}
                     onClick={e=>setSearchListA(true)}
                     />
                    <FaSearch 
                    className="searchIcon_Searchbar"
                    onClick={e=>setSearchListA(false)}
                    /> 
                    <BsMicFill className="mic_Searchbar" />             
                    {searchQuery&& searchListA &&
                        <SearchList 
                        setsearchQuery={setsearchQuery}
                        TitleArray={TitleArray}
                        />
                    }
                    </div>
            </div>
        </div>
    </>

    )
}

export default SearchBar
