import React from 'react'
import style from './adduser.module.css'
// import { Search } from '@mui/icons-material'
import { alpha, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const nav = useNavigate()

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <nav className=' w-full h-auto mb-20'>
      <div id={style.navConatainer}
        className=' w-full h-[100px] border border-solid border-red-400 bg-transparent absolute top-0 left-0 flex justify-between items-center'>
        <div className=' flex justify-around items-center w-1/4'>
          <h1 className=' text-4xl'>LOGO</h1>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
        <div className=' w-2/4'>
          <ul className=' flex justify-evenly items-center text-xl cursor-pointer'>
            <li
              onClick={() => { nav('/') }}
            >Data</li>
            <li
              onClick={() => { nav('/app-user') }}
            >Register</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
