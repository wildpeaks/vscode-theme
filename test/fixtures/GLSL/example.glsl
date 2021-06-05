#extension GL_EXAMPLE : enable
#define TEXEL_SIZE 1.0/512.0
#pragma glslify: example1 = require('glsl-example1', iterations=10)
#pragma glslify: example2 = require('glsl-example2')
varying vec2 vUv;
uniform float iGlobalTime;
uniform sampler2D iChannel0;
vec3 sample(vec2 uv);
vec3 sample(vec2 uv) {
	return texture2D(iChannel0, uv).rgb;
}
void main() {
	var1 = var3;
	var2 = var3.xyz;
	vec3 var4 = vNorm * 0.5 + 0.5;
	float dist = length(vUv - 0.5);
	float falloff = smoothstep(0.3, 0.7, dist);
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	gl_FragColor.rgb = mix(colorA, colorB, blend);
	gl_FragColor.a = 1.0;
}
// Single line
/*
Multiple lines
*/
