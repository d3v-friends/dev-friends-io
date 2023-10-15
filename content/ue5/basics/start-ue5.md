---
title: "언리얼엔진 5! 프로젝트 시작하기"
description: "cli 설정부터 프로젝트 생성까지"
author: "Ciao Lee"
date: "2023-10-14"
showFullContent: false
readingTime: false
hideComments: false
cover: ""
keywords:
  - "ue5"
tags:
  - "ue5"
  - "ue5_env"
---

# 필자의 개발 환경

| 기준      | 환경                     | 기타 |
|---------|------------------------|----|
| OS      | Windows 11 Home        |    |
| CPU     | AMD Ryzen 9 7940HS     |    |
| Graphic | Nvidia RTX 4080 Mobile |    |
| RAM     | 32 GB                  |    |
| IDE     | JetBrains Rider        |    |


{{< space style="height: 40px;" >}}

---


# UE5 설치

- Epic launcher 다운로드 받아 설치

{{< space style="height: 40px;" >}}

---

# 개발환경은 shell 기반으로 한다

- 필자는 리눅스환경에서 쭉 개발을 해왔기 때문에, 파워쉘이 다소 이질적이고 어렵다.
- windows cmd 에서 다음 프로그램을 설치한다

~~~powershell
## powershell 이 업그레이드 된다
winget install Microsoft.WindowsTerminal
~~~

- 필자가 shell 기반 프로그래밍을 선호 하므로 윈도우 환경변수 보다, 쉘 환경변수를 등록하도록 하겠다.

~~~powershell
notepad $PROFILE
~~~ 

- 메모장이 하나 열리는데 다음과 같은 환경 변수를 추가해 준다.
- 설치된 경로에 따라서 환경변수의 파일 경로를 적절히 바꿔준다.

~~~
$Env:ue_vers="UE_5.3"
$Env:Path += ";C:\Program Files\Epic Games\$Env:ue_vers\Engine\Build\BatchFiles"
$Env:Path += ";C:\Program Files\Epic Games\$Env:ue_vers\Engine\Binaries\Win64"
$Env:Path += ";C:\Program Files\Epic Games\$Env:ue_vers\Engine\Binaries\DotNET"

~~~

- shell 을 다시 실행하면 UE 에서 제공하는 CLI 툴을 사용할 수 있다.
