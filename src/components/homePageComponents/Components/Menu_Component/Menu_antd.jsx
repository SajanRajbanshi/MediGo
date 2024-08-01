import { HomeFilled, ContactsFilled, ProductFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import { FaFileMedical, FaFilePrescription } from "react-icons/fa";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setSelectedPage } from "../../redux/Slices/SelectedPageSlice";
import "./MenuPanel.css";
const items = [
    {
        label: (
            <NavLink to="/home">
                Home
            </NavLink>
        ),
        key: 'Home',
        icon: <HomeFilled />
    },
    {
        label:
            <NavLink to="/home/contact_hub">
                Contact Hub
            </NavLink>,
        key: 'Contact Hub',
        icon: <ContactsFilled />,
    },
    {
        label:
            <NavLink to="/home/prescription">
                Prescription
            </NavLink>,
        key: 'Prescription',
        icon: <FaFilePrescription />,
    },
    {
        label: <NavLink to="/home/products">
            Products
        </NavLink>,
        key: 'Products',
        icon: <ProductFilled />
    },
    {
        label: <NavLink to="/home/rx_history">
            Rx History
        </NavLink>,
        key: 'Rx History',
        icon: <FaFileMedical />,
    }
];
const Menu_AntD = () => {
    const Dispatch = useDispatch()
    const current = useSelector((state) => state.selectedPage.value)
    const onClick = (e) => {
        Dispatch(setSelectedPage(e.key))
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items} />;
};
export default Menu_AntD;