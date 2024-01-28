import React from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Book, Headphone, Heart, Library, Radio, Rank } from '@/components/icons/Icons';


const Sidebar = () => {
    const menuItems = [
        { text: 'Khám phá', icon: <Book />, path: '/starred' },
        { text: 'Xếp hạng', icon: <Rank />, path: '/inbox' },
        { text: 'Thư viện', icon: <Library />, path: '/inbox' },
        { text: 'Radio', icon: <Radio />, path: '/inbox' },
        { text: 'Mới nghe', icon: <Headphone />, path: '/inbox' },
        { text: 'Yêu thích', icon: <Heart />, path: '/inbox' },
    ];

    return (
        <List>
            {menuItems.map((item, index) => (
                <ListItem button component={NavLink} to={item.path} key={item.text}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItem>
            ))}
        </List>
    );
};

export default Sidebar;

