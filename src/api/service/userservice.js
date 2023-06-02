import { http } from '../http';
import axios from 'axios';

const UserService = {
    // 로그인
    requestLogin: (id, pw) =>
        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
            account: id,
            password: pw,
        }),
    // 로그아웃
    requestLogout: (token, refreshToken) =>
        axios.delete(`${process.env.REACT_APP_API_URL}/auth/logout`, {
            accessToken: token,
            refreshToken: refreshToken,
        }),
    // 프로필 조회
    requestProfile: token =>
        axios.get(`${process.env.REACT_APP_API_URL}/members/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
    // 찜 목록 조회
    getLikes: () => http.get('/hearts'),
    // 찜 생성
    postLike: tourId => http.post('/hearts', { tourId: tourId }),
    // 찜 삭제
    deleteLike: tourId => http.delete(`/hearts?tourId=${tourId}`),
};

export default UserService;
