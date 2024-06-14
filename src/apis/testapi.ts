import axios from "axios"
import { Res } from "../types/Res"

// import axios from "axios";
const url = "https://www.searchapi.io/api/v1/search"

const params = {
  "engine": "google_news",
  "q": "Jeff Bezos news",
  "location": "New York,United States",
  "api_key": "DnTiZCkJrK2HhK19rXUpGepj"
}

axios({
  url,
  params,
  method: 'GET'
}).then((resp: AxiosResponse<Res>)=>{
  if(resp.status === 200){
    return resp
  }
  throw new Error("Error")
})
