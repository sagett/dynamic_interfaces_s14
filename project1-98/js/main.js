var gl;

function WebGLStart() {
	var canvas = document.getElementById("glcanvas");

	gl = initWebGl(canvas);
}

if (gl) {
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.enable(gl.DEPTH_TESt);
	gl.depthFunc(gl.LEQUAL);
	gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
} 

function initWebGl() {
	gl = null;
	try {
	// Try to grab the standard context. If it fails, fallback to experimental.
	 gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
       	}

	catch(e) {}         
	
	 // If we don't have a GL context, give up now
	 if (!gl) {
	 	alert("Unable to initialize WebGL. Your browser may not support it.");
	 	gl = null;
	 }
	                
	                 
	 return gl;
}



