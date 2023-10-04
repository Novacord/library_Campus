import axios from "axios";

function  obtenerLibros() {
    const url = "http://192.168.129.72:5076/api/productos/";
  
    return axios.get(url)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          return null;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  export default obtenerLibros