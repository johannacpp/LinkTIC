package com.company.middleware.service;

import com.company.middleware.model.ProductModel;
import com.company.middleware.repository.ProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    private ProductModel product;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        product = new ProductModel();
        product.setId(1L);
        product.setName("Product 1");
        product.setPrice(100.0);
    }

    @Test
    void testCreateProduct() {
        when(productRepository.save(product)).thenReturn(product);

        ProductModel createdProduct = productService.createProduct(product);

        assertNotNull(createdProduct);
        assertEquals("Product 1", createdProduct.getName());
    }
}
