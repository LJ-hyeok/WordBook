const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get("api/random-word", async(req, res) => {
  try{
    //무작위로 단어를 추출해서 전송하는 기능
  }catch ( error ) { console.log("err: can't send random-word"); res.status(500).send("eroor");}
});

app.listen(8080, () =>{
  console.log("8080 서버 대기중");
});

/*
kotoba: Stirng
yomikata: String
meaning: Stirng
JLPT: Number(1~5) or None
example: String (Ai로 만들기)
*/