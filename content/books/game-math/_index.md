---
title: "Game math"
---

# 게임수학

{{< image
src="/img/books/gamemath.png"
alt="Game math"
position="left"
style="border-radius: 8px; width: 120px;" >}}

{{< space style="height: 100px;" >}}

## 게임수학 구성

~~~mermaid 
stateDiagram-v2
    [*] --> Location
    [*] --> Mesh
    [*] --> Rotate

    state Location {
        Vector
        Matrix

        [*] --> Vector
        Vector --> Matrix: Transform
    }

    state Mesh {
        Vertex
        Vertices

        [*] --> Vertex
        Vertex --> Vertices: Triangle
    }

    state Rotate {
        TrigonometricFunction
        Quaternion

        [*] --> TrigonometricFunction
        TrigonometricFunction --> Quaternion: Rotate

    }
~~~
