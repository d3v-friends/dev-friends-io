---
title: "CMake"
description: "CMake, 빌드 관리"
author: "Ciao Lee"
date: "2023-07-22"
showFullContent: false
readingTime: false
hideComments: false
cover: ""
tags:
  - "cpp"
---

## References

[https://cmake.org/cmake/help/latest](https://cmake.org/cmake/help/latest/#)  
[https://cmake.org/cmake/help/latest/guide/tutorial/index.html](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)

## Step 1

* CmakeLists.txt 파일 만들기

~~~cmake
# 필수
# 1. CMake 버전 입력 ( C++ 아님 )
# 2. Project 명, Version (옵션) 입력
cmake_minimum_required(VERSION 3.26.4)
project(CMake VERSION 1.0.0)


# C++ 버전 입력
# 1. 버전 입력
# 2. 반드시 지켜야 하는지 체크
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED true)


# library 추가
add_library(Math lib/math.h)

# subdirectory 추가
add_subdirectory(lib)

# https://cmake.org/cmake/help/latest/command/add_executable.html#command:add_executable
# add_executable( [NAME] [FILE PATH] )
add_executable(HelloWorld sources/hello.cpp)
~~~

## Windows 에서 WSL (Windows subsystem linux) 로 개발하기

~~~powershell
wsl
~~~

~~~bash
# cpp build, package manager
sudo apt-get install cmake

# LLVM gcc compiler
sudo apt-get install clang

# debugger
sudo apt-get install gdb
~~~

3. CLion 설정하기

- Build, Execution, Deployment > Toolchains 메뉴로 가기
- (+) 버튼 눌러서 WSL 추가
- 모두 자동 검색되어 찾아지면 확인 눌러 저장하기

{{< image src="/img/cpp/clion_preference.png"
alt="cpp/clion_preference"
position="left"
style="" >}}
