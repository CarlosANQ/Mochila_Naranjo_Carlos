-- Consultas queries XL parte I

-- Clientes

-- 1) ¿Cuántos clientes existen?
SELECT COUNT(ClienteID) AS cantidad_clientes FROM clientes; -- 91

-- 2) ¿Cuántos clientes hay por ciudad?
SELECT Ciudad, COUNT(ClienteID) AS cantidad_clientes FROM clientes GROUP BY Ciudad;

-- facturas

-- 1) ¿Cual es el total de transporte?
select sum(Transporte) from facturas; -- 64942.69

-- 2) ¿Cual es el total de transporte por EnvioVia (empresa de envío)?
select EnvioVia, sum(Transporte) from facturas
group by EnvioVia;

-- 3) Calcular la cantidad de facturas por cliente. Ordenar descendentemente por cantidad de facturas.
select count(ClienteID) from facturas
group by ClienteID
order by count(ClienteID) desc;

-- 4) Obtener el Top 5 de clientes de acuerdo a su cantidad de facturas.
select ClienteID, count(*) from facturas
group by ClienteID
order by count(*) desc
limit 5; -- SAVEA, ERNSH, QUICK, FOLKO, HUNGO

-- 5) ¿Cual es el país de envío menos frecuente de acuerdo a la cantidad de facturas?
select PaisEnvio, count(*) from facturas
group by PaisEnvio
order by count(*); -- Norwey

-- 6) Se quiere otorgar un bono al empleado con más ventas. ¿Qué ID de empleado realizó más operaciones de ventas?
select EmpleadoID, count(*) from facturas
group by EmpleadoID
order by count(*) desc; -- 4

-- Factura Detalle

-- 1)¿Cuál es el producto que aparece en más líneas dela tabla Factura Detalle?
SELECT ProductoID, COUNT( ProductoID ) AS totalVeces
FROM  FacturaDetalle
GROUP BY ProductoID
ORDER BY totalVeces DESC ; -- 59

-- 2) ¿Cuál es el total facturado? Considerar que el total facturado es la suma de cantidad por precio unitario. 
SELECT SUM( PrecioUnitario ) AS totalFacturado FROM  FacturaDetalle; -- 56500.910000000134

-- 3) ¿Cuál es el total facturado para los productos ID entre 30 y 50? 
 select  sum(precioUnitario) FROM facturadetalle where productoID between 30 and 50; -- 14268.280000000008

-- 4) ¿Cuál es el precio unitario promedio de cada producto?
select ProductoID, avg(PrecioUnitario) from facturadetalle group by ProductoID;

-- 5) ¿Cuál es el precio unitario máximo? 
select max(precioUnitario) from facturadetalle; -- 263.5