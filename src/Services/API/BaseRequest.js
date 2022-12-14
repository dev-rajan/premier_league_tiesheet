import axios from "axios";

import { ENVIRONMENT_CONST } from "../../Constants/Constants";

const apiUrl = ENVIRONMENT_CONST.API_BASE_URL;

axios.defaults.baseURL = apiUrl;

export const DEFAULT_HEADERS = {
  Accept: "application/json",
};

class BaseRequest {
  static headers() {
    return { headers: DEFAULT_HEADERS };
  }
  static get(url) {
    return axios.get(url, this.headers());
  }
}

export default BaseRequest;
