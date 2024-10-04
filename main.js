
const show = document.getElementById('show');
const show2 = document.getElementById('show2');
const show2display = document.getElementById('show2display');
const seted = document.getElementById('set');
const balanceDisplay = document.getElementById('balancedisplay');
const nameDisplay = document.getElementById('namedisplay');
const close = document.getElementById('close');
const expenseBox = document.getElementById('expensebox');
const addNewExpense = document.getElementById('addnewexpense');
const newExpense = document.getElementById('newexpense');
const name = document.getElementById('name');
const currency = document.getElementById('currency');
let balance = document.getElementById('balance');
const spent = document.getElementById('spent');
const savedexpensebox=document.getElementById('savedexpensebox')
let index=0;
let thetotalspent;

const expenses= [];
const savedexpenses=[];
document.addEventListener("DOMContentLoaded",appendthesavearray);

  show.addEventListener('click', () => {
    if (show.textContent === "Hide") {
      seted.style.display = "none";
      show.textContent = "🧰";
    } else {
      seted.style.display = "block";
      show.textContent = "Hide";
    }
  });

  show2.addEventListener('click', () => {
    show2display.style.display = "block";
  });

  close.addEventListener('click', () => {
    show2display.style.display = "none";
  });

  


function save() {
  
    localStorage.setItem('name', name.value);
    localStorage.setItem('currency', currency.value);
    localStorage.setItem('balance', balance.value);
    localStorage.setItem('spent', spent.value);
  }


  
function deleted() { name.value=""; currency.value=""; balance.value=""; save()}

  
  window.onload=()=>{
    name.value = localStorage.getItem('name');
    currency.value = localStorage.getItem('currency');
    balance.value = localStorage.getItem('balance');
    spent.value = localStorage.getItem('spent');


    nameDisplay.value= localStorage.getItem('name');
    
    let uppercase=localStorage.getItem('currency').toUpperCase()
    
balancedisplay.value=uppercase+" "+localStorage.getItem('balance');


}
//
function add() {

  const thenewname=document.getElementById("newexpensename").value
const thenewamount=document.getElementById('newexpense').value
  
  if(thenewname===""&&thenewamount===""){
    alert("fill in the options")
  }
  
  else{
  const expense={ text:thenewname, amount:thenewamount}
  const savedexpense={ Expense:thenewname, amount:thenewamount,date:new Date()}

expenses.push(expense)
savedexpenses.push(savedexpense)

console.log(thenewname)
 display(thenewname,thenewamount)

if(thenewamount){
   spent.value-=thenewamount;
   balance.value-=thenewamount;

  save()
}

}}

function cleartotalspent(){
  spent.value=0;
  save()
}

function display() {
const expensebox=document.getElementById('expensebox');
expensebox.innerHTML="";

expenses.forEach((expense,index)=>{  
  index++
  
  const p=document.createElement('p');
   const span=document.createElement('span');
   const p2=document.createElement('details')
   const button1=document.createElement('button');
   const button2=document.createElement('button');

   const date=new Date()

    p.textContent=expense.text;
    span.textContent=" "+localStorage
    .getItem('currency').toUpperCase()+expense.amount;
    button1.textContent="save";
    button2.textContent="remove";
    button1.style.color="white";
    button1.style.background="blue";
    button2.style.color="white";
    button2.style.background="red";
    button2.style.marginLeft='0.5em';

button1.onclick=()=>{  savedthearray()}
button2.onclick=()=>
removeExpense(index)

p2.textContent=" "+date;
    span.appendChild(p2)
    p.appendChild(span);
    p.appendChild(button1)
    p.appendChild(button2);;

    expensebox.appendChild(p)

})
    }

    function removeExpense(){
      expenses.splice(index,1)
      display()
    }
    

function savedthearray(){

    localStorage.setItem('savedexpense',JSON.stringify(savedexpenses))

}

    
function appendthesavearray(){
  let we=localStorage.getItem('savedexpense');
  let replaceregex=/[^\da-z:,]/ig
const result=we.replace(replaceregex," ")
  console.log(we)
  console.log(result)


  savedexpensebox.append(result)


}


