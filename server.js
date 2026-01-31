const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/dist')))



app.get("/api/level-test", async(req, res) => {//무작위로 단어를 추출해서 전송하는 기능
  try{
    let randomList = () => { // 1 ~ 98 까지 랜덤한 수를 20개 만드는 함수
      let numberList = [];
      for(let i = 0; i < 20; i++){
        let random = Math.floor(Math.random() * 98) + 1;
        if(numberList.indexOf(random) != -1) --i;
        else numberList.push(random)
      }
      return numberList;
    }
    const allData = JSON.parse(fs.readFileSync("./wordData.json","utf8"));
    const Words = [];
    const IDs = randomList();
    for(let i=0;i<IDs.length;i++){
      let index = allData.findIndex((e) => e.id === IDs[i]);
      Words.push(allData[index]);
    }
    res.json(Words);
  }catch ( error ) { console.log("err: can't send data"); res.status(500).send("eroor");}
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT,() =>{
  console.log(`${PORT} 서버 대기중`);
});

/*
kotoba: Stirng
yomikata: String
meaning: Stirng
JLPT: Number(1~5) or None
example: String (Ai로 만들기)
*/