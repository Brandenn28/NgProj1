/*
  Warnings:

  - The primary key for the `Workstation_WorkstationFeatures` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `policyID` to the `Workstation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `WorkstationFeatures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `WorkstationType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Workstation_WorkstationFeatures` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Workstation_WorkstationFeatures" DROP CONSTRAINT "Workstation_WorkstationFeatures_workstationId_fkey";

-- AlterTable
ALTER TABLE "Workstation" ADD COLUMN     "policyID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WorkstationFeatures" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "WorkstationType" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Workstation_WorkstationFeatures" DROP CONSTRAINT "Workstation_WorkstationFeatures_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "workstationId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Workstation_WorkstationFeatures_pkey" PRIMARY KEY ("workstationId", "featureID");

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Workstation_Image" (
    "id" SERIAL NOT NULL,
    "workstationId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workstation_Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccessRole" (
    "id" SERIAL NOT NULL,
    "rolesId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AccessRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workstation_AccessRole" (
    "workstationId" TEXT NOT NULL,
    "accessRoleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workstation_AccessRole_pkey" PRIMARY KEY ("workstationId","accessRoleId")
);

-- CreateTable
CREATE TABLE "BookingPolicy" (
    "id" SERIAL NOT NULL,
    "policyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "minDuration" INTEGER NOT NULL,
    "maxDuration" INTEGER NOT NULL,
    "advanceNotice" INTEGER NOT NULL,
    "maxHoursPerDay" INTEGER NOT NULL,
    "maxHoursPerWeek" INTEGER NOT NULL,
    "bufferTime" INTEGER NOT NULL,
    "needCheckIn" BOOLEAN NOT NULL,
    "checkInWindowBefore" INTEGER NOT NULL,
    "checkInWindowAfter" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workstation_BookingPolicy" (
    "workstationID" TEXT NOT NULL,
    "policyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workstation_BookingPolicy_pkey" PRIMARY KEY ("workstationID","policyId")
);

-- CreateTable
CREATE TABLE "BlackoutPeriod" (
    "id" SERIAL NOT NULL,
    "workstationId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BlackoutPeriod_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AccessRole_rolesId_key" ON "AccessRole"("rolesId");

-- CreateIndex
CREATE UNIQUE INDEX "AccessRole_name_key" ON "AccessRole"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BookingPolicy_policyId_key" ON "BookingPolicy"("policyId");

-- CreateIndex
CREATE UNIQUE INDEX "BookingPolicy_name_key" ON "BookingPolicy"("name");

-- AddForeignKey
ALTER TABLE "Workstation_WorkstationFeatures" ADD CONSTRAINT "Workstation_WorkstationFeatures_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("workstationId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workstation_Image" ADD CONSTRAINT "Workstation_Image_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("workstationId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workstation_AccessRole" ADD CONSTRAINT "Workstation_AccessRole_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("workstationId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workstation_AccessRole" ADD CONSTRAINT "Workstation_AccessRole_accessRoleId_fkey" FOREIGN KEY ("accessRoleId") REFERENCES "AccessRole"("rolesId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workstation_BookingPolicy" ADD CONSTRAINT "Workstation_BookingPolicy_workstationID_fkey" FOREIGN KEY ("workstationID") REFERENCES "Workstation"("workstationId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workstation_BookingPolicy" ADD CONSTRAINT "Workstation_BookingPolicy_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "BookingPolicy"("policyId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlackoutPeriod" ADD CONSTRAINT "BlackoutPeriod_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("workstationId") ON DELETE CASCADE ON UPDATE CASCADE;
