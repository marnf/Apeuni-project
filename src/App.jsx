import { useState } from 'react'

import './App.css'
import CarouselPage from './Pages/CarouselPage/CarouselPage'
import OnePage from './Pages/OnePage/OnePage'
import ScrollToTopButton from './Components/ScrollToTopButton'
import RightNavigationBar from './Components/RightNavigationBar'
import Header from './Components/Header'
import Experiment from './Components/Experiment'
import TwoPage from './Pages/TwoPage/TwoPage'
import ThreePage from './Pages/ThreePage/ThreePage'
import FourPage from './Pages/FourPage/FourPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div className='flex'>
     <Header></Header>
     <RightNavigationBar></RightNavigationBar>
  
</div>


     <CarouselPage></CarouselPage>
     <OnePage></OnePage>
     <TwoPage></TwoPage>
     <ThreePage></ThreePage>
     <FourPage></FourPage>
     <Experiment></Experiment>
     <ScrollToTopButton></ScrollToTopButton>
    </>
  )
}

export default App
