---
title: ExpressJS Express + Typescript 백엔드 서버 구축하기
thumbnail: express/express_01.png
date: 2023-10-24
description: ExpressJS Express + Typescript 백엔드 서버 구축하기
---

### 시작하며

- NodeJS의 등장으로 웹 브라우저에서 사용하던 언어인 JavaScript 많은 일들을 수행할 수 있게 되었다.
- 그중에서도 백엔드 코드를 JavaScript로 작성할 수 있게 된 것이 가장 큰 변화 중 하나라고 생각한다.
- 자바스크립트라는 언어 하나로 기존의 프론트엔드 및 백엔드 코드를 작성할 수 있게 된 것이다.

- 이번 시간에는 직접 자바스크립트를 사용하여 백엔드를 구축하는 방법에 대해서 살펴볼 것이다.
- Express라는 NodeJS 진영에서 많이 사용하는 프레임워크를 TypeScript 문법을 사용해서 구축하는 방법에 대해서 살펴보고자 한다.

- &nbsp;
- &nbsp;

- **Express?**
- Express는 NodeJS 진영에서 많이 사용하는 백엔드 프레임워크이다.
- 다른 서버 프레임워크 대비 가볍고 유연하다는 장점이 있고, 성능도 괜찮은 편에 속한다.
- 무엇보다도 기존의 JavaScript 개발자에겐 비교적 쉽고 빠르게 배울 수 있다는 점이다.

- &nbsp;
- 자유도가 높은 만큼 다른 서버 프레임워크보다 덜 구조적이어서 팀 단위 작업이나 좀 더 대규모 작업에는 NestJS 혹은 다른 프로그래밍 언어의 서버 프레임워크를 사용해야 할 수도 있다.
- 어떤 서버를 구축하냐에 따라서 적적한 서버 프레임워크를 사용하는 것이 가장 좋다고 생각한다.

- &nbsp;
- &nbsp;

- **TypeScript**
- TypeSciprt란 JavaScript의 슈퍼셋이다.
- 슈퍼셋이란 일종의 확장팩 개념인데, 즉 JavaScript의 기능을 모두 포함하면서 TypeScript만의 추가적인 기능을 제공한다고 보면 된다.
- &nbsp;
- 그중에서도 TypeScript라는 이름에서도 알 수 있듯이 타입을 체킹할 수 있는 기능을 제공한다는 점이다.
- 이는 개발단계에서 프로그래머의 실수를 줄여줄 수 있다.
- 예를 들어, 숫자형 타입이 들어가야 하는 곳에 문자형 타입을 넣는다거나 하는 실수를 방지할 수 있다.

- &nbsp;
- &nbsp;

### 1. 사전 준비

- 코드를 작성할 수 있는 프로그램(IDE)과 NodeJS의 설치가 필요하다.
- IDE는 Visual Studio Code(VSC)를 사용하고, NodeJS는 설치 후 터미널에서
- _node --version_
- 명령어를 통해 설치 여부를 확인할 수 있다.

![express_01](/images/express/express_01.png)

- &nbsp;
- Express는 NodeJS의 프로젝트이기 때문에 NodeJS 프로젝트 생성 명령어를 통해 프로젝트를 생성할 수 있다.

- &nbsp;
- &nbsp;

### 2. NodeJS 프로젝트 생성

- Express는 NodeJS의 프로젝트이기 때문에 NodeJS 프로젝트 생성 명령어를 통해 프로젝트를 생성할 수 있다.

- _npm init -y_
- NodeJS 프로젝트를 생성하는 명령어이다.
  ![express_02](/images/express/express_02.png)
- &nbsp;
- 성공했다면 package.json이란 파일이 생성되어 있을 것이다.
- package.json은 해당 NodeJS 프로젝트에 대한 일종의 설명서라고 볼 수 있다.
- package.json의 역할은 프로젝트를 계속 구축해가면서 살펴볼 예정이다.

