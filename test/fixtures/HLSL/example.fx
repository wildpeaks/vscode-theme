float opacityValue = 1.0;
float3 albedoColor = {1.0, 1.0, 1.0};

texture exampleMap1;
sampler2D exampleSampler1 = sampler_state {
	Texture = <exampleMap1>;
	MinFilter = Linear;
	MagFilter = Linear;
	MipFilter = Point;
	AddressU = Wrap;
	AddressV = Wrap;
};

texture exampleMap2: ENVIRONMENT;
samplerCUBE exampleSampler2 = sampler_state {
	Texture = <exampleMap2>;
	MinFilter = Linear;
	MagFilter = Linear;
	MipFilter = Linear;
};

// Single line comment
float4x4 WorldInverseTranspose: WORLDINVERSETRANSPOSE;
float4x4 WorldViewProjection: WORLDVIEWPROJECTION;
float4x4 World: WORLD;
float4x4 ViewInverse: VIEWINVERSE;

/**
 * Multiple lines
 */
struct MY_STRUCT {
	float4 position: POSITION;
	float2 texcoord: TEXCOORD0;
};

VS_OUTPUT VS(VS_INPUT In) {
	VS_OUTPUT Out = (VS_OUTPUT)0;
	Out.position = mul(In.position, WorldViewProjection);
	Out.texcoord = In.texcoord;
	return Out;
}

float4 PS(VS_OUTPUT In): COLOR {
	float3 myColor = tex2D(albedoSampler, In.texcoord).rgb;
	float opacityValue = tex2D(opacitySampler, In.texcoord).r;
	float4 resultColor = float4(albedoColor, opacityValue);
	return resultColor;
}

technique t0 {
	pass p0 {
		CullMode = CW;
		Lighting = false;
		AlphaBlendEnable = (opacityValue > 0);
		VertexShader = compile vs_2_0 VS();
		PixelShader = compile ps_2_0 PS();
	}
}
