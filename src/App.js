import './App.css'
import ImagesLoad from './examples/onLoad/ImagesLoad'
import ImagesLoadDelay from './examples/onLoad/ImagesLoadDelay'
import ToggleComponent from './utilityHooks/1-useToggle/ToggleComponent'
import TimeoutComponent from './utilityHooks/2-useTimeout/TimeoutComponent'
import DebounceComponent from './utilityHooks/3-useDebounce/DebounceComponent'
import UpdateEffectComponent from './utilityHooks/4-useUpdateEffect/UpdateEffectComponent'
import ArrayComponent from './utilityHooks/5-useArray/ArrayComponent'
import PreviousComponent from './utilityHooks/6-usePrevious/PreviousComponent'
import StorageComponent from './utilityHooks/8-useStorage/StorageComponent'
import AsyncComponent from './utilityHooks/9-useAsync/AsyncComponent'
import FetchComponent from './utilityHooks/10-useFetch/FetchComponent'

function App() {
  return (
    <div>
      <ImagesLoad />
      <ImagesLoadDelay />
    </div>
  )
  // utility hooks

  // return <ToggleComponent />
  // return <TimeoutComponent />
  // return <DebounceComponent />
  // return <UpdateEffectComponent />
  // return <ArrayComponent />
  // return <PreviousComponent />
  // return <StateWithHistoryComponent />
  // return <StorageComponent />
  // return <AsyncComponent />
  // return <FetchComponent />
  // return <ScriptComponent />
  // return <DeepCompareEffectComponent />
  // return <EventListenerComponent />
  // return <OnScreenComponentComponent />
  // return <WindowSizeComponent />
}

export default App
