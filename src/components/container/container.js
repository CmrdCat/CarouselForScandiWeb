import React, { Component } from 'react'
import Card from '../card/card'
import './container.css'

class Container extends Component{
   
   images = [
      {
         id:0,
         color: 'orangered'
      },
      {
         id:1,
         color: 'green'
      },
      {
         id:2,
         color: 'blue'
      },
      {
         id:3,
         color: 'brown'
      },
      {
         id:4,
         color: 'yellow'
      },
      {
         id:5,
         color: 'white'
      },
      {
         id:6,
         color: 'tomato'
      },
   ]

   state = {
      curCard: 0,
      length: this.images.length
   }

   changeCard = (id) => {
      this.setState({
         curCard: id
      })
   }
         
   render() {

   const { curCard, length } = this.state
   
      return (
         <>
            <h2>{this.state.curCard}</h2>
            <div className="container" >
               {
                  this.images.map(({ color, id }, idx) => {
                     return (<Card
                        key={idx}
                        id={id}
                        color={color}
                        changeCard={this.changeCard}
                        curCard={curCard}
                        length={length} />)
                  })
               }
            </div>
         </>
      )
   }

}

export default Container