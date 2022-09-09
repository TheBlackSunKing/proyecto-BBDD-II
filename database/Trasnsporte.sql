-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.7.33 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para Transporte
CREATE DATABASE IF NOT EXISTS `Transporte` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `Transporte`;

-- Volcando estructura para tabla Transporte.autobus
CREATE TABLE IF NOT EXISTS `autobus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(50) DEFAULT NULL,
  `num_asientos` int(11) DEFAULT NULL,
  `modelo` varchar(50) DEFAULT NULL,
  `fecha_de_fabricacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla Transporte.cliente
CREATE TABLE IF NOT EXISTS `cliente` (
  `Nombre` varchar(50) DEFAULT NULL,
  `id` int(12) NOT NULL COMMENT 'Clave Primaria',
  `Cedula` int(12) NOT NULL COMMENT 'Cedula',
  `Contraseña` varchar(50) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Cedula` (`Cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla Transporte.empleado
CREATE TABLE IF NOT EXISTS `empleado` (
  `id` int(11) NOT NULL,
  `cedula` int(11) NOT NULL,
  `nombre` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla Transporte.log_salida
CREATE TABLE IF NOT EXISTS `log_salida` (
  `id_salida` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `suceso` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla Transporte.log_usuario
CREATE TABLE IF NOT EXISTS `log_usuario` (
  `id_cliente` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `suceso` text,
  KEY `FK_log_usuario_usuario` (`id_cliente`) USING BTREE,
  CONSTRAINT `FK_log_usuario_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla Transporte.pago
CREATE TABLE IF NOT EXISTS `pago` (
  `id` int(11) NOT NULL COMMENT 'Clave primaria',
  `id_cliente` int(11) NOT NULL,
  `id_salida` int(11) DEFAULT NULL,
  `monto_a_pagar` varchar(50) DEFAULT NULL,
  `referencia_de_pago` int(11) DEFAULT NULL,
  `Origen_del_pago` varchar(50) DEFAULT NULL COMMENT 'Si es transferencia banesco etc',
  PRIMARY KEY (`id`),
  KEY `FK_pago_salida` (`id_salida`),
  KEY `FK_pago_cliente` (`id_cliente`),
  CONSTRAINT `FK_pago_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`),
  CONSTRAINT `FK_pago_salida` FOREIGN KEY (`id_salida`) REFERENCES `salida` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Factura tambien puede ser\r\n\r\n';

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla Transporte.pasaje
CREATE TABLE IF NOT EXISTS `pasaje` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_salida` int(11) DEFAULT NULL,
  `id_autobus` int(11) DEFAULT NULL,
  `fecha_de_venta` datetime DEFAULT NULL,
  `fecha_de_salida` datetime DEFAULT NULL,
  `id_pago` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_pasaje_autobus` (`id_autobus`),
  KEY `FK_pasaje_pago` (`id_pago`),
  KEY `FK_pasaje_salida` (`id_salida`),
  CONSTRAINT `FK_pasaje_autobus` FOREIGN KEY (`id_autobus`) REFERENCES `autobus` (`id`),
  CONSTRAINT `FK_pasaje_pago` FOREIGN KEY (`id_pago`) REFERENCES `pago` (`id`),
  CONSTRAINT `FK_pasaje_salida` FOREIGN KEY (`id_salida`) REFERENCES `salida` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla Transporte.ruta
CREATE TABLE IF NOT EXISTS `ruta` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Destino` varchar(50) DEFAULT NULL,
  `Salida` varchar(50) DEFAULT NULL,
  `Precio` int(11) DEFAULT NULL,
  `Hora_de_Inicio` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Rutas de transporte';

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla Transporte.salida
CREATE TABLE IF NOT EXISTS `salida` (
  `Id_Ruta` int(11) DEFAULT NULL,
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `hora_inicio` datetime DEFAULT NULL COMMENT 'Hora de Inicio esperado',
  `estado` varchar(50) DEFAULT NULL COMMENT 'Tiene 4 estados: En espera, Activo, Cancelado, Completado',
  `hora_de_comienzo` int(11) DEFAULT NULL COMMENT 'Cuando realmente empieza',
  `hora_finalizado` datetime DEFAULT NULL,
  `monto_esperado` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_Ruta` (`Id_Ruta`),
  CONSTRAINT `FK_salida_ruta` FOREIGN KEY (`Id_Ruta`) REFERENCES `ruta` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
