import { ThemeOptions, Theme } from '@mui/material'
import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'

type ThemeObject = {
	id: string
	theme: Theme
}

interface State {
	currentTheme: ThemeObject | null
	newTheme: ThemeOptions
	allThemes: ThemeObject[]
}

const initialState: State = {
	currentTheme: null,
	newTheme: {
		palette: {
			type: 'light',
			primary: {
				main: '#3f51b5',
				light: '#6573c3',
				dark: '#2c387e',
				contrastText: '#ffffff',
			},
			secondary: {
				main: '#f50057',
				light: '#f73378',
				dark: '#ab003c',
				contrastText: '#ffffff',
			},
			background: {
				default: '#fafafa',
				paper: '#ffffff',
			},
			text: {
				primary: 'rgba(0,0,0,0.87)',
				secondary: 'rgba(0,0,0,0.54)',
				disabled: 'rgba(0,0,0,0.38)',
				hint: 'rgba(0,0,0,0.38)',
			},
			error: {
				main: '#f44336',
				light: '#f6685e',
				dark: '#aa2e25',
				contrastText: '#ffffff',
			},
			warning: {
				main: '#ff9800',
				light: '#ffac33',
				dark: '#b26a00',
				contrastText: 'rgba(0,0,0,0.87)',
			},
			info: {
				main: '#2196f3',
				light: '#4dabf5',
				dark: '#1769aa',
				contrastText: '#ffffff',
			},
			success: {
				main: '#4caf50',
				light: '#6fbf73',
				dark: '#357a38',
				contrastText: 'rgba(0,0,0,0.87)',
			},
			divider: 'rgba(0,0,0,0.12)',
		},
		typography: {
			fontSize: 14,
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
			fontWeightBold: 700,
			htmlFontSize: 17,
			h1: {
				fontSize: '5.7rem',
				fontWeight: 300,
				lineHeight: 1.16,
				letterSpacing: '-0.02em',
			},
			h2: {
				fontSize: '3.5rem',
				fontWeight: 300,
				letterSpacing: '-0.01em',
			},
			h3: {
				fontSize: '2.8rem',
				fontWeight: 400,
				lineHeight: 1.17,
				letterSpacing: '0.05em',
			},
			h4: {
				fontSize: '1.9rem',
				fontWeight: 400,
				lineHeight: 1.23,
				letterSpacing: '0.01em',
			},
			h5: {
				fontSize: '1.4rem',
				fontWeight: 400,
				lineHeight: 1.38,
				letterSpacing: '-0.02em',
			},
			h6: {
				fontSize: '1.1rem',
				fontWeight: 500,
				lineHeight: 1.59,
				letterSpacing: '-0.01em',
			},
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
	},
	allThemes: [],
}

const ThemeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: {
			reducer: (state, action) => {
				state.currentTheme = action.payload
				state.allThemes.push(action.payload)
			},
			prepare: (theme: Theme): { payload: ThemeObject } => {
				const id = nanoid()
				return { payload: { id, theme } }
			},
		},
		deleteTheme: (state, action: PayloadAction<string>) => {
			if (state.currentTheme && state.currentTheme.id !== action.payload) {
				state.allThemes = state.allThemes.filter((theme) => theme.id !== action.payload)
			}
		},
		changeNewTheme: (state, action: PayloadAction<ThemeOptions>) => {
			state.newTheme = action.payload
		},
	},
})

export const { deleteTheme, setTheme, changeNewTheme } = ThemeSlice.actions

export default ThemeSlice
