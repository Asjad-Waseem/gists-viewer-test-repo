import axios from "axios";
// config
import { API_URL } from "../../config-global";

// ----------------------------------------------------------------------

const axiosV2Instance = axios.create({ baseURL: API_URL });

axiosV2Instance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosV2Instance;
