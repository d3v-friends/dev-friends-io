---
title: "lambda"
description: "c++ 11 에서 추가된 람다(lambda) 알아보기"
author: "Ciao Lee"
date: "2023-07-12"
showFullContent: false
readingTime: false
hideComments: false
cover: ""
tags:
  - "cpp"
  - "cpp_11"
---

## Lambda (c++ 11)

* 마이크로소프트 c++ 공식 문서 [MS C++ 17](https://learn.microsoft.com/ko-kr/cpp/cpp/lambda-expressions-in-cpp?view=msvc-170)

{{< image src="/img/contents/unreal-textbook/ch03-01.png"
alt="Mango"
position="left"
style="border-radius: 8px; width: 400px" >}}

1. capture (람다 외부에서 내부로 값을 보내는 정의)
2. () 람다 선언
3. 변경 가능한가 (optional)
4. exception (optional)
5. return value
6. 람다 함수 표현식

> **UE C++ 에서 exception 을 사용하면, 관리비용의 이점보다, 프로그램 복잡성 및 성능 하락(Stack rewind) 이슈가 더 크다.   
> C 에러 핸들링 방식인 return error 으로 사용하는 것이 바람직하다**

~~~cpp
void Lambda() {
    int32 sum = 10;
    auto lambda = [&sum](int number)->void {
        sum += number;
    }
    
    lambda(20);
    UE_LOG(LogTemp, Warning, TEXT("sum: %d"), sum);
}
~~~
