/*
* @Author: 宏达
* @Date:   2017-10-27 15:00:16
* @Last Modified by:   宏达
* @Last Modified time: 2017-10-28 10:41:05
*/

/*百分比*/
let canvas=document.querySelector('canvas');
		let ctx=canvas.getContext("2d");
		// let t=setInterval(fn,10,90);
		// let t=setTimeout(fn,10,90);
		let t;
		let n=90;
		let num=1;
		fn();
		function fn(){
			num++;
			// if(num==n){
			// 	clearInterval(t);
			// }
			// if(num==n){
			// 	clearTimeout(t);
			// }else{
			// 	t=setTimeout(fn,10,90);
			// }
			// 刷新频率
			if(num==n){
				cancelAnimationFrame(t);
			}else{
				t=requestAnimationFrame(fn);
			}
			let rad=Math.PI/50*num;
			ctx.clearRect(0, 0, 300, 300);
			ctx.strokeStyle='hotpink';
			ctx.beginPath();
			ctx.arc(150, 150, 100, -Math.PI/2, rad-Math.PI/2);
			// ctx.moveTo(0, 0);
			// ctx.lineTo(300, 0);
            ctx.lineWidth=10;
            ctx.lineCap='round';
            ctx.stroke();
            ctx.textAlign='center';
            ctx.textBaseLine='middle';
            ctx.font='bold 20px sans-serif';
            ctx.fillText(`${num}%`,150,150);
		}
