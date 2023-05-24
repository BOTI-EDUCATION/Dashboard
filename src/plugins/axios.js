import axios from 'axios'


const url = window.document
  .querySelector("meta[name=base_api]")
  .getAttribute("content")


const axiosIns = axios.create({
// You can add your headers here
// ================================
  baseURL: window.document
    .querySelector("meta[name=base_api]")
    .getAttribute("content"),

  // timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' },
})

export default axiosIns
