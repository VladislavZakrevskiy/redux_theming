import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { Dispatch } from '@reduxjs/toolkit'
import { FC, SetStateAction, useState, useEffect } from 'react'
import TextChanger from './TextChanger'

export interface IText {
	fontSize: string
	fontWeight: number
	lineHeight: number
	letterSpacing: string
}

interface ITextAccordionProps {
	label: string
	state: [IText, Dispatch<SetStateAction<IText>>]
}

const TextAccordion: FC<ITextAccordionProps> = ({ label, state: [state, setState] }) => {
	const fontSize = useState<string>(state.fontSize)
	const fontWeight = useState<number>(state.fontWeight)
	const lineHeight = useState<number>(state.lineHeight)
	const letterSpacing = useState<string>(state.letterSpacing)

	useEffect(() => {
		setState({
			fontSize: fontSize[0],
			fontWeight: fontWeight[0],
			lineHeight: lineHeight[0],
			letterSpacing: letterSpacing[0],
		})
	}, [fontSize[0], fontWeight[0], lineHeight[0], letterSpacing[0]])

	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMore />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Typography>{label}</Typography>
			</AccordionSummary>
			<AccordionDetails sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
				<TextChanger label="Font size" state={fontSize} />
				<TextChanger label="Font weight" state={fontWeight} />
				<TextChanger label="Light" state={lineHeight} />
				<TextChanger label="Contrast text" state={letterSpacing} />
			</AccordionDetails>
		</Accordion>
	)
}

export default TextAccordion
