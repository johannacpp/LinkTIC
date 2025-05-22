package com.company.middleware.controller;

import com.company.middleware.model.ProductModel;
import com.company.middleware.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.Mockito.when;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class ProductControllerIntegrationTest {

    @Mock
    private ProductService productService;

    @InjectMocks
    private ProductController productController;

    @Autowired
    private MockMvc mockMvc;

    private ProductModel product;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        product = new ProductModel();
        product.setId(1L);
        product.setName("Product 1");
        product.setPrice(100.0);
        mockMvc = MockMvcBuilders.standaloneSetup(productController).build();
    }

    @Test
    void testCreateProduct() throws Exception {
        when(productService.createProduct(any(ProductModel.class))).thenReturn(product);

        mockMvc.perform(post("/products")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Product 1\",\"price\":100.0}"))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("Product 1"))
                .andExpect(jsonPath("$.price").value(100.0));
    }

    @Test
    void testUpdateProduct() throws Exception {
        when(productService.updateProduct(eq(1L), any(ProductModel.class))).thenReturn(product);

        product.setName("Updated Product");

        mockMvc.perform(put("/products/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Updated Product\",\"price\":100.0}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Updated Product"))
                .andExpect(jsonPath("$.price").value(100.0));
    }
}
