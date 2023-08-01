/*
  Warnings:

  - You are about to drop the column `name` on the `Agend` table. All the data in the column will be lost.
  - Added the required column `status` to the `Agend` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Agend" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "service" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL
);
INSERT INTO "new_Agend" ("date", "id", "service") SELECT "date", "id", "service" FROM "Agend";
DROP TABLE "Agend";
ALTER TABLE "new_Agend" RENAME TO "Agend";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
