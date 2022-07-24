import artSculpture from '../portfolio/art_sculpture.JPG'
import artsplosure from '../portfolio/artsplosure.JPG'
import artsplosureBW from '../portfolio/artsplosureBW.JPG'
import bw_close_up_band from '../portfolio/bw_close_up_band.JPG'
import downtown_raleigh_skyline from '../portfolio/bw_close_up_band.JPG'
import roeVsWade from '../portfolio/roeVsWade.JPG'
import skate_park_biker from '../portfolio/skate_park_biker.JPG'
import train_tracks from '../portfolio/train_tracks.JPG'
import water_reflection from '../portfolio/water_reflection.JPG'



import CloseIcon from '@mui/icons-material/Close';
import React, {useState} from 'react';
import '../gallery.css';

const Gallery = () => {
  const data = [
    {
      id: 1,
      imgSrc: artSculpture,
      alt: 'scultpure',
    },
    {
      id: 2,
      imgSrc: artsplosure,
      alt: 'band',
    },
    {
      id: 3,
      imgSrc: artsplosureBW,
    },
    {
      id: 4,
      imgSrc: bw_close_up_band,
    },
    {
      id: 5,
      imgSrc: downtown_raleigh_skyline,
    },
    {
      id: 6,
      imgSrc: roeVsWade,
    },
    {
      id: 7,
      imgSrc: skate_park_biker,
    },
    {
      id: 8,
      imgSrc: train_tracks,
    },
    {
      id: 9,
      imgSrc: water_reflection,
    },
  ]
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModel(true);
  }
    return (
      <>
      <div className ={model? "model open" : "model"}>
        <img src={tempimgSrc} alt='img'/>
          <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return(
            <div className = "pics" key={index} onClick={() => getImg(item.imgSrc)}>
              <img 
                src={item.imgSrc} 
                style={{
                  width: '100%'
                }}
                alt='img'
              />
            </div>
          )
        })}
      </div>
      </>
    )

}


export default Gallery