---
title: ReactJS TailwindCSS 설치 및 세팅하기
thumbnail: tailwind/tailwind_01.png
date: 2023-10-19
description: TailwindCSS 설치 및 세팅하기
---

- React를 사용해서 페이지를 만들더라도 CSS를 이용하여 페이지 스타일링을 진행하게 된다.

- &nbsp;
- HTML / CSS / JS 때와 마찬가지로 CSS, SCSS(SASS)를 사용해서 스타일링을 하거나 Styled-components와 같은 CSS-in-JS를 사용하여 하나의 React 파일에서 스타일링을 같이 진행하는 때도 있다.

- &nbsp;
- &nbsp;

- 많은 방법 중에 우리는 TailwindCSS라는 라이브러리를 설치하여 보다 편하게 스타일링 작업을 진행하고자 한다.

### **TailwindCSS?**

![tailwind_01](/images/tailwind/tailwind_01.png)

- [TailwindCSS](https://tailwindcss.com/)는 보다 편리하고 빠르게 스타일링을 할 수 있는 CSS 라이브러리이다.
  우리가 보통 HTML에서 스타일링 작업을 하고자 한다면

- _.btn-style {_
- _color: red;_
- _border-radius: 9999px;_
- _..._
- _}_

- 위와 같은 형태로 class 단위(.btn-style)로 작업을 진행한다.
  TailwindCSS는 반대로 이미 style에 대한 class들이 다 정의되어 있고 우리는 정의된 style을 가져와 쓰는 형태이다.
  그뿐만 아니라 반응형, hover, 애니메이션 등 기본적인 인터렉션에 대한 기능들도 정의되어 있어서 프론트엔드 개발에 있어 불필요하게 반복되는 작업을 덜어준다.

- &nbsp;
- 직접 CSS를 다뤄본 경험이 있다면 이러한 작업방식이 더욱 편리하게 느껴질 것이다.

- &nbsp;

![tailwind_02](/images/tailwind/tailwind_02.png)

- 최근에는 React 진영의 SSR(Server Side Rendering)프레임워크인 NextJS의 CNA(Create Next App, CRA의 NextJS 버전)에서도 기본 CSS 라이브러리로 채택하고 있어 더욱 입지가 올라간 것 같다.

- &nbsp;

- 이러한 TailwindCSS를 React에서는 어떻게 사용하는지 이번 시간에 알아보고자 한다.

### Require

![tailwind_03](/images/tailwind/tailwind_03.png)

- React 프로젝트에 TailwindCSS를 적용할 예정이므로 우리에겐 React 프로젝트가 필요하다.
- 만약 없다면 지난번에 작성한 '[ReactJS] CRA(Create React App) 설치 및 셋팅하기'를 참고하여 React 프로젝트를 생성한 뒤 진행하자.

- &nbsp;

### TailwindCSS 설치 및 셋팅

- (스크린샷에서 일부 명령어를 cra에서 실행했는데, 모든 명령어는 제 프로젝트 기준 cra/my-app에서 실행해야 합니다.)

![tailwind_04](/images/tailwind/tailwind_04.png)

- npm 명령어를 통해서 tailwind를 설치한다. **npm i -D tailwindcss**
  이때 tailwindcss는 개발 단계에서만 쓰이는 라이브러리이므로 -D 옵션을 포함하도록 합니다.

![tailwind_05](/images/tailwind/tailwind_05.png)

- **npx tailwindcss init** 명령어를 치면 TailwindCSS의 설정 파일인 tailwind.config.js가 생성됩니다.

![tailwind_06](/images/tailwind/tailwind_06.png)

- 그 다음 tailwind.config.js의 content에 ["./src/**/*.{js,jsx,ts,tsx}"]를 추가합니다.
- 해당 내용은 src밑의 JavaScript(혹은 TypeScript) 파일에 TailwindCSS를 적용한다는 내용입니다.

![tailwind_07](/images/tailwind/tailwind_07.png)

- 마지막으로 index.css의 파일의 내용을 변경합니다.

- &nbsp;

- @tailwind base;
- @tailwind components;
- @tailwind utilities;

- &nbsp;

- 여기까지 작업하면 TailWindCSS의 설정은 끝입니다.
- 한번 실행을 통해서 TailwindCSS가 잘 적용이 되었는지 확인해보겠습니다.

### TailwindCSS 실행

- TailwindCSS의 스타일링이 잘 적용되는지 확인해보겠습니다.

![tailwind_08](/images/tailwind/tailwind_08.png)

- 기존의 코드에 className 속성을 추가하여 bg-red-100이라고 적어줍니다.
- &nbsp;

- 그다음 npm run start 명령어로 React 프로젝트를 실행시키면

![tailwind_09](/images/tailwind/tailwind_09.png)

- bg-red-100이 잘 적용된 것을 확인할 수 있습니다.
- bg-red-100은 해당 태그에 배경색을 지정하는 코드입니다. 100의 숫자가 높을수록 색상이 진하게 변합니다. (200, 300 ... 순으로 적용해보세요.)
- &nbsp;
- TailwindCSS에는 배경색 뿐만 아니라 다양한 옵션들이 존재합니다.
- 워낙 방대하므로 이를 하나하나 공부하는 것보다는 그때그때 나에게 필요한 속성을 먼저 공부하는 것을 추천해 드립니다.

### Extensions

- VSC(Visual Studio Code)에서 TailwindCSS를 쓰기 편하게 만들어주는 확장 프로그램 두 가지를 알려드리겠습니다.

- **1. Tailwind CSS IntelliSense**

![tailwind_10](/images/tailwind/tailwind_10.png)

- TailwindCSS에 존재하는 수 많은 속성 값을 자동 완성으로 보여주는 기능을 제공합니다.

- **2. PostCSS Language Support**

![tailwind_11](/images/tailwind/tailwind_11.png)
