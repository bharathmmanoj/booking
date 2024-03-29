import React, { useState } from 'react'
import Navbar from '../../components1/navbar/Navbar'
import Header from '../../components1/header/Header'
import './list.css'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components1/searchItem/SearchItem'
function List() {
  const location = useLocation()
  const[destination,setDestination] = useState(location.state.destination)
  const[date,setDate]= useState(location.state.date)
  const[options,setOptions]= useState(location.state.options)
  const[openDate,setOpenDate]= useState(false)
  console.log(location) 

  return (
    <div>
        <Navbar/>
        <Header type="list"/>
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className='lsItem'>
                <label>Destination</label>
                <input placeholder={destination} type='text'/>
              </div>
              <div className='lsItem'>
                <label>check in date</label>
                <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to
                 ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                 {openDate && <DateRange 
                onChange={item=>setDate([item.selection])} minDate ={new Date()}
                range={date}
                />}
              </div>
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Min price <small>per night</small>
                  </span>
                  <input type='number' className='lsOptionInput'/>
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Max price <small>per night</small>
                  </span>
                  <input type='number' className='lsOptionInput'/>
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Adult 
                  </span>
                  <input  min={1} type='number' className='lsOptionInput' placeholder={options.adult}/>
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    Children 
                  </span>
                  <input min={0} type='number' className='lsOptionInput' placeholder={options.children}/>
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>
                    room 
                  </span>
                  <input min={1} type='number' className='lsOptionInput' placeholder={options.room}/>
                </div>
                </div>
              </div>
              <button>Search</button>
            </div>
            <div className="listResult">
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default List