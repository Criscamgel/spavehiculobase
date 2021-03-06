const nombreCliente = "Santander Consumer"

export const Constantes = {
    periodos: [48, 60, 72, 84],
    minimo: 20000000,
    precioMinimo: 40000000,
    valorMinIngreso: 1200000,
    tasa: 0.0115,
    constanteSeguro: 1200 / 1000000,
     /* Regex */
     patternLetter: "^[a-zA-Z áéíóúñÁÉÍÓÚÑ]+$",
     patternNumber: "[0-9]+$",
     patternCel: "^3+[0-9]{0,10}$",
     patternMail: "^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$",

     ocupaciones: [
        {value: null, name: 'Tipo de ocupación'},
        {value: 1, name: 'Pensionado'}, /* 15 */
        {value: 11, name: 'Empleado'}, /* 16 */
        {value: 2, name: 'Independiente'} /* 3 */
    ],

    tipoDocumento: [
        {value: null, name: 'Tipo de identificación'},
        {value: 1, name: 'Cédula de Ciudadanía'},
        {value: 2, name: 'Cédula de Extranjería'},
        {value: 3, name: 'NIT'}
    ],

    username: "santander",    
    password: "bs4n4p1",

    tyc: {
        titulo: `TERMINOS Y CONDICIONES PORTAL ${nombreCliente}`,
        contenido:[
                   "SANTANDER CONSUMER informa que: 1) Actúa como fuente, usuario y en general responsable y/o encargado de Tratamiento de información personal, comercial, financiera, socioeconómica, crediticia, de servicios y eventualmente proveniente de terceros países (en adelante Información Personal). Actúa en virtud de los convenios que tiene celebrados con instituciones financieras para colaborar en la administración de centros de atención a clientes de tales instituciones, para la financiación  de vehículos, por lo cual puede trabajar bien sea directamente o para transmitir y entregar posteriormente la Información Personal a la institución financiera o al concesionario donde se venden los vehículos automotores. Para todos los efectos de la presente autorización dicha institución financiera, concesionario de venta de vehículos o, en general, quien obre en nombre de SANTANDER CONSUMER o quien represente sus derechos y sus sucesores a cualquier título, se definirán como EL TERCERO AUTORIZADO. 2) El Tratamiento de la Información Personal incluye la recolección, almacenamiento, procesamiento, uso, circulación, transmisión, consulta, reporte y supresión. 3) El Titular de la Información Personal tiene los derechos previstos en la Constitución y la ley, especialmente el de conocer, actualizar y rectificar la Información Personal.",
                   "Estos derechos los podrá ejercer SANTANDER CONSUMER o el TERCERO AUTORIZADO conforme con el procedimiento establecido en las Políticas de Recolección, Uso y Administración de Información Personal que SANTANDER CONSUMER mantiene a disposición del Titular en la página www.premiercredit.co. 4) El Titular de la Información Personal, obrando directamente o a través de quien suscribe este documento, de manera voluntaria y explícita confiere autorización a SANTANDER CONSUMER o al TERCERO AUTORIZADO para TRATAR la Información Personal, con los siguientes fines: a) Análisis de riesgos financieros, para ofrecimiento de productos y servicios financieros tales como créditos, banca seguros, y en general los productos y servicios que las disposiciones legales permitan desarrollar a SANTANDER CONSUMER o al TERCERO AUTORIZADO. b) Para la verificación de mi identidad en operaciones financieras, autorizo la recolección, almacenamiento y uso de mis Datos Biométricos, los cuales conozco que son datos sensibles. c) Para circular y transferir mi Información Personal a la fuerza comercial y/o red de distribución, telemercadeo y a terceros con los que SANTANDER CONSUMER o el TERCERO AUTORIZADO establezca contratos, convenios, acuerdos y alianzas para los fines indicados en esta Autorización, así como para implementar software y servicios de computación en la nube. PREMIER CREDIT o el TERCERO AUTORIZADO quedan autorizados para obtener información sobre mis relaciones comerciales con otras entidades y consultar mis reportes ante las centrales de información; para ello se autoriza de manera expresa, previa e irrevocable a SANTANDER CONSUMER o al TERCERO AUTORIZADO a realizar ante cualquier operador de centrales de información cualquier operación o Tratamiento sobre la información y los Datos Personales entregados, incluyendo la consulta, solicitud, procesamiento y divulgación de toda la información relacionada con su comportamiento crediticio, el origen de las obligaciones a su cargo, cualquier novedad, modificación, extinción, cumplimiento o incumplimiento de obligaciones.",
                   "Queda autorizado para verificar mi comportamiento en las relaciones establecidas con cualquier otra entidad, bien directamente ante tal entidad o bien a través de un operador de la información; se autoriza a recolectar, obtener, compilar, ofrecer, vender, intercambiar, enviar, divulgar, modificar, emplear, almacenar, procesar, transferir a cualquier título, y, en general, administrar la Información Personal provenientes del titular de los datos o sus legítimos representantes, de las fuentes de información con las que se celebren convenios o contratos para el efecto, de los registros, documentos o publicaciones a los cuales haya tenido acceso SANTANDER CONSUMER o el TERCERO AUTORIZADO de otros bancos de datos o archivos de información cuyo objeto sea o no similar al de SANTANDER CONSUMER o el TERCERO AUTORIZADO; de autoridades públicas, nacionales o internacionales, que administren o lleven registros del cumplimiento e incumplimiento de obligaciones fiscales, parafiscales, relacionadas con la prevención del blanqueo o lavado de activos o de la financiación del terrorismo y cualquier otra información de carácter público, de bases de información pública y, en general, de cualquier otra permitida por la normatividad aplicable. En consideración a que como consecuencia del análisis de riesgos y crediticio, la solicitud de financiación se puede concretar por una de varias instituciones financieras con las cuales SANTANDER CONSUMER tiene establecidos convenios o relaciones comerciales, o que la financiación puede provenir incluso del propio concesionario vendedor o de personas o entidades vinculadas con tal concesionario",
                   "SANTANDER CONSUMER informa que tiene publicadas sus Políticas de Recolección, Uso y Administración de Información Personal en la página www.premiercredit.co. El Titular de la Información Personal, abajo firmante, informa a PREMIER que en desarrollo de los pagos efectuados de aportes al Sistema de Protección Social, en desarrollo de la autoliquidación y pagos o de la liquidación por parte de un eventual empleador, se ha entregado su Información Personal al diligenciar la Planilla Integrada de Liquidación de Aportes – PILA, información relacionada con sus ingresos mensuales base de cotización, pagos a través del PILA y otros datos financieros. El Titular de la Información Personal confiere autorización para TRATAR su Información Personal, para recolectar, transferir, almacenar, usar, circular, suprimir, compartir, actualizar y transmitir la Información Personal con los siguientes fines: 1) Análisis de riesgos financieros, para ofrecimiento de productos financieros; 2) Para recolectar mis datos, consultarlos, procesarlos, divulgarlos y mantenerlos ante cualquier operador de bases de datos. Se reconoce y acepta que los datos objeto del tratamiento, pueden llegar a quedar alojados por fuera de Colombia, en virtud de contratos o procesamiento de tal información con responsables de tal manejo por fuera de Colombia, caso en el cual PREMIER entregará la información bajo la existencia de un contrato y a responsables ubicados en países con un nivel de protección de datos personales similar o superior al existente en Colombia. Se deja expresa constancia que la presente autorización puede ser revocada por el usuario y Titular de la Información Personal, en la medida que se cumplan con los requisitos legales para tal revocatoria"
                  ]
       },
    
    /* Imagenes */
    aprobado: './assets/img/aprobado.png',
    negado: './assets/img/negado.png',
    fondo: './assets/img/fondo.png',
    cliente: './assets/img/consumerFinance.png',
    santander: './assets/img/consumerFinance.png',
    santanderGris: './assets/img/consumerFinanceGris.png',
    santanderBlanco: './assets/img/consumerFinanceBlanco.png'
}