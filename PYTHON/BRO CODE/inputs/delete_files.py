import  os
import shutil

path: str = "folder"

try:
    # os.remove("text.txt")
    # os.rmdir(path)
    shutil.rmtree(path)
except FileNotFoundError:
    print("Text file not found")
except PermissionError:
    print("Permission denied")
except OSError:
    print("You can't delete that using that function")
else:
    print(path, "was removed")