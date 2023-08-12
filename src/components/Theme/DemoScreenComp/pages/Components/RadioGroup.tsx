import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

export default function RowRadioButtonsGroup() {
	return (
		<FormControl>
			<FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
			<RadioGroup
				row
				aria-labelledby="demo-row-radio-buttons-group-label"
				name="row-radio-buttons-group"
			>
				<FormControlLabel value="female" control={<Radio />} label="Female" />
				<FormControlLabel value="male" control={<Radio />} label="Male" />
				<FormControlLabel value="other" control={<Radio />} label="Other" />
				<FormControlLabel value="disabled" disabled control={<Radio />} label="other" />
			</RadioGroup>
		</FormControl>
	)
}
