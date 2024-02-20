import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
        <>
           <Link href='/players' underline="none">
                <Typography textAlign="center">Jugadores</Typography>
            </Link>
            <Link href={'/s'} underline="none">
                <Typography textAlign="center">Inicio</Typography>
            </Link>
        </>
  )
}

export default Header
