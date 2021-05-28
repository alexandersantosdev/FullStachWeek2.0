package com.alexander.myinvest.repository;


import com.alexander.myinvest.model.Investimento;

import org.springframework.data.repository.CrudRepository;

public interface InvertimentoRepository extends CrudRepository<Investimento, Long> {
    
}
