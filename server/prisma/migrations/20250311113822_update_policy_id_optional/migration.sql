/*
  Warnings:

  - Made the column `policyID` on table `Workstation` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Workstation" ALTER COLUMN "policyID" SET NOT NULL;
