// AuthContext.js

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const [userId, setUserId] = useState(null); // 유저 ID 상태 추가

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserId(null); // 로그아웃 시 유저 ID 초기화
  };

  // 다른 컴포넌트에서 유저 ID를 설정할 수 있는 함수 추가
  const setAuthUserId = (id) => {
    setUserId(id);
  };

  const value = {
    isLoggedIn,
    login,
    logout,
    userId,
    setAuthUserId,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
