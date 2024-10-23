import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Experiment from './Components/Experiment'
import CarouselPage from './Pages/CarouselPage/CarouselPage'
import OnePage from './Pages/OnePage/OnePage'
import ScrollToTopButton from './Components/ScrollToTopButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Experiment></Experiment>
     <CarouselPage></CarouselPage>
     <OnePage></OnePage>
     <ScrollToTopButton></ScrollToTopButton>
    </>
  )
}

export default App
