import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	ThemeOptions,
	Typography,
} from '@mui/material'
import ColorChanger from './ThemeManagerComponents/ColorChanger'
import { useState, useEffect, useMemo } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { changeNewTheme } from './ThemeSlice'
import { ExpandMore } from '@mui/icons-material'
import TextAccordion, { IText } from './ThemeManagerComponents/TextAccordion'

const ThemeManager = () => {
	const primaryMain = useState<string>('#3f51b5')
	const primaryDark = useState<string>('#2c387e')
	const primaryLight = useState<string>('#6573c3')
	const primaryCT = useState<string>('#ffffff')

	const secondaryMain = useState<string>('#f50057')
	const secondaryDark = useState<string>('#ab003c')
	const secondaryLight = useState<string>('#f73378')
	const secondaryCT = useState<string>('#ffffff')

	const bgDefault = useState<string>('#fafafa')
	const bgPaper = useState<string>('#ffffff')

	const textPrimary = useState<string>('rgba(0,0,0,0.87)')
	const textSecondary = useState<string>('rgba(0,0,0,0.54)')
	const textDisabled = useState<string>('rgba(0,0,0,0.38)')
	const textHint = useState<string>('rgba(0,0,0,0.38)')

	const errorMain = useState<string>('#f44336')
	const errorDark = useState<string>('#aa2e25')
	const errorLight = useState<string>('#f6685e')
	const errorCT = useState<string>('#ffffff')

	const warningMain = useState<string>('#ff9800')
	const warningDark = useState<string>('#b26a00')
	const warningLight = useState<string>('#ffac33')
	const warningCT = useState<string>('rgba(0,0,0,0.87)')

	const infoMain = useState<string>('#2196f3')
	const infoDark = useState<string>('#1769aa')
	const infoLight = useState<string>('#4dabf5')
	const infoCT = useState<string>('#ffffff')

	const successMain = useState<string>('#2196f3')
	const successDark = useState<string>('#1769aa')
	const successLight = useState<string>('#4dabf5')
	const successCT = useState<string>('#ffffff')

	const divider = useState<string>('rgba(0,0,0,0.12)')

	const h1 = useState<IText>({
		fontSize: '5.7rem',
		fontWeight: 300,
		lineHeight: 1.16,
		letterSpacing: '-0.02em',
	})
	const h2 = useState<IText>({
		fontSize: '3.5rem',
		fontWeight: 300,
		lineHeight: 1.16,
		letterSpacing: '-0.01em',
	})
	const h3 = useState<IText>({
		fontSize: '2.8rem',
		fontWeight: 400,
		lineHeight: 1.17,
		letterSpacing: '0.05em',
	})
	const h4 = useState<IText>({
		fontSize: '1.9rem',
		fontWeight: 400,
		lineHeight: 1.23,
		letterSpacing: '0.01em',
	})
	const h5 = useState<IText>({
		fontSize: '1.4rem',
		fontWeight: 400,
		lineHeight: 1.38,
		letterSpacing: '-0.02em',
	})
	const h6 = useState<IText>({
		fontSize: '1.1rem',
		fontWeight: 500,
		lineHeight: 1.59,
		letterSpacing: '-0.01em',
	})

	const dispatch = useAppDispatch()
	const theme: ThemeOptions = useMemo(
		() => ({
			palette: {
				type: 'light',
				primary: {
					main: primaryMain[0] ? primaryMain[0] : '#3f51b5',
					light: primaryLight[0] ? primaryLight[0] : '#6573c3',
					dark: primaryDark[0] ? primaryDark[0] : '#2c387e',
					contrastText: primaryCT[0] ? primaryCT[0] : '#ffffff',
				},
				secondary: {
					main: secondaryMain[0] ? secondaryMain[0] : '#f50057',
					light: secondaryLight[0] ? secondaryLight[0] : '#f73378',
					dark: secondaryDark[0] ? secondaryDark[0] : '#ab003c',
					contrastText: secondaryCT[0] ? secondaryCT[0] : '#ffffff',
				},
				background: {
					default: bgDefault[0] ? bgDefault[0] : '#fafafa',
					paper: bgPaper[0] ? bgPaper[0] : '#ffffff',
				},
				text: {
					primary: textPrimary[0] ? textPrimary[0] : 'rgba(0,0,0,0.87)',
					secondary: textSecondary[0] ? textSecondary[0] : 'rgba(0,0,0,0.54)',
					disabled: textDisabled[0] ? textDisabled[0] : 'rgba(0,0,0,0.38)',
					hint: textHint[0] ? textHint[0] : 'rgba(0,0,0,0.38)',
				},
				error: {
					main: errorMain[0] ? errorMain[0] : '#f44336',
					light: errorLight[0] ? errorLight[0] : '#f6685e',
					dark: errorDark[0] ? errorDark[0] : '#aa2e25',
					contrastText: errorCT[0] ? errorCT[0] : '#ffffff',
				},
				warning: {
					main: warningMain[0] ? warningMain[0] : '#ff9800',
					light: warningLight[0] ? warningLight[0] : '#ffac33',
					dark: warningDark[0] ? warningDark[0] : '#b26a00',
					contrastText: warningCT[0] ? warningCT[0] : 'rgba(0,0,0,0.87)',
				},
				info: {
					main: infoMain[0] ? infoMain[0] : '#2196f3',
					light: infoLight[0] ? infoLight[0] : '#4dabf5',
					dark: infoDark[0] ? infoDark[0] : '#1769aa',
					contrastText: infoCT[0] ? infoCT[0] : '#ffffff',
				},
				success: {
					main: successMain[0] ? successMain[0] : '#4caf50',
					light: successLight[0] ? successLight[0] : '#6fbf73',
					dark: successDark[0] ? successDark[0] : '#357a38',
					contrastText: successCT[0] ? successCT[0] : 'rgba(0,0,0,0.87)',
				},
				divider: divider[0] ? divider[0] : 'rgba(0,0,0,0.12)',
			},
			typography: {
				fontSize: 14,
				fontWeightLight: 300,
				fontWeightRegular: 400,
				fontWeightMedium: 500,
				fontWeightBold: 700,
				htmlFontSize: 17,
				h1: h1[0],
				h2: h2[0],
				h3: h3[0],
				h4: h4[0],
				h5: h5[0],
				h6: h6[0],
				subtitle1: {
					fontSize: '1rem',
					fontWeight: 400,
					lineHeight: 1.78,
					letterSpacing: '0.01em',
				},
				subtitle2: {
					fontSize: '1rem',
					fontWeight: 500,
					lineHeight: 1.58,
					letterSpacing: '0.01em',
				},
				body1: {
					fontSize: '0.8rem',
					fontWeight: 400,
					lineHeight: 1.57,
					letterSpacing: '0em',
				},
				body2: {
					fontSize: '0.8rem',
					fontWeight: 400,
					lineHeight: 1.43,
					letterSpacing: '0.04em',
				},
				button: {
					fontSize: '0.8rem',
					fontWeight: 500,
					lineHeight: 1.74,
					letterSpacing: '0.03em',
				},
				caption: {
					fontSize: '0.6rem',
					fontWeight: 400,
					lineHeight: 1.68,
					letterSpacing: '0.03em',
				},
				overline: {
					fontSize: '0.8rem',
					fontWeight: 400,
					lineHeight: 2.62,
					letterSpacing: '0.06em',
				},
			},
		}),
		[
			primaryMain[0],
			primaryDark[0],
			primaryLight[0],
			primaryCT[0],
			secondaryMain[0],
			secondaryDark[0],
			secondaryLight[0],
			secondaryCT[0],
			bgDefault[0],
			bgPaper[0],
			textPrimary[0],
			textSecondary[0],
			textDisabled[0],
			textHint[0],
			errorMain[0],
			errorDark[0],
			errorLight[0],
			errorCT[0],
			warningMain[0],
			warningDark[0],
			warningLight[0],
			warningCT[0],
			infoMain[0],
			infoDark[0],
			infoLight[0],
			infoCT[0],
			successMain[0],
			successDark[0],
			successLight[0],
			successCT[0],
			divider[0],
			h1[0],
			h2[0],
			h3[0],
			h4[0],
			h5[0],
			h6[0],
		]
	)

	useEffect(() => {
		dispatch(changeNewTheme(theme))
	}, [theme])

	return (
		<Box display="flex" flexDirection={'column'} gap={1}>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Primary</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
					<ColorChanger label="Main" state={primaryMain} />
					<ColorChanger label="Dark" state={primaryDark} />
					<ColorChanger label="Light" state={primaryLight} />
					<ColorChanger label="Contrast text" state={primaryCT} />
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Secondary</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
					<ColorChanger label="Main" state={secondaryMain} />
					<ColorChanger label="Dark" state={secondaryDark} />
					<ColorChanger label="Light" state={secondaryLight} />
					<ColorChanger label="Contrast text" state={secondaryCT} />
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Background</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
					<ColorChanger label="Default" state={bgDefault} />
					<ColorChanger label="Paper" state={bgPaper} />
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Text</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
					<ColorChanger label="Primary" state={textPrimary} />
					<ColorChanger label="Secondary" state={textSecondary} />
					<ColorChanger label="Disabled" state={textDisabled} />
					<ColorChanger label="Hint" state={textHint} />
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Error</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
					<ColorChanger label="Main" state={errorMain} />
					<ColorChanger label="Dark" state={errorDark} />
					<ColorChanger label="Light" state={errorLight} />
					<ColorChanger label="Contrast text" state={errorCT} />
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Warning</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
					<ColorChanger label="Main" state={warningMain} />
					<ColorChanger label="Dark" state={warningDark} />
					<ColorChanger label="Light" state={warningLight} />
					<ColorChanger label="Contrast text" state={warningCT} />
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Info</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
					<ColorChanger label="Main" state={infoMain} />
					<ColorChanger label="Dark" state={infoDark} />
					<ColorChanger label="Light" state={infoLight} />
					<ColorChanger label="Contrast text" state={infoCT} />
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Success</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
					<ColorChanger label="Main" state={successMain} />
					<ColorChanger label="Dark" state={successDark} />
					<ColorChanger label="Light" state={successLight} />
					<ColorChanger label="Contrast text" state={successCT} />
				</AccordionDetails>
			</Accordion>
			<ColorChanger label="Divider" state={divider} />

			<TextAccordion label="h1" state={h1} />
			<TextAccordion label="h2" state={h2} />
			<TextAccordion label="h3" state={h3} />
			<TextAccordion label="h4" state={h4} />
			<TextAccordion label="h5" state={h5} />
			<TextAccordion label="h6" state={h6} />

		</Box>
	)
}

export default ThemeManager
