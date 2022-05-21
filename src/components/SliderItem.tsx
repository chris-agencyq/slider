import useMediaQuery from '../hooks/useMediaQuery';

type itemProps = {
    caption: string | null,
    imgUrl: string | null,
    altText: string | null,
    settings: {
        mobile: number,
        tablet: number,
        desktop: number,
        aspectRatio: number,
        gutter: number
    } 
  }



const SliderItem = ({caption, imgUrl, altText, settings}: itemProps) => {
    const isTablet = useMediaQuery('(min-width: 768px)');
    const isDesktop = useMediaQuery('(min-width: 992px)');

const {mobile, tablet, desktop, aspectRatio, gutter} = settings

    const styles = () => {
        if(isTablet && !isDesktop) {
            return {
            width: `${100/tablet - gutter}%`, 
            paddingBottom: `${aspectRatio/tablet * 100 - gutter}%`
        }
        }
        else if(isDesktop) {
            return {
                width: `${100/desktop - gutter}%`, 
                paddingBottom: `${aspectRatio/desktop  * 100 - gutter}%`
            }
        }
        else {
            return {
                width: `${100/mobile - gutter}%`, 
                paddingBottom: `${aspectRatio/mobile * 100 }%`}
        }

    }
    return(
        <div style={styles()} className="item">
            {imgUrl && <img src={imgUrl} alt={altText?? ""} />}
        </div>
    )
}

export default SliderItem

