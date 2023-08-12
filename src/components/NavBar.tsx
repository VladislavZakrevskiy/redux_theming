import { Home } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DarkModeButton from './Theme/DarkModeButton'

const NavBar = () => {
	const nav = useNavigate()

	return (
		<AppBar>
			<Toolbar>
				<IconButton sx={{ fontSize: 36, color: 'white' }} onClick={() => nav('/')}>
					<Home color="inherit" fontSize="inherit" />
				</IconButton>
				<Typography
					sx={{ cursor: 'pointer' }}
					pl={5}
					fontSize={24}
					onClick={() => nav('/notifications')}
				>
					Notifications
				</Typography>
				<Typography sx={{ cursor: 'pointer' }} pl={5} fontSize={24} onClick={() => nav('/themes')}>
					Themes
				</Typography>
				<Box sx={{ ml: 'auto' }}>
					<DarkModeButton />
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default NavBar
