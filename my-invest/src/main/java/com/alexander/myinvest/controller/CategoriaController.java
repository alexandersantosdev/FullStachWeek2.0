package com.alexander.myinvest.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import com.alexander.myinvest.model.Categoria;
import com.alexander.myinvest.repository.CategoriaRepository;

@RestController
@RequestMapping("categorias")
public class CategoriaController {
    
    @Autowired
    private CategoriaRepository categoriaRepository;

    @RequestMapping(value = "", method = RequestMethod.POST)
    public @ResponseBody
    Categoria inserirCategoria(@RequestBody Categoria categoria){
        return categoriaRepository.save(categoria);
    }

    @RequestMapping(value = "/{codigo}", method = RequestMethod.GET)
    public @ResponseBody Categoria listarPorId(@PathVariable Long id){
        return categoriaRepository.findById(id).orElse(null);
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public @ResponseBody
    List<Categoria> listarCategorias(){
        return categoriaRepository.findAll();
    }

    @RequestMapping(value = "/{codigo}", method = RequestMethod.DELETE)
    public @ResponseBody void deletarCategoria(@PathVariable Long codigo){
        categoriaRepository.deleteById(codigo);
    }
}
