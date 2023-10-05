import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import './Home.css'

function Home(props:any) {

  const items = props.data;

  const [showData,setShowData] = useState(false);

  useEffect(() => {
    // Update showData based on items.length once when the component mounts
    if (items.length === 0) {
      setShowData(false);
    } else {
      setShowData(true);
    }
  }, [items.length]);
  
  return (
    <>
    {showData && <div className='main-content' style={{
      marginLeft: '256px',
      width : "100%",
    }}>

      {items.map((item: any) => {
        return <Card data={item}/>
      })}
      
    </div>}

    {!showData && <div className='error-content'  style={{
      marginLeft: '256px',
      width : "100%",
    }}>
            <h3 style={{width: "100%"}}>No Products Found</h3>
      </div>}
    
    </>
  )
}

export default Home