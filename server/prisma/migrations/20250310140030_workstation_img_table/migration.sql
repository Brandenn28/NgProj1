/*
  Warnings:

  - The primary key for the `Workstation_WorkstationFeatures` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `workstationId` on the `Workstation_WorkstationFeatures` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Workstation_WorkstationFeatures" DROP CONSTRAINT "Workstation_WorkstationFeatures_workstationId_fkey";

-- AlterTable
ALTER TABLE "Workstation_WorkstationFeatures" DROP CONSTRAINT "Workstation_WorkstationFeatures_pkey",
DROP COLUMN "workstationId",
ADD COLUMN     "workstationId" INTEGER NOT NULL,
ADD CONSTRAINT "Workstation_WorkstationFeatures_pkey" PRIMARY KEY ("workstationId", "featureID");

-- AddForeignKey
ALTER TABLE "Workstation_WorkstationFeatures" ADD CONSTRAINT "Workstation_WorkstationFeatures_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
