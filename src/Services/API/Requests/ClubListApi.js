import ApiRequest from "../Index";

const API_URL = {
  GET: "/2020-21/en.1.json",
};

class ClubListApi {
  static getClubsList() {
    return ApiRequest.get(API_URL.GET);
  }
}

export default ClubListApi;
