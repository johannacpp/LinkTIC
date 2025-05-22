package com.company.middleware.service;

import com.company.middleware.model.ProductModel;
import com.company.middleware.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Crear
    public ProductModel createProduct(ProductModel product) {
        return productRepository.save(product);
    }

    // Obtener
    public Optional<ProductModel> getProductById(Long id) {
        return productRepository.findById(id);
    }

    // Actualizar
    public ProductModel updateProduct(Long id, ProductModel updatedProduct) {
        Optional<ProductModel> existingProduct = productRepository.findById(id);
        if (existingProduct.isPresent()) {
            ProductModel product = existingProduct.get();
            product.setName(updatedProduct.getName());
            product.setDescription(updatedProduct.getDescription());
            product.setPrice(updatedProduct.getPrice());
            return productRepository.save(product);
        }
        return null;
    }

    // Eliminar 
    public boolean deleteProduct(Long id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Listar todos
    public Page<ProductModel> listProducts(int page, int size) {
        return productRepository.findAll(PageRequest.of(page, size));
    }
}
