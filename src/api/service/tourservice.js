import { http } from '../http';

const TourService = {
    // 전체 패키지 조회
    getAllPackages: () => http.get('/tours'),
    // 패키지 상세 조회
    getPackage: tourId => http.get(`/tours/${tourId}`),
    // 패키지 검색
    searchPackages: keyword => http.get(`/tours?keyword=${keyword}`),
    // 여행지 목록 조회
    getSpots: () => http.get('/spots'),
};

export default TourService;
