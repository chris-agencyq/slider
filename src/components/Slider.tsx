import '../../src/styles/slider.scss';
import SliderItem from './SliderItem';
import Button from './Button';
import React, {useState} from 'react';
  
  const Slider = () => {
    const [active, setActive] = useState(1);

    const data = [
      {text: "One"},
      {text: "Two"},
      {text: "Three"}
    ]


    const prevSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
      active !==0 && setActive(active - 1)
    }

    const nextSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
      active !==data.length -1 && setActive(active + 1)
    }
    
      return (
        <div className='slider'>
            <div className='inner' style={{transform: `translateX(${active * -100}%)`}}>
              {data.map((item, index)=>{
                return <SliderItem key={index} text={item.text}/>
              })}
            </div>
            <button onClick={prevSlide}>Prev</button>
            <div className='indicators'>
              {data.map((item, index)=>{
                return <div>{index + 1}</div>
              })}
            </div>
            <button onClick={nextSlide}>Next</button>
        </div>
      );
    }
  
    export default Slider
   