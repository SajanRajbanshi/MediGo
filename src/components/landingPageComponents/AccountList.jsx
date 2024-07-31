import { useState } from "react";
import "./accountList.css";
import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


export default function AccountList(props) {
  const usersArray = Object.entries(props.signedInAccountsDict);
  return (
    <>
      <Stack
        className="accountListContainer"
        width={"15vw"}
        padding={"1.5vw"}
        id="accountListContainer"
        divider={<hr />}
      >
        {usersArray.map(([userName, password],index) => {
          return (
              <Stack
                key={`Account${index}`}
                direction={"row"}
                spacing={1}
                width={"100%"}
                flexWrap={"wrap"}
                justifyContent={"space-between"}
              >
                <div className="accoundDetails" id="accoundDetails">
                  <Button onClick={()=>
                  {
                    props.onSetCredentials(userName);
                  }}>{userName}</Button>
                </div>
                <div>
                  <Button
                    size="small"
                    onClick={() => {
                      props.onDelete(userName);
                    }}
                    endIcon={<DeleteIcon />}
                  ></Button>
                </div>
              </Stack>
          );
        })}
      </Stack>
    </>
  );
}
