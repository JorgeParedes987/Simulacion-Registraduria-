from Modelos.Partido import Partido
from Repositorios.RepositorioPartido import RepositorioPartido


class ControladorPartido():

    def __init__(self) -> object:
        self.repositorioPartido = RepositorioPartido()
        print("Creando Controlador Partido")

    def index(self):
        print("Listar Los Partidos")
        return self.repositorioPartido.findAll()

    def create(self, elPartido):
        print("Crear Partido")
        nuevoPartido = Partido(elPartido)
        return self.repositorioPartido.save(nuevoPartido)

    def show(self, id):
        print("Mostrando Partido Con id ", id)
        elPartido = Partido(self.repositorioPartido.findById(id))
        return elPartido.__dict__

    def update(self, id, elPartido):
        print("Actualizando Partido con id ", id)
        PartidoActual = Partido(self.repositorioPartido.findById(id))
        PartidoActual.nombre = elPartido["nombre"]
        PartidoActual.lema = elPartido["lema"]
        return self.repositorioPartido.save(PartidoActual)

    def delete(self, id):
        print("Eliminando Candidato Con id ", id)
        return self.repositorioPartido.delete(id)
