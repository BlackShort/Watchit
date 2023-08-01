import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import { categories } from "../utils/constants";

import HomeIcon from '@mui/icons-material/Home';
import { StateContextApi } from './contexApi';
import { Link } from "react-router-dom";


export const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const { openMenu } = useContext(StateContextApi);

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "100%" },
        flexDirection: { md: 'column' },
        padding: "1em 0.5em",
        gap: '0.2em',
        scrollBehavior: 'smooth',
      }}
    >

      <Link to={'/'}>
        <button
          type="button"
          className='category-btn'
          onClick={() => setSelectedCategory("")}
          style={{ width: '-webkit-fill-available',background: (selectedCategory === "" && '#272727'), color: 'white', alignItems: 'center' }}
        >
          <span style={{ width: 'max-content', height: 'auto', display: 'flex', alignItems: 'center' }}><HomeIcon /></span>

          <span style={{ opacity: (selectedCategory === "" ? '1' : '0.8') }}>{openMenu ? '' : 'Home'}</span>
        </button>
      </Link>

      {
        categories.map((category) => (
          <button
            type="button"
            className='category-btn'
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}

            style={{ background: (category.name === selectedCategory && '#272727'), color: 'white', alignItems: 'center' }}
          >
            <span style={{ width: 'max-content', height: 'auto', display: 'flex', alignItems: 'center' }}>{category.icon}</span>

            <span style={{ opacity: (category.name === selectedCategory ? '1' : '0.8') }}>{openMenu ? '' : (category.name)}</span>
          </button>
        ))
      }
      <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", textAlign: 'center' }}>
        Copyright © 2023 knighthings. All rights reserved
      </Typography>
    </Stack>
  )
}
