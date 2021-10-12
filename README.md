# TODO LIST (Back End)

**할 일을 적고 체크, 수정, 삭제할 수 있는 웹앱**

<h2 align="center"><b> Tech Stack </b></h2>
</br>
<p align="center">
<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/Heroku-430098?style=flat-square&logo=Heroku&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"/></a> &nbsp
<hr>

### Express

- Router을 이용하여 url분리 하여 구축.
- mongoose를 활용하여 MongoDB cloude와 연결.
- path와 res.sendFile을 이용하여 html 파일 response.
- cors를 사용하여 다른사이트에서 요청하는 것을 허가.

### MongoDB

- NoSQL로 JSON형식으로 데이터 전송.

### Heroku

- 서버 배포를 도와주는 사이트.

### Postman

- POST, DELETE 등 http 통신 테스트를 할 수 있는 웹앱.
- REST API Document를 만들어 주는 웹앱.

<br>
<hr>

## REST API address

| Method | Address     | Info                 |
| ------ | ----------- | -------------------- |
| GET    | /todos      | todos 가져옴.        |
| POST   | /addTodos   | todo 추가.           |
| PATCH  | /modifyTodo | todo의 value 수정.   |
| PATCH  | /isCheck    | todo의 isCheck 수정. |
| DELETE | /delete     | todo 삭제.           |

## Product

> REST API Document 보러가기

https://documenter.getpostman.com/view/13738913/UUy7b4Sm

<br>

> 서버 보러 가기

(이미지 클릭 시 페이지 이동)

[<img src="https://images.velog.io/images/ahngh/post/a88b5d36-b117-4cbc-b48e-5f037c1ff9f9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.34.28.png" width="250">](https://skytodo-express.herokuapp.com/)

<br>
<hr>

## Front-End

### VanillaJS version

> https://github.com/Ahn-GiHwan/todolist

<br>

### TypeScript version

> https://github.com/Ahn-GiHwan/todolist_ts

<br>

### React version

> https://github.com/Ahn-GiHwan/todolist_react

<br>
<hr>

## v1.1.0

- cors를 이용하여 다른 사이트에서 요청을 허가.

## v1.2.0

- API 추가
- 프론트엔드와의 통신으로 response에 todos 리턴
