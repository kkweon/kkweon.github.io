import os


files = os.listdir(".")
files = filter(lambda x: x.endswith("md"), files)

for f in files:
    name, ext = os.path.splitext(f)
    os.makedirs(name, exist_ok=True)
    os.rename(f, os.path.join(name, f))
