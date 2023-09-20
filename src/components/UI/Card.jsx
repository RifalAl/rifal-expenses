const Card = ({className, children}) => {
  return ( <div className={`${className} rounded-md bg-white`}> {children} </div> );
}
 
export default Card;