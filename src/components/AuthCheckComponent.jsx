import Layout from "./homePageComponents/Components/layout/layout"
import {Context} from "../ContextProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function AuthCheckComponent()
{
    const user=localStorage.getItem("userId");
    console.log(user);
    if(user)
    {
        console.log("inside authenticated");
        return (
            <Layout></Layout>
        )
    }
    return (<Navigate to="/Auth"></Navigate>)
}