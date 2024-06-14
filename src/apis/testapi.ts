import axios, { AxiosResponse } from "axios"
import { Res } from "@/types/Res"

axios({
  url: "http://127.0.0.1:8090",
  method: 'GET'
}).then((resp: AxiosResponse<Res>)=>{
  if(resp.status === 200){
    return resp
  }
  throw new Error("Error")
})
