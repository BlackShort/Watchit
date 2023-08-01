import React, { useContext } from 'react';
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { SearchBar } from "./SearchBar";
import img from "../images/playlist.png";
import { StateContextApi } from './contexApi';
import user from '../images/user.png'


export const Navbar = () => {

    const { openMenu, setOpenMenu } = useContext(StateContextApi);

    return (
        <Stack direction="row" alignItems="center" sx={{ position: "sticky", background: '#0f0f0f', width: "-webkit-fill-available", height: '56px', justifyContent: "space-between", padding: '0 1.3em' }}>
            <Box display={'flex'} gap={'1em'} alignItems={'center'}>
                <MenuIcon sx={{ display: { sm: 'none' } }} onClick={() => setOpenMenu(!openMenu)} style={{ fill: "#fff", width: '1.2em', height: '1.2em', cursor: 'pointer' }} />
                <Link to="/" style={{ display: "flex", alignItems: "center", fontSize: '2rem', color: "#fff", gap: '0.5em' }}>
                    Watchit
                    <img src={img} alt="icon" width={23} />
                </Link>
            </Box>
            <SearchBar />
            <span><img src={user} alt="Account" style={{ width: '35px', objectFit: 'contain', border: '2px solid #fff', borderRadius: '50%', fontSize: '2em', cursor: 'pointer' }} /></span>
        </Stack>
    )
}
