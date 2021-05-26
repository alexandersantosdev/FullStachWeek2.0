package com.alexander.myinvest.model;

import java.time.LocalDate;

import javax.persistence.*;

@Entity
@Table(name = "investimentos")
public class Investimento {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;
    @Column
    private String codigoAtivo;
    @Column
    private Double valorCota;
    @Column
    private Integer qtdCotas;
    @Column
    private LocalDate data;

    @ManyToOne
    @JoinColumn(name = "fk_codigo_categoria")
    private Categoria categoria;

    public Long getCodigo() {
        return codigo;
    }

    public void setCodigo(Long codigo) {
        this.codigo = codigo;
    }

    public String getCodigoAtivo() {
        return codigoAtivo;
    }

    public void setCodigoAtivo(String codigoAtivo) {
        this.codigoAtivo = codigoAtivo;
    }

    public Double getValorCota() {
        return valorCota;
    }

    public void setValorCota(Double valorCota) {
        this.valorCota = valorCota;
    }

    public Integer getQtdCotas() {
        return qtdCotas;
    }

    public void setQtdCotas(Integer qtdCotas) {
        this.qtdCotas = qtdCotas;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

}
