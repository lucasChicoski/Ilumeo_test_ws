/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `code_user_ref` to the `management_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hash_time` to the `management_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `management_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `management_time` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "management_time" ADD COLUMN     "code_user_ref" TEXT NOT NULL,
ADD COLUMN     "hash_time" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "code_user_id" TEXT NOT NULL,
    "nameUser" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_code_user_id_key" ON "User"("code_user_id");

-- AddForeignKey
ALTER TABLE "management_time" ADD CONSTRAINT "management_time_code_user_ref_fkey" FOREIGN KEY ("code_user_ref") REFERENCES "User"("code_user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
