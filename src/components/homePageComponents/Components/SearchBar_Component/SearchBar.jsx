import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import dataFetch from "../../assets/jsonData";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { Stack } from "@mui/material"
import { useDispatch } from "react-redux";
import { setSearchCardData } from "../../redux/Slices/SearchSlice";
import img1 from "../../assets/img/1.jpg"
import img2 from "../../assets/img/2.jpg"
import img3 from "../../assets/img/3.jpg"
import img4 from "../../assets/img/4.jpg"
import img5 from "../../assets/img/5.jpg"
import img6 from "../../assets/img/6.jpg"
import img7 from "../../assets/img/7.jpg"
import img8 from "../../assets/img/8.jpg"
import img9 from "../../assets/img/9.jpg"
import img10 from "../../assets/img/10.jpg"

const SearchBar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useDispatch()
  let searchTerm = "";
  const imageList = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
  ];
  const navigate = useNavigate();


  const SelectRandomImage = () => {
    return imageList[Math.floor(Math.random() * imageList.length)];
  };

  const handleSearchInputOpeningAndClosing = () => {
    setIsOpened(!isOpened);
  };

  const handleBlurEvent = () => {
    setIsOpened(false);
  };

  const makeRequestForRecentCardAdd = (event) => {
    if (event.key === "Enter") {
      searchTerm = event.target.value;
      if (searchTerm !== "") {
        let Hospital_detail = dataFetch.filter(
          (data) => data.NAME === searchTerm
        );
        const RandomImage = SelectRandomImage();
        if (Hospital_detail.length != 0) {
          // getCardDataFromHeader({
          //   image: RandomImage,
          //   hospital_Detail: Hospital_detail[0],
          // });
          dispatch(setSearchCardData({
            image: RandomImage,
            hospital_Detail: Hospital_detail[0],
          }))
        }
      }
      navigate("/home/search");
    }
  };

  return (
    <Stack id="rightSideDivForProfileAndSearch" className="homepage_searchbar_right">
      <Stack className="homepage_searchbar_sear" id="sear" title="Search Hospitals" direction={"row"}>
        <label
          htmlFor="search"
          id="label_of_search"
          className="homepage_searchbar_label_of_search"
          onClick={handleSearchInputOpeningAndClosing}
        >
          <IoSearchSharp style={{ width: "20px", height: "20px" }} />
        </label>
        {isOpened && (
          <input
            type="search"
            className="homepage_searchbar_search"
            list="homepage_searchbar_data"
            id="search"
            placeholder="Search Hospitals..."
            onBlur={handleBlurEvent}
            onKeyDown={makeRequestForRecentCardAdd}
          />
        )}
        <datalist id="homepage_searchbar_data"
        className="homepage_searchbar_data"
        >
          {dataFetch.map((value, index) => (
            <option key={index} value={value.NAME}>
              {value.NAME}
            </option>
          ))}
        </datalist>
      </Stack>
    </Stack>
  );
};

export default SearchBar;
