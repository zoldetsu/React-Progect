import AnimePage from './pages/Anime/TitlePage'
import Headers from './components/Header/Headers'
import { Route, Routes } from 'react-router-dom'
import DoramaPage from './pages/Dorama/DoramaPage'
import Sign from './pages/Авторизация/Sign'
import './index.css'
import Seach from './pages/Поиск/Seach'
import AnimeTitle from './pages/CertainAnime/TitleView'

function App() {
  return (
    <div>
      <Headers/>
      <Routes>
      <Route path='/seach' element={<Seach/>}/>
        <Route path='/sign' element={<Sign/>}/>
        <Route path='/anime' element={<AnimePage/>}/>
        <Route path='/' element={<AnimePage/>}/>
        <Route path='/dorama' element={<DoramaPage/>}/>
        <Route path="/Anime/:id" element={<AnimeTitle/>}/>
      </Routes>
        
    </div>
  )
}
export default App
