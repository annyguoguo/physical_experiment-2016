function huoer1(obj) {
  peng1(obj);
 
  var Ue=0;
	var e=1.6*Math.pow(10,-19);
	var Kh=document.getElementById("Z"+2+0+0+5).value;
	var Uk=0;
		var b=shuzu(2,1,8,4);
		
		var x=document.getElementById("Z"+2+0+0+1).value;
		var y=document.getElementById("Z"+2+0+0+2).value;
    var a = [];
		for(var j=1;j<9;j++){
			document.getElementById("OP"+2+1+j+5).innerHTML=((Math.abs(b[j-1][0])+Math.abs(b[j-1][1])+Math.abs(b[j-1][2])+Math.abs(b[j-1][3]))/4).toFixed(2);
			a[j-1]=(Math.abs(b[j-1][0])+Math.abs(b[j-1][1])+Math.abs(b[j-1][2])+Math.abs(b[j-1][3]))/4;
		  }
		  var baba=[1,1.5,2,2.5,3,3.5,4,4.5];
		 var kw1 = quxian("#tu21",[""],[[baba,a]],"zhiqi",0,5);
		  
		var Vh=(a[0]+a[1]+a[2]+a[3]+a[4]+a[5]+a[6]+a[7])/8;
		var IsVh=(a[0]+1.5*a[1]+2*a[2]+2.5*a[3]+3*a[4]+3.5*a[5]+4*a[6]+4.5*a[7])/8;
		var k=(IsVh-2.75*Vh)/(8.875-2.75*2.75);
		var Ur1=Math.sqrt(Uk*Uk/k/k+1/125/125+y*y/x/x);
		var Rh=k*0.5/x/Kh*Math.pow(10,8)/1000/10;
		var Ua=Ur1*Rh;//buquedingdu 1
		var n=1/Rh/e;
		var Ur2=Math.sqrt(Ua*Ua/Rh/Rh+Ue*Ue/e/e);
		var Ub=Ur2*n;//buquedingdu 2







      document.getElementById("OP"+2+0+0+1).innerHTML=k.toFixed(2);
      document.getElementById("OP"+2+0+0+2).innerHTML=Rh.toExponential(3);
      document.getElementById("OP"+2+0+0+3).innerHTML=(Ur1*100).toFixed(2);
      document.getElementById("OP"+2+0+0+4).innerHTML=Ua.toFixed(2);
      document.getElementById("OP"+2+0+0+5).innerHTML=(Rh/1000).toFixed(2);
      document.getElementById("OP"+2+0+0+6).innerHTML=(Ua/1000).toFixed(2);
      document.getElementById("OP"+2+0+0+7).innerHTML=n.toExponential(2);
      document.getElementById("OP"+2+0+0+8).innerHTML=(Ur2*100).toFixed(2);
      document.getElementById("OP"+2+0+0+9).innerHTML=(Ub).toExponential(2);
      document.getElementById("OP"+2+0+0+0).innerHTML=(n/Math.pow(10,14)).toFixed(2);
      document.getElementById("OP"+2+0+11+0).innerHTML=(Ub/Math.pow(10,14)).toFixed(2);






	}
