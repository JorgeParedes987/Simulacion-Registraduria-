package com.registraduria.seguridad.Repositorios;
import com.registraduria.seguridad.Modelos.Rol;
import org.springframework.data.mongodb.repository.MongoRepository;
//Extends es para la herencia
public interface RepositorioRol  extends MongoRepository <Rol,String> {
}
