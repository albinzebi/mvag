from PIL import Image, ImageFilter

before = Image.open("1200px-Gaoliang_Bridge.jpg")
after = before.filter(ImageFilter.BLUR)
after.save("out.jpg")