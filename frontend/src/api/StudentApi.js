
import axios from "axios";

const StudentAPI = axios.create({
    baseURL: "http://localhost:5000/api"
});

export default StudentAPI;