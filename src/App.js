import React, { useState, useEffect } from 'react'
import logo from './assets/photo_2022-01-13_23-42-53.jpg'
import airsoft from './assets/airsoft.jpg'
import finance from './assets/finance.jpg'
import nft from './assets/nft.png'
import githubLogo from './assets/GitHub-logo-baner.png'
import psychology from './assets/psychology.jpg'
import "./style/App.css"

const App = () => {

    const [ activeSlide, setActiveSlide ] = useState(0)
    const [ elemHeight, setElemHeight ] = useState(0)
    const [ imageData, setImageData ] = useState({
        isFirstActive: true,
        isSecondActive: false,
        isThirdActive: false,
        isFourthActive: false,
        isFifthActive: false
    })
    const slidesCount = 4


    const containerRef = node => {
        if (node !== null) {
          setElemHeight(node.getBoundingClientRect().height);
        }
      }


      useEffect(() => {
            const conRef = document.querySelector('.container')
            setElemHeight(conRef.clientHeight)
      }, [])

    const changeSlide = (direction) => {
        if(direction === 'up') {
            setActiveSlide(activeSlide + 1)
            if((activeSlide + 1) === slidesCount) {
                setActiveSlide(0)
            }
        } else if (direction === 'down') {
            setActiveSlide(activeSlide - 1)
            if((activeSlide - 1) < 0) {
                setActiveSlide(slidesCount - 1)
            }
        }
    }
    return (
        <div className="container" ref={containerRef}>
            <div className="sidebar"  style={{ 
                top: `-${(slidesCount - 1) * 100}vh`,
                transform:  `translateY(${activeSlide * elemHeight}px)`
            }}>
                <div style={{background: "linear-gradient(220.16deg, #FFE101 -8%, #F39102 138%)"}}>
                    <h1><i className="fas fa-envelope"></i> Contact</h1>
                </div>
                <div style={{background: "linear-gradient(221.87deg, #8308EA 1%, #5305AF 128%)"}}>
                    <h1><i className="fas fa-calendar"></i> Portfolio</h1>
                </div>
                <div style={{background: "linear-gradient(215.32deg, #F90306 -1%, #9E0706 124%)"}}>
                    <h1><i className="fas fa-chalkboard"></i> About</h1>
                </div>
                <div style={{background: "linear-gradient(229.99deg, #11DEE9 -26%, #017E8B 145%)"}}>
                    <h1><i className="fas fa-home"></i> Home</h1>
                </div>
            </div>
            <div className="main-slide" style={{
                transform: `translateY(-${activeSlide * elemHeight}px)`
            }}>
                
                <div className="home">
                    <div className="h-container">
                        <img src={logo} alt="logo" />
                        <h1>Oleksandr Andriichuk</h1>
                        <h3>Junior Front-end Developer</h3>
                    </div>
                </div>
               <div className="about">
                    <div className="a-container">
                        <h3>About</h3>
                        <hr style={{width: '75%'}}/>
                        <span>A young 18-year-old boy from Ukraine. Cheerful, love to learn new things
                             also love challenging trials.
                         </span>
                         <span>1.5 years of development experience. A month of work at JobTerix and 4 months of freelancing.</span>
                        <p>Stack:</p>
                        <ol>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript/TypeScript</li>
                            <li>Sass</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Expo</li>
                            <li>Redux</li>
                            <li>Firebase</li>
                        </ol>
                    </div>
                </div>
                <div className="portfolio">
                    <div className="p-container">
                        <h1>Portfolio</h1>
                        <div className="images-slider">
                            <div 
                                className={`p-image ${imageData.isFirstActive ? 'active': ''}`}
                                style={{
                                    backgroundImage: `url(${airsoft})`
                                }}
                                onClick={() => setImageData({
                                    isFirstActice: true,
                                    isSecondActive: false,
                                    isThirdActive: false,
                                    isFourthActive: false,
                                    isFifthActive: false
                                })}
                            >
                                <h3><a href="https://dru1dd.github.io/airsoft-shop/#/">Airsoft Shop Demo</a></h3>
                            </div>
                             <div 
                                className={`p-image ${imageData.isSecondActive ? 'active': ''}`}
                                style={{
                                    backgroundImage: `url(${psychology})`
                                }}
                                onClick={() => setImageData({
                                    isFirstActice: false,
                                    isSecondActive: true,
                                    isThirdActive: false,
                                    isFourthActive: false,
                                    isFifthActive: false
                                })}
                            >
                                <h3><a href="https://github.com/Dru1DD/psychology-react-naitve-app">Mobile Psychology App</a></h3>
                            </div>
                            <div 
                                className={`p-image ${imageData.isThirdActive ? 'active': ''}`}
                                style={{
                                    backgroundImage: `url(${nft})`
                                }}
                                onClick={() => setImageData({
                                    isFirstActice: false,
                                    isSecondActive: false,
                                    isThirdActive: true,
                                    isFourthActive: false,
                                    isFifthActive: false
                                })}
                            >
                                <h3><a href="https://dru1dd.github.io/nft-frontend/">Nft marketplace</a></h3>
                            </div>
                            <div 
                                className={`p-image ${imageData.isFourthActive ? 'active': ''}`}
                                style={{
                                    backgroundImage: `url(${finance})`
                                }}
                                onClick={() => setImageData({
                                    isFirstActice: false,
                                    isSecondActive: false,
                                    isThirdActive: false,
                                    isFourthActive: true,
                                    isFifthActive: false
                                })}
                            >
                                <h3><a href="https://github.com/Dru1DD/expo-budget">Exspanse Tracker Mobile App</a></h3>
                            </div>
                            <div 
                                className={`p-image ${imageData.isFifthActive ? 'active': ''}`}
                                style={{
                                    backgroundImage: `url(${githubLogo})`
                                }}
                                onClick={() => setImageData({
                                    isFirstActice: false,
                                    isSecondActive: false,
                                    isThirdActive: false,
                                    isFourthActive: false,
                                    isFifthActive: true
                                })}
                            >
                                <h3><a href="https://github.com/Dru1DD" style={{color: 'black'}}>Check Github for more project</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                
                 <div className="contacts">
                    <div className="c-container">
                        <h3>Contacts</h3>
                        <hr style={{width: '75%'}}/>
                        <div className="contact-links">
                            <span>Github</span>
                            <a href='https://github.com/Dru1DD'><i style={{color: 'white'}} className="fab fa-github" /></a>
                        </div>
                        <div className="contact-links">
                            <span>Email</span>
                            <a href="mailto:olexandrandrichuk@gmail.com">olexandrandrichuk@gmail.com</a>
                        </div>
                        <div className="contact-links">
                            <span>Telefon Number</span>
                            <a href="tel:+380964019299">+380964019299</a>
                        </div>
                        <div className="contact-links">
                            <span>Telegram</span>
                            <a href=" https://t.me/Dru1DD"><i style={{color: 'white'}} className="fab fa-telegram" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="controls">
                <button className="down-button" onClick={() => changeSlide('down')}>
                    <i className="fas fa-arrow-down"></i>
                </button>
                <button className="up-button" onClick={() => changeSlide('up')}>
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        </div>
    )
}

export default App