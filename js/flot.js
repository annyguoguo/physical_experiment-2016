function huigui(t,b,pa){
	 if(b>0){
		  var j = "   "+"y="+t.toFixed(5)+"x+"+b.toFixed(pa)
		 }
		else{
			 var j = "   "+"y="+t.toFixed(5)+"x"+b.toFixed(pa)
		 }
		 return j;
	}
 
function quxian(g,r,n,m,qi,pa,xa,yd,yx){ //quxian(g,["jiji","baba"],[[d1,d2],[d3,d4]],"zhi"); g是div容器名
	 var shuchu = []
	 var dacolor = ["#4464A","#4572A7","#bb9b56","#767676"]; //这是颜色只有四个，注意了
   var daco = [];
	var qidian = 0;
	var qidian = qi;
	if(m == "wan"){
		 var k = [];
		 var z = [];
		 daco = [];
		 for(var i=0;i<n.length;i++){
			 
			  k = [];
			   for(var j=0;j<n[i][0].length;j++){
				     k.push([n[i][0][j],n[i][1][j]])
				   }
			  var jjb = dacolor[i];
					 daco.push(jjb);
			   z.push({ label: r[i], data:k});
			 }
		 $.plot($(g), z,{
		  colors:daco,
		   legend: {
			    position: "nw",
			  },
		  series: {//图表线条的设置  
            
			lines: {  
                show: true//是否显示线  
            },  
            points: {  
                show: true,//是否显示点		
            }  
        }, 
		xaxis:{
			 min: qidian,
			 max: xa
			},
		yaxis:{
			 max:yd,
			 min:yx,
			}
		});
		}
 if(m == "zhi"){
	   
	    var k = [];
		 var z = [];
		 daco = [];
		 for(var i=0;i<n.length;i++){
			 
			  k = [];
			  var x1=0,y1=0,xy1 = 0,xy2 = 0,xx1 = 0,xx2 =0,a1=0;
			   for(var j=0;j<n[i][0].length;j++){
				   var a = n[i][0][j]; 
				   var b = n[i][1][j];
				     z.push([[a,b]]);
					  var jjb = dacolor[i];
					 daco.push(jjb);
					xy1 += a*b;
					 x1 += a;
					 
					 y1 += b;
					 xx1 += a*a;
					
				   }
				   var s = n[i][0].length
				 xx2 = (x1*x1)/s;
				 
				   x1 = x1/s; 
		 
				   var t = ((xy1 - x1*y1) / (xx1 - xx2));
				    y1 = y1/n[i][0].length;
			   a1 = y1 - t*x1;
			   shuchu.push([t,a1]);
			   k.push([n[i][0][0],t*(n[i][0][0])+a1]);
			    
			   k.push([n[i][0][j-1],t*(n[i][0][j-1])+a1]);
			    var jjb = dacolor[i];
					 daco.push(jjb);
					 var dadiao = huigui(t,a1,pa)
					 r[i] = r[i] + dadiao;
			   z.push({ label: r[i], data:k , points: { show: false }}); 	
			  
			 }
	   $.plot($(g), z,{
		  colors:daco,
		  legend: {
			    position: "nw",
			  },
		  series: {//图表线条的设置  
            
			lines: {  
                show: true//是否显示线  
            },  
            points: {  
                show: true,//是否显示点		
            }  
        }, 
		xaxis:{
			 min: qidian,
			 max: xa
			},
		yaxis:{
			 max:yd,
			 min:yx,
			}
		});
	 }
 if(m == "zhiqi"){
	   
	    var k = [];
		 var z = [];
		 daco = [];
		 for(var i=0;i<n.length;i++){
			  
			  k = [];
			  var x1=0,y1=0,xy1 = 0,xy2 = 0,xx1 = 0,xx2 =0,a1=0;
			   for(var j=0;j<n[i][0].length;j++){
				   var a = n[i][0][j]; 
				   var b = n[i][1][j];
				     z.push([[a,b]]);
					 var jjb = dacolor[i]
					 daco.push(jjb);
					xy1 += a*b;
					 x1 += a;
					 
					 y1 += b;
					 xx1 += a*a;
					
				   }
				   var s = n[i][0].length
				 xx2 = (x1*x1)/s;
				 
				   x1 = x1/s; 
		 
				   var t = ((xy1 - x1*y1) / (xx1 - xx2));
				    y1 = y1/n[i][0].length;
			   a1 = y1 - t*x1;
			    shuchu.push([t,a1]);
			   k.push([0,a1]);
			    
			   k.push([n[i][0][j-1],t*(n[i][0][j-1])]);
			   var jjb = dacolor[i];
					 daco.push(jjb);
					 var dadiao = huigui(t,a1,pa)
					 r[i] = r[i] + dadiao;
			   z.push({ label: r[i], data:k , points: { show: false }}); 	
			  
			 }
	   $.plot($(g), z,{
		  colors:daco,
		  legend: {
			    position: "nw",
			  },
		  series: {//图表线条的设置  
            
			lines: {  
                show: true//是否显示线  
            },  
            points: {  
                show: true,//是否显示点		
            }  
        }, 
		xaxis:{
			 min: qidian,
			 max: xa
			},
		yaxis:{
			 max:yd,
			 min:yx,
			}
		});
	 }
	 return shuchu;
	
	}