---
title: "Books"
---

## 인생 언리얼 교과서

{{< image
src="/img/books/unreal-textbook.png"
alt="Unreal textbook"
position="left"
style="border-radius: 8px; width: 120px;" >}}

> 1권의 경우 기본 기능에 대한 자세한 설명이므로 기록에서 제외  
> 책의 경우 ue4 기준으로 진행 되지만 책을 읽는 시점에서 ue5 가 업데이트 되어, ue5 공부를 할겸 ue5로 공부 진행  
> ue4 - ue5 간 변경점이 많으므로, 찾아가면서 공부해보기

## 개발 환경

> Mac Studio M1 Ultra  
> MacOS Ventura  
> UE5 (5.1.1)   
> Rider (IDE)

## 소소한 팁

* 현시점 (23.06.29) 최신 Mac OS 에서 UE5 (5.2.1)는 몇몇 에러때문에 프로젝트 생성 조차 잘 안된다.

* UE5 (5.1.1) 맥에서 IDE 로 프로젝트를 열면 엔진 솔루션에 에러가 나는데, 에디터 설정에서 ignore 해도 빌드가 잘 되므로 무시해도 된다.

* VCS 에서 친숙한 git 을 선택했지만, git-lfs 조합은 네이티브로 지원하는 서비스는 github 밖에 없다.  
  주로 쓰는 aws 의 code commit 에서는 지원하지 않으나, 프록시 방식으로 대용량 파일은 s3 에 저장하는  
  방식으로 우회적으로 사용할 수 있으나, 미리 프록시 서버 셋팅등 초반 설정에 다소 복잡한 감이 있다.   
  그리고 사용후기를 보면, .git 캐쉬등을 수동으로 삭제해야 하는 문제점들도 있어서, 소스코드 이외의 Asset 의 경우 다른 방식으로  
  버저닝 할수 있는 방식을 좀 찾아봐야 겠다.  
