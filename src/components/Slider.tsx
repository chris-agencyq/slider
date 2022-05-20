import '../../src/styles/slider.scss';
import SliderItem from './SliderItem';
import Button from './Button';
import Indicator from './Indicator';
import React, {useState} from 'react';
  
  const Slider = () => {
    const [active, setActive] = useState(0);

    const data = [
      {
        caption: "One",
        imgUrl: "https://picsum.photos/400/200",
        altText: 'alt'
      },
      {
        caption: "Two",
        imgUrl: "https://picsum.photos/300/100",
        altText: 'alt'
      },
      {
        caption: "Three",
        imgUrl: "https://picsum.photos/200/200",
        altText: 'alt'
      }
    ]


    const prevSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
      active !==0 && setActive(active - 1)
    }

    const nextSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
      active !== data.length -1 && setActive(active + 1)
    }

    const changeActiveIndicator = (event: React.MouseEvent<HTMLButtonElement>) => {
      setActive(Number(event.currentTarget.getAttribute("data-index")))
    }

      return (
        <div className='slider'>
            <div className='inner' style={{transform: `translateX(${active * -100}%)`}}>
              {data.map((item, index)=>{
                return <SliderItem key={index} imgUrl={item.imgUrl} altText={item.altText} caption={item.caption}/>
              })}
            </div>
            <div className='controls'>
            <Button onClick={prevSlide} text={'PREV'}/>
              <div className='indicators'>
                {data.map((item, index)=>{
                  return <Indicator key={index} active={active} index={index} label={index + 1} onClick={changeActiveIndicator}/>
                })}
              </div>
              <Button onClick={nextSlide} text={'NEXT'}/>
            </div>
        </div>
      );
    }
  
    export default Slider
   