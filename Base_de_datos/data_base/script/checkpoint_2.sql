SELECT * FROM usuario;
SELECT * FROM tipousuario;
SELECT  IdTipoUsuario, count(IdTipoUsuario)FROM usuario GROUP BY IdTipoUsuario;
SELECT * FROM album;
SELECT titulo FROM album  WHERE titulo LIKE '%z%';
SELECT idusuario, cantcanciones FROM playlist;
SELECT idusuario, AVG(cantcanciones)  FROM playlist;
SELECT * FROM playlist;
SELECT titulo , max(cantcanciones) FROM playlist;
SELECT nombreusuario, fecha_nac FROM usuario ORDER BY  fecha_nac ASC LIMIT 10 ;
SELECT * FROM usuario;
SELECT * FROM passwordxusuario;
SELECT Fecha, count(fecha) FROM passwordxusuario GROUP BY  Fecha;
SELECT count(Password), max(fecha), min(Fecha) Fecha FROM passwordxusuario  GROUP BY  Password  LIMIT 3;


