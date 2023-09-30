---
title: "C++ #define"
description: "C++ macro 이해하기"
author: "Ciao Lee"
date: "2023-06-06"
showFullContent: false
readingTime: false
hideComments: false
cover: ""
tags:
  - "cpp"
  - "ue5"
---

## 정의

* The preprocessor supports text macro replacement. Function-like text macro replacement is also supported.  
  택스트 치환 전처리기. 유사함수(function-like) 매크로 치환 지원

---

## 개념

+ 컴파일 전(=전처리기)에 단순 문자열 치환
+ 단순 문자열 치환을 여러번 반복 가능하다 = 복잡성 높아지면 개발이 힘들어 질 수 있다
+ 단순히 소스코드 전체를 변경하는것이므로 런타임시 메모리 사용을 안한다!!!
    + const 상수와의 차이점 확인 이해하기

---

## 문법

+ 단순 치환
{{< code language="C++" expand="펼치기" collapse="접기" isCollapsed="false" >}}
#define PI 3.14
{{< /code >}}

+ Function-like
  - showlist(…) 정의할 메크로 이름. () 와 … 은 function-like 매크로 이므로 parameter 정의
  - puts(#\_\_VA_ARGS__) : 변경될 문자열, #\_\_VA_ARGS__ 는 showlist 의 … 으로 대체된다.
  
  {{< code language="C++" expand="펼치기" collapse="접기" isCollapsed="false" >}}
  #define showlist(...) puts(#__VA_ARGS__)
  showlist(); // expands to puts("")
  showlist(1, "x", int); // expands to puts("1, \"x\", int")
  {{< /code >}}


---

## 내장 매크로
- 언리얼에서 자주쓰는 내장 매크로 
- 주의: 런타임에 결정되는 것이 아니다. 시간등 입력할때 주의하기!!
- 전처리기 이므로 치환(replace) 작동할 때 바뀐다.
{{< code language="C++" expand="펼치기" collapse="접기" isCollapsed="false" >}}
__FILE__      // 열려있는 파일 이름 
__LINE__      // 호출되는 곳의 코드라인
__FUNCTION__  // function 이름
{{< /code >}}


## 참고

[https://devdocs.io/cpp/preprocessor/replace](https://devdocs.io/cpp/preprocessor/replace)
