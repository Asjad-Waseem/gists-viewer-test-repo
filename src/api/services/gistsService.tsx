import axiosInstance from "utils/axios";

class GistsService {
  static async fetchAllPublicGistsList(username: string) {
    try {
      const response = await axiosInstance.get(`/users/${username}/gists`);
      console.log(response, "response");
      return response;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
  static async fetchSingleGistDetails(gistId: string) {
    try {
      const response = await axiosInstance.get(`/gists/${gistId}`);
      console.log(response, "response");
      return response;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
}

export default GistsService;
