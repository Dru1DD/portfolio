import React, { useState, useCallback } from 'react'
import "./style/App.css"

// const slides = [
//     'https://images.unsplash.com/photo-1601574968106-b312ac309953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80',
//     'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2023&q=80',
//     'https://images.unsplash.com/photo-1501529301789-b48c1975542a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
//     'https://images.unsplash.com/photo-1520263115673-610416f52ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
// ]

const App = () => {

    const [ activeSlide, setActiveSlide ] = useState(0)
    const [ elemHeight, setElemHeight ] = useState(0)
    const slidesCount = 4

    const containerRef = useCallback(node => {
        if (node !== null) {
          setElemHeight(node.getBoundingClientRect().height);
        }
      }, []);



    const changeSlide = (direction) => {
        if(direction === 'up') {
            setActiveSlide(activeSlide + 1)
            if((activeSlide + 1) === slidesCount) {
                setActiveSlide(0)
            }
            console.log(`Up: ${true}, activeSlide: ${activeSlide}`)
        } else if (direction === 'down') {
            setActiveSlide(activeSlide - 1)
            if((activeSlide - 1) < 0) {
                setActiveSlide(slidesCount - 1)
            }
            console.log(`Down: ${true}, activeSlide: ${activeSlide}`)
        }
    }
    return (
        <div className="container" ref={containerRef}>
            <div className="sidebar"  style={{ 
                top: `-${(slidesCount - 1) * 100}vh`,
                transform: `translateY(${activeSlide * elemHeight}px)`
            }}>
                <div style={{background: "linear-gradient(229.99deg, #11DEE9 -26%, #017E8B 145%)"}}>
                    <h1>Home</h1>
                    <p>Portfolio React Developer</p>
                </div>
                <div style={{background: "linear-gradient(215.32deg, #F90306 -1%, #9E0706 124%)"}}>
                    <h1>About</h1>
                    <p>Love, death & robots</p>
                </div>
                <div style={{background: "linear-gradient(221.87deg, #8308EA 1%, #5305AF 128%)"}}>
                    <h1>Portfolio</h1>
                    <p>Love, death & robots</p>
                </div>
                <div style={{background: "linear-gradient(220.16deg, #FFE101 -8%, #F39102 138%)"}}>
                    <h1>Contact</h1>
                    <p>Love, death & robots</p>
                </div>
            </div>
            <div className="main-slide" style={{
                transform: `translateY(-${activeSlide * elemHeight}px)`
            }}>
                <div>
                    <img src='https://images.unsplash.com/photo-1601574968106-b312ac309953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80' alt="background"/>
                </div>
                <div>
                    <img src='https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2023&q=80' alt="background" />
                </div>
                <div>
                    <img src='https://images.unsplash.com/photo-1501529301789-b48c1975542a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' alt="background" />
                </div>
                <div>
                    <img src='https://images.unsplash.com/photo-1520263115673-610416f52ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80' alt="background" />
                </div>
            </div>
            <div className="controls">
                <button className="down-button" onClick={() => changeSlide('down')}>
                    <i className="fas fa-arrow-down" />
                </button>
                <button className="up-button" onClick={() => changeSlide('up')}>
                    <i className="fas fa-arrow-up" />
                </button>
            </div>
        </div>
    )
}

export default App