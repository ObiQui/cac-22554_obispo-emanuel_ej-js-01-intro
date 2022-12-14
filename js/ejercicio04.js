function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #01\n————————————————————`);

    // Definir variables
    let _horasJornada;
    let _salarioHora;
    let _salarioSemana;
    const _jornadas = 5.5; // 5 completas + media

    // Ingresar salario por hora
    _salarioHora = parseFloat(prompt(`Ingresa el salario por hora:`));
    console.log(`Salario por hora: $${_salarioHora}`);

    // Ingresar horas por jornada
    _horasJornada = parseFloat(prompt(`Ingresa las horas por jornada:`));
    console.log(`Horas por jornada: ${_horasJornada}Hrs`);

    // Calcular el salario semanal
    _salarioSemana = parseFloat( ( _horasJornada * _jornadas ) * _salarioHora );
    console.log(`El salario semanal es de: $${_salarioSemana}`);
}

document.getElementById("start04").onsubmit = iniciar;