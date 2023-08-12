import { Box, Typography } from '@mui/material'

const TextPage = () => {
	const variants = [
		'body1',
		'body2',
		'button',
		'caption',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'inherit',
		'overline',
		'subtitle1',
		'subtitle2',
	]

	return (
		<Box p={1}>
			{variants.map((variant) => (
				<Box display="flex" gap={2}>
					<Typography paragraph fontWeight={700}>
						{variant}
					</Typography>
					<Typography paragraph variant={variant}>
						Some Text
					</Typography>
				</Box>
			))}
		</Box>
	)
}

export default TextPage
