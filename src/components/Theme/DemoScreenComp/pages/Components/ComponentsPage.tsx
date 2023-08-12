import { Box, Typography } from '@mui/material'
import Autocomplete from './Autocomplete'
import Buttons from './Buttons'
import ButtonGroups from './ButtonGroups'
import Checkboxes from './Checkboxes'
import RowRadioButtonsGroup from './RadioGroup'
import SelectOtherProps from './Select'
import TextField from './TextField'
import ColorSwitches from './Switch'
import ContinuousSlider from './Slider'
import SelectAllTransferList from './TransferList'
import ToggleButtonNotEmpty from './ToggleButton'
import LetterAvatars from './Avatar'
import BadgeVisibility from './Badge'
import ColorChips from './Chips'
import DividerText from './Devider'
import InteractiveList from './List'
import EnhancedTable from './Table'
import Tooltip from './Tooltip'
import AlertDialogSlide from './Dialog'
import BasicAlerts from './Alert'
import PositionedSnackbar from './Snackbar'

const ComponentsPage = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 1 }}>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Autocomplete</Typography>
				<Autocomplete />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Buttons</Typography>
				<Buttons />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Button Groups</Typography>
				<ButtonGroups />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Checkboxes</Typography>
				<Checkboxes />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Radio Groups</Typography>
				<RowRadioButtonsGroup />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Select</Typography>
				<SelectOtherProps />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Slider</Typography>
				<ContinuousSlider />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Switch</Typography>
				<ColorSwitches />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Text Field</Typography>
				<TextField />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Transfer List</Typography>
				<SelectAllTransferList />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Toggle Button</Typography>
				<ToggleButtonNotEmpty />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Autocomplete</Typography>
				<LetterAvatars />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Badge</Typography>
				<BadgeVisibility />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Chips</Typography>
				<ColorChips />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Divider</Typography>
				<DividerText />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>List</Typography>
				<InteractiveList />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Table</Typography>
				<EnhancedTable />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Tooltip</Typography>
				<Tooltip />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Alerts</Typography>
				<BasicAlerts />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Dialog</Typography>
				<AlertDialogSlide />
			</Box>
			<Box>
				<Typography sx={{ p: 1, fontWeight: 700, fontSize: 24 }}>Snackbar</Typography>
				<PositionedSnackbar />
			</Box>
		</Box>
	)
}

export default ComponentsPage
