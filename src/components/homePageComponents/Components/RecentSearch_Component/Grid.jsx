import React, { useEffect, useRef, useState } from "react";
import { Grid as MuiGrid, Box } from "@mui/material";
import Card from "../Card_Component/Card";
import { useSelector } from "react-redux";

export default function Grid({ prevdata}) {
  const cardData = useSelector((state)=>state.cardData.value)
  const [childComponentList, setChildComponents] = useState(prevdata);
  const recent_hospital = useRef(null);

  const onDelete = (id) => {
    setChildComponents((prevComponents) =>
      prevComponents.filter(
        (component) => component.props.Hospital_Detail.id !== id
      )
    );
  };

    useEffect(() => {
      if (cardData && childComponentList.filter((childComponent) =>  childComponent.key == cardData["hospital_Detail"].id).length==0) {
        
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const fullDate = `${year}/${month}/${day}`;
      
        const hours = String(today.getHours()).padStart(2, "0");
        const minutes = String(today.getMinutes()).padStart(2, "0");
        const seconds = String(today.getSeconds()).padStart(2, "0");
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        
        const newCard = (
          <Card
            key={cardData["hospital_Detail"].id}
            Hospital_Detail={cardData["hospital_Detail"]}
            ImagePath={cardData["image"]}
            requested={true}
            date={fullDate}
            time={formattedTime}
            parent={recent_hospital}
            onDelete={onDelete}
          />
        );
        setChildComponents([...childComponentList, newCard]);
      }
    }, [cardData]);

  return (
    <Box sx={{ width: '98vw', margin: 'auto' }}>
      <MuiGrid
        ref={recent_hospital}
        container
        spacing={2}
        justifyContent="space-around"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 2,
          backdropFilter: 'blur(20px)',
        }}
      >
        {childComponentList.map((component, index) => (
          <MuiGrid item key={index} sx={{ display: 'flex' }}>
            {component}
          </MuiGrid>
        ))}
      </MuiGrid>
    </Box>
  );
}
