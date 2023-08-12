import { Paper } from '@mui/material'
import DemoScreen from '../components/Theme/DemoScreen'
import ThemeManager from '../components/Theme/ThemeManager'

const ThemesUpdater = () => {
	return (
		<Paper sx={{ minHeight: '100vh', p: 10, display: 'flex', gap: 3 }}>
			<DemoScreen />
			<ThemeManager/>
		</Paper>	
	)
}

export default ThemesUpdater
