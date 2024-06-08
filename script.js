let text_content=document.querySelector("#text_content")
console.log("hello"+text_content.value);
text_content.value=0;
let btn=document.querySelectorAll(".button");
console.log(btn);
let result=document.getElementById("result")
let back=document.getElementById("back")
let clear=document.getElementById("clear")
for(item of btn)
{
    
    item.addEventListener('click',(e)=>{
        let btn_text=e.target.innerText;
        if(text_content.value==0)
        {
            text_content.value=""
        }
        console.log(e.target.innerText);
        if(btn_text=="=")
        {
            btn_text="";
        }
        if(btn_text=="<-")
        {
            btn_text="";
        }
        text_content.value+=btn_text
    })
}

result.addEventListener("click",()=>{
    try 
    {
        if(!text_content)
        {
            text_content.value=""
        }
        text_content.value=eval(text_content.value)
    }
    catch(err)
    {
        console.log(err);
    }
})
back.addEventListener("click",(e)=>{
    console.log("back");
    text_content.value=text_content.value.slice(0,-1)
})
 clear.addEventListener("click",()=>{
    text_content.value=0
 })

