import './App.css'
import HighlightsTab from './components/HighlightsTab'
import MainArea from './components/MainArea'
import NavigationTab from './components/NavigationTab'

function App() {

  return (
    <div className='w-[100vw] h-[100vh] overflow-x-hidden flex flex-row justify-between' >
    <NavigationTab/>
    <MainArea/>
    <HighlightsTab/>
    </div>
  )
}

export default App
