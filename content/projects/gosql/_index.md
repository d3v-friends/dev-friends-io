---
title: "GoSQL"
---

{{< image src="/img/banner/gosql.png" alt="GoSQL" position="left" style="border-radius: 8px;" >}}

> 그동안 golang 으로 작성된 여러 ORM, ORM-like 라이브러리를 경험해보면서,  
> 무엇인가 다른 언어에 비해서 사용편의성이 많이 떨어지고, 신뢰성이 다소 낮아 개인적으로 사용 할  
> 라이브러리를 만들어 보기로 했다.

## 주요 컨셉

* yaml, json 으로 모델 정의
* Code generator 방식으로 기능 확장, 순수 golang 으로 런타임 구성
* cli 제공
* 마이그레이션 기능 추가
* 런타임시의 쿼리 생성보다, 미리 정의된 코드를 실행시키는 방식을 지향한다

---

## 개발 진행 방향

~~~mermaid
flowchart LR
    start[개발시작]
    ch1[코드 제너레이터가 구성할 샘플 코드 만들기]
    ch2[샘플 코드를 생성하는 CodeGenerate 개발]
    keepLoop[반복, 업데이트]


    start --> ch1
    ch1 -->|정규화| ch2
    ch2 -->|추가기능| ch1
    ch2 --> keepLoop
~~~
