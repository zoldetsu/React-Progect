import Header from './components/Header/Header'
import TeachingSection from './components/TeachingSection'
// import ButtonsSections from './components/ButtonsSections'
import IntroSection from './components/IntroSection'
import TabSelection from './components/TabSelection'
import FeedBackSection from './components/FeedBackSection'
import './App.css'
import { useState } from 'react'
import EffectSection from './components/EffectSection'
import DifferencesSection from './components/DifferencesSection'



function App() {
  const [visible, setVisible] = useState(true)
  const [tab, setTab] = useState("feedback")

  function check(type) {   
    setTab(type)
  }

  return (
    <>
      {visible && <Header />}
      <main>
        <IntroSection/>
        {/* (current) => setTab(current) */}
        {/* (current) => check(current) */}
        <TabSelection active={tab} onChange={check}/>
        
        {tab === 'main' && <>
          <TeachingSection/>
          <DifferencesSection />
        </>}

        {tab === 'feedback' && <>
          <FeedBackSection/>
        </>}

        {tab === 'effect' && <EffectSection />}
      </main>
    </>
  )
}
export default App
