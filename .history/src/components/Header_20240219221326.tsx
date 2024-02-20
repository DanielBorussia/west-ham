import { Link, Typography } from '@mui/material'

const Header = () => {
  return (
        <>
           <Link href={'/players'} underline="none">
                <Typography textAlign="center">Jugadores</Typography>
            </Link>
            <Link href={'/'} underline="none">
                <Typography textAlign="center">Inicio</Typography>
            </Link>
        </>
  )
}

export default Header
