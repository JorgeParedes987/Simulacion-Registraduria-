package com.registraduria.seguridad.Repositorios;
import com.registraduria.seguridad.Modelos.Permiso;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

//Extends es para la herencia
public interface RepositorioPermiso extends  MongoRepository <Permiso,String>{
    @Query("{'url':?0,'metodo':?1}")
    Permiso getPermiso(String url, String metodo);
}
