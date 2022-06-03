var count1= 25;
var count=0;
for(var a=7; true; a+=7){
	if((a%2==1)&&(a%3==1)&&(a%4==1)&&(a%5==1)&&(a%6==1)){
        if(a.toString().endsWith("01")){
            console.log("number is"+a);
            console.log(a);

        }
	count++;
	if(count==count1){
	break;
	}
	}
}