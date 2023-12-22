-- DropIndex
DROP INDEX `Usuario_empresaId_fkey` ON `usuario`;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `avatar` VARCHAR(191) NOT NULL DEFAULT 'http://localhost:3000/images/dark-noimagen.jpg';

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
