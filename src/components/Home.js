import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

function Home() {

  const [isHover, setIsHover] = useState (false);

  const verseIn = () => {
    setIsHover(true); 
  }

  const verseOut = () => {
    setIsHover(false)
  }
  
  const verseStyle = {
    transition: isHover ? '2.5s' : '0',
    opacity: isHover ? '1' : '0',
  }

  return (
    <div className='homepage' id='home'>
        <img src='https://see.fontimg.com/api/renderfont4/MV1J/eyJyIjoiZnMiLCJoIjo4NCwidyI6MjAwMCwiZnMiOjQyLCJmZ2MiOiIjRTlGNEYyIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/aGkgSSxtIEpvaG4gQWxleGFuZGVyIEV1Z2VuaW8/hygiene.png' alt='' className='intro'/>
       <div className='intro-desc'>
        <p>Im a Web Developer who builds website to improve your existence</p>
        <p>Applications that leads to the success of the overall product</p>
        </div>
        <Earth 
          onMouseEnter={verseIn}
          onMouseLeave={verseOut}>
          <Verse 
          style={verseStyle} 
          >"In the beginning God created the heavens and the earth. 
            Now the earth was formless and empty, 
            darkness was over the surface of the deep, 
            and the Spirit of God was hovering over the waters."
            - Genesis 1:1-2</Verse>
        </Earth>
    </div>
  )
}

export default Home

const Earth = styled.div`
  margin-left: 850px;
  background: transparent;
  margin-top: 130px;
  width: 220px;
  height: 170px;
  border-radius: 250px;
`
const Verse = styled.div`
  margin-top: 10px;
  width: 250px;
  height: 120px;
  text-align: center;
  color: white;
  margin-left: 223px;
`