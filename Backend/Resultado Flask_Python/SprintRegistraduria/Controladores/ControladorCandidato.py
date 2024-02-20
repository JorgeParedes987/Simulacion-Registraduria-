from Modelos.Candidato import Candidato
from Repositorios.RepositorioCandidato import RepositorioCandidato
from Modelos.Partido import Partido
from Repositorios.RepositorioPartido import RepositorioPartido


class ControladorCandidato():
   """
   constructor que permite llevar a cabo la creacion de instancias del controlador.
   """
   def __init__(self) -> object:
       self.repositorioCandidato = RepositorioCandidato()
       self.repositorioPartido = RepositorioPartido()
       print("Creando Controlador Candidato")


   def index(self):
       print("Listar Los Candidatos")
       return self.repositorioCandidato.findAll()

   def create(self, elCandidato):
       print("Crear Candidato")
       nuevoCandidato = Candidato(elCandidato)
       return self.repositorioCandidato.save(nuevoCandidato)

   def show(self, id):
       print("Mostrando Candidato Con id ", id)
       elCandidato = Candidato(self.repositorioCandidato.findById(id))
       return elCandidato.__dict__

   def update(self, id, elCandidato):
       print("Actualizando Candidato con id ", id)
       CandidatoActual = Candidato(self.repositorioCandidato.findById(id))
       CandidatoActual.nombre = elCandidato["nombre"]
       CandidatoActual.apellido = elCandidato["apellido"]
       CandidatoActual.cedula = elCandidato["cedula"]
       CandidatoActual.no_resolucion = elCandidato["no_resolucion"]
       return self.repositorioCandidato.save(CandidatoActual)

   def delete(self, id):
       print("Eliminando Candidato Con id ", id)
       return self.repositorioCandidato.delete(id)

   def asignarPartido(self, id, id_Partido):
       candidatoActual = Candidato(self.repositorioCandidato.findById(id))
       partidoActual = Partido(self.repositorioPartido.findById(id_Partido))
       candidatoActual.partido = partidoActual
       return self.repositorioCandidato.save(candidatoActual)

