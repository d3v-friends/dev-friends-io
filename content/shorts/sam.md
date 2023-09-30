---
title: "AWS SAM"
description: "AWS Serverless Application Model"
author: "Ciao Lee"
date: "2023-07-12"
showFullContent: false
readingTime: false
hideComments: false
cover: ""
tags:
  - "aws"
  - "sam"
---

## AWS Serverless Application Model

[공식 문서](https://docs.aws.amazon.com/ko_kr/serverless-application-model/latest/developerguide/what-is-sam.html)
[Official Go aws library](https://github.com/aws/aws-lambda-go)
[Golang library document](https://docs.aws.amazon.com/lambda/latest/dg/lambda-golang.html)
[AWS Lambda document](https://docs.aws.amazon.com/lambda/latest/dg/lambda-golang.html)


{{< space style="height: 50px;" >}}

---

## 1. 설치하기

MacOS

~~~bash
brew install aws/tap/aws-sam-cli
~~~

{{< space style="height: 50px;" >}}

---

## 2. SAM CLI의 기능을 모두 사용하려면 미리 IAM계정을 만들어야 한다.

* IAM 에서 다음 권한을 활성화 한 계정을 만든다
    * AWSCloudFormationFullAccess
    * (공부해가면서 추가될 예정)

{{< space style="height: 50px;" >}}

---

## 3. SAM 초기화 하기

* 다음 명령어를 친후, 필요에 따라 선택하여 탬플릿을 생성한다

~~~bash
sam init
~~~


