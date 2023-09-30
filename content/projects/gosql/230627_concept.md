---
title: "기획 (작성 중)"
description: "기본 컨셉 및 샘플 코드 생성하기"
author: "Ciao Lee"
date: "2023-06-27"
showFullContent: false
readingTime: false
hideComments: false
cover: ""
tags:
  - "mysql"
  - "orm"
  - "go"
---

---

## 테이블 생성

* 데이터 모델 -> 데이터 테이블 생성 쿼리 생성하기

* data struct
    1. tag 기능으로 기본 정보 저장
        * 디비 데이터 타입
        * 코맨트
        * 등등


* code convention  
    1. db에 사용하는 모든 이름은 snake_case 로 통일 한다 (mysql 에서는 대소문자 구분 없음)  

---

## 1차 개발 목표 : CodeGenerate 방식

1. 기초모델 작성 후 코드제러네이터가 reflect 로 모델 분석
2. migration 등은 나중에 구현하기 : table, index 생성까지만 구현하기
3. compile 언어 이므로, 코드 제너레이터 한 후에 로딩하여 validate 해야 한다

{{< space style="height: 100px;" >}}

~~~mermaid
flowchart TB
    json[json, yaml 에서 모델 정의]
    goType[go db 파싱 모델 불러오기]
    goModel[go struct 와 field tag 에 기본정보 입력]
    genFunc[go struct 에 기본 function 추가]
    done[code generate 완성]
    validation[generated 된 코드 순환하며 validation check]

    subgraph CodeGenerator
        direction TB
        goType
        goModel
        genFunc
    end

    json --> CodeGenerator
    goType --> goModel
    goModel --> genFunc
    CodeGenerator --> done
    done --> validation
    
~~~
