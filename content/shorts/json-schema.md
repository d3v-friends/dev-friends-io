---
title: "json-schema"
description: "JSON format 정의"
author: "Ciao Lee"
date: "2023-06-27"
showFullContent: false
readingTime: false
hideComments: false
cover: ""
tags:
  - "json-schema"
  - "json"
---

* official site : [https://json-schema.org](https://json-schema.org)
* json schema 를 미리 정의 하여, 추후 이 포멧으로 문서를 작성할 때 자동완성 및 검색등 편의성을 올려주는 meta data
* IETF standard 규칙에 맞추어 작성

---

# 간단 사용법

---

### 1) schema 정의 할 파일 생성

- *.schema.json 형식으로 파일 생성

```bash
$ echo > [이름].schema.json
```

---

### 2) meta 정보 schema 에 추가

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/product.schema.json",
  "title": "스키마 이름",
  "description": "설명",
  "type": "object",
  "properties": {
    "프로퍼티키": "타입정의"
  },
  "required": [
    "프로퍼티키"
  ]
}
```

1. $schema : json-schema 에서 메타 정보 규칙을 따른다는 명시
2. $id : 지금 작성하고 스키마가 업로드 (될) 되어있는 URL
3. title: 정의하는 schema 의 이름
4. description: 정의하는 schema 의 주요 상세 정보
5. type : 타입정의, 최 상위에는 대부분 object 로 구성된다
    - 1개 데이터라면 다른 타입으로 될 수도 있다
    - 보통은 1개가 아니므로 object 가 된다고 생각 할 수 있다
6. required : 반드시 포함해야 할 properties

---

### 3) field 정의 하기

필드는 다음과 같은 기본 구성을 가지고 있다.

1. type : null, boolean, object, array, number, string
2. description : 해당 필드의 설명
3. 다중 타입 처리 가능하다. ex ) "type" : [ "number", "boolean" ]
4. 타입은 다음과 같은 프로퍼티를 가질 수 있다

~~~json
{
  "string": [
    "type",
    "minLength",
    "maxLength",
    "pattern"
  ],
  "number": [
    "type",
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "multipleOf"
  ],
  "integer": [
    "type",
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "multipleOf"
  ],
  "boolean": [
    "type"
  ],
  "array": [
    "type",
    "minItems",
    "maxItems",
    "items",
    "uniqueItems"
  ],
  "null": [
    "type"
  ],
  "object": [
    "type",
    "properties",
    "additionalProperties",
    "required",
    "minProperties",
    "maxProperties",
    "dependencies",
    "patternProperties",
    "regexp"
  ]
}
~~~

#### string type

* 필드 : type, description, maxLength, minLength, pattern, default

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/product.schema.json",
  "properties": {
    "modelNm": {
      "type": "string",
      "description": "desc",
      "minLength": 5,
      "maxLength": 30,
      "pattern": "^[a-z][0-9a-zA-Z]{4,30}$"
    }
  }
}
```

#### array type

```json

```

---

#### reference type

* 미리 정리된 타입을 불러오는 기능

~~~json
{
   "$schema": "https://json-schema.org/draft/2020-12/schema",
   "$id": "https://example.com/product.schema.json",
   "properties": {
      "column": {
         "description": "desc",
         "$ref": "https://example.com/column.schema.json"
      }
   }
}
~~~

#### ref and defs

* format example
~~~json
{
  "$id": "https://example.com/arrays.schema.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "description": "A representation of a person, company, organization, or place",
  "type": "object",
  "properties": {
    "fruits": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "vegetables": {
      "type": "array",
      "items": { "$ref": "#/$defs/veggie" }
    }
  },
  "$defs": {
    "veggie": {
      "type": "object",
      "required": [ "veggieName", "veggieLike" ],
      "properties": {
        "veggieName": {
          "type": "string",
          "description": "The name of the vegetable."
        },
        "veggieLike": {
          "type": "boolean",
          "description": "Do I like this vegetable?"
        }
      }
    }
  }
}
~~~

* json
~~~json
{
  "fruits": [ "apple", "orange", "pear" ],
  "vegetables": [
    {
      "veggieName": "potato",
      "veggieLike": true
    },
    {
      "veggieName": "broccoli",
      "veggieLike": false
    }
  ]
}
~~~

## 작성중 ...

## References

https://json-schema.org/learn/getting-started-step-by-step.html  
https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-01#name-validation-keywords-for-arr
