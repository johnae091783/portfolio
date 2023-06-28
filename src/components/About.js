import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import astrologo from '../images/astronaut.png'
import spaceSat from '../images/satellite (1).png'
import icon1 from '../images/planet1.png'
import icon2 from '../images/planet2.png'
import icon3 from '../images/planet3.png'
import icon4 from '../images/planet4.png'
import icon6 from '../images/planet6.png'
import icon7 from '../images/planet7.png'
import icon8 from '../images/planet8.png'
import sun from '../images/sun.png'

function About() {

    const [clickMercury, setClickMercury] = useState (0);
    const [clickSaturn, setClickSaturn] = useState (1);
    const [clickUranus, setClickUranus] = useState (2);
    const [clickMars, setClickMars] = useState (3);
    const [clickVenus, setClickVenus] = useState (4);
    const [clickNeptune, setClickNeptune] = useState (5);
    const [clickJupiter, setClickJupiter] = useState (6);

    function zoomInMercury() {
        if (clickMercury == 0) {
            setClickMercury(1);
        } else {
            setClickMercury(0);
        }
    }
    const mercuryStyle = {
        transition: '1s',
        transform: clickMercury == 1 ? 'translate(334px, 390px) scale(2)' : 'translate(334px, 390px) scale(1)',
    }
    const displayCss = {
        transition: '1s',
        transform: clickMercury == 1 ? 'translate(337px, 358px) scale(2)' : 'translate(335px, 346px) scale(0)',
    }

    function zoomInSaturn() {
        if (clickSaturn == 1) {
            setClickSaturn(2);
        } else {
            setClickSaturn(1);
        }
    }
    const saturnStyle = {
        transition: '1s',
        transform: clickSaturn == 2 ? 'translate(535px, 115px) scale(2)' : 'translate(535px, 115px) scale(1)',
    }
    const displayReact = {
        transition: '2s',
        transform: clickSaturn == 2 ? 'translate(554px, 98px) scale(2)' : 'translate(535px, 70px) scale(0)',
    }

    function zoomInUranus() {
        if (clickUranus == 2) {
            setClickUranus(3);
        } else {
            setClickUranus(2);
        }
    }
    const uranusStyle = {
        transition: '1s',
        transform: clickUranus == 3 ? 'translate(660px, 105px) scale(2)' : 'translate(660px, 105px) scale(1)',
    }
    const displayHtml = {
        transition: '2s',
        transform: clickUranus == 3 ? 'translate(667px, 83px) scale(2)' : 'translate(660px, 55px) scale(0)',
    }

    function zoomInMars() {
        if (clickMars == 3) {
            setClickMars(4);
        } else {
            setClickMars(3);
        }
    }
    const marsStyle = {
        transition: '1s',
        transform: clickMars == 4 ? 'translate(704px, 180px) scale(2)' : 'translate(704px, 180px) scale(1)',
    }
    const displayJavascript = {
        transition: '2s',
        transform: clickMars == 4 ? 'translate(710px, 170px) scale(2)' : 'translate(710px, 130px) scale(0)',
    }

    function zoomInVenus() {
        if (clickVenus == 4) {
            setClickVenus(5);
        } else {
            setClickVenus(4);
        }
    }
    const venusStyle = {
        transition: '1s',
        transform: clickVenus == 5 ? 'translate(385px, -220px) scale(2)' : 'translate(385px, -220px) scale(1)',
    }
    const displaySeo = {
        transition: '2s',
        transform: clickVenus == 5 ? 'translate(397px, -246px) scale(2)' : 'translate(385px, -270px) scale(0)',
    }

    function zoomInNeptune() {
        if (clickNeptune == 5) {
            setClickNeptune(6);
        } else {
            setClickNeptune(5);
        }
    }
    const neptuneStyle = {
        transition: '1s',
        transform: clickNeptune == 6 ? 'translate(370px, 35px) scale(2)' : 'translate(370px, 35px) scale(1)',
    }
    const displayWireframe = {
        transition: '2s',
        transform: clickNeptune == 6 ? 'translate(374px, 30px) scale(2)' : 'translate(374px, -20px) scale(0)',
    }

    function zoomInJupiter() {
        if (clickJupiter == 6) {
            setClickJupiter(7);
        } else {
            setClickJupiter(6);
        }
    }
    const jupiterStyle = {
        transition: '1s',
        transform: clickJupiter == 7 ? 'translate(571px, 15px) scale(2)' : 'translate(571px, 15px) scale(1)',
    }
    const displaySql = {
        transition: '2s',
        transform: clickJupiter == 7 ? 'translate(582px, -9px) scale(2)' : 'translate(570px, -35px) scale(0)',
    }

  return (
    <div className='aboutpage' id='aboutme'>
        <Container style={{width:'100vw', height:'50vh', backgroundColor:'none'}}>
            <Aboutme style={{width:'40%', height:'100%', backgroundColor:'none'}}>
                <img src='https://see.fontimg.com/api/renderfont4/MV1J/eyJyIjoiZnMiLCJoIjo3NiwidyI6MjAwMCwiZnMiOjM4LCJmZ2MiOiIjRTlGNEYyIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QWJvdXQgTUU/hygiene.png'
                style={{width:'115px', height:'30px', marginTop:'180px'}}/>
                <p style={{marginTop:'30px'}}>Here you will find more information about me,</p> 
                <p>what I do, and my current skills mostly in terms</p>
                <p>of programming and technology</p>
                
                <div style={{width:'120px', height:'130px', borderRadius:'100px', transform:'translate(250px, 200px)'}}>
                    <img src={astrologo} style={{width:'100px' , height:'100px' , translate:'57px -370px'}} />
                    <div style={{translate:'140px -470px' , width:'350px' , display:'flex'}}>
                        <p className='animatetext-click'>Click</p>
                        <p className='animatetext-onthe'>on the</p>
                        <p className='animatetext-planet'>Planet</p>
                        <p className='animatetext-tosee'>to see</p>
                        <p className='animatetext-myskills'>My Skills</p>
                    </div>
                    <div>
                        <img src={spaceSat} className='satellite'/>
                        <div style={{width:'300px' , marginTop:'-120px' , marginLeft:'-50px'}}>
                            <p className='hobbies' id='play'>i love to play video games</p>
                            <p className='hobbies' id='read'>i love to read books and magazines</p>
                            <p className='hobbies' id='watch'>i love to watch documentaries</p>
                            <p className='hobbies' id='hike'>i love to hike and climb mountain</p>
                            <p className='hobbies' id='walk'>i love to walk-around in nature</p>
                        </div>
                    </div>
                </div>
            </Aboutme> 
            <Skills style={{width:'60%', height:'100%', backgroundColor:'none'}}>
                <div>
                    <img src={icon1} onClick={zoomInMercury} style={mercuryStyle} className='planet'/>
                    <h1 onClick={zoomInMercury} style={displayCss} id='css'>CSS</h1>
                </div>
                <div>
                    <img src={icon2} onClick={zoomInSaturn} style={saturnStyle} className='planet'/>
                    <h1 onClick={zoomInSaturn} style={displayReact} id='react'>REACT</h1>
                </div>
                <div>
                    <img src={icon3} onClick={zoomInUranus} style={uranusStyle} className='planet'/>
                    <h1 onClick={zoomInUranus} style={displayHtml} id='html'>HTML</h1>
                </div>
                <div>
                    <img src={icon4} onClick={zoomInMars} style={marsStyle} className='planet'/>
                    <h1 onClick={zoomInMars} style={displayJavascript} id='javascript'>JAVASCRIPT</h1>
                </div>
                <div>
                    <img src={icon6} onClick={zoomInVenus} style={venusStyle} className='planet'/>
                    <h1 onClick={zoomInVenus} style={displaySeo} id='seo'>SEO</h1>
                </div>
                <div>
                    <img src={icon7} onClick={zoomInNeptune} style={neptuneStyle} className='planet'/>
                    <h1 onClick={zoomInNeptune} style={displayWireframe} id='wireframe'>WIREFRAME</h1>
                </div>
                <div>
                    <img src={icon8} onClick={zoomInJupiter} style={jupiterStyle} className='planet'/>
                    <h1 onClick={zoomInJupiter} style={displaySql} id='sql'>SQL</h1>
                </div>
                <div><img src={sun} className='sun'/></div>
            </Skills>
        </Container>
    </div>
  )
}

export default About


const Container = styled.div`
    display: flex;
`
const Aboutme = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Skills = styled.div`
    display: block;
    position: relative;   
`