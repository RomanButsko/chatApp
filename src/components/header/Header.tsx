import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'

const Header = () => {
    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: '#9c27b0' }}>
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
                    <Tooltip title="Open settings">
                        <IconButton sx={{ p: 0 }}>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/2.jpg"
                            />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
