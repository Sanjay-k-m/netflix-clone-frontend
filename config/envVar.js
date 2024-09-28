import dotenv from "dotenv";
dotenv.config();

const envVar = {
    // eslint-disable-next-line no-undef
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
};
export default envVar;
