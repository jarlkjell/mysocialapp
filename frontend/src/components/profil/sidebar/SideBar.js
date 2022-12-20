import React from 'react';

import { useState } from 'react';

import Box from '@mui/material/Box';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import ReviewsRoundedIcon from '@mui/icons-material/ReviewsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const Sidebar = () => {
    const data = [
        { icon: <HomeRoundedIcon/>, label: "Home" },
        { icon: <NotificationsRoundedIcon/>, label: "Notifications" },
        { icon: <MailRoundedIcon/>, label: "Messages" },
        { icon: <ReviewsRoundedIcon/>, label: "Reviews" },
        { icon: <SettingsRoundedIcon/>, label: "Settings" },
        { icon: <LogoutRoundedIcon/>, label: "Logout" },
    ];
    const [open,setOpen] = useState(false);
           

    return (
        <>
                <Box sx={{
	                display: 'flex',
                    flexDirection: 'column',
                    
                    

	            }}>
	            <ListItemButton
                    alignItems="flex-start"
                    onClick={() => setOpen(!open)}
                    sx={{
                    px: 3,
                    
                    pb: open ? 0 : 2.5,
                    '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0.5 } },
                    }}
                >
		            <AccountCircleIcon/>
                </ListItemButton>
                {open &&
                    data.map((item) => (
                    <ListItemButton
                        key={item.label}
                        sx={{ py: 1, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                    >
                        <ListItemIcon sx={{ color: 'inherit' }}>
                        {item.icon}
                        </ListItemIcon>
                        <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                        />
                  </ListItemButton>
                ))}

                </Box>

        </>
  )
}

export default Sidebar