- &nbsp;
- &nbsp;

### 3. Express 설치

- 우리가 만들 프로젝트는 Express기반의 백엔드 서버이기 때문에 Express 설치가 필요하다.

- _npm i express_
- 위 명령어를 통해 Express를 설치할 수 있다. (npm i 와 npm install은 같은 명령어이다.)

  ![express_03](/images/express/express_03.png)

- &nbsp;
- package.json에 dependencies라는 항목이 생겼다.
- dependencies는 우리 프로젝트가 어떠한 의존성 패키지가 필요한지에 대한 리스트가 나와 있다.
- 쉽게 말해 우리 프로젝트를 실행하려면 어떠한 프로그램들이 필요한지에 대한 정보가 나타나 있다고 볼 수 있다.
- &nbsp;
- node_modules라는 폴더에 해당 의존성 패키지들이 저장되어 있다.
- &nbsp;
- &nbsp;

### 4. TypeScript 설치

- Express와 마찬가지로 Typescript도 설치가 필요하다.
- 한 가지 다른 점은 Typescript는 개발 단계에서만 쓰이고 실행 단계에서는 쓰이지 않기 때문에 이를 구분하기 위해서 -D 옵션과 함께 설치를 진행한다.
- _npm i -D typescript @types/express @types/node_

- @types/[패키지 명]은 해당 패키지에 대한 타입이 정의되어있는 Typescript 전용 패키지이다.
  ![express_04](/images/express/express_04.png)
- &nbsp;
- package.json에 devDependencies라는 항목이 생기고 Typescript관련 패키지들에 대한 버전 정보가 적혀있는 것을 확인할 수 있다.
- 마찬가지로 node_modules 폴더에 해당 패키지에 대한 파일들이 설치된다.
- &nbsp;
- &nbsp;

### 5. TypeScript 설정

- Typescript는 tsconfig.json이라는 TypeScript에 대한 설정 파일을 만들어야 한다.
- _npx tsc --init_

  ![express_05](/images/express/express_05.png)

  - &nbsp;

- tsconfig.json파일이 기본적인 셋팅이 완료된 상태로 생성이 된다.
- npx라는 명령어는 tsc --init을 하기 위해서는 tsc 패키지를 글로벌로 설치를 해야 하는데, 이러한 과정 없이 바로 사용할 수 있게 하는 명령어이다.
- 일종의 일회성으로 패키지를 사용할 수 있게 해주는 명령어이다.
- &nbsp;
- tsc --init을 하게 되면 tsconfig.json에 각 옵션은 주석처리와 함께 설명이 같이 첨부된 것을 볼 수 있다.
- &nbsp;
- &nbsp;

### 6. index.ts 작성

- 설정이 완료되었다면 본격적으로 코딩을 작성할 단계이다.
- index.ts라는 파일을 만들고 다음과 같이 코딩을 작성한다.

- &nbsp;
- _import express from "express";_
- &nbsp;
- _const app = express();_
- _const port = 3010;_
- &nbsp;
- _app.get("/", (req, res) => {_
- _res.send("Hello, ExpressTS!");_
- _});_
- &nbsp;
- _app.listen(port, () => {_
- _console.log(`🚀 Server is listening on port: ${port}`);_
- _});_

  ![express_06](/images/express/express_06.png)

- &nbsp;

