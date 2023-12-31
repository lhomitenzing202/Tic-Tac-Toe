
// eslint-disable-next-line react/prop-types
const Tile = ({onClick, className, value, playerTurn}) => {
   let hoverClass = null;
    if(value==null&&playerTurn!=null){
        // eslint-disable-next-line react/prop-types
        hoverClass =`${playerTurn.toLowerCase()}-hover`;
    }
  return (
    <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>{value}</div>
  )
}

export default Tile