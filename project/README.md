# Spring + React로 게시판 만들기
- 참조 : https://m.blog.naver.com/rudnfskf2/222148407272
- 이 프로젝트는 spring과 React를 활용하여 각 back / front로 나눠 작성

> React 설치 방법
>> 참조 : https://ko.reactjs.org/docs/create-a-new-react-app.html
>> 명령어 : npx create-react-app "프로젝트명"
>> 실행 명령어 : cd "프로젝트명" => npm start

> React 처음 설치시 프로젝트 구성
>> 1) node_modules 디렉토리 : 리액트 앱이 가지는 의존성 라이브러리 파일들이 위치함
>> 2) public : 정적파일 위치함 (index.html : 컴포넌트의 내용이 렌더링 되는 곳)
>> 3) src : 소스코드를 작성하는 디렉토리 중요한 파일이 모임 (App.js : public/index.html에 렌더링할 내용을 기술, index.js : App.js에 작성된 내용을 public/index.html의 특정 dom(id='root')에 매칭)
>> 4) package.json : 리액트의 비젼, 의존성 등이 개재되어 있는 파일, 패키지 추가시 추가한 패키지의 내용이 이 파일에 기재됨

> 패키지 설치
>> bootstrap : css 툴
>> axios : spring boot api 신
>> react-router-dom : 각 페이지의 구분을 위해 설치

> spring 설정방법
>> 참조 : https://github.com/eomjinyoung/java106/blob/master/java106-docs/Gradle.md
>> 명령어 : gradle init --type [프로젝트 타입] ==> gradle init --type java-application
