---
title: ReactJS CRA(Create React App) 설치 및 세팅하기
thumbnail: cra/cra_01.png
date: 2023-10-10
description: CRA(Create React App) 설치 및 세팅하기
---

![cra_02](/images/cra/cra_02.png)

1. React는 웹 (& 네이티브 앱)의 유저 인터페이스(UI)를 효율적으로 만들기 위한 라이브러리이다.

2. 이번 시간에는 이 React를 처음 접하고자 할 때 설치 및 셋팅을 하는 방법에 대해 살펴보고자 한다.
   React에 관한 이론적인 부분보다는 셋팅 후 실행하는 방법에만 초점을 맞춰서 진행하고자 한다.

### Require

3. 코드는 VSC(Visual Studio Code) IDE를 사용하여 진행하며 아주 기초적인 부분까지는 다루지 않지만 충분히 보면서 따라할 수 있게 구성하였다.

![cra_03](/images/cra/cra_03.png)

4. [🔗 Create React App 페이지](https://create-react-app.dev/)
5. React 프로젝트를 만들려면 React & React Dom을 설치하고 웹팩 설정을 하고 경우에 따라서는 Git(코드관리) 설정을 하는 등 꽤 복잡한 작업이 이루어져야 한다.
   Create React App은 이러한 설정이 완료된 채로 바로 React 코딩에 집중할 수 있게 해주는 일종의 템플릿을 제공한다.
   이는 작업 시간과 효율 면에서 꽤 이점을 제공한다.
   따라서 우리는 이 CRA를 활용하여 React 프로젝트를 생성하고자 한다.

### 1. CRA 프로젝트 생성

![cra_04](/images/cra/cra_04.png)

6. _npx create-react-app my-app_
7. 터미널에서 위 명령어를 통해 프로젝트 생성이 가능하다.
   이때 my-app은 프로젝트명이기 때문에 원하는 이름으로 생성할 수 있다.

![cra_05](/images/cra/cra_05.png)

8. 터미널 창에 위와 같이 나타나면 정상적으로 React 프로젝트가 생성이 완료된 상태이다.
9. _cd my-app_
10. _npm start_
11. 터미널에 적혀있는 대로 my-app 폴더로 이동하여 npm start 명령어를 통해 프로젝트를 구동시킬 수 있다.

![cra_06](/images/cra/cra_06.png)

12. 기본적으로 로컬호스트 3000번(http://localhost:3000)에서 React 프로젝트가 열리게 되며,
    만약 3000번 포트가 사용 중이라면 3001, 3002 ... 이런 식으로 열리게 될 것이다.

13. React 아이콘 모양이 360도 회전하는 형태의 페이지를 볼 수 있는데 이는 CRA에서 미리 만들어 놓은 화면을 보여줄 뿐이다.
    우리는 이를 수정하여 사용할 수 있다.

### 2. React 파일 설정

![cra_07](/images/cra/cra_07.png)

14. CRA로 생성한 React 프로젝트의 폴더 구조는 이렇게 되어 있다.
    public 폴더에는 index.html, 이미지와 같은 정적 파일을 보관하게 되고, React와 관련된 파일은 src 폴더 밑에서 관리하게 된다.

15. CRA가 제공해 주는 페이지가 아니라 우리의 입맛에 맞게끔 변경하도록 하겠다.

&nbsp;&nbsp;&nbsp;&nbsp;

**1. App.css, logo.svg 삭제**

![cra_08](/images/cra/cra_08.png)

16. 사용하지 않을 예정인 두 파일은 삭제한다.

**2. App.js → App.jsx**

![cra_09](/images/cra/cra_09.png)

- App.js의 확장자를 jsx(JavaScript XML)로 변경한다.
- jsx는 React 파일의 확장자이다.
- js일 때랑 jsx일 때랑 실행되는 결과는 크게 차이가 없지만, 우리가 확장자를 다르게 함으로써 일반 JavaScript 파일과 React 파일을 구분지어 관리하기 쉽게 만들어 준다.

**3. App.jsx 내용 수정**

- App.jsx의 내용을 수정한다.

&nbsp;&nbsp;&nbsp;&nbsp;

- _const App = () => {_
- _return <div>Hello, React!</div>;_
- _};_

- export default App;
- &nbsp;
- &nbsp;
- 지금은 React의 작동 방식에 관해서는 설명하지 않기 때문에 이 코드가 헷갈린다면 return에 HTML과 유사한 문법으로 페이지를 구성한다고 생각하면 된다.

- &nbsp;
- &nbsp;

  **4. index.css 수정**

- 코드의 내용을 수정했기 때문에 index.css에 불필요한 내용이 생긴다.
  다음과 같이 수정한다.

![cra_10](/images/cra/cra_10.png)

- 우선은 모든 div태그의 글자 색상이 핑크로 변환되게 바꿨다.
  잘 나타나는지 확인 후 원하는 스타일을 적용하면 된다.
- &nbsp;
- &nbsp;
- 이제 다시 한번 npm start 명령어로 프로젝트를 재실행한다.

![cra_11](/images/cra/cra_11.png)

- 우리가 작업한 내용이 잘 반영된 것을 확인할 수 있다.
  만약 내용을 변경하고 싶으면 App.jsx를 변경하면 되고, 스타일 값을 변경하고자 한다면 index.css에서 작업할 수 있을 것이다.

### 결론

- &nbsp;
- 물론 React 프로젝트가 App.jsx, index.css 두 개의 파일만 건드리면서 간단하게 이루어지지는 않는다.
- 하지만 모든 일이 그러하듯 처음에 셋팅하는 법을 잘 알아두어야만 그 이후에 좀 더 복잡한 구조를 만드는 부분을 이해할 수 있을 것이다.
