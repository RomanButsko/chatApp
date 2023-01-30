import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ListItemIcon from '@mui/material/ListItemIcon'

export const SideBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Divider />
            <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Inbox'} />
                        </ListItemButton>
                    </ListItem>
            </List>
            <Divider />
        </Box>
    )
}