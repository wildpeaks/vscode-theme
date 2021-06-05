float3 myCustomColor = {0.0, 0.0, 0.0};

// Single line comment
float4x4 WorldViewProjection: WORLDVIEWPROJECTION;
float3x3 WorldViewInverseTranspose: WORLDVIEWINVERSETRANSPOSE;

struct VS_INPUT {
	float4 position: POSITION;
	float2 texcoord: TEXCOORD0;
	float3 normal: NORMAL;
};
struct VS_OUTPUT {
	float4 position: SV_POSITION;
	float2 texcoord: TEXCOORD0;
};
struct PS_INPUT {
	float2 texcoord: TEXCOORD0;
};

VS_OUTPUT VS(VS_INPUT In){
	VS_OUTPUT Out = (VS_OUTPUT)0;
	Out.position = mul(In.position, WorldViewProjection);
	Out.texcoord = In.texcoord;
	return Out;
}

float4 PS(PS_INPUT In): SV_TARGET {
	return float4(myCustomColor, 1.0);
}

technique t0 {
	pass p0 {
		AlphaBlendEnable = true;
		VertexShader = compile vs_5_0 VS();
		PixelShader = compile ps_5_0 PS();
	}
}
