import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isTutor, setIsTutor] = useState(false); // Tutor 등록 여부 추가
  const [tutorId, setTutorId] = useState(null); // Tutor ID 추가

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    setIsTutor(false); // 로그아웃 시 Tutor 등록 여부 초기화
    setTutorId(null); // 로그아웃 시 Tutor ID 초기화
  };

  const setAuthUserId = (id) => {
    setUserId(id);
  };

  // Tutor 등록 상태 설정 함수
  const setTutorStatus = (status) => {
    setIsTutor(status);
  };

  // Tutor ID 설정 함수
  const setTutorUserId = (id) => {
    setTutorId(id);
  };

  const value = {
    isLoggedIn,
    isTutor, // Tutor 등록 여부
    tutorId, // Tutor ID
    login,
    logout,
    userId,
    setAuthUserId,
    setTutorStatus, // Tutor 등록 상태 설정 함수
    setTutorUserId, // Tutor ID 설정 함수
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
  