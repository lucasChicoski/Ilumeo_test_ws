import { PrismaClient } from "@prisma/client";
import ProductDTO from "../src/Domain/DTO/ProductDTO";

const prisma = new PrismaClient()

const listProduct: ProductDTO[] = [
    {
    description: "Mouse Corsair ", 
    statusProduct: true,
    expirationDate: new Date(),
    manufacturingDate: new Date(),
    CNPJProvider: "05.535.060/0001-22",
    descriptionProvider: "Corsair Brasil",
    idProvider: "23123123"
    }
]



async function main() {
    listProduct.forEach(async (element) => {
        await prisma?.product.create({
            data:{
                CNPJProvider: element.CNPJProvider,
                description: element.description,
                descriptionProvider: element.descriptionProvider,
                expirationDate: element.expirationDate,
                idProvider: element.idProvider,
                manufacturingDate: element.manufacturingDate,
                statusProduct: element.statusProduct
            }
        })
    })
}


main()