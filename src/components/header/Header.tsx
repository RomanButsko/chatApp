import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import LogoutIcon from '@mui/icons-material/Logout'
import { Box, Stack } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import { useAppSelector } from './../../hooks/useSelector'

export const Header = () => {
    const handleLogout = () => {
        localStorage.clear()
        window.location.replace('/')
    }

    const user = useAppSelector((state) => state.auth.user)

    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: '#6db958' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                            fontWeight: 500,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Itransition #6
                    </Typography>
                    <Box>
                        {user ? (
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                            >
                                <PersonIcon />
                                <span>{user.name}</span>
                                <Tooltip title="Logout">
                                    <IconButton
                                        sx={{ p: 0 }}
                                        onClick={handleLogout}
                                    >
                                        <LogoutIcon
                                            style={{ color: '#ffff' }}
                                        />
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                        ) : (
                            <></>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