- 공백을 제외한다면 10줄 정도 되는 짧은 코드이다.
- 각 코드에 대한 설명을 간략하게 작성하면,
- &nbsp;
- 1번 줄 - express 패키지를 사용하기 위해 가져오는(import) 코드이다.
- 3번 줄 - express()의 소괄호는 함수라는 표시인데 app이란 변수에 담아서 사용하는 코드이다.
- 즉, 6번줄에 express().get이 아닌 app.get의 형태로 사용하기 위해 변수를 만들었다고 보면 된다.
- 4번 줄 - 네트워크 포트 번호에 대한 변수를 생성했다. 실습에서는 3010번 포트를 사용할 예정이다.
- 포트는 백엔드 서버에 대한 출입문이라고 생각하면 된다.
- 6-8번 줄 - Rest API의 get을 작성했다. Rest API란 서버와 사용자 혹은 서버와 서버가 서로 통신하기 위해서 만들어 놓은 일종의 규칙 같은 것이다.
- 그중에서도 get을 사용해볼 것이다.
- get의 첫 번째 인자로는 경로, 두 번째 인자로는 요청이 왔을 때 실행되는 함수에 관한 내용을 적어 줄 수 있다.
- 경로는 "/" 기본 경로이며 우리의 백엔드 서버에 아무런 경로 없이 요청을 보낸다면 해당 경로로 오게 될 것이다.
- 백엔드 서버는 기본적으로 요청과 응답을 하게 되는데 각각 req(요청), res(응답)라고 보통 표현한다.
- 지금은 간단히 응답만 해줄 것이므로 res.send만 사용해서 응답을 해주고 있다.
- 10-12번 - 백엔드 서버는 외부로부터 오는 요청을 기다리고 있어야 한다. 이를 영어로는 듣다(listen)라고 표현한다.
- 해당 코드가 있어야 백엔드 서버가 정상적으로 구동이 된다.
- 첫 번째 인자에는 포트번호(port)가 들어가고 두 번째 인자에는 함수(() => {})가 들어가는데 서버가 실행될 때 실행될 내용을 작성하면 된다.
- &nbsp;
- 백엔드 코드 작성이 처음이라 너무 이해가 안 된다면, Express의 기본페이지 구성은 이 형태에서 크게 벗어나지 않으므로 해당 코드를 여러 번 작성해보는 것도 도움이 될 것이다.
- &nbsp;
- 위와 같이 작성해도 TypeScript의 타입 추론 기능을 사용할 수 있지만, 좀 더 명확히 타입을 표시하고자 한다면
- _import express, { Express, Request, Response } from "express";_
- &nbsp;
- _const app: Express = express();_
- _const port = 3010;_
- &nbsp;
- _app.get("/", (req: Request, res: Response) => {_
- _res.send("Hello, ExpressTS!");_
- _});_
- &nbsp;
- _app.listen(port, () => {_
- _console.log(`🚀 Server is listening on port: ${port}`);_
- _});_
- &nbsp;
- 와 같이 타입을 import해서 타입이 필요한 부분에 작성을 할 수도 있다.

- &nbsp;
- &nbsp;

### 7. JavaScript 변환 및 실행

- TypeScript파일을 최종적으로 JavaScript파일로 변환하여 실행한다.
- _npx tsc_
- 를 사용하면 컴파일된 JavaScript 파일(index.js)을 확인할 수 있다.

  ![express_07](/images/express/express_07.png)

  - &nbsp;

- index.js를 실행하면 백엔드 서버가 동작할 것이다.
- _node index.js_
- index.js 파일을 실행시킨다.
  ![express_08](/images/express/express_08.png)
- &nbsp;
- 서버가 실행되고 app.listen함수의 console.log가 터미널상에 잘 출력되는 것을 확인할 수 있다.
- &nbsp;
- GET 요청을 보내 app.get의 내용이 잘 실행되는지를 확인하면 서버가 정상적으로 생성이 된 것이다.
- GET 요청은 인터넷 브라우저를 이용해서 확인할 수 있다.
- 인터넷 브라우저를 열고 http://localhost:3010/에 접속하면

  ![express_09](/images/express/express_09.png)

- &nbsp;
- res.send의 내용을 잘 받아오는 것을 확인할 수 있다.
- &nbsp;
- 여기까지가 Express + TypeScript의 조합으로 백엔드를 구성하는 방법이다.
- 여기에 추가로 원하는 기능들을 붙여나감으로써 백엔드 서버로써의 역할을 수행하는 것이다.
- &nbsp;
- 이렇게 작업하면 기능적으로는 문제가 없지만 개발하는 데에 있어서 몇 가지 불편한 상황이 생겨 이를 개선하고 마무리 하고자 한다.
- &nbsp;
- &nbsp;

