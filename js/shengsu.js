function shengsu(obj){
	peng1(obj);
  var b=shuzu(5,1,2,5);
  for(var j=1;j<3;j++){
    document.getElementById("OP"+5+1+j+6).innerHTML=(b[j-1][0]+b[j-1][1]+b[j-1][2]+b[j-1][3]+b[j-1][4])/5;
  }

  var a=shuzu(5,2,2,12);
  var s=0;
  var p=0;
  for(var j=1;j<7;j++){
    s=s+(a[0][j+5]-a[0][j-1])/6;
  }
  v1=2*s*(b[0][0]+b[0][1]+b[0][2]+b[0][3]+b[0][4])/5/6/1000;//输出声速
  for(var j=1;j<7;j++){
    p=p+(a[1][j+5]-a[1][j-1])/36;
  }
  v2=2*p*(b[1][0]+b[1][1]+b[1][2]+b[1][3]+b[1][4])/5/1000;//输出水中声速

  vl=(331.45*Math.sqrt(1+document.getElementById("Z5001").value/273.6));//理论声速
  n=Math.abs(vl-v1)/vl*100;//相对不确定度
  var Ua=0;
  for(var j=1;j<7;j++){
    Ua=Ua+(a[1][j+5]-a[1][j-1]-p*36)*(a[1][j+5]-a[1][j-1]-p*36);

  }
  Ua=Math.sqrt(Ua/30)/100;//A不确定度
  var Ub=0;
  Ub=(b[1][0]+b[1][1]+b[1][2]+b[1][3]+b[1][4])/5;
  for(var j=1;j<6;j++){
    Ub=Ub+(b[1][j-1]-(b[1][0]+b[1][1]+b[1][2]+b[1][3]+b[1][4])/5)*(b[1][j-1]-(b[1][0]+b[1][1]+b[1][2]+b[1][3]+b[1][4])/5);
  }
  Ub=Math.sqrt(Ub/20);//B不确定度
  Uv=Math.sqrt(Math.pow(Ua*6/p,2)+Math.pow(Ub/((b[1][0]+b[1][1]+b[1][2]+b[1][3]+b[1][4])/5),2))//V不确定度

document.getElementById("OP"+5+0+0+1).innerHTML=v1.toFixed(2);
document.getElementById("OP"+5+0+0+2).innerHTML=vl.toFixed(2);
document.getElementById("OP"+5+0+0+3).innerHTML=n.toFixed(2);
document.getElementById("OP"+5+0+0+4).innerHTML=v2.toFixed(2);
document.getElementById("OP"+5+0+0+5).innerHTML=Uv.toFixed(4);
document.getElementById("OP"+5+0+0+6).innerHTML=v2.toFixed(4);
document.getElementById("OP"+5+0+0+7).innerHTML=Uv.toFixed(4);




}
