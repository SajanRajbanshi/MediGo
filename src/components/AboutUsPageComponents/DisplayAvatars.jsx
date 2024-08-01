import { Grid } from '@mui/material';
import React from 'react';
import DisplayAvatar from './DisplayAvatar';

const DisplayAvatars = () => {
    const names = [
        "Sajan",
        "Saiganesh",
        "Niranjan",
        "Manjit",
        "Utkarsh"
    ];
    return (
        <Grid container spacing={{ xs: 4, md: 20 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                names.map((name, index) => (
                    <DisplayAvatar name={name} index={index} />
                ))
            }
        </Grid>
    )
}

export default DisplayAvatars;