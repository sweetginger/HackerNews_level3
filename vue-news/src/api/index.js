// npm 설치한 라이브러리는 node_modules에 있다. 이 경로의 파일을 임포트할때는 경로를 쓰지 않아도 됨.
import axios from 'axios';

// 1. http request & response 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. api 함수 목록

/** news list 받아오기 */
function fetchNewsList(){
    // axios get 방식으로 받아온 데이터를 리턴하는 function
    // return axios 는 return new Promise() 와 같다.
    // 아래는 return axios.get(config.baseUrl + 'news/1.json'); 와 같다. ES6 문법.
    return axios.get(`${config.baseUrl}news/1.json`);
}

/** ask list 받아오기 */
function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
}

/** jobs list 받아오기 */
function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

/** userId로 user정보 받아오기 */
function fetchUserInfo(userId){
    return axios.get(`${config.baseUrl}user/${userId}.json`);
}

/** 글id로 글 상세정보 받아오기 */
function fetchItemInfo(id){
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

// function들 export
export {
    fetchNewsList
    ,fetchAskList
    ,fetchJobsList
    ,fetchUserInfo
    ,fetchItemInfo
}