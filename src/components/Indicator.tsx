import "../styles/indicator.scss"

type indicatorProps = {
    index: number,
    active: number,
    label: any
    onClick: React.MouseEventHandler
}

const Indicator = ({index, active, onClick, label}: indicatorProps) => {
  return(
      <button onClick={onClick} data-index={index} className={active == index ? 'indicator active': 'indicator'}>{label}</button>
  )  
}

export default Indicator