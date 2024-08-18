import React from 'react'
import Plants from '../components/Plants'
import BotanicalStore from '../components/BotanicalStore'
import Featured from '../components/Featured'
import Usluqa from '../components/Usluqa'
import DailyDeal from '../components/DailyDeal'
import Timer from '../components/Timer'
import Email from '../components/Email'

import SSsirket from '../components/SSsirket'
import Headerrr1 from '../components/Headerrr1'

const Home:React.FC = () => {
  return (
    <>
   <Headerrr1 />
    <Plants />
    <BotanicalStore />
    <Featured />
    <Usluqa />
    <DailyDeal />
    <Timer />
    <SSsirket />
    <Email />
    
    </>
  )
}

export default Home