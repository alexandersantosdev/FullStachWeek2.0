package com.alexander.myinvest.repository;


import com.alexander.myinvest.model.Categoria;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
    
}
