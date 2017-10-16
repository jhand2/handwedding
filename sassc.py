import sass
import os
import sys

def usage():
    return "Usage: python sassc.py <source> [destination]"

class SassFile:
    """
    A representation of a sass file for compilation
    """
    def __init__(self, directory, fname):
        self.fname = fname
        self.directory = directory
        self.full_path = os.path.join(directory, fname)
        self.out_file = fname.split(".")[0] + ".css"
        self._read_contents()

    def _read_contents(self):
        with open(self.full_path, "r") as f:
            self.contents = f.read()
            if not self.contents:
                self.compiled = ""
            else:
                self.compiled = sass.compile(string=self.contents, include_paths=[self.directory])

    def __str__(self):
        return self.fname

    def write_self(self, path):
        with open(os.path.join(path, self.out_file), "w") as f:
            f.write(self.compiled)

def compile_dir(d):
    """
    Returns a list of SassFile objects
    """
    files = []
    for fname in os.listdir(d):
        if fname.endswith(".scss"):
            files.append(SassFile(d, fname))
    return files

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(usage())
    elif len(sys.argv) == 2:
        arg1 = sys.argv[1]
    else:
        arg1 = sys.argv[1]
        arg2 = sys.argv[2]
        files = compile_dir(arg1)
        for f in files:
            f.write_self(arg2)

