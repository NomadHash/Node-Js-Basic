## Middle-ware

- 1. 라우팅 작성 시 어떤 url은 꼭 로그인되어있어야만 
해당 라우팅을 볼수 있게끔 하고싶을때

간단히 말해서 미들웨어는 요청을 중간에 가로챈다.

미들웨어는 3개의 인자를 갖는다. (request, response, next)

미들웨어는 내가 url 호출했을때 미들웨어들을 다 거친후 오는것


morgan 설치

GET /admin/products 304 0.427 ms -  (Get방식으로  /admin/products로 요청함)

