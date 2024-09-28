import dotenv from "dotenv";
dotenv.config();

const envVar = {
    REACT_APP_API_URL: import.meta.env.REACT_APP_API_URL,
};
export default envVar;
