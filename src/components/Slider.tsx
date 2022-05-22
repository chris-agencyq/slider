import '../../src/styles/slider.scss';
import SliderItem from './SliderItem';
import Button from './Button';
import Indicator from './Indicator';
import React, {useState, useEffect} from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
  
  const Slider = () => {

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
      },
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
      },
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

    const [active, setActive] = useState(0);
    const [numberOfSlides, setNumberOfSlides] = useState(1);
    const minTablet = useMediaQuery('(min-width: 768px)');
    const isDesktop = useMediaQuery('(min-width: 992px)');
    const isMobile = !minTablet;
    const isTablet = minTablet && !isDesktop;


    
    const settings = {
      mobile: 1,
      tablet: 2,
      desktop: 4,
      aspectRatio: .66,
      gutter: 1.5
    }

    useEffect(()=>{
      setNumberOfSlides(numOfSlides())
    }, [isTablet, isMobile, isDesktop, minTablet])

    
    const numOfSlides = () => {
      if(isDesktop) {
        return settings.desktop
      }
      else if(isTablet) {
        return settings.tablet
      }
      else {
        return settings.mobile
      }
    }

     
    const pagination = () => {
      const numberOfIndicators = Math.ceil(data.length/numberOfSlides);
      const arr = Array(numberOfIndicators).fill('el');
      return arr;
    }


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
                return <SliderItem key={index} numberOfSlides={numberOfSlides} caption={item.caption} imgUrl={item.imgUrl} altText={item.altText} settings={settings}/>
              })}
            </div>
            <div className='controls'>
            <Button onClick={prevSlide} text={'PREV'}/>
              <div className='indicators'>
                {pagination().map((item, index)=>{
                  return <Indicator key={index} active={active} index={index} label={index + 1} onClick={changeActiveIndicator}/>
                })}
              </div>
              <Button onClick={nextSlide} text={'NEXT'}/>
            </div>
        </div>
      );
    }
  
    export default Slider
   