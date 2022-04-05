import React from 'react'
import PropTypes from 'prop-types';

const User = ({isLoggedIn,name,surname,age,friends,address}) => {
  // console.log(props)

  if (!isLoggedIn) {
    return  <h1>Giris Yapmadiniz!</h1>
  }
  return (
    <>
   <h1>
       {name} {surname} {age}
   </h1>
   {address.title} {address.zip}
   <br />
   <br />
   {/* Performans acisindan sikinti cekmemek icin benzersiz olarak her bir eleman icin id gerekir. */}
      {
       friends && friends.map((friend,index) =>{
           return  <div key={friend.id}>
           {friend.id} - {friend.name}
         </div>
         })
       }
   </>
  )
}
//bir verinin birden fazla veri ile  gonderebilmek icin one OfType keyword'u kullanilir.

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  // age: PropTypes.number.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  friends: PropTypes.array,
  age: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  address:PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number
  })
}
//defaulProps
User.defaultProps ={
  name: "Unnamed",
  isLoggedIn:false
}


export default User