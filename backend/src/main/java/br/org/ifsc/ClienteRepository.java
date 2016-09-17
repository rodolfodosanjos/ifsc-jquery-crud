package br.org.ifsc;

import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Repository
public class ClienteRepository {

    private static Map<String, Cliente> CLIENTES = new HashMap<>();

    public void add(Cliente cliente){
        cliente.setId(UUID.randomUUID().toString());
        CLIENTES.put(cliente.getId(), cliente);
    }

    public void edit(Cliente cliente){
        remove(cliente.getId());
        add(cliente);
    }

    public void remove(String id){
        CLIENTES.remove(id);
    }

    public Collection<Cliente> list(){
        return CLIENTES.values();
    }

    public Cliente find(String id){
        return CLIENTES.get(id);
    }

}
