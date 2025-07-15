-- CreateTable
CREATE TABLE `Proyecto` (
    `id` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaActualizacion` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Archivo` (
    `id` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `ruta` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NULL,
    `tamano` INTEGER NULL,
    `proyectoid` VARCHAR(191) NULL,

    UNIQUE INDEX `Archivo_ruta_key`(`ruta`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Archivo` ADD CONSTRAINT `Archivo_proyectoid_fkey` FOREIGN KEY (`proyectoid`) REFERENCES `Proyecto`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
