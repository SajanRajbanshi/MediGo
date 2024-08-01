import React, { useState, useEffect } from 'react';
import SearchBar from "../SearchBar_Component/SearchBar";
import "./NavBar.css";
import Menu_AntD from '../Menu_Component/Menu_antd';
import { Stack } from '@mui/material';
import DrawerComponent from '../Drawer_Component/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { setWindowWidth } from '../../redux/Slices/SelectedPageSlice'; // Assuming you have the correct path here

function NavBar() {
  const dispatch = useDispatch();
  const width = useSelector((state) => state.windowChange.value);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      dispatch(setWindowWidth(windowWidth));
    };
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  const isSmallWindow = width <= 975;

  return (
    <nav className='navBar' id='navBar'>
      {isSmallWindow ? (
        <DrawerComponent open={isOpen} onClose={() => setIsOpen(false)} />
      ) : (
        <Stack direction={"row"} width={"100%"} justifyContent={"center"} alignItems={"center"}>
          <Menu_AntD />
          <SearchBar />
        </Stack>
      )}
    </nav>
  );
}

export default NavBar;
