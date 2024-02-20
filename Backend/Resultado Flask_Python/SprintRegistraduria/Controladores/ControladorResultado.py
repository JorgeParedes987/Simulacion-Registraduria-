from Modelos.Candidato import Candidato
from Modelos.Mesa import Mesa
from Modelos.Resultado import Resultado
from Repositorios.RepositorioCandidato import RepositorioCandidato
from Repositorios.RepositorioMesa import RepositorioMesa
from Repositorios.RepositorioResultado import RepositorioResultado


class ControladorResultado():
    def __init__(self):
        self.repositorioCandidato = RepositorioCandidato()
        self.repositorioMesa = RepositorioMesa()
        self.repositorioResultado = RepositorioResultado()
        print("Creando Controlador Resultado")

    def index(self):
        print("Listar resultados")
        return self.repositorioResultado.findAll()

    def create(self, infoResultado, id_candidato, id_mesa):
        nuevaResultado = Resultado(infoResultado)
        elCandidato = Candidato(self.repositorioCandidato.findById(id_candidato))
        laMesa = Mesa(self.repositorioMesa.findById(id_mesa))
        nuevaResultado.candidato = elCandidato
        nuevaResultado.mesa = laMesa
        return self.repositorioResultado.save(nuevaResultado)

    def show(self, id):
        elResultado = Resultado(self.repositorioResultado.findById(id))
        return elResultado.__dict__

    def update(self, id, infoResultado, id_candidato, id_mesa):
        laResultado = Resultado(self.repositorioResultado.findById(id))
        laResultado.numero_mesa = infoResultado["numero_mesa"]
        laResultado.id_partido = infoResultado["id_partido"]
        elCandidato = Candidato(self.repositorioCandidato.findById(id_candidato))
        laMesa = Mesa(self.repositorioMesa.findById(id_mesa))
        laResultado.candidato = elCandidato
        laResultado.mesa = laMesa
        return self.repositorioResultado.save(laResultado)


    def delete(self, id):
        return self.repositorioResultado.delete(id)