import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>

<section className='main-card--container'>
    {menuData.map((curElem) =>{
        const {id,name , category,image ,description } = curElem;
        return(
<>
<div className='card-container' key={curElem.id}>
          <div className='card'>
              <div className='card-body'>
                  <span className='card-number card-circle subtle'>{id}</span>
                  <span className='card-author subtle'>
                  {name}</span>
                  <h2 className='card-title'>{name}</h2>
                  <span className='card-description subtle'>{description}
                      I love Maggie Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis distinctio temporibus quae, atque quibusdam nulla?
                  </span>
                  <div className='card-read'>Read</div>
              </div>
                  <img src={curElem.image} alt="" className='card-media'/>
                  <span className='card-tag subtle'>Order Now</span>
          </div>
      </div>
</>
    );
   })}
   </section>
    </>
  );
};
export default MenuCard;