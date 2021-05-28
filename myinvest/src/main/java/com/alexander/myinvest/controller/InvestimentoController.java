package com.alexander.myinvest.controller;

import java.util.List;

import com.alexander.myinvest.model.Investimento;
import com.alexander.myinvest.repository.InvertimentoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("investimentos")
@CrossOrigin(origins = "http://localhost:3000")
public class InvestimentoController {
    
    @Autowired
    private InvertimentoRepository invertimentoRepository;

    @RequestMapping(value = "", method = RequestMethod.POST)
    public @ResponseBody Investimento inserirInvestimento(@RequestBody Investimento investimento){
        return invertimentoRepository.save(investimento);
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public @ResponseBody List<Investimento> listarInvestimentos(){
        return (List<Investimento>) invertimentoRepository.findAll();
    }

    @RequestMapping(value = "/{codigo}", method = RequestMethod.GET)
    public @ResponseBody Investimento buscarPorId(@PathVariable Long codigo){
        return invertimentoRepository.findById(codigo).orElse(null);
    }

    @RequestMapping(value = "/{codigo}", method = RequestMethod.DELETE)
    public @ResponseBody void deletarInvestimento(@PathVariable Long codigo){
        invertimentoRepository.deleteById(codigo);
    }




}
