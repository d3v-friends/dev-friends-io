---
title: "C++"
---

{{< space style="height: 100px;" >}}

{{< image src="/img/logo/cpp.png"
alt="Mango"
position="left"
style="border-radius: 8px; width: 200px" >}}

## C++ 17 버전, UE5 기준

### 목표

* 다른언어(Go, TS) 만큼 다양하게 사용할수 있도록 광범위하고 깊게 공부하기

### Roadmap

~~~mermaid
stateDiagram-v2
    state Manager {
        [*] --> VSC
        [*] --> PackageManager
        [*] --> Builder


        VSC --> Git
        PackageManager --> Conan
        Builder --> CMake
    }

    state Basic {
        [*] --> Manager
    }

    [*] --> Basic

~~~
