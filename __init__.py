from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route("/api")
def api():
    return "API"

@app.route('/js/<path:path>')
def js(path):
    return send_from_directory("public/js", "%s.js" % path)

@app.route('/css/<path:path>')
def css(path):
    return send_from_directory("public/css", "%s.css" % path)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    if path == "":
        return send_from_directory("public", "index.html")
    else:
        return send_from_directory("public/views", "%s.html" % path)

if __name__ == "__main__":
    app.run()
