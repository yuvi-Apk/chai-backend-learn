import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

//enable json data and set limit 
app.use(express.json({limit:process.env.JSON_AND_URLUNCODED_DATA_LIMIT}));

//enable url encoding data 
app.use(express.urlencoded({extended:true,limit:process.env.JSON_AND_URLUNCODED_DATA_LIMIT}));

//allow static folder to store image and all (sometimes helpes to live projects)
app.use(express.static("punlic"));

//set secure cookies likes session in php
app.use(cookieParser());

export {app};