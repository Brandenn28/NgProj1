-- CreateEnum
CREATE TYPE "WorkstationAvailability" AS ENUM ('Available', 'Unavailable', 'Maintenance');

-- CreateTable
CREATE TABLE "Workstation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "workstationId" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "block" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "roomCode" TEXT NOT NULL,
    "availability" "WorkstationAvailability" NOT NULL,
    "typeID" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workstation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkstationType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "WorkstationType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkstationFeatures" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "WorkstationFeatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workstation_WorkstationFeatures" (
    "workstationId" INTEGER NOT NULL,
    "featureID" INTEGER NOT NULL,

    CONSTRAINT "Workstation_WorkstationFeatures_pkey" PRIMARY KEY ("workstationId","featureID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Workstation_name_key" ON "Workstation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Workstation_workstationId_key" ON "Workstation"("workstationId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkstationType_name_key" ON "WorkstationType"("name");

-- AddForeignKey
ALTER TABLE "Workstation" ADD CONSTRAINT "Workstation_typeID_fkey" FOREIGN KEY ("typeID") REFERENCES "WorkstationType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workstation_WorkstationFeatures" ADD CONSTRAINT "Workstation_WorkstationFeatures_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workstation_WorkstationFeatures" ADD CONSTRAINT "Workstation_WorkstationFeatures_featureID_fkey" FOREIGN KEY ("featureID") REFERENCES "WorkstationFeatures"("id") ON DELETE CASCADE ON UPDATE CASCADE;
