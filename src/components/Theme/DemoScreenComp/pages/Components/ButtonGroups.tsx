import { Box, Button, ButtonGroup } from '@mui/material'

const ButtonGroups = () => {
	return (
		<Box>
			<ButtonGroup variant="contained" aria-label="outlined primary button group">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>

			<ButtonGroup variant="outlined" aria-label="outlined primary button group">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>

			<ButtonGroup variant="text" aria-label="outlined primary button group">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
		</Box>
	)
}

export default ButtonGroups
