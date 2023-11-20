import { url } from 'inspector';
import React, { useEffect, useState, useRef} from 'react'

type SlidersProps = {
  banners: { id: number; header: string; title: string; imgUrl: string }[];
};

const Sliders = (props: SlidersProps) => {
  const [bannerIndex, setBannerIndex] = useState<number>(0);
  const btnRight = useRef(null);
  // const right
  const handleClicked = (isRight: boolean) => {
    if (props.banners.length<=1) return;
    if (!isRight){
      if(!bannerIndex) setBannerIndex(props.banners.length - 1);
      else setBannerIndex(prev => prev-1);
    } 
    else{
      if (bannerIndex===props.banners.length-1) setBannerIndex(0);
      else setBannerIndex(prev => prev+1);
    }
  }
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      handleClicked(true);
    }, 5000)
    return () =>{
      clearTimeout(timeoutID);
    }
  },[bannerIndex])
  return (
    <div className="sliders w-100 position-relative d-flex section-margin">
      {props.banners.map((banner) => (
        <div
          className="slider"
          key={banner.id}
          style={{ backgroundImage: `url(${banner.imgUrl})`, transform: `translateX(${-100 * bannerIndex}%)` }}
        >
          <div className="slider__info w-md-50 h-100 d-flex flex-column justify-content-center" style={{transform: `translateY(${banner.id===bannerIndex ? 0 : 4}rem)`}}> 
            <h1 className="mb-3">{banner.header}</h1>
            <p className="text-secondary fw-italic mb-3">{banner.title}</p>
            <div className="slider__mailform">
              <i className="fa-solid fa-paper-plane mx-2 texts text-secondary"></i>
              <input
                type="text"
                className="mailform__box-input ms-1"
                placeholder="Email"
              />
              <button className="mailform__box-btn">Subscribe</button>
            </div>
          </div>
        </div>
      ))}

      {/* Buttons */}
      <button className="btn-left top-50" onClick={() => handleClicked(false)}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button ref={btnRight} className="btn-right top-50" onClick={() => handleClicked(true)}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
      <div className='btn-rounds d-flex position-absolute'>
        {props.banners.map((banner, index) => (
          <div 
            key={index}
            className={` btn-round border border-dark border-1 rounded-circle mx-1 ${banner.id === bannerIndex && "btn-round-chosen"}`}
            onClick={() => setBannerIndex(index)}
          ></div>
        ))}
        
      </div>
    </div>
  );
}

export default Sliders