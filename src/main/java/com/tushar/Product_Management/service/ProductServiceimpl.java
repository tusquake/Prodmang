package com.tushar.Product_Management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tushar.Product_Management.model.Product;
import com.tushar.Product_Management.repository.ProductRepository;

@Service
public class ProductServiceimpl implements ProductService {

    @Autowired
    private ProductRepository productRepo;

    @Override
    public Product saveProduct(Product product) {
        return productRepo.save(product);
    }

    @Override
    public List<Product> getAllProduct() {
        return productRepo.findAll();
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepo.findById(id).get();
    }

    @Override
    public String deleteProduct(Integer id) {
        Product product = productRepo.findById(id).get();

        if (product != null) {
            productRepo.delete(product);
            return "Product Delete Successfully";
        }

        return "Something Went wrong on Server!";
    }

    @Override
    public Product editProduct(Product p, Integer id) {
        Product oldproduct = productRepo.findById(id).get();
        oldproduct.setProductName(p.getProductName());
        oldproduct.setDescription(p.getDescription());
        oldproduct.setPrice(p.getPrice());
        oldproduct.setStatus(p.getStatus());

        return productRepo.save(oldproduct);
    }

}
