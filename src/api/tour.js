import TourService from './service/tourservice';

// 전체 패키지 조회
export const GetAllPackages = async () => {
    try {
        const response = await TourService.getAllPackages();
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error, '전체 패키지 조회 실패');
    }
};

// 패키지 상세 조회
export const GetPackage = async tourId => {
    try {
        const response = await TourService.getPackage(tourId);
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error, '패키지 상세 조회 실패');
    }
};

// 패키지 검색
export const SearchPackages = async keyword => {
    try {
        const response = await TourService.searchPackages(keyword);
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error, '패키지 검색 실패');
    }
};

// 여행지 목록 조회
export const GetSpots = async () => {
    try {
        const response = await TourService.getSpots();
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error, '여행지 목록 조회 실패');
    }
};
