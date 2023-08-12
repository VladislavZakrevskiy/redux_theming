import { AppBar, Toolbar, Typography } from '@mui/material'
import { useAppDispatch } from '../../../store/hooks'
import { navigatedToPage } from './DemoScreenSlice'

const Navbar = () => {
	const dispatch = useAppDispatch()

	return (
		<AppBar position="relative">
			<Toolbar>
				<Typography
					sx={{ cursor: 'pointer' }}
					pl={5}
					fontSize={24}
					onClick={() => dispatch(navigatedToPage('Blog'))}
				>
					Blog
				</Typography>
				<Typography
					sx={{ cursor: 'pointer' }}
					pl={5}
					fontSize={24}
					onClick={() => dispatch(navigatedToPage('Text'))}
				>
					Text
				</Typography>
				<Typography
					sx={{ cursor: 'pointer' }}
					pl={5}
					fontSize={24}
					onClick={() => dispatch(navigatedToPage('Components'))}
				>
					Components
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
