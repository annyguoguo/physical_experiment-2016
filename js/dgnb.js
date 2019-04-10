function duogongnengbai(obj){
		peng1(obj);
		d2 = shuzu(1,2,5,7);
		
		var ping1 = [];
		var shuchu = [];
		
		
		 
			  var sum1=0;
			  var sum2=0;
			  var sum3=0;
			  var sum4=0;
			  
			  
			  for(var j=0;j<5;j++){
					  sum4 += d2[j][6];
				  }
				
					ping1[6]=Number((sum4/5).toFixed(3));
			
			 
			  for(var k=0;k<3;k++){
				 var sum5=0;
			     var sum6=0;
				  for(var j=0;j<5;j++){
				   sum5 += d2[j][k];
				   sum6 += d2[j][k+3];
				   
				  }
				  ping1[k]=Number((sum5/5).toFixed(4));
				  ping1[k+3]=Number((sum6/5).toFixed(3));
				  
			  }
			  for(var i=0;i<7;i++){
				   var t=i+1;
				   document.getElementById("OP126"+t).innerHTML = ping1[i];
				  }
			  for(var k=0;k<3;k++){
				   ping1[k+3]= ping1[k+3]/100;
			  }
			  ping1[6]=ping1[6]/100;  
			  var jj = 128*Math.PI*Number(document.getElementById("Z12m").value/1000)*Number(document.getElementById("Z12l").value/100)/Math.pow(ping1[6],4);
			  shuchu[0] = jj*(Math.pow(ping1[4]/2,2)-Math.pow(ping1[3]/2,2))/(Math.pow(ping1[1]/5,2)-Math.pow(ping1[0]/5,2));
			   shuchu[1] = jj*(Math.pow(ping1[5]/2,2)-Math.pow(ping1[3]/2,2))/(Math.pow(ping1[2]/5,2)-Math.pow(ping1[0]/5,2));
			    shuchu[2] = jj*(Math.pow(ping1[5]/2,2)-Math.pow(ping1[4]/2,2))/(Math.pow(ping1[2]/5,2)-Math.pow(ping1[1]/5,2));
				 shuchu[3] = Number((shuchu[0]+shuchu[1]+shuchu[2])/3);
			  
				  
			  for(var i=0;i<4;i++){
				  var t = i+1;
				  document.getElementById("OP12g"+t).innerHTML = shuchu[i].toExponential(2);
				  
				  }
			    
		 
		     
		}
	function duogongnengbai1(obj){
		peng1(obj);
		
		d1 = shuzu(1,1,5,3);
		var ping = [];
		
		var ab = [] ;
		var bb = [] ;
		
		 
			  var sum1=0;
			  var sum2=0;
			  var sum3=0;
			  var sum4=0;
			  
			  
			  for(var j=0;j<5;j++){
				   sum1 += d1[j][0];
				    sum2 += d1[j][1];
					 sum3 += d1[j][2];
	
				  }
				  ping[0]=Number((sum1/5).toFixed(3));
				   ping[1]=Number((sum2/5).toFixed(2));
				    ping[2]=Number((sum3/5).toFixed(2));
			
			    var ll = ping[0]/2+ping[1];
				var gg = Number((4*Math.PI*Math.PI*(ll/100)/Math.pow(ping[2]/60,2)).toFixed(5))	;  
				var gp = Math.abs(gg-9.79338)/9.79338;
				
				 document.getElementById("OP11g").innerHTML = gg.toFixed(5);
				 document.getElementById("OP11g1").innerHTML = gg.toFixed(5);
				 document.getElementById("OP11g2").innerHTML = gg.toFixed(5);
				 document.getElementById("OP11l").innerHTML = ll.toFixed(2);
				 document.getElementById("OP11gp").innerHTML = (gp*100).toFixed(2);
				 document.getElementById("OP11gpp").innerHTML = (gg*gp).toFixed(5);
				 sum1 =0;
				 sum2 =0;
				  sum3 =0;
				  for(var j=0;j<5;j++){
				  				   
					sum1 += (ping[0]-d1[j][0])*(ping[0]-d1[j][0])/10000;
					sum2 += (ping[1]-d1[j][1])*(ping[1]-d1[j][1])/10000;
					sum3 += (ping[2]-d1[j][2])*(ping[2]-d1[j][2])/3600;
				  }
				  
				  ab[0] = Number(Math.sqrt(sum1/4/5));
				  ab[1] = Number(Math.sqrt(sum2/4/5));
				  ab[2] = Number(Math.sqrt(sum3/4/5));
				  bb[0] = Math.sqrt((ab[0]*1.14)*(ab[0]*1.14)+(1.15e-5)*(1.15e-5));
				   bb[1] =Math.sqrt((ab[1]*1.14)*(ab[1]*1.14)+(2.88e-4)*(2.88e-4));
				    bb[2] =Math.sqrt((ab[2]*1.14)*(ab[2]*1.14)+(3.33e-3)*(3.33e-3));
	     for(var k=0;k<3;k++){
				  var t=k+1;
				  document.getElementById("OP116"+t).innerHTML = ping[k];
				  
				  document.getElementById("OP11ab"+t).innerHTML = ab[k].toExponential(1);
				  document.getElementById("OP11bb"+t).innerHTML = bb[k].toExponential(2);
				  
			  }
			   
		 
		     
		}	
