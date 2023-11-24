---
title: TCP/IP 4계층
date: 2023-11-21
description: TCP/IP 4계층
---

### ATP/IP 4계층이란

-

&nbsp;
![EC2_01](/images/EC2/EC2_01.png)
&nbsp;
&nbsp;

- ## 2. 인스턴스를 생성한다

&nbsp;
![EC2_02](/images/EC2/EC2_02.png)
&nbsp;
&nbsp;

- ## 3. 인스턴스 이름을 적는다

&nbsp;
![EC2_03](/images/EC2/EC2_03.png)
&nbsp;

- 인스턴스 이름을 적고 OS를 선택한다.
- 나는 가장 대중적으로 사용하는 Ubuntu를 선택했다.
  &nbsp;
  &nbsp;

- ## 4. 옵션을 선택하고, 키를 생성한다.

&nbsp;
![EC2_04](/images/EC2/EC2_04.png)
&nbsp;

- 서버 옵션을 선택하고(기본 옵션 선택)
- 새 키페어 생성으로 키를 생성한다.
  &nbsp;
  &nbsp;

- ## 5. 키 생성 창

&nbsp;
![EC2_05](/images/EC2/EC2_05.png)
&nbsp;

- RSA와 .pem 확장자로 키를 생성한다.
  &nbsp;
  &nbsp;

- ## 6. 스토리지 구성

&nbsp;
![EC2_06](/images/EC2/EC2_06.png)
&nbsp;

- 가상의 용량 같다.(기본 설정을 선택한다.)
  &nbsp;
  &nbsp;

- ## 7. 생성된 인스턴스 상세

&nbsp;
![EC2_07](/images/EC2/EC2_07.png)
&nbsp;

- 생성 후 인스턴스 ID를 클릭하여 상세 페이지로 들어간다.
  &nbsp;
  &nbsp;

- ## 7. 생성된 인스턴스 상세

&nbsp;
![EC2_07](/images/EC2/EC2_07.png)
&nbsp;

- 생성 후 인스턴스 ID를 클릭하여 상세 페이지로 들어간다.
  &nbsp;
  &nbsp;

- ## 8. 생성된 인스턴스 상세

&nbsp;
![EC2_08](/images/EC2/EC2_08.png)
&nbsp;

- 이제 리눅스 서버로 접속하기 위해 접속 허용 아이피를 등록할 것이다.
- 보안 탭에서 보안 그룹을 선택한다.
  &nbsp;
  ![EC2_09](/images/EC2/EC2_09.png)
- 이후 인바운드 규칙 편집을 클릭한다.
  &nbsp;
  &nbsp;

- ## 9. 인바운드 규칙 설정

&nbsp;
![EC2_10](/images/EC2/EC2_10.png)
&nbsp;

- 1번부터
- 1.어떤 연결을 할 것인지 선택한다.
- 2.프로토콜을 선택한다.
- 3.포트번호를 입력한다.
- 4.어떤 아이피를 입력할 것인지 선택한다
- 5.아이피를 입력한다.

  &nbsp;
  &nbsp;

- ## 10. Putty를 이용한 접속

- 접속하기에 앞서 앞에 입력받은 .pem 키를 PuttyGem을 사용하여 PPK 키로 변환해야한다.
- 그 후 변환한 키를 로드하여 아래와 같이 Putty로 접속하면 된다.
  &nbsp;
  ![EC2_11](/images/EC2/EC2_11.png)
  &nbsp;

- 빨간 네모칸에 외부 IPv4를 입력하고(7번 사진 참고) OPEN을 누른다.

  &nbsp;
  &nbsp;

- ## 11. 접속 완료

&nbsp;
![EC2_12](/images/EC2/EC2_12.png)
&nbsp;

- 리눅스 창이 뜨면 'ubuntu'를 입력하여 접속하고 작업을 시작하면 된다.

  &nbsp;
  &nbsp;
