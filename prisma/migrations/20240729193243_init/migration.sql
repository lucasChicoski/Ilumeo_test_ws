/*
  Warnings:

  - You are about to drop the `management_time` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "management_time" DROP CONSTRAINT "management_time_code_user_ref_fkey";

-- DropTable
DROP TABLE "management_time";

-- CreateTable
CREATE TABLE "Management_time" (
    "id" SERIAL NOT NULL,
    "code_user_ref" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "hash_time" TEXT NOT NULL,

    CONSTRAINT "Management_time_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Management_time" ADD CONSTRAINT "Management_time_code_user_ref_fkey" FOREIGN KEY ("code_user_ref") REFERENCES "User"("code_user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
