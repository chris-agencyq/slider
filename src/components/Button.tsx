type buttonProps = {
    text: string | null,
    onClick?: React.MouseEventHandler
  }

const SliderItem = (props: buttonProps) => {
    const {text, onClick} = props

    return(
        <button className="change-slide" onClick={onClick}>{text}</button>
    )
}

export default SliderItem