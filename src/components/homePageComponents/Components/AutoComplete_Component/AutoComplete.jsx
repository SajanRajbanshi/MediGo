import React, { useState } from "react";
import {
  Autocomplete,
  TextField,
  Box,
  Container,
  Typography,
} from "@mui/material";
import FakeData from "../../assets/FakeData";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function GenerateOptionData() {
  let Data = FakeData.map((item) => ({ label: item.Name, type: "Name" }));
  let servicesData = new Set();
  FakeData.forEach((item) =>
    item.Services.split(",").forEach((i) => {
      servicesData.add(i.trim());
    })
  );
  servicesData.forEach((ele) => {
    Data.push({ label: ele, type: "Services" });
  });
  Data.push({ label: "Public", type: "Hospital Type" });
  Data.push({ label: "Private", type: "Hospital Type" });

  Data.sort((a, b) => (a.label > b.label ? 1 : -1)); // sort alphabetically
  return Data;
}
const Data = GenerateOptionData();

// export function AutoComplete({ onChangeSearch,SearchType }) {

//     const handleClickedOnSearchInput = (event, newValue) => {
//         if (newValue) onChangeSearch(newValue);
//     };

//     return (
//         <Container sx={{padding:"8px"}}>
//         <Box component="div" sx={{ p: 2, display: 'flex', gap: "25px" }} justifyContent={"center"}>
//             <Autocomplete
//                 disablePortal
//                 id="combo-box-options"
//                 options={Data.filter((i) => {
//                     if (SearchType === "All") {
//                         return true;
//                     } else {
//                         return i.type === SearchType;
//                     }
//                 })}
//                 onChange={handleClickedOnSearchInput}
//                 getOptionLabel={(option) => option.label}
//                 isOptionEqualToValue={(option, value) => option.label === value.label}
//                 sx={{ width: 300 }}
//                 renderInput={(params) => <TextField {...params} label="Search Hospital" />}
//             />
//         </Box>
//         </Container>
//     );
// }

// export function AutoCompleteSearchBasis({onChangeSearchType}){

//     const handleSearchType = (event, newValue) => {
//         if (newValue) onChangeSearchType(newValue);
//         else onChangeSearchType("All");
//     };

//     return(
//         <Autocomplete
//                 disablePortal
//                 id="combo-box-options"
//                 options={["All", "Name", "Services", "Hospital Type"]}
//                 onChange={handleSearchType}
//                 getOptionLabel={(option) => option}
//                 isOptionEqualToValue={(option, value) => option.label === value.label}
//                 sx={{ width: 150 }}
//                 renderInput={(params) => <TextField {...params} label="Options" />}
//             />
//     )
// }

function AutoComplete({ onChangeSearch, resultSize }) {
  const [SearchType, setSearchType] = useState("All");

  const handleSearchType = (event, newValue) => {
    if (newValue) setSearchType(newValue);
    else setSearchType("All");
  };

  const handleClickedOnSearchInput = (event, newValue) => {
    if (newValue) onChangeSearch(newValue);
  };

  return (
    <Container sx={{ padding: "8px" }}>
      <Box
        component="div"
        sx={{ p: 2, display: "flex", gap: "25px" }}
        justifyContent={"center"}
      >
        <Autocomplete
          disablePortal
          id="combo-box-options"
          options={Data.filter((i) => {
            if (SearchType === "All") {
              return true;
            } else {
              return i.type === SearchType;
            }
          })}
          onChange={handleClickedOnSearchInput}
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={(option, value) => option.label !== value.label}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Search Hospital" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-options"
          options={["All", "Name", "Services", "Hospital Type"]}
          onChange={handleSearchType}
          getOptionLabel={(option) => option}
          isOptionEqualToValue={(option, value) => option.type === value.type}
          sx={{ width: 150 }}
          renderInput={(params) => <TextField {...params} label="Options" />}
        />
        <Typography 
        variant="body 1" 
        alignSelf="center" 
        color="rgba(0,0,0,0.4)">
          Total Search Result: {resultSize}
        </Typography>
      </Box>
    </Container>
  );
}

export default AutoComplete;
