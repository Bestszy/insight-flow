
import time
import random
from flask import Response, Flask, render_template

app=Flask(__name__)
app.debug = True


variable="hello from flask / make me real time a"

@app.route("/")
def index():
    return render_template('index.html', switch=switch)


#@app.route('/')
#def index():
#    return variable

@app.route('/switch')
def switch():
    def get_switch_values():
        while True:
            yield("Value: {0}\n\n".format(random.randrange(0,100)))
            time.sleep(1.0)
    return Response(get_switch_values(), mimetype='text/event-stream')

if __name__=="__main__":
    app.run(debug=True, threded = True)