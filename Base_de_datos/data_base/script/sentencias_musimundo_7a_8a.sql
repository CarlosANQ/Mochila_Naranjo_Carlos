SELECT primer_nombre, pais FROM clientes WHERE pais='USA';
SELECT nombre, milisegundos FROM canciones WHERE milisegundos BETWEEN 200000 AND 300000;
SELECT * FROM clientes;
SELECT primer_nombre, pais FROM clientes WHERE pais= 'spain' OR pais = 'argentina';
SELECT * FROM generos;
SELECT nombre FROM generos ORDER BY nombre ASC;
SELECT id, primer_nombre, pais FROM clientes ORDER BY pais DESC;
SELECT primer_nombre FROM clientes ORDER BY pais DESC, ciudad;
SELECT * FROM canciones;
SELECT nombre, milisegundos, id_album FROM canciones 
WHERE milisegundos=( SELECT MAX(milisegundos) FROM canciones);
SELECT nombre, milisegundos, id_album FROM canciones order by milisegundos DESC LIMIT 4 ;
SELECT nombre, compositor FROM canciones ORDER BY nombre ASC LIMIT 6 OFFSET 5;





