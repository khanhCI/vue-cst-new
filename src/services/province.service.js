import axios from 'axios';

const province_API = 'https://fake-server-info.herokuapp.com/info';

class ProvinceService {
  getProvince() {
    return axios.get(province_API);
  }
  postProvince(data) {
    return axios.post(province_API, data);
  }
}

export default new ProvinceService();
