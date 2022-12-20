import React from 'react';
import styled from "styled-components";
import SidebarLink from './SideBarLink';
import Header from '../login/loginComponents/loginCard/Header';
import { FancyTheme,DarkTheme } from '../../themeProvider/CustomTheme';
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useState } from 'react';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import ReviewsRoundedIcon from '@mui/icons-material/ReviewsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';


const Sidebar = () => {
    const [theme,setTheme] = useState(true);  
    return (
        <ThemeProvider theme={theme ? FancyTheme : DarkTheme}>
            <CssBaseline>
                <Header theme={theme} setTheme={setTheme}>
                </Header>
                <StyledSidebar>

                <div className="Sidebar">
                    <SidebarLink text="Home" Icon={HomeRoundedIcon} />
                    <SidebarLink text="Notifications" Icon={NotificationsRoundedIcon} />
                    <SidebarLink text="Messages" Icon={MailRoundedIcon} />
                    <SidebarLink text="Reviews" Icon={ReviewsRoundedIcon} />
                    <SidebarLink text="Settings" Icon={SettingsRoundedIcon} />
                    <SidebarLink text="Logout" Icon={LogoutRoundedIcon} />
                </div>
                
                </StyledSidebar>
            </CssBaseline>
        </ThemeProvider>

  )
}

export default Sidebar

const StyledSidebar = styled.div`
  min-width: 250px;
  padding: 20px 20px;
  margin: 30px auto 0 auto;
  box-shadow: 0 0 6px hsl(210 14% 90%);
  /* border: 1px solid blue; */
`;