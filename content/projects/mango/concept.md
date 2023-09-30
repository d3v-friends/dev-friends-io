---
title: "[Mango] Begins"
description: "라이브러리 컨셉 및 시스템 구성 기획"
author: "Ciao Lee"
date: "2023-06-26"
showFullContent: false
readingTime: false
hideComments: false
cover: ""
tags:
  - "go"
  - "mongo"
  - "project"
  - "mango"
---

# 개발 배경

* Point 관리 비지니스 로직등을 구현할 때, RDBMS 의 트렌젝션과 같은 완벽한 *ACID 적용은 불가능 하지만 비슷한 효과를 내는 유틸리티성 코드가 필요했다.
* ACID : 원자성(Atomicity), 일관성(Consistency), 격리(Isolation) 그리고 영속성(Durability)

---

## 구현 목표

### [-] Transaction 코드 실행시 (for update) 과 같은 효과를 내는 기능 만들기
* 한계점 : RDBMS 와 달리 다음 트렌젝션 요청시 Wait (DB 자체 기능) 하고 기다리지 않는다.
 트렌젝션동안 요청된 데이터의 경우 반드시 실패하게 된다.   
 내부에 Queue 로 구현가능 할 수(?) 도 있지만, 코드 복잡성의 과도한 증가와 MongoDB의 취지에 맞지 않으므로 간단하게 구현한다.

### [-] 데이터 히스토리 방식으로 저장하여, 1단계씩 롤백 할수 있게 만든다.

