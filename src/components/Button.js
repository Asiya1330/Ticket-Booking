
const Button = ({text, onclick, textColor="text-gray-100", type="submit"}) => {  

  return (
    <button className= {`${textColor} border p-2 hover:bg-gray-100 hover:text-gray-800 text-xs rounded-sm`} onClick={onclick} type={type}> {text} </button>
  )
}

export default Button
