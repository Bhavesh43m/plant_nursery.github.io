console.log("This is external javascript");

/*age=17;
if(age<18)

{
    window.alert("You are not allow to enter");
}*/


num=21
if (num%2==0)
{
    console.log(num+" is even number");
}else{
    console.log(num+" is odd number");
}

function greet()
{
   window.alert("Hello, welcome to website");
}


/*this keyword is used to represent current 
object */

user = {
    name:{fname:"Bhaveh",lname:"Bhurkud"},
    email:"abc@gmail.com",
    contact:"989899898",
    play:function(){
       console.log(this.name.fname+" is playing cricket");
    },
    code:function(){
       console.log(this.name.lname+" is Coding javascript programs");
    }
  };

  btn= document.getElementById('btn');
  btn.addEventListener('click',function(){
      head3= document.getElementsByTagName('h3');
      head3[0].style.color= "red";

      para= document.getElementById('test');
      para.style.fontSize="24px";
      para.style.fontWeight="bold";

      blue=document.getElementsByClassName('blue');
      blue[0].innerHTML="This is my new text";
      blue[1].style.display="none";

  });

  content= document.getElementById('content');
  content.addEventListener('keyup',function(){
      var data=content.value;
      msg=document.getElementsByClassName('msg');
      msg[0].innerHTML=data;
      msg[0].style.color="red";
      msg.style.fontWeight="bold";
  });


  sh = document.getElementById('sh');
 sh.addEventListener('click',function(){
    pwd = document.getElementsByName('pwd')[0];
    var typ = pwd.getAttribute('type');
    if(typ == 'password')
    {
      pwd.setAttribute('type','text');
      sh.innerHTML = "Hide";
    }else{
      pwd.setAttribute('type','password');
      sh.innerHTML = "Show";
    }
 });

 demo= document.getElementById('demo');
 demo.addEventListener('click',function(){
     var nb= document.createElement('button');
     var tn= document.createTextNode('New button');
     nb.appendChild(tn);
     document.body.appendChild(nb);
 });


 function validate()
 {
     email= document.getElementsByName('email')[0];
     mobile= document.getElementsByName('mobile')[0];

     if(email.value == '' || mobile.value == '')
     {
         alert("Please fill all the details")
         return false;
     }
 }

logo= document.getElementById('logo');
logo.addEventListener('mouseover',function(){
    logo.setAttribute('src','../html/css.png');
})
logo.addEventListener('mouseout',function(){
    logo.setAttribute('src','../html/html1.jpg');
})
 
