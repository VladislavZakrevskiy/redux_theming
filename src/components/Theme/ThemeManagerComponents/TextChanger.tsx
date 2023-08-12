import { Box, TextField, Typography } from '@mui/material'
import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react';

interface ITextChangerProps {
	label: string
	state: [string | number, Dispatch<SetStateAction<string | number>>]
}

const TextChanger: FC<ITextChangerProps> = ({ label, state: [state, setState] }) => {
	const [query, setQuery] = useState("");

	useEffect(() => {
		const timeOutId = setTimeout(() => setState(query), 1000)
		return () => clearTimeout(timeOutId)
	}, [query])
	return (
		<Box display="flex" gap={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
			<Typography>{label}</Typography>
			<TextField
				sx={{ width: 200 }}
				value={query}
				onChange={(event) => setQuery(event.target.value)}
			/>
		</Box>
	)
}
export default TextChanger
