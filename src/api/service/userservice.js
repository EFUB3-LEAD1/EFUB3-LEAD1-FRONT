import { http } from '../http';
import axios from 'axios';

const UserService = {
    // 로그인
    requestLogin: (id, pw) =>
        axios.post(`${process.env.REACT_APP_API_URL}/members/login/`, {
            id: id,
            password: pw,
        }),
    requestLogout: () => {
        window.localStorage.removeItem('token');
    },
    // 프로필 조회
    requestProfile: token =>
        axios.get(`${process.env.REACT_APP_API_URL}/members/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
    // 찜 목록 조회
    getLikes: userId => http.get(`/members/${userId}/likes`),
    // 찜 생성
    postLike: tourId => http.post(`/tours/${tourId}/likes`),
    // 찜 삭제
    deleteLike: tourId => http.delete(`/tours/${tourId}/likes`),
};

export default UserService;
