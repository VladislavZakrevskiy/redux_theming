import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import TodoById from './pages/TodoById'
import Notifications from './pages/Notifications'
import NavBar from './components/NavBar'
import UpdateById from './pages/UpdateById'
import { ThemeProvider, createTheme } from '@mui/material'
import { useAppSelector } from './store/hooks'
import ThemesUpdater from './pages/ThemesUpdater'

function App() {
  const currentTheme = useAppSelector(state => state.theme.currentTheme)

  const baseTheme = createTheme()

	return (
		<ThemeProvider theme={currentTheme?.theme ?? baseTheme}>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/more/:id" element={<TodoById />} />
					<Route path="/update/:id" element={<UpdateById />} />
					<Route path="/notifications" element={<Notifications />} />
					<Route path="/themes" element={<ThemesUpdater />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
