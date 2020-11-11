import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import exerciseImg from './images/exercise.png'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')

// ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(<Card 
                    title="Technique Guides"
                    description="Learn amazing street workout and calisthenics"
                    img={exerciseImg}
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                />, container)