let offsethr=-(new Date().getTimezoneOffset() / 60) 
let sr=offsethr.toString()
let newt
if(sr.length = 1){
newt='0'+sr
}else if(sr.length > 1){
newt=sr
}

