function youdi(obj) {
  peng1(obj);
  var b=shuzu(9,1,10,6);
  var e=1.6*Math.pow(10,-12);
  var r=0;
  var n=0;
  var d=0;
  var a = [];
  var z = [];
  var c = [];
  for(var j=1;j<11;j++){
    a[j-1]=(b[j-1][1]+b[j-1][2]+b[j-1][3]+b[j-1][4]+b[j-1][5])/5;
    d=3*Math.sqrt((9*1.83*0.000001*5/a[j-1])/(2*981*9.795));
    c[j-1]=18*Math.PI/Math.sqrt(2*981*9.795)*(Math.pow(0.00183*1.5/(a[j-1]*(1+0.00000617/76/d)),1.5))*0.005/b[j-1][0]/3;
    z[j-1]=18*Math.PI/Math.sqrt(2*981*9.795)*(Math.pow(0.00183*1.5/(a[j-1]*(1+0.00000617/76/d)),1.5))*0.005/b[j-1][0]/3;
  }
  for(var j=1;j<11;j++){
     document.getElementById("OP"+9+1+j+7).innerHTML=a[j-1].toFixed(1);
     document.getElementById("OP"+9+1+j+8).innerHTML=(c[j-1]*Math.pow(10,11)).toFixed(2);
     document.getElementById("OP"+9+1+j+9).innerHTML=(c[j-1]/e).toFixed(0);
     r=r+z[j-1];
     n=n+parseInt(c[j-1]/e);
   }
    var ec=r/n;//输出
    var Ur=(ec-e)/e;//输出
    document.getElementById("OP"+9+0+0+0).innerHTML=(ec*1.0e+12).toFixed(2);  //直接输出ec数值太大无法显示
    document.getElementById("OP"+9+0+0+0+'_1').innerHTML=(ec*1.0e+12).toFixed(2);
    document.getElementById("OP"+9+0+0+1).innerHTML=(Math.abs(Ur)*100).toFixed(2);

}
