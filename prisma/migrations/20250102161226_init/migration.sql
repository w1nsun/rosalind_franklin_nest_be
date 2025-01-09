-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "auth_users" (
    "id" UUID NOT NULL,
    "first_name" VARCHAR(128) NOT NULL,
    "last_name" VARCHAR(128) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "auth_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_user_contacts" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "is_main" BOOLEAN NOT NULL DEFAULT false,
    "phone" VARCHAR(32) DEFAULT NULL,
    "country" VARCHAR(3) DEFAULT NULL,
    "zip_code" VARCHAR(16) DEFAULT NULL,
    "address" VARCHAR(255) DEFAULT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "auth_user_contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_employees" (
    "id" UUID NOT NULL,
    "org_id" UUID NOT NULL,
    "role_id" UUID NOT NULL,
    "first_name" VARCHAR(128) NOT NULL,
    "last_name" VARCHAR(128) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "auth_employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_employe_roles" (
    "id" UUID NOT NULL,
    "org_id" UUID NOT NULL,
    "title" VARCHAR(128) NOT NULL,
    "permissions" JSONB NOT NULL DEFAULT '{}',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "auth_employe_roles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "auth_users_email_key" ON "auth_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "auth_employees_org_id_email_key" ON "auth_employees"("org_id", "email");
