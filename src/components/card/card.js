import React from 'react'

import './card.css'

const Card = ({color, id, changeCard, curCard, length}) => {
   const setStyle = () => {
      switch(true) {
         case id < curCard :
            return 'card left'
         case id > curCard :
            return 'card right'
         case id === curCard :
            return 'card active'
      }
   }
   const setPosition = () => {
      switch (true) {
         case id < curCard || id > curCard :
            return `translate(${(id - curCard) * 150}px,0)`
      }
   }
   const style = {
      backgroundColor:color,
      transform: setPosition()
   }

   return (
      <div className={setStyle()}
            onClick={() => changeCard(id)}
            style={style}>
         <h2>Index {id}</h2>
         <h2>{(id - curCard)*150}</h2>
      </div>
   )
}

export default Card
