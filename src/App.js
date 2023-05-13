import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.css';

import MainPage from './pages/MainPage';
import PackageListPage from './pages/PackageListPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import SearchPage from './pages/SearchPage';
import SearchResultPage from './pages/SearchResultPage';
import BookmarkPage from './pages/BookmarkPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 */}
          <Route exact path='/' element={<MainPage />} />
          {/* 전체 패키지 목록 페이지 */}
          <Route exact path='/whole-package' element={<PackageListPage />} />
          {/* 패키지 상세 페이지 */}
          <Route
            exact
            path='/whole-package/detail/:id'
            element={<DetailPage />}
          />
          {/* 로그인 페이지 */}
          <Route exact path='/login' element={<LoginPage />} />
          {/* 마이페이지 */}
          <Route exact path='/mypage' element={<MyPage />} />
          {/* 겸색 페이지 */}
          <Route exact path='/search' element={<SearchPage />} />
          {/* 검색 결과 페이지 */}
          <Route exact path='/search/result' element={<SearchResultPage />} />
          {/* 찜 페이지 */}
          <Route exact path='/bookmark' element={<BookmarkPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
