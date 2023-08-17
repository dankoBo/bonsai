import styled from 'styled-components'
import AppBar from '@mui/material/AppBar'

const StyledAppBar = styled(AppBar)`
	&.MuiAppBar-root {
		position: relative;
		width: 1180px;
		height: 80px;
		margin: 0 auto;
		background-color: transparent;
	}
`

const StyledBox = styled(Box)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export { StyledAppBar, StyledBox }