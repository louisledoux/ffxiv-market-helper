-- CreateEnum
CREATE TYPE "Datacenter" AS ENUM ('Elemental', 'Gaia', 'Mana', 'Chaos', 'Light', 'Aether', 'Primal', 'Crystal');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "pseudo" TEXT NOT NULL,
    "avatar" TEXT,
    "datacenter" "Datacenter" NOT NULL,
    "server" TEXT NOT NULL,
    "retainers" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alert" (
    "id" TEXT NOT NULL,
    "item_id" TEXT NOT NULL,
    "market_helper_activated" BOOLEAN NOT NULL,
    "minimum_margin" INTEGER,
    "minimum_price" INTEGER,
    "hqOnly" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
