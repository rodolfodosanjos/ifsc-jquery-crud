package br.org.ifsc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin
public class ClienteController {

    @Autowired
    private ClienteRepository repository;

    @RequestMapping(name = "clientes", method = RequestMethod.GET)
    public Collection<Cliente> list(){
        return repository.list();
    }

    @RequestMapping(name = "clientes", method = RequestMethod.POST)
    public Cliente novo(@RequestBody Cliente cliente){
        repository.add(cliente);
        return  cliente;
    }

    @RequestMapping(name = "clientes", method = RequestMethod.PUT)
    public Cliente edit(@RequestBody Cliente cliente){
        repository.edit(cliente);
        return cliente;
    }

    @RequestMapping("clientes/{id}")
    public Cliente pesquisa(@PathVariable("id") String id){
        return repository.find(id);
    }


    @RequestMapping(name = "clientes/{id}", method = RequestMethod.DELETE)
    public void deleta(@PathVariable("id") String id){
        repository.remove(id);
    }

}
