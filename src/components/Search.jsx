import React from 'react'
function Search({foodData}) {
  return (
    <div>
      <main>
      {foodData.map((i)=>{

        return(

            <div className="container1" key={i} >

<div className="foodimg">
                <img src={i.image} />
               </div>

               <div className="cards">
               {i.name}
            <br />
               {i.text}
               
            <button className='btn'>${i.price.toFixed(2)}</button>
        
               </div>

              

            </div>
          
            
        )
      })}
      </main>
    </div>
  )
}

export default Search
