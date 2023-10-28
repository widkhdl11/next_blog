---
title: CSS와 SCSS 기초
date: 2023-09-30
description: CSS과 SCSS의 기본 문법을 알아본다.
---

1. inline
2. block
3. inline-block
4. float
5. nth-child(n)
6. margine
7. text-align

8. flex
9. justify-content : space-between, space-around .etc
10. gap
11. flex-direction : row, col,reverse
12. vh
13. aligh-items : stretch, center, flext-start .etc
14. wrap
15. flex-flow
16. align-content : center, evenly, space-between .etc(gap의 영향을 받음)
17. column-gap
18. row-gap
19. order
20. align-self
21. flex-grow = 늘어나는 비율
22. flex-shrink = 줄어드는 순서(비율?)
23. flex-basis = 기본 width(flex-direction : column일 경우 hight)
24. flex : (grow) (shirink) basis 로 축약 가능

25. grid
26. grid-template-coolumns : [name] n px, [name] m px (2개 행의 크기)
27. grid-template-rows : [name] n px, [name] m px (2개 열의 크기)
28. grid-column-start,end = 행 라인 시작,종료 위치 지정(grid-column,
29. grid-row : n m으로 축약 가능)
30. nfr
31. grid-template-areas : "name1 name1 name1" 1fr
32. "name2 name2 name2" 2fr / 1fr 1fr 1fr
33. : repeat
34. grid-area : name
35. grid-row,column : (name /) span n
36. grid-auto-rows, grid-auto-columns
37. grid-auto-flow
38. place-items
39. justifty-self
40. align-self
41. align-content
42. justify-content
43. grid-template-columns : max-content, min-content, minmax()
44. repeat(auto-fill(or auto-fit)

scss
&
$
%alert{}
@extends %alert{}
@mixin %alert($bgColor,$borderColor){}
@include alert(green, black)
@content
@media screen and
