import UserService from './service/userservice';

// 로그인
export const Login = async (id, pw) => {
    try {
        const response = await UserService.requestLogin(id, pw);
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error, '로그인 실패');
    }
};

// 로그아웃
export const Logout = () => {
    UserService.requestLogout();
};

// 프로필 조회
export const GetProfile = async token => {
    try {
        const response = await UserService.requestProfile(token);
        return Promise.resolve(response.data);
    } catch (error) {
        // if (
        //     error.response.data.detail ===
        //     '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
        // )
        //     Logout();
        return Promise.reject(error, '프로필 조회 실패');
    }
};

// 찜 목록 조회
export const GetLikes = async userId => {
    try {
        const response = await UserService.getLikes(userId);
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error, '찜 목록 조회 실패');
    }
};

// 찜 생성
export const Like = async tourId => {
    try {
        const response = await UserService.postLike(tourId);
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error, '찜 생성 실패');
    }
};

// 찜 삭제
export const UnLike = async tourId => {
    try {
        const response = await UserService.deleteLike(tourId);
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error, '찜 삭제 실패');
    }
};
