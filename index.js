const mortgage_amount = document.getElementById('Mortgage_Amount')
const mortgage_year =  document.getElementById('Mortgage_years')
const mortgage_percent = document.getElementById('Mortgage_interest_input')
const mortgaage_repayment = document.getElementById('mortgage_repayment_input')
const mortgaage_interest = document.getElementById('mortgage_type_Interest_input')


  const button = document.querySelector(".Calculate_Repayments");
button.addEventListener("click", (e)=>{
 validation_input();
 console.log('you just click me')
 
})
/* || clearing all the  data in the input*/
 const clear = document.querySelector('.clear')
 
 clear.addEventListener("click", ()=> {
  document.querySelectorAll("input").forEach( (e)=>{
    e.value= ""
  })
  mortgaage_repayment.checked = false;
  mortgaage_interest.checked = false;
 })



/* || input validation */
   function validation_input(){
    const message = 'This field is required'
    /* || input validation for amount */
    if( mortgage_amount.value === '' ){
      document.querySelector('.erroAmount').innerHTML = message
      const border = document.querySelector('.Mortgage_input')
      const backgnd = document.querySelector('.symbol')
      border.style.border ="solid red 1px"
      backgnd.style.background =" red "
      backgnd.style.color = " white "

    }
    else{
      document.querySelector('.erroAmount').innerHTML = " "
    }
   
   /* || input validation for years */
   if(mortgage_year.value === ""){
     document.querySelector(".erro_year").innerHTML = message
     const border = document.querySelector('.Mortgage_term_container')
     const backgnd = document.querySelector('.symbols')
     border.style.border ="solid red 1px"
     backgnd.style.background ="red "
     backgnd.style.color = " white "

   }
   else{
     document.querySelector(".erro_year").innerHTML = "";
     
   }
   if(mortgage_percent.value === ""){
    document.querySelector(".erro_insteret").innerHTML = message
    const border = document.querySelector('.Mortgage_interest_container')
    const backgnd = document.querySelector('.symbol_insteret')
    border.style.border ="solid red 1px"
    backgnd.style.background ="red "
    backgnd.style.color = " white "

  }
  else{
    document.querySelector(".erro_insteret").innerHTML = "";
    
  }
  
  if(!mortgaage_repayment.checked && !mortgaage_interest.checked){
    document.querySelector(".erro_type").innerHTML = message
  
  }
  else{
    document.querySelector(".erro_type").innerHTML = "";
    
  }

 
    if(
      (mortgaage_repayment.checked || mortgaage_interest.checked)&&
      mortgage_percent.value != "" && mortgage_year.value != "" && mortgage_amount.value != '' 
    ){
   
      document.querySelector(".mortgage_result").classList.add("active")
       document.querySelector(".resultStillTo").classList.add("unactive")
    }
   
}
  /* || check if both checkbox are check to validate just one */
      /* || for repaymrnt  */
  mortgaage_repayment.addEventListener( "click", ()=>{
    console.log("check")
       if (mortgaage_interest.checked){
         mortgaage_interest.checked = false;
         const border = document.querySelector('.mortgage_type_Interest_Only');
         const backgnd = document.querySelector('  #mortgage_type_Interest_input');
         border.style.border = "  solid rgb(205, 205, 211) 2px";
         backgnd.style.border = "solid black 1px";
         border.style.background = " rgb(252, 247, 241)";
       }
  })
   /* || for interest only */
   mortgaage_interest.addEventListener( "click", (e)=>{
    if (mortgaage_repayment.checked){
      mortgaage_repayment.checked = false;
      const border = document.querySelector('.mortgage_type_repayment');
      const backgnd = document.querySelector('#mortgage_repayment_input');
      border.style.border = " solid rgb(205, 205, 211) 2px";
      backgnd.style.border = "solid black 1px";
      border.style.background = " rgb(252, 247, 241)";
    }
   })
 /* mortgage amount setting */
const input = document.querySelector('input')
input.addEventListener('focus', ()=>{
const border = document.querySelector('.Mortgage_input')
const backgnd = document.querySelector('.symbol')
border.style.border ="solid orange 1px"
backgnd.style.background ="orange "
   
})
/* mortgage year */
const input_year = document.querySelector('#Mortgage_years')
input_year.addEventListener('focus', ()=>{
const border = document.querySelector('.Mortgage_term_container')
const backgnd = document.querySelector('.symbols')
border.style.border ="solid orange 1px"
backgnd.style.background ="orange "
   
})
/* mortgaage type */
const input_term = document.querySelector('#Mortgage_interest_input')
input_term.addEventListener('focus', ()=>{
const border = document.querySelector('.Mortgage_interest_container')
const backgnd = document.querySelector('.symbol_insteret')
border.style.border ="solid orange 1px"
backgnd.style.background ="orange "
   
});
const input_repayment = document.querySelector('#mortgage_repayment_input');
input_repayment.addEventListener('focus', () => {
  const border = document.querySelector('.mortgage_type_repayment');
  const backgnd = document.querySelector(' #mortgage_repayment_input');
  border.style.border = "solid orange 1px";
  backgnd.style.border = "solid orange 1px";
  border.style.background = "rgb(250, 231, 196)"
  
});


const input_interest = document.querySelector('#mortgage_type_Interest_input');
input_interest.addEventListener('focus', () => {
  const border = document.querySelector('.mortgage_type_Interest_Only');
  const backgnd = document.querySelector('  #mortgage_type_Interest_input');
  border.style.border = "solid orange 1px";
  backgnd.style.border = "solid orange 1px";
  border.style.background = "rgb(250, 231, 196)";

});
