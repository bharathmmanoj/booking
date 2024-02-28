import React, { useState } from 'react'
import "./hotels.css"
import Header from '../../components1/header/Header'
import Navbar from '../../components1/navbar/Navbar'
import MailList from '../../components1/mailList/MailList';
import Footer from '../../components1/footer/Footer';

function Hotels() {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/324670555.jpg?k=4ad8878ef94c2cb3fe09f87dcc33221079db68b6abec9066f2ab68b87db4cbe8&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/501504959.jpg?k=21a0c460b66b91fcd96e2433afb6cc3c8b79cd241419c52e52a91062b04ecc47&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/501504882.jpg?k=20ce1b963db45810a4c089b4fdbbdee92454c01265100bb129d46715146e12df&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/324669748.jpg?k=d58a01afa67cb3fd7091a47ee7d77122e367cfeb3f54b3c6684511ec14dd11cc&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/501504869.jpg?k=0e1dc7a3edefa8a52251beebb88475e65d5901170cbaddc08db18d54e7d2e885&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/501504940.jpg?k=542060d13af26bec23f0123e9b61991d41aa4abcc89b9dd8b372c0e133dea5c7&o=&hp=1"
    },
  ];

  const handleOpen = (i) =>{
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) =>{
    let newSlideNumber;
    if(direction ==="l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }else{
      newSlideNumber =slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
       {open && <div className='slider'>
            <i className="close" class="fa-solid fa-xmark" onClick={()=>setOpen(false)}></i>
            <i className="arrow" class="fa-solid fa-arrow-left" onClick={()=>handleMove("l")}></i>
            <div className='sliderWrapper'>
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <i className='arrow' class="fa-solid fa-arrow-right" onClick={()=>handleMove("l")}></i>
        </div>}
        <div className="hotelWrapper">
          <buuton className="bookNow">Reserve or Book Now!</buuton>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <i class="fa-solid fa-location-dot"></i>
            <span>Elton st 123 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img 
                onClick={()=>handleOpen(i)}
                 src={photo.src} alt="" 
                 className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">stay in the heart of Krakow</h1>
              <p className='hotelDesc'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Accusantium, in. Repellendus est placeat dolor, iure labore
                  minus earum voluptatum veniam magnam, illum quae nostrum 
                  sed, nemo alias! Consequuntur, aliquam vero!
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for a night stay!</h1>
              <span>
                located in the real heart of krashow , this property
                has ana excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotels