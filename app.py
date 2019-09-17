from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS
from bson.json_util import dumps
import json
from bson import ObjectId
app=Flask(__name__)
CORS(app)
client = MongoClient("mongodb://user1:user1@jtrack-shard-00-00-r9god.mongodb.net:27017,jtrack-shard-00-01-r9god.mongodb.net:27017,jtrack-shard-00-02-r9god.mongodb.net:27017/test?ssl=true&replicaSet=JTrack-shard-0&authSource=admin&retryWrites=true&w=majority")
db = client.get_database('test')
collection = db.get_collection('jobs')



@app.route('/')
def getJobs():

    #load collection from mongodb atlas
    jobs = collection.find({}).sort('jobsite')
    l = list(jobs)
    json_jobs=dumps(l)
    json_jobs2=json.loads(json_jobs)

    # group the query by job sites
    group = []
    temp=[]
    temp.append(json_jobs2[0])
    for i in range(1,len(json_jobs2)):
        if json_jobs2[i]['jobsite'].lower() == temp[0]['jobsite'].lower():
            temp.append(json_jobs2[i])
        else:
            group.append(temp)
            temp=[]
            temp.append(json_jobs2[i])
    group.append(temp)

    return jsonify(group)


@app.route('/addJobs', methods=['POST'])
def addJobs():
    s = request.data
    payload = json.loads(s)
    print(payload)
    x = collection.insert_one(payload)
    return jsonify('success');
app.run()