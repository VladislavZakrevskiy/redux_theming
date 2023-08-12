import { Favorite, Home, Share } from '@mui/icons-material'
import { Box, Button, IconButton } from '@mui/material'
const Buttons = () => {
	return (
		<Box>
			<Button variant="contained">Contained Button</Button>
			<Button variant="outlined">Outlined Button</Button>
			<Button variant="text">Text Button</Button>

			<IconButton>
				<Favorite />
			</IconButton>
			<IconButton>
				<Home />
			</IconButton>
			<IconButton>
				<Share />
			</IconButton>
		</Box>
	)
}

export default Buttons
