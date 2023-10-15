---
title: "Weather system"
description: "낮, 밤 주기 구분하여 시뮬레이션 하기"
author: "Ciao Lee"
date: "2023-10-14"
showFullContent: false
readingTime: false
hideComments: false
cover: ""
keywords:
  - "ue5"
  - "tutorial"
  - "weather"
tags:
  - "ue5"
  - "weather"
  - "tutorial"
---

# 게임모드에서 관리하기

* GameBaseMode 에서 시간설정을 저장하고, 날씨 컴포넌트가 구독하여 환경을 변경한다.

* [GameBaseMode official documents](https://docs.unrealengine.com/5.3/ko/game-mode-and-game-state-in-unreal-engine/)


{{< space style="height: 40px;" >}}

---


# Directional light 구분

* 2개의 Directional light 오브젝트를 사용하여 구현한다.
* 단, 2개의 Directional light 가 활성화 되면, 연산량이 많다고 경고를 준다.
* Blueprint 또는 cpp 을 이용하여 토글하는 방식으로 구성한다.
* Directional light 는 위치에 상관없이 방향을 향하므로 적당한 위치에 고정하여 에디터에 오브젝트 방향이 보이게 하는것도 나쁘지 않는거 같다.

> ### 알아두기
> 1. Directional light 의 Rotation 은 Y 회전: 180도 ~ 270도 사이를 사용한다.
> 2. Z 축은 계절등을 설정할때 사용하면 될것 같다. (유추)

1. SunLight
    * 빛의 양: 노을 등을 표현하려면 Directional light property 의 Light - Intensity 를 변경하면 된다.
2. MoonLight

{{< space style="height: 40px;" >}}

---

# Reference

* 다음을 참고, 공부하여 작성한 포스팅 입니다.   
  [https://www.youtube.com/watch?v=Puz-CsjdkLU](https://www.youtube.com/watch?v=Puz-CsjdkLU)
  [https://docs.unrealengine.com/5.3/ko/game-mode-and-game-state-in-unreal-engine/](https://docs.unrealengine.com/5.3/ko/game-mode-and-game-state-in-unreal-engine/)
