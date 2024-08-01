import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Button, Drawer } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPage } from '../../redux/Slices/SelectedPageSlice';

const MenuPanelItem = ({ title, onActive }) => {
    const activeStyle = {
        background: 'linear-gradient(45deg, #bcdbef, #acdf01)',
    };
    const title_bar = title
    title = title.toLowerCase().split(" ").join("_")
    const url = title!=="home"? `/home/${title.toLowerCase()}`: "/home"
    return (
        <NavLink to={url}>
            <Button
                style={{
                    ...(onActive === title ? activeStyle : {}),
                    width: "180px",
                }}
            >
                {title_bar}
            </Button>
        </NavLink>
    );
};

const DrawerComponent = ({ open, onClose }) => {
    const active = useSelector((state=>state.selectedPage.value))
    const dispatch = useDispatch()
    const setValues = (title) =>{
        dispatch(setSelectedPage(title))
    }

    return (
        <>
            <Drawer
                title="Menu"
                placement="left"
                onClose={onClose}
                width={"200px"}
                open={open}
                style={{ overflow: 'hidden' }}
            >
                <ul
                    style={{
                        position: "absolute",
                        left: "10px",
                        display: "flex",
                        flexDirection: "column",
                        rowGap:"30px"
                    }}
                >
                    <li onClick={() => setValues("Home")}>
                        <MenuPanelItem title="Home" onActive={active} />
                    </li>
                    <li onClick={() => setValues("Contact Hub")}>
                        <MenuPanelItem title="Contact Hub" onActive={active} />
                    </li>
                    <li onClick={() => setValues("Prescription")}>
                        <MenuPanelItem title="Prescription" onActive={active} />
                    </li>
                    <li onClick={() => setValues("Products")}>
                        <MenuPanelItem title="Products" onActive={active} />
                    </li>
                    <li onClick={() => setValues("Rx History")}>
                        <MenuPanelItem title="Rx History" onActive={active} />
                    </li>
                </ul>
            </Drawer>
        </>
    );
};

export default DrawerComponent;
