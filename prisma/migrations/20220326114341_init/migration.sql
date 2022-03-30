-- CreateTable
CREATE TABLE "Human" (
    "hid" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "tags" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "pid" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "uid" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "tags" TEXT NOT NULL
);
