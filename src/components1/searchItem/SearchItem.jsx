import React from 'react'
import './searchItem.css'
import { useNavigate } from 'react-router-dom'
function SearchItem() {
    const navigate = useNavigate()
  return (
    <div className='searchItem'>
        <img
        src='https://cf.bstatic.com/xdata/images/hotel/square600/528187531.webp?k=f076de8b02f133d4b8d8a2fd7e271a5333e0eb6e20e93ce3878ce8e6d18c3852&o=' 
        alt=''
        className='siImg'
        />
        <div className="siDesc">
        <h1 className='siTitle'>Tower strret apartments</h1>
        <span className='siDistance'>500 km from center</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubtitle'>
            Studio Apartments with air conditioning
        </span>
        <span className='siFeatures'>
            Entire studio . 1 bathroom . 21m 1 full bed
        </span>
        <span className='siCancelOp'>Fre Cancelation</span>
        <span className="siCancelOpSubtitle">
            you can cancel later , so lock into great prices today
        </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className='siDetailTexts'>
                <span className='siPrice'>$123</span>
                <span className='siTaxOp'>Includes taxes and fees</span>
                <button className='siCheckButton' onClick={navigate("/hotels/sdf")}>See Availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem