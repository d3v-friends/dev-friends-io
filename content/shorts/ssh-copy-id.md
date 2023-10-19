---
title: "rsa 를 통하여 서버 접속하기"
description: "rsa_key 통하여 서버 접속하기"
author: "Ciao Lee"
date: "2023-10-19"
showFullContent: false
readingTime: false
hideComments: false
cover: ""
tags:
  - "linux"
  - "rsa"
---

# Linux server 에 rsa_key 로 접속하기

* Windows 11, MacOs 기준으로 설명
* 관리자 권한으로 서버에 접속 할 수 있어야 한다

- 이번 스크립트들은 양 os 모두 같은 명령어를 사용한다


1. 개인키 생성: 본인인것을 인증하는 키

~~~bash
# 1. 특정 이름은 지어줄것. 계속 물어보는데 enter  만 치기
ssh-keygen -t rsa
# - Generating public/private rsa key pair.
# - Enter file in which to save the key (C:\Users\----/.ssh/id_rsa): sample  <- 이곳에 특정 이름
# - Enter passphrase (empty for no passphrase):   <- 나머지는 그냥 enter 키 입력
# - Enter same passphrase again:  <- 나머지는 그냥 enter 키 입력

# 2. 로컬에 생성한 공개키 등록
cat $HOME/.ssh/[특정이름].pub >> $HOME/.ssh/authorized_keys

# 3. 서버에 공개키 복사
scp ~/.ssh/[특정이름].pub friends@13.124.146.154:~/.ssh/[특정이름].pub

# 4. 서버에 해당 계정으로 일반 로그인한 후 공개키를 등록해준다
cat $HOME/.ssh/[특정이름].pub >> $HOME/.ssh/authorized_keys

# 5. 서버 접속하여 sshd_config 수정하기
sudo vim /etc/ssh/sshd_config

# 5-1 PubkeyAuthentication 찾아서 no -> yes 로 바꿔주기
# PubkeyAuthentication yes


# 5-2 sshd 다시 시작하기
sudo systemctl restart sshd

# 6. 접속
ssh -p 2202 -i ~/.ssh/[특정이름] [서버아이디]@[ip]
~~~

{{< space style="height: 40px;" >}}

---

# linux 계열 추가

* ssh-copy-id 프로그램으로 등록
* (추후 업데이트 예정)