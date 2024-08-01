import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Card as MuiCard,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
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

const Card = ({ Hospital_Detail, ImagePath, requested, onDelete, date, time }) => {
  const [isRightClicked, setIsRightClicked] = useState(false);
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [imagePath, setImagePath] = useState(ImagePath);
  const element = useRef(null);
  const imageList = [
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10
  ];

  const SelectRandomImage = () => {
    return imageList[Math.floor(Math.random() * imageList.length)];
  };

  if (imagePath == null) {
    setImagePath(SelectRandomImage);
  }

  const capitalize = (string) => {
    return string
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");
  };

  const ModifyHospitalName = () => {
    let name = Hospital_Detail["NAME"].toUpperCase();
    let modifiedName;
    if (name.includes("(")) {
      modifiedName = name.split("(")[0] + " (" + name.split("(")[1];
    } else {
      modifiedName = name;
    }
    return modifiedName;
  };

  const createClassNameByHospitalName = () => {
    return `card ${ModifyHospitalName().split(" ").join("_")}`;
  };

  const createFullAddressFromDetail = () => {
    const Addr = capitalize(Hospital_Detail["ADDRESS"]);
    const city = Hospital_Detail["CITY"].toUpperCase();
    const pinCode = Hospital_Detail["PIN CODE"];
    return [Addr, city, pinCode];
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    setIsRightClicked(true);
    if (element.current) {
      const cardRect = element.current.getBoundingClientRect();
      setX(event.clientX - cardRect.x);
      setY(event.clientY - cardRect.y);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (element.current) {
        setIsRightClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [element]);

  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete(Hospital_Detail.id);
    }
  };

  const theme = useTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
      background: {
        paper: "#fff",
        default: "#fafafa",
      },
    },
    shadows: Array(25)
      .fill("none")
      .map((_, index) => `0px ${index}px ${index * 2}px rgba(0,0,0,0.14)`),
    shape: {
      borderRadius: "12px",
    },
    spacing: (val) => {
      return `${val}px`;
    },
  });

  const StyledCard = styled(MuiCard)(({ theme }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    "& .option-block": {
      position: "absolute",
      top: "5px",
      right: "5px",
      zIndex: 1,
      background: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(1),
    },
    "& .dateAndTimeBlock": {
      position: "absolute",
      bottom: theme.spacing(1),
      fontFamily: theme.typography.fontFamily,
      left: theme.spacing(1),
      background: theme.palette.background.paper,
      padding: theme.spacing(0.5),
      borderRadius: theme.shape.borderRadius,
    },
  }));

  return (
    <StyledCard
      sx={{ overflow: "visible" }}
      ref={element}
      id={Hospital_Detail.id}
      className={createClassNameByHospitalName()}
      title={ModifyHospitalName()}
      onContextMenu={handleRightClick}
    >
      {requested && (
        <CardHeader
          sx={{
            fontSize: "10px",
            alignSelf: "end",
            padding: "5px 0"
          }}
          avatar={date + " " + time}
        />
      )}

      <CardMedia
        component="img"
        height="200px"
        sx={{ objectFit: "cover" }}
        id={Hospital_Detail.id + "_CardImage"}
        src={imagePath}
        alt="Hospital Image"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            textAlign: "center",
            cursor: "pointer",
            color: "#3d3d3d",
          }}
        >
          {ModifyHospitalName()}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "13px",
            textAlign: "center",
            cursor: "pointer"
          }}
        >
          {createFullAddressFromDetail()[0]}, {createFullAddressFromDetail()[1]}
          , {createFullAddressFromDetail()[2]}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
          mt: "auto",
          mb: 2
        }}>
        <Button
          size="small"
          id="viewMore"
          variant="outlined">
          View More
        </Button>
      </CardActions>
      <></>
      {isRightClicked && onDelete && (
        <Box
          className="option-block"
          style={{
            left: `${X}px`,
            top: `${Y}px`,
            width: "fit-content",
            padding: "10px",
            mb: 8,
          }}
        >
          <ul style={{display:"flex", flexDirection:"column",flex:1}}>
            <Button
              onClick={handleDeleteClick}
              variant="fill">
              Delete
            </Button>
            <Button
              variant="fill"
            >
              Pin
            </Button>
          </ul>
        </Box>
      )}
    </StyledCard>
  );
};

export default Card;