### 추가 1. Output 폴더 만들기

- 우리가 실제로 코딩하는 파일(index.ts)과 빌드된 파일(index.js)을 헷갈리지 않게 따로 구분하여 관리하는 것이 좋다.
- &nbsp;
- 이를 위해서는 tsconfig.json의 내용 수정이 필요하다.
- _"outDir": "dist"_

  ![express_10](/images/express/express_10.png)

- &nbsp;
- 말 그대로 output에 대한 directory(폴더)를 설정해 줄 수 있는 옵션인데,
- npx tsc --init 했다면 이미 해당 내용이 주석처리 되어있을 것이므로 주석을 풀어서 사용하면 된다.
- &nbsp;
- 그리고 마찬가지로 npx tsc, node dist/index.js 명령어로 실행할 수 있지만,
- 이 또한 package.json에 미리 등록하여 명령어를 사용할 수 있다.
- &nbsp;
- _"scripts": {_
-     "build": "npx tsc",
-     "start": "node dist/index.js"
- _}_

  ![express_11](/images/express/express_11.png)

- &nbsp;
- 이렇게 package.json에 등록하면 npm run build, npm run start라는 명령어를 통해서 서버를 실행시킬 수 있다.
- 이점이라 하면 Express 프로젝트가 아닌 다른 프로젝트(React 등등) 프로젝트마다 다른 실행 명령어를 통일시킬 수 있다는 점이다.
- &nbsp;
- 위 방법을 통해 파일을 좀 더 체계적으로 관리할 수 있다.
- 하지만 개발 단계에서 작업을 하다 보면 이것저것 코드를 건드리고 실행하고를 반복하는 경우가 많다.
- 이때마다 매번 빌드하고 실행하는 것은 비효율적이라고 볼 수 있다.
- 그래서 매번 빌드를 하는 것이 아닌 개발 단계에서는 TypeScript 그 자체를 실행하는 방법에 대해 살펴보겠다.
- &nbsp;
- &nbsp;

### 추가 2. 개발 단계에서의 TypeScript 실행

- 우선 두 가지 패키지 설치가 필요하다.
- nodemon - JS, TS 파일 변화를 감지하고 서버를 재실행시키는 패키지
- ts-node - TS 파일을 nodejs로 실행시킬 수 있게 하는 패키지

- 이 두 패키지를 설치하고, 개발 단계의 실행 명령어를 package.json에 등록한다.

- _npm i -D nodemon ts-node_

- _"dev": "nodemon --watch \"\*.ts\" --exec \"ts-node\" index.ts"_

- &nbsp;
  ![express_12](/images/express/express_12.png)

- &nbsp;
- 마찬가지로 npm run dev로 실행이 가능하고 개발 단계에서는 nodemon과 ts-node를 동시에 실행시키기 위해 내용이 다소 긴 것을 확인할 수 있다.
- _npm run dev_
- 개발 모드로 서버를 실행시킨 상태에서 코드의 내용 수정이 들어가면
- &nbsp;
  ![express_13](/images/express/express_13.png)

- &nbsp;
- nodemon에서 변화를 감지하고 서버를 재시작 시키는 것을 확인할 수 있다.

- 이제부터는 개발 시 매번 빌드하지 않고 결과물을 확인할 수 있게 되었다.

- 어떠한 서버를 구성하던 Express + TypeScript의 조합으로 백엔드를 구축하고자 한다면 위 내용은 공통으로 적용이 되는 내용이다.
- 따라서 위 작업 내용이 조금 어렵거나 헷갈리거나 하는 부분이 있다면 반복적으로 연습해서 내용을 숙달시켜 두는 편이 좋을 것 같다는 생각이 든다.
- &nbsp;
- &nbsp;
