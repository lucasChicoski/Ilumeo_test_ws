import { describe, test, expect } from '@jest/globals';
import ProductService from "../../Service/Product/ProductService";
import ProductRepository from "../../Infrastructure/Repository/Product/ProductRepository";

const productRepository: ProductRepository = new ProductRepository()
const productServer:  ProductService = new ProductService(productRepository)


describe("Product Service", () => {
    test("DeleteProduct", async () => {
        expect( await productServer.deleteProduct(1)).toBe({
            message: "O item foi desativado",
        })
    })
})