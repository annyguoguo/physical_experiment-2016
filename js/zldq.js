function zhiliudianqiao(obj){
	 peng1(obj);
	 
	 
	 var D1 = shuzu1(6,1,10,9);
	var d1 = [];
	var d2 = [];
	var d3 = [];
	var d4 = [];
	 for(var i=0;i<2;i++){
		  d1[i]=[];
		   d2[i]=[];
		    d3[i]=[];
			 d4[i]=[];
		 }
	 for(var i=0;i<10;i++){
		   d1[0][i] = D1[i][0];
		    d1[1][i] = D1[i][1];
			 d2[0][i] = D1[i][3];
			  d2[1][i] = Number((D1[i][4]/1000).toFixed(5));
			   d3[0][i] = D1[i][6];
			    d3[1][i] = Number((D1[i][7]/1000).toFixed(5)); 
				 d4[1][i] = D1[i][7];
		 }
		
		 
		 var a11 = Number(document.getElementById("Zzldq11").value);
		 var a12 = Number(document.getElementById("Zzldq12").value);
		 var a21 = Number(document.getElementById("Zzldq21").value);
		 var a22 = Number(document.getElementById("Z6116").value);
		 var a31 = Number(document.getElementById("Zzldq31").value);
		 var a32 = Number(document.getElementById("Z6119").value);
		 
		 var OP1 = [];
		 var OP2 = [];
		 var OP3 = [];
		 var OP4 = [];
		 var OP5 = [];
		 var OP6 = [];
		 
		 
		 OP2[0] = Number(a22);
		 OP3[0] = Number(a32);
		 a22 = a22*4/1.3;
		 var qq =(a31+a32)/1.3/a31;
		  
		
		 
		
		 for(var i=1;i<10;i++){
			   var diao = a22*d2[1][i];
			  OP2[i] = Number((OP2[0]+diao).toFixed(2));
			  var qq1 = qq*d3[1][i];
			  var diao1 = qq1*(a31+a32)/(1-qq1);
			  
			   OP3[i] = Number((a32+diao1).toFixed(2));
			   var t = i+1;
			  
			   document.getElementById("OP61"+t+6).innerHTML = OP2[i];
			   document.getElementById("OP61"+t+9).innerHTML = OP3[i];
			 
			 } 
			 
		 for(var i=0;i<d1[1].length;i++){
			  OP1[i] = Number((d1[1][i]*a11/a12).toFixed(3)); 
			  OP4[i] = Number((d3[0][i]+273).toFixed(1));
			  	  
			  OP5[i] = Number((Math.log(OP3[i])).toFixed(4));
			  OP6[i] = Number((1/OP4[i]).toFixed(6));
			  
			   var t = i+1;
			   document.getElementById("OP61"+t+3).innerHTML = OP1[i];
			 }
		   
		 var shu = [];
		 shu[0]=d3[0];
		  shu[1]=d4[1];
		   shu[2]=OP3;
		    shu[3]=OP4;
			 shu[4]=OP5;
			  shu[5]=OP6;
		 zldqsr(6,3,6,10,shu);
		 
		 var k1 = quxian("#tu61",[""],[[d1[0],OP1]],"zhi",0,3,60);
		  var k2 = quxian("#tu62",[""],[[d2[0],OP2]],"zhi",0,3,60);
		   var k3 = quxian("#tu63",[""],[[OP4,OP3]],"wan",270,3,335);
		   var k3 = quxian("#tu64",[""],[[OP6,OP5]],"zhi",0.00295,3,0.00365);
		   
		   document.getElementById("OP611k").innerHTML = k1[0][0].toFixed(3);
		   document.getElementById("OP611b").innerHTML = k1[0][1].toFixed(5);
           document.getElementById("OP611Rt").innerHTML = k1[0][1].toFixed(3);
	       document.getElementById("OP611a").innerHTML = (k1[0][0]/k1[0][1]).toFixed(6);
		   document.getElementById("OP611a1").innerHTML = (k1[0][0]/k1[0][1]).toFixed(6);
		   document.getElementById("OP611p").innerHTML = (Math.abs(k1[0][0]/k1[0][1]-0.00428)/0.00428*100).toFixed(1);
		   document.getElementById("OP621k").innerHTML = k2[0][0].toFixed(3);
		   document.getElementById("OP621b").innerHTML = k2[0][1].toFixed(5);
           document.getElementById("OP621Rt").innerHTML = k2[0][1].toFixed(3);
		   document.getElementById("OP621Rt1").innerHTML = k2[0][1].toFixed(3);
	       document.getElementById("OP621a").innerHTML = (k2[0][0]/k2[0][1]).toFixed(6);
		   document.getElementById("OP621a1").innerHTML = (k2[0][0]/k2[0][1]).toFixed(6);
		   document.getElementById("OP621a11").innerHTML = (k2[0][0]/k2[0][1]).toFixed(6);
		   document.getElementById("OP621p").innerHTML = (Math.abs(k2[0][0]/k1[0][1]-0.00428)/0.00428*100).toFixed(1);
		   document.getElementById("OP631k").innerHTML = k3[0][0].toFixed(0);
		   document.getElementById("OP631b").innerHTML = k3[0][1].toFixed(5);
		    document.getElementById("OP631k1").innerHTML = k3[0][0].toFixed(0);
		    document.getElementById("OP631k11").innerHTML = k3[0][0].toFixed(0);
			document.getElementById("OP631k111").innerHTML = k3[0][0].toFixed(0);
		   document.getElementById("OP631b1").innerHTML = k3[0][1].toFixed(5);
		   document.getElementById("OP631eb").innerHTML = Math.pow(Math.E,k3[0][1]).toFixed(3);
		   document.getElementById("OP631eb1").innerHTML = Math.pow(Math.E,k3[0][1]).toFixed(3);
		  

	}