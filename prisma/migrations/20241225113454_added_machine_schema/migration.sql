-- CreateTable
CREATE TABLE "Machine" (
    "id" TEXT NOT NULL,
    "num" INTEGER NOT NULL,
    "category" VARCHAR(10) NOT NULL DEFAULT 'C',
    "name" TEXT NOT NULL,
    "jackpot" TEXT NOT NULL DEFAULT '£100',
    "tito" BOOLEAN NOT NULL DEFAULT false,
    "cashIn" BOOLEAN NOT NULL DEFAULT true,
    "cashOut" BOOLEAN NOT NULL DEFAULT true,
    "ticketIn" BOOLEAN DEFAULT false,
    "ticketOut" BOOLEAN DEFAULT false,
    "refill" BOOLEAN DEFAULT false,
    "handPay" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Machine_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Machine_num_key" ON "Machine"("num");
