function fuantexing(obj){
		  peng1(obj);
		 
		  
		  var d1 = shuzu(3,1,4,7);
		  var a = document.getElementById("Z31v").value;
		  var c = document.getElementById("Z31a").value;
		  var b = document.getElementById("Z31vj").value;	  
		  var e = document.getElementById("Z31aj").value;
		  d1 = fatxzh([a,c,a,c],d1,[b,e,b,e],[100,150,100,150]);	 
		  fatxsr(3,1,4,7,d1);

		 
		 var k1 = quxian("#tu31p",["内接法","外接法"],[[d1[1],d1[0]],[d1[3],d1[2]]],"zhiqi",0,5);
		   document.getElementById("OP31r1").innerHTML = (k1[0][0]*1000).toFixed(2);
		   document.getElementById("OP31r2").innerHTML = (k1[1][0]*1000).toFixed(2);
		  document.getElementById("OP31um").innerHTML = a;
		   document.getElementById("OP31am").innerHTML = c;
		  document.getElementById("OP31bqd1").innerHTML = b;
		  document.getElementById("OP31bqd2").innerHTML = e;
		  document.getElementById("OP31wc1").innerHTML = (a*b/100).toExponential(2);
		  document.getElementById("OP31wc2").innerHTML = (c*e/100).toExponential(2);
		  
		  
		  
		}
		
    function fuantexing2(obj){
	     peng1(obj);
		  
		  var b = document.getElementById("Z31vj").value;	  
		  var e = document.getElementById("Z31aj").value;
		  var d2 = shuzu(3,2,4,10);	  
		  var a1 = document.getElementById("Z32v1").value;  
		  var a2 = document.getElementById("Z32v2").value;
		  var db2 = document.getElementById("Z32a2").value;
		  var db1 = document.getElementById("Z32a1").value;
		  
		  d2 = fatxzh([a1,db1,a2,db2],d2,[b,e,b,e],[100,150,100,150]);
		  fatxsr(3,2,4,10,d2); 
		  d2[0].unshift(0);
		  d2[1].unshift(0);
		  for(var t=11;t<21;t++){
			   d2[0].unshift( -d2[2][t-11]);
			   d2[1].unshift( -d2[3][t-11]);
			   
			  }
		  var k2 = quxian("#tu32",["半导体"],[[d2[0],d2[1]]],"wan",-6,0,2);
	}
	function fuantexing3(obj){
	    peng1(obj);
		  
		  
		  var b = document.getElementById("Z31vj").value;	  
		  var e = document.getElementById("Z31aj").value;
		  
		  var d3 = shuzu(3,3,6,14);
		  var a3 = document.getElementById("Z33v1").value;
		  var a4 = document.getElementById("Z33v2").value;
		  var a5 = document.getElementById("Z33v3").value;
		  var db3 = document.getElementById("Z33a1").value;
		  var db4 = document.getElementById("Z33a2").value;
		  var db5 = document.getElementById("Z33a3").value;
		  d3 = fatxzh([a3,db3,a4,db4,a5,db5],d3,[b,e,b,e,b,e],[100,150,100,150,100,150]);
		  fatxsr(3,3,6,14,d3); 
		  var k3 = quxian("#tu33",["40μA","60μA","80μA"],[[d3[0],d3[1]],[d3[2],d3[3]],[d3[4],d3[5]]],"wan",0);
	}