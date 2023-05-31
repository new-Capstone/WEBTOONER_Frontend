// //패키지 임포트 
// import { Cookies } from "react-cookie";
// import axios from 'axois';


// const [username,setUsername]=useState("")
// const [useremail,setUseremail]=useState("")
// const [password, setPassword]=useState("")
// const [description, setDescription]=useState("")
// const [profileImage,setProfileImage]=useState("")


// const cookies = new Cookies();
// //쿠키에 값을 저장할때 
// export const setCookie = (name, value, option) => {
//   return cookies.set(name, value, { ...option });
// };
// //쿠키에 있는 값을 꺼낼때 
// export const getCookie = (name) => {
//   return cookies.get(name);
// };
// //쿠키를 지울때 
// export const removeCookie = (name) =>{
//     return cookies.remove(name);
// }

// export const loginDb = createAsyncThunk("post/loginDb",
//   async (db) => { //로그인 아이디와 비밀번호를 포스트요청으로 보낸다.
//   try {
//     const response = await axios.post(
//       `url`,
//       db
//     );
//     //reponse에서 토큰값을 꺼낸다.
//     const accessToken = response.data.token;
//     //setcookie함수의 첫번째 인자는 쿠키이름, 두번째 인자는 넣을 값이다.
//     setCookie("is_login", `${accessToken}`); 
//     console.log(response);
//     return response.data;
  