function huoer2(obj) {
  peng1(obj);
    var b=shuzu(2,2,8,4);
	
    var e=1.6*Math.pow(10,-19);
    var Kh=document.getElementById("Z"+2+0+0+5).value;
		var x=document.getElementById("Z"+2+0+0+3).value;
		var y=document.getElementById("Z"+2+0+0+4).value;
		var a =[];
		for(var j=1;j<9;j++){
			document.getElementById("OP"+2+2+j+5).innerHTML=((Math.abs(b[j-1][0])+Math.abs(b[j-1][1])+Math.abs(b[j-1][2])+Math.abs(b[j-1][3]))/4).toFixed(2);
			a[j-1]=(Math.abs(b[j-1][0])+Math.abs(b[j-1][1])+Math.abs(b[j-1][2])+Math.abs(b[j-1][3]))/4;
		}
		var baba=[0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45]
		 var kw1 = quxian("#tu22",[""],[[baba,a]],"zhiqi",0,5);
		
		var Vh=(a[0]+a[1]+a[2]+a[3]+a[4]+a[5]+a[6]+a[7])/8;//输出
		var IsVh=(a[0]+1.5*a[1]+2*a[2]+2.5*a[3]+3*a[4]+3.5*a[5]+4*a[6]+4.5*a[7])/8/10;//输出
		var k=(IsVh-0.275*Vh)/(0.08875-0.275*0.275);//输出
    var Uk=0;
    var Ue=0;





    var Rh=k*0.5/x/Kh*Math.pow(10,8)/1000/10;
    var Ur1=Math.sqrt(Uk*Uk/k/k+1/125/125+y*y/x/x);
		var Ua=Ur1*Rh;//buquedingdu 1
		var n=1/Rh/e;
		var Ur2=Math.sqrt(Ua*Ua/Rh/Rh+Ue*Ue/e/e);
		var Ub=Ur2*n;//buquedingdu 2








    document.getElementById("OP"+2+0+1+1).innerHTML=k.toFixed(2);
      document.getElementById("OP"+2+0+1+2).innerHTML=Rh.toExponential(3);
      document.getElementById("OP"+2+0+1+3).innerHTML=(Ur1*100).toFixed(2);
      document.getElementById("OP"+2+0+1+4).innerHTML=Ua.toFixed(2);
      document.getElementById("OP"+2+0+1+5).innerHTML=(Rh/1000).toFixed(2);
      document.getElementById("OP"+2+0+1+6).innerHTML=(Ua/1000).toFixed(2);
      document.getElementById("OP"+2+0+1+7).innerHTML=n.toExponential(2);
      document.getElementById("OP"+2+0+1+8).innerHTML=(Ur2*100).toFixed(2);
      document.getElementById("OP"+2+0+1+9).innerHTML=(Ub).toExponential(2);
      document.getElementById("OP"+2+0+1+0).innerHTML=(n/Math.pow(10,14)).toFixed(2);
      document.getElementById("OP"+2+0+21+0).innerHTML=(Ub/Math.pow(10,14)).toFixed(2);










	}
function huoer3(obj) {
  peng1(obj);
	var b=shuzu(2,3,1,10);
  var Kh=document.getElementById("Z"+2+0+0+5).value;
	var a = [];
	var s=0;
	var h=0;
	for(var j=1;j<11;j++){
		h=b[0][j-1]+h;
		}
		h=h/10
	for(var j=1;j<11;j++){
		s=b[0][j-1]*j/10+s;
		}
		s=s/10;
		var k=(s-0.55*h)/(0.385-0.3025);
		var o=15/k;//输出
    var Ur1=0.00966666;
    var Ur2=Ur1*o;


    var Rh=document.getElementById("Z"+2+0+0+6).value;
    var Ur=0;




    var u=Rh*o;
    var  Ur3=Math.sqrt(Ur1*Ur1/o/o+Ur*Ur/Rh/Rh);




    document.getElementById("OP"+2+0+2+1).innerHTML=k.toFixed(2);
    document.getElementById("OP"+2+0+2+2).innerHTML=o.toExponential(2);
    document.getElementById("OP"+2+0+2+3).innerHTML=(Ur1*100).toFixed(2);
    document.getElementById("OP"+2+0+2+4).innerHTML=Ur2.toExponential(2);
    document.getElementById("OP"+2+0+2+5).innerHTML=(o*10).toFixed(2);
     document.getElementById("OP"+2+0+31+0).innerHTML=(Ur2*10).toFixed(2);
	document.getElementById("OP"+2+0+2+6).innerHTML=u.toExponential(2);
    document.getElementById("OP"+2+0+2+7).innerHTML=(Ur3*100).toFixed(2);
    document.getElementById("OP"+2+0+2+8).innerHTML=(u/Math.pow(10,3)).toFixed(2);
    document.getElementById("OP"+2+0+32+0).innerHTML=((Ur3*u)/Math.pow(10,3)).toFixed(2);










	}
