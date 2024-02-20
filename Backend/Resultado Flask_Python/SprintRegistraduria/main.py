from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
import json
from waitress import serve
from Controladores.ControladorCandidato import ControladorCandidato
from Controladores.ControladorMesa import ControladorMesa
from Controladores.ControladorResultado import ControladorResultado
from Controladores.ControladorPartido import ControladorPartido

app = Flask(__name__)
"""
Los cors permiten que se puedan hacer pruebas al
servidor desde las misma máquina donde está corriendo.
"""
cors = CORS(app)

miControladorCandidato = ControladorCandidato()
miControladorMesa = ControladorMesa()
miControladorResultado = ControladorResultado()
miControladorPartido = ControladorPartido()

####Candidato###
@app.route("/candidatos", methods=['GET'])
def getCandidatos():
   json = miControladorCandidato.index()
   return jsonify(json)


@app.route("/candidatos", methods=['POST'])
def crearCandidato():
   data = request.get_json()
   json = miControladorCandidato.create(data)
   return jsonify(json)


@app.route("/candidatos/<string:id>", methods=['GET'])
def getCandidato(id):
   json = miControladorCandidato.show(id)
   return jsonify(json)


@app.route("/candidatos/<string:id>", methods=['PUT'])
def modificarCandidatos(id):
   data = request.get_json()
   json = miControladorCandidato.update(id, data)
   return jsonify(json)

@app.route("/candidatos/<string:id>/partido/<string:id_partido>", methods=['PUT'])
def asignarCandidatoAPartido(id, id_partido):
    json = miControladorCandidato.asignarPartido(id, id_partido)
    return jsonify(json)

@app.route("/candidatos/<string:id>", methods=['DELETE'])
def eliminarCandidato(id):
   json = miControladorCandidato.delete(id)
   return jsonify(json)


#########################Servicios Resultados###################################
@app.route("/resultados", methods=['GET'])
def getResultados():
    json = miControladorResultado.index()
    return jsonify(json)

@app.route("/resultados/<string:id>", methods=['GET'])
def getResultado(id):
    json = miControladorResultado.show(id)
    return jsonify(json)

@app.route("/resultados/candidato/<string:id_candidato>/mesa/<string:id_mesa>", methods=['POST'])
def crearResultado(id_candidato, id_mesa):
    data = request.get_json()
    json = miControladorResultado.create(data, id_candidato, id_mesa)
    return jsonify(json)


@app.route("/resultados/<string:id_resultado>/candidato/<string:id_candidato>/mesa/<string:id_mesa>", methods=['PUT'])
def modificarResultado(id_resultado, id_candidato, id_mesa):
    data = request.get_json()
    json = miControladorResultado.update(id_resultado, data, id_candidato, id_mesa)
    return jsonify(json)

@app.route("/resultados/<string:id>",methods=['DELETE'])
def eliminarResultados(id):
    json = miControladorResultado.delete(id)
    return jsonify(json)

def loadFileConfig():
    with open( 'config.json') as f:
        data = json.load(f)
    return data
if __name__ == '_main_':
    dataConfig = loadFileConfig() # Se asigna lo que retorna el metodo a la variable dataConfig
    print("Server running: " + "http://" + dataConfig["url-backend"] + ":" + str(dataConfig["port"]))
    serve(app, host=dataConfig["url-backend"], port=dataConfig["port"])
    serve(app, host=dataConfig["url-backend"], port=dataConfig["port"])


#########################Servicios Partido###################################
@app.route("/partidos", methods=['GET'])
def getPartidos():
    json = miControladorPartido.index()
    return jsonify(json)


@app.route("/partidos", methods=['POST'])
def crearPartido():
    data = request.get_json()
    json = miControladorPartido.create(data)
    return jsonify(json)

@app.route("/partidos/<string:id>", methods=['GET'])
def getPartido(id):
    json = miControladorPartido.show(id)
    return jsonify(json)

@app.route("/partidos/<string:id>", methods=['PUT'])
def modificarPartidos(id):
    data = request.get_json()
    json = miControladorPartido.update(id, data)
    return jsonify(json)


@app.route("/partidos/<string:id>", methods=['DELETE'])
def eliminarPartido(id):
    json = miControladorPartido.delete(id)
    return jsonify(json)
""" 
MESA 
"""

@app.route("/mesas", methods=['GET'])
def getMesas():
   json = miControladorMesa.index()
   return jsonify(json)

@app.route("/mesas", methods=['POST'])
def crearMesa():
   data = request.get_json()
   json = miControladorMesa.create(data)
   return jsonify(json)


@app.route("/mesas/<string:id>", methods=['GET'])
def getMesa(id):
   json = miControladorMesa.show(id)
   return jsonify(json)


@app.route("/mesas/<string:id>", methods=['PUT'])
def modificarMesas(id):
   data = request.get_json()
   json = miControladorMesa.update(id, data)
   return jsonify(json)


@app.route("/mesas/<string:id>", methods=['DELETE'])
def eliminarMesa(id):
   json = miControladorMesa.delete(id)
   return jsonify(json)


@app.route("/", methods=['GET'])
def test():
   json = {}
   json["message"] = "Server running ..."
   return jsonify(json)


def loadFileConfig():
   with open('config.json') as f:
       data = json.load(f)
   return data


if __name__ == '__main__':
   dataConfig = loadFileConfig()  # Se asigna lo que retorna el metodo a la variable dataConfig
   print("Server running : " + "http://" + dataConfig["url-backend"] + ":" + str(dataConfig["port"]))
   """
   Se crea la instancia del servidor con la url del backend y puerto especificado
   en el archivo de configuración.
   """
   serve(app, host=dataConfig["url-backend"], port=dataConfig["port"])