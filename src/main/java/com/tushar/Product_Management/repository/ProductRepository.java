package com.tushar.Product_Management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tushar.Product_Management.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

}
