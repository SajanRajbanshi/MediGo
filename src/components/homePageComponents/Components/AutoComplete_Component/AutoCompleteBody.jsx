import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Autocomplete, TextField, CardActionArea } from '@mui/material';
import { LinearProgress, Box } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import FakeData from "../../assets/FakeData";
import "../../assets/search_illustration.svg";

export function ActionAreaCard({ imagePath, label, isNameSearched = false }) {
    return (
        <Card
            sx={!isNameSearched ? { maxWidth: 345 } : { width: "60%" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={!isNameSearched ? "140" : "350"}
                    image={imagePath}
                    sx={{ objectFit: "fill" }}
                    alt="Hospital Card Image"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ fontWeight: "700" }}
                        component="div">
                        {label}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus ratione obcaecati exercitationem explicabo dolorum, eligendi molestias corporis assumenda soluta odio dolorem aliquid aliquam eius nam vero suscipit culpa esse aut quo provident. Quasi fuga ea dignissimos, labore eius, laborum similique, aut doloremque doloribus modi numquam velit unde necessitatibus adipisci.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

function AutoCompleteBody({ searchingFor, resultSize }) {

    const [result, setResult] = useState(0)
    // const [direction, setdirection] = useState("descending")
    let direction = "descending"
    const RandomImage = () => {
        return `../src/assets/img/${Math.floor(Math.random() * 10) + 1}.jpg`;
    };

    const filteredServicesData = FakeData.filter((item) => {
        return item.Services.includes(searchingFor.label);

    });

    const filteredHospitalTypeData = FakeData.filter((item) => {
        return item["Hospital Type"].includes(searchingFor.label);

    });

    useEffect(() => {
        if (searchingFor.label) {
            if (searchingFor.type === "Hospital Type") {
                resultSize(filteredHospitalTypeData.length);
                setResult(filteredHospitalTypeData.length)
            }
            else if (searchingFor.type === "Services") {
                resultSize(filteredServicesData.length);
                setResult(filteredServicesData.length)
            }
            else {
                resultSize(1)
                setResult(1)
            }
        }
    }, [searchingFor, resultSize, filteredHospitalTypeData, filteredServicesData]);

    const [loading, setLoading] = useState(true);
    const [sortBasis, setSortBasis] = useState("Name")

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const handleSortTypeChange = () => {
        if (direction === "descending") {

        }
    }

        const HospitalTypeData = () => {
            filteredHospitalTypeData.sort((a, b) => { })
            return (
                filteredHospitalTypeData.map((item) => {
                    const imagePath = RandomImage();
                    return (
                        <Grid
                            item
                            key={item.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            padding={5}>
                            <ActionAreaCard
                                key={item.id}
                                imagePath={imagePath}
                                label={item.Name}
                            />
                        </Grid>)
                })
            );
        };

        const ServicesTypeData = () => {
            return (
                filteredServicesData.map((item) => (
                    <Grid
                        item
                        key={item.id}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        padding={5}>
                        <ActionAreaCard
                            key={item.id}
                            imagePath={RandomImage()}
                            label={item.Name}
                        />
                    </Grid>
                ))
            );
        };

        return (
            <Box>
                <Box display={"flex"} alignItems={"start"}
                    justifyContent={"space-between"}
                >
                    <Typography
                        variant='h4'
                        sx={{
                            fontWeight: "bold",
                            marginBottom: "8px",
                            marginLeft: "18px",
                        }}
                    >
                        {searchingFor.label ? (searchingFor.label + " (") :
                            <Box width={window.innerWidth}>
                                <Typography variant="h5">Waiting For Search . . .</Typography>
                                <LinearProgress />
                            </Box>
                        }
                        {result > 0 ? result + ")" : ""
                            // <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={(window.innerWidth-200)} height={window.innerHeight-200} viewBox="0 0 934.98 571.14"><path d="m733.52,89.21s-20.58,2.32-21.91,34.19c-1.11,26.56-3.37,41.36,7.44,46.9,3.86,1.98,8.4,2.15,12.53.8l44.1-14.5s.66-47.8-14.61-59.42-27.55-7.97-27.55-7.97h0Z" fill="#36344e" stroke-width="0" /><polygon points="757.83 162.46 735.51 169.8 735.51 137.67 755.76 137.67 757.83 162.46" fill="#faafb2" stroke-width="0" /><path id="uuid-ea0a1472-32fb-4242-948a-de51795c4bd3-46-44-46-72-78-43-43-46-678" d="m689.6,344.84c-1.21,7.36-6.12,12.64-10.96,11.79-4.85-.85-7.79-7.51-6.58-14.87.44-2.95,1.61-5.74,3.4-8.13l5.53-31.12,15.05,3.15-7.05,30.34c.93,2.87,1.14,5.9.61,8.84h0Z" fill="#faafb2" stroke-width="0" /><polygon points="740.7 551.77 719.8 551.77 707.67 440.07 739.99 440.07 740.7 551.77" fill="#faafb2" stroke-width="0" /><path d="m699.44,569.72c-2.2,0-4.16-.05-5.63-.19-5.55-.51-10.85-4.61-13.51-7-1.19-1.07-1.58-2.79-.96-4.27h0c.45-1.06,1.34-1.85,2.45-2.17l14.67-4.19,23.76-16.03.27.48c.1.18,2.43,4.38,3.21,7.22.3,1.08.22,1.98-.23,2.68-.31.48-.75.76-1.1.92.43.45,1.78,1.36,5.93,2.02,6.07.96,7.33-5.32,7.39-5.58l.04-.21.18-.12c2.88-1.86,4.66-2.7,5.27-2.52.38.11,1.02.31,2.74,17.41.17.54,1.38,4.47.56,8.24-.89,4.1-18.78,2.69-22.36,2.36-.1.01-13.49.96-22.67.96h-.01Z" fill="#36344e" stroke-width="0" /><polygon points="787.93 551.77 767.02 551.77 754.9 440.07 787.21 440.07 787.93 551.77" fill="#faafb2" stroke-width="0" /><path d="m746.67,569.72c-2.2,0-4.16-.05-5.63-.19-5.55-.51-10.85-4.61-13.51-7-1.19-1.07-1.58-2.79-.96-4.27h0c.45-1.06,1.34-1.85,2.45-2.17l14.67-4.19,23.76-16.03.27.48c.1.18,2.43,4.38,3.21,7.22.3,1.08.22,1.98-.23,2.68-.31.48-.75.76-1.1.92.43.45,1.78,1.36,5.93,2.02,6.07.96,7.33-5.32,7.39-5.58l.04-.21.18-.12c2.89-1.86,4.66-2.7,5.27-2.52.38.11,1.02.31,2.74,17.41.17.54,1.38,4.47.56,8.24-.89,4.1-18.78,2.69-22.36,2.36-.1.01-13.49.96-22.67.96h-.01Z" fill="#36344e" stroke-width="0" /><polygon points="793.94 277.42 692.37 277.42 728.88 157.26 769.38 157.26 793.94 277.42" fill="#dfdfe0" stroke-width="0" /><path d="m735.27,157.27s-25.23-.66-27.88,5.98-33.86,164.65-33.86,164.65h20.58l41.16-170.62h0Z" fill="#dfdfe0" stroke-width="0" /><circle cx="738.27" cy="124.32" r="22.24" fill="#faafb2" stroke-width="0" /><path d="m732.19,97.51s-12.24,49.7,1.37,72.93l-19.17-4.07s-7.43-54.39,7.51-64.28c0,0,10.29-4.58,10.29-4.58Z" fill="#36344e" stroke-width="0" /><path d="m772.83,277.42h-66.66l-36.47,149.69c-.67,6.32,3.34,12.22,9.48,13.87,20.01,5.36,68.03,12.95,140.7-8.2,6.99-2.03,10.96-9.41,8.77-16.36l-55.82-139h0Z" fill="#36344e" stroke-width="0" /><path d="m745.88,157.26l20.73-.91c8.98.68,17.1,5.56,21.91,13.17,14.65,23.16,42.06,71.97,17.59,78.66-32.26,8.81-47.89-40.24-47.89-40.24l-12.34-50.68h0Z" fill="#dfdfe0" stroke-width="0" /><path id="uuid-298a271f-a3d1-4ea5-9ac1-ac2853dfa275-47-45-47-73-79-44-44-47-679" d="m738.77,171.8c-4.26-6.12-4.41-13.33-.35-16.1,4.07-2.77,10.82-.04,15.08,6.08,1.74,2.42,2.84,5.24,3.22,8.2l17.71,26.18-12.99,8.23-16.08-26.68c-2.67-1.41-4.93-3.44-6.59-5.91h0Z" fill="#faafb2" stroke-width="0" /><polygon points="749.25 192.97 763.88 179.51 792.81 206.44 765.91 224.83 749.25 192.97" fill="#dfdfe0" stroke-width="0" /><path d="m32.41,126.63h459.26c17.9,0,32.41,14.51,32.41,32.41h0c0,17.9-14.51,32.41-32.41,32.41H32.41c-17.9,0-32.41-14.51-32.41-32.41h0c0-17.9,14.51-32.41,32.41-32.41Z" fill="#6c63ff" stroke-width="0" /><path d="m203.31,569.95c0,.66.53,1.19,1.19,1.19h729.29c.66,0,1.19-.53,1.19-1.19s-.53-1.19-1.19-1.19H204.5c-.66,0-1.19.53-1.19,1.19Z" fill="#484565" stroke-width="0" /><path d="m424.62,93.95h95.35c2.28,0,4.12,1.84,4.12,4.11h0c0,2.27-1.84,4.11-4.12,4.11h-95.35c-2.28,0-4.12-1.84-4.12-4.11h0c0-2.27,1.84-4.11,4.12-4.11Z" fill="#dfdfe0" stroke-width="0" /><path d="m4.12,0h95.35c2.28,0,4.12,1.84,4.12,4.11h0c0,2.27-1.84,4.11-4.12,4.11H4.12C1.84,8.23,0,6.39,0,4.11h0C0,1.84,1.84,0,4.12,0Z" fill="#dfdfe0" stroke-width="0" /><path d="m4.12,35.91h279.87c2.28,0,4.12,1.84,4.12,4.12h0c0,2.27-1.84,4.11-4.12,4.11H4.12c-2.28,0-4.12-1.84-4.12-4.11h0c0-2.27,1.84-4.12,4.12-4.12Z" fill="#dfdfe0" stroke-width="0" /><path d="m233.77,260.88c0,21.56,17.48,39.04,39.04,39.04,6.53,0,12.68-1.6,18.08-4.43l37.83,60c2.32,3.67,7.27,4.59,10.75,1.99h0c3.25-2.43,3.95-7.01,1.58-10.31l-41.61-57.75c7.63-7.13,12.41-17.28,12.41-28.54,0-21.56-17.48-39.04-39.04-39.04s-39.04,17.48-39.04,39.04Zm5.36,0c0-18.6,15.08-33.69,33.69-33.69s33.69,15.08,33.69,33.69c0,18.6-15.08,33.69-33.69,33.69-18.6,0-33.69-15.08-33.69-33.69Z" fill="#484662" stroke-width="0" /></svg>
                        }
                    </Typography>
                    {searchingFor.label ?
                        <Box display={"flex"} gap={"20px"} margin={"0 10px"} alignItems={"center"}>
                            <FilterListIcon onClick={(event) => {
                                if (direction === "descending") {
                                    event.currentTarget.style.transform = "rotate(180deg)"
                                    direction = "ascending"
                                }
                                else {
                                    event.currentTarget.style.transform = "rotate(360deg)"
                                    direction = "descending"
                                }
                            }} />
                            <Autocomplete
                                disablePortal
                                id="combo-box-options"
                                options={["Name", "Rating", "Nearest", "Avg. Fee", "Established"]}
                                getOptionLabel={(option) => option}
                                isOptionEqualToValue={(option, value) => option.type === value.type}
                                sx={{ width: 150 }}
                                onClick={handleSortTypeChange}
                                renderInput={(params) => <TextField {...params} label="Sort By" />}
                            />
                        </Box>
                        : ""}


                </Box>
                <Container
                    maxWidth="100%">
                    {searchingFor.type !== "Name" ?
                        (
                            <Grid
                                container
                                spacing={10}
                                justify="center"
                                padding={5}
                                ml={0}
                            >
                                {searchingFor.type === "Hospital Type" &&
                                    HospitalTypeData()

                                }
                                {searchingFor.type === "Services" &&
                                    ServicesTypeData()
                                }
                            </Grid>
                        )
                        :
                        (
                            <Box
                                component={"div"}
                                display={'flex'}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <ActionAreaCard
                                    imagePath={RandomImage()}
                                    label={searchingFor.label}
                                    isNameSearched={true}
                                />
                            </Box>
                        )
                    }
                </Container>
            </Box>
        );
    }



    export function LabTabs() {
        const [value, setValue] = React.useState('1');

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };


        return (
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
        );
    }

    export default AutoCompleteBody