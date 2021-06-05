-- Single line comment
(
	struct My_Struct (
		public fn myfunction param1 param2 = (
			for x = 0 to 10 by 2 do (
				local var1 = (x * 0.1)
				local var2 = color x x x
				local var3 = "Roughness " + (roughness as string)
				local var4 = Geosphere name:objName radius:0.85 pos:[x, 0, 10.5]
				var5.material = Physical_Material name:objName roughness:roughness
			)

			local mylight = Arnold_Light name:"HDR Light" targeted:false shapeType:6 format:2 useColor:false useTexmap:true
			mylight.texmap = Bitmaptexture fileName:@"C:\Tmp\example.hdr"
			mylight.exposure = 1
			mylight.intensity = 0.7

			if val != undefined then (
				appendIfUnique arrs val
			)

			joined += values[values.count]
		),
		private fn sortByName obj1 obj2 = stricmp obj1.name obj2.name
	)
	::Wildpeaks_Array = Wildpeaks_Array()
)

macroScript wildpeaks_example category:"Wildpeaks" tooltip:"Hello World" (
	fileIn "C:\\example.ms"
	try (
		::Wildpeaks.initialize()
	) catch ()
)
