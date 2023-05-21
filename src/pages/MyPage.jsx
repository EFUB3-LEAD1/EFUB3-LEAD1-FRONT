import My from '../components/mypage/My';
import Login from '../components/loginpage/Login';
import { useState } from 'react';

const MyPage = () => {
    const token = localStorage.getItem('token');
    const [isLogin, setIsLogin] = useState(!!token);
    return <>{isLogin ? <My /> : <Login />}</>;
};

export default MyPage;
