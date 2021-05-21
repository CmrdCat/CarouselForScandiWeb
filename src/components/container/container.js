import React, { Children, Component } from 'react'
import ReactDOM from 'react-dom'
import Card from '../card/card'
import './container.css'

class Container extends Component{
   lineRef = React.createRef()
   
   images = [
      {
         id:0,
         color: 'orangered',
         width:500,
         height:100
      },
      {
         id:1,
         color: 'green',
         width: 500,
         height: 250
      },
      {
         id:2,
         color: 'blue',
         width: 500,
         height: 170
      },
      {
         id:3,
         color: 'brown',
         width: 500,
         height: 210
      },
      {
         id:4,
         color: 'yellow',
         width: 500,
         height: 150
      },
      {
         id:5,
         color: 'white',
         width: 500,
         height: 120
      },
      {
         id:6,
         color: 'tomato',
         width: 500,
         height: 100
      },
   ]

   state = {
      curCard: 0,
      length: this.images.length,
   }

   changeCard = (id) => {
      this.setState(({curCard}) => {
         return {
            curCard : id
         }
      })
   }

   componentDidMount() {
      const lineChilds = [...this.lineRef.current.children]
      this.lineRef.current.offset = 0
      this.lineRef.current
         .style.transform = `translate(${- lineChilds[0].offsetWidth / 2}px, 0)`
   }

   setCenter = () => {
      let newCenter = 0
      const lineChilds = [...this.lineRef.current.children]
      const activeChildId = lineChilds.findIndex((el) => el.classList.contains('active'))
      for (let i = 0; i < activeChildId; i++) {
         newCenter += lineChilds[i].offsetWidth
      }
      newCenter += lineChilds[activeChildId].offsetWidth / 2
      this.lineRef.current.style.transform = `translate(${-newCenter}px, 0)`
      this.lineRef.current.offset = -newCenter
   }

   componentDidUpdate(prevProps) {
      if (this.state.curCard != prevProps.curCard) {
         this.setCenter()
      }
   }
         
   render() {

   const { curCard, length } = this.state

   let x1 = null;
   let x2 = null

   const handleTouchStart = (e) => {
      const touchPoint = e.touches[0]
      x1 = touchPoint.clientX;
   }

   const handleTouchEnd = () => {
      if (Math.abs(x2 - x1) < 350) {
         this.setCenter()
      }
   }

   const handleTouchMove = (e) => {
      if (!x1) {
         return false
      }
      const touchPoint = e.touches[0]

      x2 = touchPoint.clientX
      // let y2 = touchPoint.clientY

      let xDiff = x2 - x1
      // let yDiff = y2 - y1

      const offset = this.lineRef.current.offset + xDiff
      
      this.lineRef.current
         .style.transform = `translate(${offset}px, 0)` 

      if (xDiff > 350) {
         this.setState(({curCard}) => {
            const newId = curCard == 0 ? this.state.length - 1 : --curCard
            return {
               curCard: newId
            }
         })
      }
      if (xDiff < -350) {
         this.setState(({ curCard }) => {
            const newId = curCard == this.state.length - 1 ? 0 : ++curCard
            return {
               curCard: newId
            }
         })
      } 
   }



   
   
      return (
         <>
            <h2>{this.state.curCard}</h2>
            <div className="container" 
               onTouchStart={handleTouchStart}
               onTouchEnd={handleTouchEnd}
               onTouchMove={handleTouchMove}>
               <div className="line"
                  ref={this.lineRef}>
                  {
                     this.images.map((el, idx) => {
                        return (<Card
                           key={idx}
                           el={el}
                           changeCard={this.changeCard}
                           curCard={curCard}
                           length={length} />)
                     })
                  }
               </div>
            </div>
         </>
      )
   }

}

export default Container