import React from 'react'
import Card from '../card/Card'
import './Home.css'

function Home(props:any) {

  const items = props.data;
  return (
    <div className='main-content' style={{
      marginLeft: '256px',
      width : "100%",
    }}>

      {items.map((item: any) => {
        return <Card data={item}/>
      })}
      
    </div>
  )
}

export default Home