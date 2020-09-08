import axios from "axios";


class Server {
  baseUrl = "http://127.0.0.1:8000"

  async getRace(id) {
    const url = `/creature/race/${id}/`;
    return (await this._getData(url)) || null;
  }

  async getRaces() {
    const url = "/creature/race/";
    return (await this._getData(url)) || [];
  }

  async _getData(url) {
    let data = null;

    try {
      const response = await axios.get(`${this.baseUrl}${url}`)
      data = response.data
    } catch (e) {
      console.log(e)
    }

    return data
  }
}

export default Server