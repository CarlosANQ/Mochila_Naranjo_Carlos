function fechaDeHoy() {
    const fecha = new Date();
    let hoy = fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear();
    return `La fecha de hoy es ${ hoy }`;
}
module.exports = {fechaDeHoy}