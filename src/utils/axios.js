//api 정보들을 모아놓는 utils
import axios from "axios";

const request = axios.create({
    //api정보들을 설정해둔다
    baseUrl : "https://api.themoviedb.org/3/",
     params :{
         api_key : "deb18f193043c4b8d4956056c2f48184",
         language : "ko-KR",
     },
});

export const movieApi = {
    nowPlaying : () => request.get("movie/now_playing"),
    popular : () => request.get("movie/popular"),
    upcoming :() => request.get("movie/upcoming"),
}