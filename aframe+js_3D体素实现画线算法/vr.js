var method="dda"
window.onload = function() {
	document.getElementById("db").onclick=click;
	document.getElementById("method").onchange=methodchange;
}
function round2(x)
{
	return Math.round(x);
}
function midline(x0,y0,z0,x1,y1,z1)
{
	var a,a1, b,b1,e,f, d1, d2, d3,d4,d,dd, x, y,z;
	var dx=x1-x0;var dy=y1-y0;var dz=z1-z0;var index=0;var sign1,sign2;
	if(Math.abs(dx)>=Math.abs(dy)&&Math.abs(dx)>=Math.abs(dz))
	{
		index=0;
		if(dx*dy>0) sign1=1;
		else if(dx*dy<0) sign1=-1;
		else sign1=0;
		if(dx*dz>0) sign2=1;
		else if(dx*dz<0) sign2=-1;
		else sign2=0;
	}
	if(Math.abs(dy)>=Math.abs(dx)&&Math.abs(dy)>=Math.abs(dz))
	{
		index=1;
		if(dy*dx>0) sign1=1;
		else if(dy*dx<0) sign1=-1;
		else sign1=0;
		if(dy*dz>0) sign2=1;
		else if(dy*dz<0) sign2=-1;
		else sign2=0;
	}
	if(Math.abs(dz)>=Math.abs(dx)&&Math.abs(dz)>=Math.abs(dy))
	{
		index=2;
		if(dz*dx>0) sign1=1;
		else if(dz*dx<0)sign1=-1;
		else sign1=0;
		if(dz*dy>0) sign2=1;
		else if(dz*dy<0)sign2=-1;
		else sign2=0;
	}
	var flag=true;
	if(index==0){
		flag=x0<x1;
	}
	if(index==1){
		flag=y0<y1;
	}
	if(index==2){
		flag=z0<z1;
	}
	var scene = document.querySelector('a-scene');
	if(index==0)
	{
    if(!flag)
	{
		var media;media=x0;x0=x1;x1=media;
		media=y0;y0=y1;y1=media;
		media=z0;z0=z1;z1=media;
	}
	a=(y0-y1); b=(x1-x0);a1=(z0-z1);b1=b; 
    if(sign1>0)
	{
    d=2*a+b; 
    d1=2*a ; d2=2* (a+b);	
	}
	else{
		d=2*a-b; 
    d1=2*a ; d2=2* (a-b);	
	}
	if(sign2>0)
	{
	dd=2*a1+b1;
	d3=2*a1;d4=2*(a1+b1);
	}
	else
	{
		dd=2*a1-b1;
	d3=2*a1;d4=2*(a1-b1);
	}
	
    x=x0; y=y0;z=z0;
	var str=""+round2(x)/10+" "+round2(y)/10+" "+round2(z)/10;
    var box=document.createElement('a-box')
		box.setAttribute('position',str) 
		//box.setAttribute('position', {x: 1, y: 2: z: -3});
		box.setAttribute('rotation',"0 0 0")
		box.setAttribute('width', '0.1')
		box.setAttribute('height', '0.1')
		box.setAttribute('depth', '0.1')
		box.setAttribute('color', '#4CC3D9')
		scene.appendChild(box)
     while (x<x1)
    {  
     if(sign1>0)
	 {
     if (d<0)       { y=y+sign1; d+=d2; }
     else       { d+=d1;}
	 }
	 else{
		 if (d>0)       { y=y+sign1; d+=d2; }
     else       { d+=d1;}
	 }
	 if(sign2>0)
	 {
	 if(dd<0) {z=z+sign2;dd+=d4}
	 else {dd+=d3;}
	 }
	 else
	 {
		 if(dd>0) {z=z+sign2;dd+=d4}
	     else {dd+=d3;}
	 }
	 x++;
	 var str=""+round2(x)/10+" "+round2(y)/10+" "+round2(z)/10;
		var box=document.createElement('a-box')
		box.setAttribute('position',str) 
		//box.setAttribute('position', {x: 1, y: 2: z: -3});
		box.setAttribute('rotation',"0 0 0")
		box.setAttribute('width', '0.1')
		box.setAttribute('height', '0.1')
		box.setAttribute('depth', '0.1')
		box.setAttribute('color', '#4CC3D9')
		scene.appendChild(box) 
	}
	 		 
	}
	if(index==1)
	{
    if(!flag)
	{
		var media;media=x0;x0=x1;x1=media;
		media=y0;y0=y1;y1=media;
		media=z0;z0=z1;z1=media;
	}
	a=(x0-x1); b=(y1-y0);a1=(z0-z1);b1=b; 
    if(sign1>0)
	{
    d=2*a+b; 
    d1=2*a ; d2=2* (a+b);	
	}
	else{
		d=2*a-b; 
    d1=2*a ; d2=2* (a-b);	
	}
	if(sign2>0)
	{
	dd=2*a1+b1;
	d3=2*a1;d4=2*(a1+b1);
	}
	else
	{
		dd=2*a1-b1;
	d3=2*a1;d4=2*(a1-b1);
	}
	
    x=x0; y=y0;z=z0;
	var str=""+round2(x)/10+" "+round2(y)/10+" "+round2(z)/10;
    var box=document.createElement('a-box')
		box.setAttribute('position',str) 
		//box.setAttribute('position', {x: 1, y: 2: z: -3});
		box.setAttribute('rotation',"0 0 0")
		box.setAttribute('width', '0.1')
		box.setAttribute('height', '0.1')
		box.setAttribute('depth', '0.1')
		box.setAttribute('color', '#4CC3D9')
		scene.appendChild(box)
      while (y<y1)
    {  
     if(sign1>0)
	 {
     if (d<0)       { x=x+sign1; d+=d2; }
     else       { d+=d1;}
	 }
	 else{
		 if (d>0)       { x=x+sign1; d+=d2; }
     else       { d+=d1;}
	 }
	 if(sign2>0)
	 {
	 if(dd<0) {z=z+sign2;dd+=d4}
	 else {dd+=d3;}
	 }
	 else
	 {
		 if(dd>0) {z=z+sign2;dd+=d4}
	     else {dd+=d3;}
	 }
	 y++;
	 var str=""+round2(x)/10+" "+round2(y)/10+" "+round2(z)/10
		var box=document.createElement('a-box')
		box.setAttribute('position',str) 
		//box.setAttribute('position', {x: 1, y: 2: z: -3});
		box.setAttribute('rotation',"0 0 0")
		box.setAttribute('width', '0.1')
		box.setAttribute('height', '0.1')
		box.setAttribute('depth', '0.1')
		box.setAttribute('color', '#4CC3D9')
		scene.appendChild(box) 
	}
	 		 
	}
	if(index==2)
	{
    if(!flag)
	{
		var media;media=x0;x0=x1;x1=media;
		media=y0;y0=y1;y1=media;
		media=z0;z0=z1;z1=media;
	}
	a=(x0-x1); b=(z1-z0);a1=(y0-y1);b1=b; 
    if(sign1>0)
	{
    d=2*a+b; 
    d1=2*a ; d2=2* (a+b);	
	}
	else{
		d=2*a-b; 
    d1=2*a ; d2=2* (a-b);	
	}
	if(sign2>0)
	{
	dd=2*a1+b1;
	d3=2*a1;d4=2*(a1+b1);
	}
	else
	{
		dd=2*a1-b1;
	d3=2*a1;d4=2*(a1-b1);
	}
	
    x=x0; y=y0;z=z0;
	var str=""+round2(x)/10+" "+round2(y)/10+" "+round2(z)/10;
    var box=document.createElement('a-box')
		box.setAttribute('position',str) 
		//box.setAttribute('position', {x: 1, y: 2: z: -3});
		box.setAttribute('rotation',"0 0 0")
		box.setAttribute('width', '0.1')
		box.setAttribute('height', '0.1')
		box.setAttribute('depth', '0.1')
		box.setAttribute('color', '#4CC3D9')
		scene.appendChild(box)
      while (z<z1)
    {  
     if(sign1>0)
	 {
     if (d<0)       { x=x+sign1; d+=d2; }
     else       { d+=d1;}
	 }
	 else{
		 if (d>0)       { x=x+sign1; d+=d2; }
     else       { d+=d1;}
	 }
	 if(sign2>0)
	 {
	 if(dd<0) {y=y+sign2;dd+=d4}
	 else {dd+=d3;}
	 }
	 else
	 {
		 if(dd>0) {y=y+sign2;dd+=d4}
	     else {dd+=d3;}
		
	 }
	 z++;
	 var str=""+round2(x)/10+" "+round2(y)/10+" "+round2(z)/10
		var box=document.createElement('a-box')
		box.setAttribute('position',str) 
		//box.setAttribute('position', {x: 1, y: 2: z: -3});
		box.setAttribute('rotation',"0 0 0")
		box.setAttribute('width', '0.1')
		box.setAttribute('height', '0.1')
		box.setAttribute('depth', '0.1')
		box.setAttribute('color', '#4CC3D9')
		scene.appendChild(box) 
	}
	 		 
	}
	


}
function bresenhamline(x0,y0,z0,x1,y1,z1)
{
	var e1,e2,x, y,z;
	var dx=x1-x0;var dy=y1-y0;var dz=z1-z0;var index=0;var sign1,sign2;
	if(Math.abs(dx)>=Math.abs(dy)&&Math.abs(dx)>=Math.abs(dz))
	{
		index=0;
		if(dx*dy>0) sign1=1;
		else if(dx*dy<0) sign1=-1;
		else sign1=0;
		if(dx*dz>0) sign2=1;
		else if(dx*dz<0) sign2=-1;
		else sign2=0;

	}
	if(Math.abs(dy)>=Math.abs(dx)&&Math.abs(dy)>=Math.abs(dz))
	{
		index=1;
		if(dy*dx>0) sign1=1;
		else if(dy*dx<0) sign1=-1;
		else sign1=0;
		if(dy*dz>0) sign2=1;
		else if(dy*dz<0) sign2=-1;
		else sign2=0;
		
	}
	if(Math.abs(dz)>=Math.abs(dx)&&Math.abs(dz)>=Math.abs(dy))
	{
		index=2;
		if(dz*dx>0) sign1=1;
		else if(dz*dx<0)sign1=-1;
		else sign1=0;
		if(dz*dy>0) sign2=1;
		else if(dz*dy<0)sign2=-1;
		else sign2=0;
		
	}
	var flag=true;
	if(index==0){
		flag=x0<x1;
	}
	if(index==1){
		flag=y0<y1;
	}
	if(index==2){
		flag=z0<z1;
	}
	var scene = document.querySelector('a-scene');
	if(index==0)
	{
    if(!flag)
	{
		var media;dx=-dx;dy=-dy;dz=-dz;
		media=x0;x0=x1;x1=media;
		media=y0;y0=y1;y1=media;
		media=z0;z0=z1;z1=media;
	}
    
	if(sign1<0) dy=-dy;
	if(sign2<0) dz=-dz;
    x=x0; y=y0;z=z0;
     e1=-dx;e2=-dx;
	   for(var i=0;i<=dx;i++)
	   {
		   var str;
		   if(sign1>0)
		   {
		   str=""+round2(x)/10+" "+round2(y)/10
		   }
		   else str=""+round2(x)/10+" "+round2(2*y0-y)/10
		   if(sign2>0)
		   {str=str+" "+round2(z)/10;
		   }
		   else
		   {
			   str=str+" "+round2(2*z0-z)/10;
		   }
		   var box=document.createElement('a-box')
		box.setAttribute('position',str) 
		//box.setAttribute('position', {x: 1, y: 2: z: -3});
		box.setAttribute('rotation',"0 0 0")
		box.setAttribute('width', '0.1')
		box.setAttribute('height', '0.1')
		box.setAttribute('depth', '0.1')
		box.setAttribute('color', '#4CC3D9')
		scene.appendChild(box)
		x++;e1=e1+2*dy;
		   if(e1>=0)
		   {
			   y++;e1=e1-2*dx;
		   }
		e2=e2+2*dz;
		if(e2>=0)
		   {
			   z++;e2=e2-2*dx;
		   }
		
	   }
	 
	 		 
	}
	if(index==1)
	{
    if(!flag)
	{
		dx=-dx;dy=-dy;dz=-dz;
		var media;media=x0;x0=x1;x1=media;
		media=y0;y0=y1;y1=media;
		media=z0;z0=z1;z1=media;
	}
    
	if(sign1<0) dx=-dx;
	if(sign2<0) dz=-dz;
    x=x0; y=y0;z=z0;
     e1=-dy;e2=-dy;
	   for(var i=0;i<=dy;i++)
	   {
		   var str;
		   if(sign1>0)
		   {
		   str=""+round2(x)/10+" "+round2(y)/10
		   }
		   else str=""+round2(2*x0-x)/10+" "+round2(y)/10
		   if(sign2>0)
		   {str=str+" "+round2(z)/10;
		   }
		   else
		   {
			   str=str+" "+round2(2*z0-z)/10;
		   }
		   var box=document.createElement('a-box')
		box.setAttribute('position',str) 
		//box.setAttribute('position', {x: 1, y: 2: z: -3});
		box.setAttribute('rotation',"0 0 0")
		box.setAttribute('width', '0.1')
		box.setAttribute('height', '0.1')
		box.setAttribute('depth', '0.1')
		box.setAttribute('color', '#4CC3D9')
		scene.appendChild(box)
		y++;e1=e1+2*dx;
		   if(e1>=0)
		   {
			   x++;e1=e1-2*dy;
		   }
		e2=e2+2*dz;
		if(e2>=0)
		   {
			   z++;e2=e2-2*dy;
		   }
		
	   }
	 
	 		 
	}
	if(index==2)
	{
    if(!flag)
	{
		dx=-dx;dy=-dy;dz=-dz;
		var media;media=x0;x0=x1;x1=media;
		media=y0;y0=y1;y1=media;
		media=z0;z0=z1;z1=media;
	}
    
	if(sign1<0) dx=-dx;
	if(sign2<0) dy=-dy;
    x=x0; y=y0;z=z0;
     e1=-dz;e2=-dz;
	   for(var i=0;i<=dz;i++)
	   {
		   var str;
		   if(sign1>0)
		   {
		   str=""+round2(x)/10
		   }
		   else str=""+round2(2*x0-x)/10
		   if(sign2>0)
		   {str=str+" "+round2(2*y0-y)/10+" "+round2(z)/10;
		   }
		   else
		   {
			   str=str+" "+round2(2*y0-y)/10+" "+round2(z)/10;
		   }
		   var box=document.createElement('a-box')
		box.setAttribute('position',str) 
		//box.setAttribute('position', {x: 1, y: 2: z: -3});
		box.setAttribute('rotation',"0 0 0")
		box.setAttribute('width', '0.1')
		box.setAttribute('height', '0.1')
		box.setAttribute('depth', '0.1')
		box.setAttribute('color', '#4CC3D9')
		scene.appendChild(box)
		z++;e1=e1+2*dx;
		   if(e1>=0)
		   {
			   x++;e1=e1-2*dz;
		   }
		e2=e2+2*dy;
		if(e2>=0)
		   {
			   y++;e2=e2-2*dz;
		   }
		
	   }
	 
	 		 
	}



}
function ddaline(x0,y0,z0,x1,y1,z1)
{
	var x;
	var y;
	var z;
	var dx;
	var dy;
	var dz;
	var k1;
	var k2;
	
	dx=x1-x0;dy=y1-y0;dz=z1-z0;var index=0;
	if(Math.abs(dx)>=Math.abs(dy)&&Math.abs(dx)>=Math.abs(dz))
	{
		index=0;
	}
	if(Math.abs(dy)>=Math.abs(dx)&&Math.abs(dy)>=Math.abs(dz))
	{
		index=1;
	}
	if(Math.abs(dz)>=Math.abs(dx)&&Math.abs(dz)>=Math.abs(dy))
	{
		index=2;
	}
	var flag=true;
	if(index==0){
		k1=dy/dx;k2=dz/dx;
		flag=x0<x1;
	}
	if(index==1){
		k1=dx/dy;k2=dz/dy;
		flag=y0<y1;
	}
	if(index==2){
		k1=dx/dz;k2=dy/dz;
		flag=z0<z1;
	}
	x=x0;y=y0;z=z0;
	var scene = document.querySelector('a-scene');
	for(;;)
	{
		
		var str=""+Math.round(x)/10+" "+Math.round(y)/10+" "+Math.round(z)/10;
		var box=document.createElement('a-box')
		box.setAttribute('position',str) 
		//box.setAttribute('position', {x: 1, y: 2: z: -3});
		box.setAttribute('rotation',"0 0 0")
		box.setAttribute('width', '0.1')
		box.setAttribute('height', '0.1')
		box.setAttribute('depth', '0.1')
		box.setAttribute('color', '#4CC3D9')
		scene.appendChild(box)
		if(index==0)
		{
			
			if(flag)
			{
				if(x>=x1) break;
				x=x+1;
		y=y+k1;z=z+k2;
			}
		    else 
			{
				if(x<=x1) break;
				x=x-1;y=y-k1;z=z-k2;
			}
			
		}
		if(index==1)
		{
			
			if(flag)
			{
				if(y>=y1) break;
			y=y+1;x=x+k1;z=z+k2;
			}
		    else 
			{
				if(y<=y1)break;
				y=y-1;x=x-k1;z=z-k2;
			}
			
		}
		if(index==2)
		{
			
			if(flag)
			{
				if(z>=z1) break;
			z=z+1;x=x+k1;y=y+k2;
			}
		    else 
			{
				if(z<=z1) break;
				z=z-1;x=x-k1;y=y-k2;
			}
		}
		
	}
	
	   /*for(var i=0;i<3;i++)
	   {
		   var a=-1.5-i*0.1;
		   var b=1.5+i*0.1;
		   var c=-1.5-i*0.1;
		   var str=""+a+" "+b+" "+c;
		var box=document.createElement('a-box')
		box.setAttribute('position',str) 
		//box.setAttribute('position', {x: 1, y: 2: z: -3});
		box.setAttribute('rotation',"0 0 0")
		box.setAttribute('width', '0.1')
		box.setAttribute('height', '0.1')
		box.setAttribute('depth', '0.1')
		box.setAttribute('color', '#4CC3D9')
		scene.appendChild(box)
	   }*/
}
function methodchange()
{
	method=this.options[this.options.selectedIndex].value;
}
function click()
{
	
	var x0=document.getElementById("x").value;
	var x1=document.getElementById("x1").value;
	var y0=document.getElementById("y").value;
	var y1=document.getElementById("y1").value;
	var z0=document.getElementById("z").value;
	var z1=document.getElementById("z1").value;
	if (x0 == '' || x0 == undefined || x0 == null) {
            //return true;
            alert("输入不得为空")
			return
        }
		if (x1 == '' || x1 == undefined || x1 == null) {
            //return true;
            alert("输入不得为空")
			return
        }
		if (y0 == '' || y0 == undefined || y0 == null) {
            //return true;
            alert("输入不得为空")
			return
        }
		if (y1 == '' || y1 == undefined || y1 == null) {
            //return true;
            alert("输入不得为空")
			return
        }
		if (z0 == '' || z0 == undefined || z0 == null) {
            //return true;
            alert("输入不得为空")
			return
        }
		if (z1 == '' || z1 == undefined || z1 == null) {
            //return true;
            alert("输入不得为空")
			return
        }
    if(method=="dda")
	{
	ddaline(parseFloat(x0)*10,parseFloat(y0)*10,parseFloat(z0)*(-1)*10,parseFloat(x1)*10,parseFloat(y1)*10,parseFloat(z1)*(-1)*10)
		alert(method+"方法绘制完成");
	}
	if(method=="mid")
	{
		midline(parseFloat(x0)*10,parseFloat(y0)*10,parseFloat(z0)*(-1)*10,parseFloat(x1)*10,parseFloat(y1)*10,parseFloat(z1)*(-1)*10)
		alert(method+"方法绘制完成");
	}
	if(method=='bre')
	{
		bresenhamline(parseFloat(x0)*10,parseFloat(y0)*10,parseFloat(z0)*(-1)*10,parseFloat(x1)*10,parseFloat(y1)*10,parseFloat(z1)*(-1)*10)
		alert(method+"方法绘制完成");
	}
}
