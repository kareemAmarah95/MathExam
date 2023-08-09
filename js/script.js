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
 if(window.localStorage.getItem("Loser")){
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
      const operations = ['+', '-', '*', '/'];
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
      arrayOfLosers.push(loser)
      console.log(arrayOfLosers);
      createTableForLosers(arrayOfLosers);
      window.localStorage.setItem("Loser", JSON.stringify(arrayOfLosers));
      // displayLosersOnPage(arrayOfLosers)
      if(inputBar.value == result || inputBar.value === result.toFixed(1) || inputBar.value === result.toFixed(2)|| inputBar.value === result.toFixed(3) || inputBar.value === result.toFixed(4)){
        
      let number1 = generateRandomNumber(1, 10),
      number2 = generateRandomNumber(1, 10),
      operations = ['+', '-', '*', '/'],
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
                    <input type="button" value="Infinity" onclick="btnVal()"></input>

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
        <button id="submit" onclick="addLoserToLocalStorage(arrayOfLosers);refreshPage()">Submit</button>
      `
      } 
    }


    function addLoserToLocalStorage(arrayOfLosers){
      let loserInput = document.querySelector("#loserName");
      if(loserInput.value.trim() != ""){
           // save the score and the name and the rank in the localStaorage
        window.localStorage.setItem("Loser", JSON.stringify(arrayOfLosers));
        document.querySelector("#loserName").value = "";
        takeData();
      }
       else {
      

      document.querySelector("#submit").innerHTML = `Play Again`; 
      return
      }
      
      
    }

    function refreshPage(){
     window.location.reload();
    }
    console.log(getDataFromLocalStorage(arrayOfLosers));
    // console.log(createTableForLosers());
    function getDataFromLocalStorage(){
      window.localStorage.getItem("Loser"); 
      createTableForLosers();
    }

    // function createAnotherRandomQuestions(){
    //   document.querySelector(".removed-part").innnerHTML = `
    //   <div id="score">Score = ${score}</div>

    //   <div id="equation"></div>
    //   <div class="column">
    //           <div class="row">
    //               <input id="enterNum" name="display" type="text" placeholder="Enter A Number">
    //           </div>
    //           <div class="row">
    //               <input type="button" value="1" onclick="btnVal()"></input>
    //               <input type="button" value="2" onclick="btnVal()"></input>
    //               <input type="button" value="3" onclick="btnVal()"></input>
    //           </div>
    //           <div class="row">
    //               <input type="button" value="4" onclick="btnVal()"></input>
    //               <input type="button" value="5" onclick="btnVal()"></input>
    //               <input type="button" value="6" onclick="btnVal()"></input>
    //               <input type="button" value="Infinity" onclick="btnVal()"></input>

    //           </div>
    //           <div class="row">
    //               <input type="button" value="7" onclick="btnVal()"></input>
    //               <input type="button" value="8" onclick="btnVal()"></input>
    //               <input type="button" value="9" onclick="btnVal()"></input>
    //               <input type="button" value="Invalid operation" onclick="btnVal()"></input>
    //           </div>
    //           <div class="row">
    //               <input type="button" value="clear" id="clear" onclick="btnVal()"></input>
    //               <input type="button" value="0" onclick="btnVal()"></input>
    //               <input type="button" value="-" onclick="btnVal()"></input>
    //               <input type="button" value="." onclick="btnVal()"></input>
    //           </div>
    //   </div>
    //   <div class="row">
    //     <input type="button" id="enter" onclick="btnVal();enterFunc()" value="Enter"></input>
    //   </div>
    //   `
    // }

    // function displayLosersOnPage(arrayOfLosers){
    //   document.querySelector("#demo").innerHTML = ""; 
    //   for (let i = 0; i < arrayOfLosers; i++) {
    // return   document.querySelector("#demo").innerHTML += `
    //     <tr>
    //       <td>${arrayOfLosers[i].rank}</td>
    //       <td>${arrayOfLosers[i].name}</td>
    //       <td>${arrayOfLosers[i].score}</td>
    //     </tr>
    //    `
        
    //   }
    // }


    function btnVal(){
      let inputBar = document.querySelector("input[type=text]")
      inputBar.value += event.target.value;  
    }

    function enterFunc(){
      generateRandomEquation();
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