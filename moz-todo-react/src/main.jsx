import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HobbiesScreen from './HobbiesScreen'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HobbiesScreen />
  </StrictMode>,
)
