-- select * from canciones;
-- select * from generos;
-- select * from albumes;
-- select * from artistas;

#muestre todos los registros que contengan canciones con sus géneros, 
#Y que el compositor sea Willie Dixon, Y que tengan el género Blues.
-- select canciones.id, canciones.nombre, compositor, id_genero, generos.* from canciones, generos
-- where canciones.compositor='Willie Dixon' AND canciones.id_genero = generos.id;

#Hacé una consulta a nuestra base de datos que nos devuelva los nombres de las canciones que tengan género rock.
-- select canciones.id, canciones.nombre, compositor, id_genero, generos.* from canciones 
-- inner join generos on canciones.id_genero=generos.id;

#Deep Purple. Hacé una consulta a nuestra base de datos que nos traiga el título del álbum 
#y el autor, para saber si lo que le estamos vendiendo es correcto.
-- select * from albumes, artistas;
-- select albumes.id, albumes.titulo, artistas.id, artistas.nombre  from albumes join artistas on albumes.id_artista=artistas.id and artistas.nombre='Deep Purple' ;
-- select albumes.titulo, id_artista, artistas.nombre from albumes inner join artistas
-- on id_artista = artistas.id where artistas.nombre = "Deep Purple";

# los desarrolladores decidieron que sólo van a subir canciones que tengan el tipo de medio "MPEG audio file".
#Ayuda al equipo y obtengamos una lista en las cuales tengas el nombre de las canciones que tengan ese tipo de medio.
SELECT * FROM canciones, tipos_de_medio;
SELECT canciones.id, canciones.nombre, id_tipo_de_medio, tipos_de_medio.id, tipos_de_medio.nombre FROM canciones JOIN tipos_de_medio
ON id_tipo_de_medio=tipos_de_medio.id AND tipos_de_medio.nombre='MPEG audio file';    




