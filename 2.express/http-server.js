const http = require('http'); // 노드 내장 모듈을 가져온다 
const port = 3000; // 사용할 서버 포트

const server = http.createServer((req, res) => { // 요청이 오면 실행되는 콜백 함수
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    }); // 응답 상태값과 Content-TypeContent-Type 설정
    res.write("Hello http Server!"); // 응답 데이터 전송 
    res.end();
});

server.listen(port, ()=>{ // 포트와 요청대기 완료 시 실행 될 콜백함수
    console.log("Server on port 3000");
});

