from flask import Flask, send_from_directory, render_template, request
import os
import json
from main.rsvp import RsvpController

root_dir = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, template_folder="public/views")
rsvp_controller = RsvpController()

@app.route("/api")
def api():
    return "API"

@app.route("/api/rsvp", methods=["GET", "POST"])
def rsvp():
    res = None
    if request.method == 'POST':
        print(request.data)
        if type(request.data) != str:
            request.data = request.data.decode("utf-8")

        body = json.loads(request.data)
        res = rsvp_controller.add_rsvp(body)
    else:
        print()
    return json.dumps(res)

@app.route('/api/photo_paths/<path:path>')
def photo_paths(path):
    return json.dumps(os.listdir(os.path.join(root_dir, "public", "img", "engagement", path)))

@app.route('/js/<path:path>')
def js(path):
    return send_from_directory("public/js", path)

@app.route('/css/<path:path>')
def css(path):
    return send_from_directory("public/css", path)

@app.route('/fonts/<path:path>')
def fonts(path):
    return send_from_directory("public/fonts", path)

@app.route('/img/<path:path>')
def img(path):
    print(path)
    return send_from_directory("public/img", path)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    if path == "":
        return render_template("index.html")
    elif "favicon.ico" in path:
        return send_from_directory("public/img", path)
    else:
        return render_template("%s.html" % path, title=path)

@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r

if __name__ == "__main__":
    HOST = environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(environ.get('SERVER_PORT', '5000'))
    except ValueError:
        PORT = 5000

    app.run(port=PORT)
