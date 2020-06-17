import sensors

from flask import Flask

app=Flask(__name__)

bart=str(sensors.variable)

@app.route('/')
def index():
    return bart