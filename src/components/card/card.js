import React, { Component } from 'react'

import './card.css'

class Card extends Component {
   myRef = React.createRef()

   componentDidMount() {
      
   }

   render() {
      const { el, changeCard, curCard, length } = this.props
      const { id, color, width, height } = el

      const setStyle = () => {
         switch (true) {
            case id != curCard:
               return 'card '
            case id === curCard:
               return 'card active'
         }
      }

      const style = {
         backgroundColor: color,
         width: width + 'px',
         height: height + 'px',
      }

      return (
         <div className={setStyle()}
            ref={this.myRef}
            onClick={() => changeCard(id)}
            style={style}>
            <h2>Index {id}</h2>
            <h2>{width}, {height}</h2>
         </div>
      )
   }
}

export default Card
