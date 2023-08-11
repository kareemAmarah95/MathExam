let scoreDiv = document.querySelector('#score'),
 equation = document.querySelector('#equation'),
 enter = document.querySelector("#enter"),
 clearBtn = document.querySelector("#clear"),
 btns = document.querySelectorAll(".row input"),
 deleteBtn = document.querySelector("#delete");
 console.log(btns);
 let inputBar = document.querySelector("#enterNum");
 let arrayOfLosers = [],
  id = Math.random().toString(16).slice(2);
 
 getDataFromLocalStorage()
 if(window.localStorage.getItem("Loser") !== null){
  arrayOfLosers = JSON.parse(window.localStorage.getItem("Loser"));
}



function deleteOneNum(){
  inputBar.value = inputBar.value.toString().slice(0,-1);

}
  
 minusBtn = document.querySelector("#minus");
 function getBtnValue() {
  inputBar.value = "";
  btns.forEach((btn)=>{

    btn.addEventListener("click", (e)=>{
      e.preventDefault();
      inputBar.value += btn.value;
    })
  })
 }

 let score = 0;

 getBtnValue();
 

//  console.log(btnVal);





 function performOperation(number1, number2, randomOperation) {
    let result;
    switch (randomOperation) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 -  number2;
        break;
      case '*':
        result = number1 * number2;

        break;
      case '/':
        result = number1 /number2  ;
        break;
      case '%':
        result = number1 % number2  ;
        break;
      default:
        console.log('Invalid operation');
        break;
    }
    console.log(result);
    return result;
    
  }

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  function generateRandomEquationOne() {
    const number1 = generateRandomNumber(1, 10);
    console.log(number1);
    const number2 = generateRandomNumber(1, 10);
    console.log(number2)
    const operations = ['+', '-', '*', '/','%'];
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    console.log(randomOperation);
    result = performOperation( number1,number2,randomOperation);
    console.log(result);
    scoreDiv.innerHTML = `Score = 0`;
    equation.innerHTML = `${number1} ${randomOperation} ${number2} = ??`
  }
  
  generateRandomEquationOne();

  
 

  function generateRandomEquation() {
    console.log(score);
    // scoreDiv.innerHTML = "";
    // equation.innerHTML = "";
    // console.log(`total = ${total}`);
    console.log(`inputValue = ${inputBar.value}`);
    if(inputBar.value == result || inputBar.value == result.toFixed(2) || inputBar.value == result.toFixed(1) || inputBar.value == result.toFixed(4)|| inputBar.value == result.toFixed(3)) {
      const number1 = generateRandomNumber(1, 10);
      console.log(number1);
      const number2 = generateRandomNumber(1, 10);
      console.log(number2);
      const operations = ['+', '-', '*', '/','%'];
      const randomOperation = operations[Math.floor(Math.random() * operations.length)];
      console.log(randomOperation);
      result = performOperation(number1,number2,randomOperation) ;
     
    console.log(number1);
    console.log(number2);
    console.log(randomOperation);
    console.log(result);
      equation.innerHTML = `${number1} ${randomOperation} ${number2} = ??`;
    
      scoreDiv.innerHTML = `Score = ${score += 10}`;
      inputBar.value = "";
    }
     else {
      scoreDiv.innerHTML = `Score = ${score}`;
      document.querySelector(".removed-part").innerHTML = `
        <div id="score">Score = ${score}</div>
        <input id="loserName" placeholder="Enter Your Name"></input>
        <button id="submit" onclick="takeData(${score})">Submit</button>
      `
      }
    };

    enter.addEventListener("click", ()=>{
      generateRandomEquation();
     })


    
   
   
     function takeData(score){
      const loser = {
        name: document.querySelector("#loserName").value,
        score: score,
        rank: arrayOfLosers.length+1
      }
      arrayOfLosers.push(loser);
     if(document.querySelector("#loserName").value != ""){
          window.localStorage.setItem("Loser", JSON.stringify(arrayOfLosers));
          createTableForLosers(arrayOfLosers);
        } else {
          refreshPage();
          return;
        }
      
      console.log(arrayOfLosers);
     
      // displayLosersOnPage(arrayOfLosers)
      if(inputBar.value == result || inputBar.value === result.toFixed(1) || inputBar.value === result.toFixed(2)|| inputBar.value === result.toFixed(3) || inputBar.value === result.toFixed(4)){
        
      let number1 = generateRandomNumber(1, 10),
      number2 = generateRandomNumber(1, 10),
      operations = ['+', '-', '*', '/','%'],
      randomOperation = operations[Math.floor(Math.random() * operations.length)];

      result = performOperation(number1,number2, randomOperation);
      
      document.querySelector("#loserName").value = "";
      
      document.querySelector(".removed-part").innerHTML = `
      <div id="score">Score = ${score = 0}</div>
      <div id="equation">${number1} ${randomOperation} ${number2} = ??</div>
        <div class="column">
                <div class="row">
                    <input name="display" type="text" placeholder="Enter A Number">
                </div>
                <div class="row">
                    <input type="button" value="1" onclick="btnVal()"></input>
                    <input type="button" value="2" onclick="btnVal()"></input>
                    <input type="button" value="3" onclick="btnVal()"></input>
                </div>
                <div class="row">
                    <input type="button" value="4" onclick="btnVal()"></input>
                    <input type="button" value="5" onclick="btnVal()"></input>
                    <input type="button" value="6" onclick="btnVal()"></input>
                </div>
                <div class="row">
                    <input type="button" value="7" onclick="btnVal()"></input>
                    <input type="button" value="8" onclick="btnVal()"></input>
                    <input type="button" value="9" onclick="btnVal()"></input>
                    
                </div>
                <div class="row">
                    <input type="button" value="0" onclick="btnVal()"></input>
                    <input type="button" value="-" onclick="btnVal()"></input>
                    <input type="button" value="." onclick="btnVal()"></input>
                </div>
        </div>
        <div class="row">
            <input type="button" value="clear" id="clear" onclick="btnVal()"></input>
            <button  id="delete" onclick="deleteOneNum()">
            <i class="fa-solid fa-delete-left"></i></button>
            <input type="button" id="enter" onclick="btnVal();enterFunc()" value="Enter"></input>
        </div>
      `
      }else {
        // console.log(arrayOfLosers.id);
        document.querySelector(".removed-part").innerHTML = `
        <div id="score">Score = ${score}</div>
        <input id="loserName" placeholder="Enter Your Name"></input>
        <button id="submit" onclick="takeDataAndRefreshThePage()">Submit</button>
      `
      } 
    }
