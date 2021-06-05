import mylibrary

# Single line comment
for i in range(0, 10, 1):
	var1 = "name-" + str(i + 1)
	var2 = mylibrary.mymethod1(var1)
	mylibrary.mymethod2(var1)
	mylibrary.mymethod3(path="C:\\example\\" + var2 + ".jpg", mynumber=432)

def myfunction(param1, param2):
	print(param1)
	var3 = ",".join(param2.mymethod4())
	return var3

var4 = mylibrary.findMaterial("Default")
myfunction("hello", 123)
