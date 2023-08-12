import { VolumeDown, VolumeUp } from '@mui/icons-material';
import { Box, Slider, Stack } from '@mui/material';
import { useState } from 'react';


export default function ContinuousSlider() {
	const [value, setValue] = useState<number>(30)

	const handleChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number)
	}

	return (
		<Box sx={{ width: 200 }}>
			<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
				<VolumeDown />
				<Slider aria-label="Volume" value={value} onChange={handleChange} />
				<VolumeUp />
			</Stack>
		</Box>
	)
}