function takeDataAndRefreshThePage(){
  if(document.querySelector("#loserName").value != ""){
    takeLoserData();
      // console.log(arrayOfLosers);
  } else {
    refreshPage();
  }
  // setTimeout(()=>{
  //   addLoserToLocalStorage(arrayOfLosers);
  // },200)
  
  // setTimeout(()=>{
  //   refreshPage();
  // },200)
  
}

function takeLoserData(){
  let loserObj = {
    rank: arrayOfLosers.length+1,
    score: score,
    name: document.querySelector("#loserName").value,
  }
  arrayOfLosers.push(loserObj);
  window.localStorage.getItem("Loser", JSON.stringify(arrayOfLosers));
  document.querySelector("#loserName").value = "";
  // refreshPage();
  createTableForLosers(arrayOfLosers); 
  }

    function addLoserToLocalStorage(){
      
      for (let i = 0; i < arrayOfLosers.length; i++) {
        window.localStorage.setItem("Loser",JSON.stringify(arrayOfLosers));
        createTableForLosers(arrayOfLosers); 
      }
    
    }

    function refreshPage(){
    //  window.location.reload();
    // window.location.href = "../index.html";
    let number1 = generateRandomNumber(1, 10),
    number2 = generateRandomNumber(1, 10),
    operations = ['+', '-', '*', '/','%'],
    randomOperation = operations[Math.floor(Math.random() * operations.length)];

    result = performOperation(number1,number2, randomOperation);
    document.querySelector(".removed-part").innerHTML = `
    <div id="score">Score = ${score = 0}</div>
    <div id="equation">${number1} ${randomOperation} ${number2} = ??</div>
      <div class="column">
              <div class="row">
                  <input name="display" type="text" placeholder="Enter A Number">
              </div>
              <div class="row">
                  <input type="button" value="1" onclick="btnVal()"></input>
                  <input type="button" value="2" onclick="btnVal()"></input>
                  <input type="button" value="3" onclick="btnVal()"></input>
              </div>
              <div class="row">
                  <input type="button" value="4" onclick="btnVal()"></input>
                  <input type="button" value="5" onclick="btnVal()"></input>
                  <input type="button" value="6" onclick="btnVal()"></input>
              </div>
              <div class="row">
                  <input type="button" value="7" onclick="btnVal()"></input>
                  <input type="button" value="8" onclick="btnVal()"></input>
                  <input type="button" value="9" onclick="btnVal()"></input>
                  
              </div>
              <div class="row">
                  <input type="button" value="0" onclick="btnVal()"></input>
                  <input type="button" value="-" onclick="btnVal()"></input>
                  <input type="button" value="." onclick="btnVal()"></input>
              </div>
      </div>
      <div class="row">
          <button id="clear" onclick="clearAll()">Clear</button>
          <button  id="delete" onclick="deleteOneNum()">
          <i class="fa-solid fa-delete-left"></i></button>
          <input type="button" id="enter" onclick="enterFunc()" value="Enter"></input>
      </div>
    `
    }
    console.log(getDataFromLocalStorage(arrayOfLosers));
    // console.log(createTableForLosers());
    function getDataFromLocalStorage(){
      window.localStorage.getItem("Loser"); 
      createTableForLosers();
    }

    function btnVal(){
      let inputBar = document.querySelector(".row input");
      inputBar.value += event.target.value;  
    }

    function enterFunc(){
      let inputBar = document.querySelector(".row input");
      console.log(`inputValue = ${inputBar.value}`);
      console.log(`Result = ${result}`);
      if(inputBar.value == result || inputBar.value === result.toFixed(2) || inputBar.value === result.toFixed(1) || inputBar.value === result.toFixed(3) || inputBar.value === result.toFixed(4)){
       let number1 = generateRandomNumber(1, 10),
    number2 = generateRandomNumber(1, 10),
    operations = ['+', '-', '*', '/','%'],
    randomOperation = operations[Math.floor(Math.random() * operations.length)];

    result = performOperation(number1,number2, randomOperation);
    document.querySelector(".removed-part").innerHTML = `
    <div id="score">Score = ${score = 0}</div>
    <div id="equation">${number1} ${randomOperation} ${number2} = ??</div>
      <div class="column">
              <div class="row">
                  <input name="display" type="text" placeholder="Enter A Number">
              </div>
              <div class="row">
                  <input type="button" value="1" onclick="btnVal()"></input>
                  <input type="button" value="2" onclick="btnVal()"></input>
                  <input type="button" value="3" onclick="btnVal()"></input>
              </div>
              <div class="row">
                  <input type="button" value="4" onclick="btnVal()"></input>
                  <input type="button" value="5" onclick="btnVal()"></input>
                  <input type="button" value="6" onclick="btnVal()"></input>
              </div>
              <div class="row">
                  <input type="button" value="7" onclick="btnVal()"></input>
                  <input type="button" value="8" onclick="btnVal()"></input>
                  <input type="button" value="9" onclick="btnVal()"></input>
                  
              </div>
              <div class="row">
                  <input type="button" value="0" onclick="btnVal()"></input>
                  <input type="button" value="-" onclick="btnVal()"></input>
                  <input type="button" value="." onclick="btnVal()"></input>
              </div>
      </div>
      <div class="row">
          <button id="clear" onclick="clearAll()">Clear</button>
          <button  id="delete" onclick="deleteOneNum()">
          <i class="fa-solid fa-delete-left"></i></button>
          <input type="button" id="enter" onclick="enterFunc()" value="Enter"></input>
      </div>
    `
    } else {
        document.querySelector(".removed-part").innerHTML = `
        <div id="score">Score = ${score}</div>
        <input id="loserName" placeholder="Enter Your Name"></input>
        <button id="submit" onclick="takeDataAndRefreshThePage()">Submit</button>
      `
    }
  }

  function deleteOneNum(){
    let inputBar = document.querySelector(".row input")
    inputBar.value = inputBar.value.toString().slice(0,-1);

}

  function clearAll(){
    let inputBar = document.querySelector(".row input[type=text]");
     inputBar.value = "";
  }
   

    function createTableForLosers(){
      document.querySelector("table tbody").innerHTML = "";
      for(let i = 0 ; i < arrayOfLosers.length; i++){
        console.log(arrayOfLosers[i].rank);
        console.log(arrayOfLosers[i].name);
        console.log(arrayOfLosers[i].score);
        document.querySelector("table tbody").innerHTML += `
          <tr>
            <td>${arrayOfLosers[i].rank}</td>
            <td>${arrayOfLosers[i].name}</td>
            <td>${arrayOfLosers[i].score}</td>
          </tr>
      `
      }
    }
   
  

  clearBtn.addEventListener("click", clearAllData);
  function clearAllData() {
    inputBar.value = "";
  }