-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "codeUser" TEXT NOT NULL,
    "nameUser" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "management_time" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "management_time_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "statusProduct" BOOLEAN NOT NULL DEFAULT true,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "manufacturingDate" TIMESTAMP(3) NOT NULL,
    "idProvider" TEXT NOT NULL,
    "descriptionProvider" TEXT NOT NULL,
    "CNPJProvider" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
