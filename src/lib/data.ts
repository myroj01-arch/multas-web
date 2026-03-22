// =============================================================================
// TIPOS
// =============================================================================

export interface CasoPruebaSocial {
  inicial: string
  ciudad: string
  resultado: string
  descripcion: string
}

export interface PreguntaFAQ {
  pregunta: string
  respuesta: string
}

export interface Anuncio {
  texto: string
  tipo: 'principal' | 'prescripcion' | 'alcoholemia' | 'prueba-social' | 'precio' | 'emocional'
}

// =============================================================================
// DATOS DE LA PÁGINA
// =============================================================================

export const siteConfig = {
  nombre: 'Gestión de Multas de Tránsito',
  telefono: '+57 315 676 9443',
  whatsapp: '573156769443',
  email: 'shaggy6685@gmail.com',
  precioMulta: 150000,
  currency: 'COP',
  pais: 'Colombia',
}

export const heroContent = {
  variantA: {
    titulo: '¿Tienes multas de tránsito que crees injustas? Nosotros las revisamos gratis.',
    subtitulo: 'Si encontramos sustento jurídico y documental para avanzar, te gestionamos la revocatoria o exoneración. Sin avanzar a ciegas. Sin cobrarte si no hay caso sólido.',
    cta: 'Revisar mis multas gratis',
    textoSecundario: 'En Colombia, muchas multas pueden ser revocadas o declaradas prescritas. Pero no todas valen la pena. Nosotros solo actuamos cuando el expediente lo justifica. Diagnóstico inicial sin costo.',
  },
  variantB: {
    titulo: 'Multas de tránsito en Colombia: las enfrentamos solo cuando hay base para ganar.',
    subtitulo: 'Cobramos 150.000 pesos por cada multa tramitada. Si no hay sustento jurídico, te lo decimos desde el inicio y no pagas nada.',
    cta: 'Solicitar diagnóstico gratis',
    textoSecundario: 'Revisamos tu caso, te decimos si vale la pena avanzar y cuánto cuesta el trámite. Sin sorpresas.',
  },
}

export const modeloContent = {
  diagnostico: {
    titulo: 'Diagnóstico inicial: GRATIS',
    descripcion: 'Para todo tipo de caso — multa normal, fotomulta, reincidencia, alcoholemia. Cualquiera. Revisamos tu situación sin costo y te decimos con honestidad si hay argumentos para pelearla.',
  },
  gestionNormal: {
    titulo: 'Gestión de multas normales',
    precio: 150000,
    descripcion: 'Si después del diagnóstico decidimos que hay sustento para avanzar, cobramos 150.000 pesos colombianos por cada multa que tramitemos. Ese valor cubre el análisis jurídico, la preparación del expediente, la radicación y el seguimiento hasta resolución.',
    incluye: [
      'Análisis jurídico completo del caso',
      'Revisión de plazos, vicios y argumentos legales',
      'Preparación del expediente con los documentos necesarios',
      'Elaboración y radicación del recurso o solicitud correspondiente',
      'Seguimiento ante la autoridad de tránsito competente',
      'Comunicación de cada novedad en el proceso',
      'Gestión hasta obtener resolución definitiva',
    ],
  },
  gestionAlcoholemia: {
    titulo: 'Gestión de casos de alcoholemia',
    descripcion: 'Los casos por alcoholemia son diferentes. La complejidad varía según el caso, el nivel de alcoholemia, los antecedentes y el municipio. Por eso no manejamos un valor fijo. Después de revisar tu situación, te proponemos un precio justo y lo acordamos antes de empezar. Sin improvisar.',
    incluye: [
      'Análisis jurídico especializado del caso particular',
      'Evaluación del nivel de alcoholemia y sus efectos legales',
      'Revisión del procedimiento de retención y pruebas realizadas',
      'Elaboración de estrategia de defensa según el caso',
      'Preparación del expediente completo',
      'Gestión ante la autoridad judicial o administrativa correspondiente',
      'Seguimiento activo hasta resolución',
    ],
  },
  compromiso: 'Solo avanzamos cuando vemos sustento jurídico y documental. Si tu caso no tiene argumentos sólidos, te lo decimos y no cobramos nada. Así de claro.',
}

export const casosPruebaSocial: CasoPruebaSocial[] = [
  { inicial: 'A.E.', ciudad: 'Cali', resultado: 'Revocatoria concedida + paz y salvo', descripcion: 'Revocamos el comparendo y obtuvimos el paz y salvo. Caso cerrado en su totalidad.' },
  { inicial: 'A.L.', ciudad: 'Cali', resultado: 'Revocatoria resuelta + paz y salvo', descripcion: 'Demostramos vicios en el procedimiento. La autoridad revocó el comparendo y el cliente quedó a paz y salvo.' },
  { inicial: 'Y.T.', ciudad: 'Calarcá', resultado: 'Exoneración por prescripción', descripcion: 'La autoridad tenía el término vencido. Presentamos el recurso y conseguimos la exoneración total.' },
  { inicial: 'O.D.', ciudad: 'Bello', resultado: 'Revocatoria directa + paz y salvo', descripcion: 'Revocatoria directa ganada. Sin pagos, sin deudas, paz y salvo expedido.' },
  { inicial: 'C.T.', ciudad: 'Cali', resultado: 'Exoneración por falsedad ideológica', descripcion: 'El comparendo tenía inconsistencias documentales graves. Presentamos el caso y la autoridad confesó el error.' },
  { inicial: 'J.F.R.', ciudad: 'Armenia', resultado: 'Declaración de prescripción + archivo', descripcion: 'Lanzamos la excepción de prescripción en término. La autoridad declaró la prescripción y archivó el caso.' },
  { inicial: 'C.C.', ciudad: 'Armenia', resultado: 'Prescripción Art. 818', descripcion: 'El comparendo quedó obsoleto por vencimiento de términos. Aplaudimos el Art. 818 para ustedes también.' },
  { inicial: 'D.L.', ciudad: 'Armenia', resultado: 'Prescripción + deja sin efectos', descripcion: 'La autoridad no actuó en el término legal. Dejamos sin efectos el comparendo sin que el cliente pagara un peso.' },
  { inicial: 'A.C.T.', ciudad: 'Cali', resultado: 'Absolución con Sentencia 038', descripcion: 'El caso llegó a instancia y ganamos por fallo a favor. Sentencia 038 aplicada a nuestro favor.' },
  { inicial: 'C.D.', ciudad: 'Cali', resultado: 'Exoneración por fotomulta', descripcion: 'La fotomulta tenía errores de calibración y errores en la placa del vehículo. Exoneramos completamente.' },
  { inicial: 'D.M.', ciudad: 'Cali', resultado: 'Revocatoria + exoneración', descripcion: 'Un caso con dos comparendos. Revocamos uno y exoneramos el otro. Dobles victoria.' },
  { inicial: 'J.A.D.', ciudad: 'Bogotá', resultado: 'Caso positivo', descripcion: 'El proceso took su tiempo, pero el resultado llegó. Caso tramitado con resolución favorable.' },
  { inicial: 'M.A.L.', ciudad: 'Medellín', resultado: 'Caso ganado', descripcion: 'Otro caso cerrado con resolución a favor. Medellín se hizo justicia.' },
  { inicial: 'L.H.R.', ciudad: 'Circasia', resultado: 'Prescripción Art. 818', descripcion: 'Sí, otra prescripción. Esta vez en Circasia. El Art. 818 no perdona a las autoridades lentas.' },
  { inicial: 'A.V.R.', ciudad: 'Yumbo', resultado: 'Resolución positiva', descripcion: 'Resolución favorable obtenida. Otro caso ganado con sustento jurídico.' },
  { inicial: 'G.V.', ciudad: 'Zaragoza', resultado: 'Caso ganado especial', descripcion: 'Un caso que no era fácil. Apostamos por la vía jurídica correcta y ganamos.' },
  { inicial: 'C.R.', ciudad: 'Palmira', resultado: 'Caso tramitado exitosamente', descripcion: 'Caso tramitado de principio a fin con resolución favorable. Así de directo.' },
  { inicial: 'J.C.A.', ciudad: 'Piendamó', resultado: 'Caso ganado', descripcion: 'Ganamos en Piendamó. Otro caso resuelto con documento oficial.' },
  { inicial: 'A.B.S.', ciudad: 'Bucaramanga', resultado: 'Paz y salvo', descripcion: 'Caso tramitado y resuelto con paz y salvo. Sin deuda, sin comparendo vigente.' },
]

export const beneficiosContent = [
  {
    titulo: 'Diagnóstico inicial sin costo',
    descripcion: 'No te cobramos por saber si tu caso tiene argumentos para avanzar. Revisamos tu situación y te decimos con honestidad si vale la pena pelearla.',
  },
  {
    titulo: 'Solo cobramos cuando hay sustento real',
    descripcion: 'Si después de la revisión decidimos que no hay base jurídica para ganar tu caso, no pagas nada. No te arrastramos a un proceso sin sentido solo para cobrarte.',
  },
  {
    titulo: '$150.000 COP por multa tramitada',
    descripcion: 'Nuestro precio es claro y fijo. Incluye análisis jurídico, preparación del expediente, radicación ante la autoridad competente y seguimiento hasta resolución.',
  },
  {
    titulo: 'Casos de alcoholemia atendidos',
    descripcion: 'Sí trabajamos casos por alcoholemia. La complejidad varía, así que evaluamos cada situación y acordamos el precio antes de empezar.',
  },
  {
    titulo: 'Resoluciones favorables documentadas',
    descripcion: 'Contamos con expedientes reales con resoluciones firmadas, paz y salvos y cierres favorables. No vendemos humo ni prometemos porcentajes.',
  },
  {
    titulo: 'Análisis jurídico especializado',
    descripcion: 'Revisamos plazos de prescripción, vicios de procedimiento, errores en la liquidación, falta de notificación válida y cualquier argumento a tu favor.',
  },
  {
    titulo: 'Trámite en todo Colombia',
    descripcion: 'Cali, Bogotá, Medellín, Armenia, Bucaramanga, Palmira, Yumbo, Bello, Calarcá, Circasia, Piendamó, Zaragoza. Trabajamos donde esté tu caso.',
  },
  {
    titulo: 'Seguimiento constante',
    descripcion: 'Te mantenemos informado en cada etapa. Si la autoridad pide algo adicional, te lo comunicamos. Si hay un plazo, te lo avisamos.',
  },
]

export const procesoPasos = [
  {
    paso: 1,
    titulo: 'Solicita tu diagnóstico gratis',
    descripcion: 'Completa el formulario con tus datos y la información de tu multa. No necesitas tener todos los documentos listos. Con lo básico alcanzamos para hacer una primera evaluación.',
  },
  {
    paso: 2,
    titulo: 'Revisamos tu caso',
    descripcion: 'Analizamos los documentos que tengas, verificamos plazos, revisamos el tipo de multa, el comparendo o la resolución y buscamos errores, vicios o causales de prescripción.',
  },
  {
    paso: 3,
    titulo: 'Te contamos si hay sustento para avanzar',
    descripcion: 'Si encontramos argumentos jurídicos sólidos, te explicamos cuáles son, qué probabilidades hay y cuánto cuesta el trámite. Si no hay base suficiente, te lo decimos y no te cobramos nada.',
  },
  {
    paso: 4,
    titulo: 'Si decides avanzar, empezamos la gestión',
    descripcion: 'Con tu aprobación, preparamos el expediente completo, radicamos el recurso o la solicitud ante la autoridad competente y hacemos seguimiento activo hasta obtener resolución.',
  },
  {
    paso: 5,
    titulo: 'Resolución y cierre',
    descripcion: 'Cuando obtenemos una resolución favorable, un archivo del proceso o un paz y salvo, te lo entregamos documentado. Si el resultado no es favorable, te informamos con claridad y te explicamos las opciones restantes.',
  },
]

export const queRevisamos = [
  {
    titulo: 'Plazos de prescripción',
    descripcion: 'Verificamos si la multa ya está prescrita según el Art. 818 del Estatuto Tributario modificado por la Ley 1816 de 2016. Muchos casos se ganan por prescripción.',
  },
  {
    titulo: 'Vicios de procedimiento',
    descripcion: 'Revisamos si la autoridad incurrió en errores formales durante el proceso sancionatorio. Notificación defectuosa, falta de motivación, violación al derecho de defensa.',
  },
  {
    titulo: 'Errores en la liquidación de la multa',
    descripcion: 'Comparamos el monto liquidado con la tabla vigente. Hay multas mal liquidadas que se pueden impugnar por este solo motivo.',
  },
  {
    titulo: 'Falta de notificación válida',
    descripcion: 'Si no te notificaron correctamente o si la notificación se hizo en un medio que no cumple los requisitos legales, el comparendo puede caer.',
  },
  {
    titulo: 'Inconsistencias en los hechos',
    descripcion: 'Revisamos si los hechos atribuidos son coherentes con la realidad. Fechas, lugares, tipos de vehículo, información del conductor. Cualquier inconsistencia puede ser un argumento.',
  },
  {
    titulo: 'Validez del comparendo o la resolución',
    descripcion: 'Analizamos si el documento base del proceso cumple con los requisitos formales establecidos en el Código Nacional de Tránsito.',
  },
  {
    titulo: 'Antecedentes y contexto',
    descripcion: 'Evaluamos tu historial como conductor, reincidencia, gravedad de la infracción y cualquier circunstancia que pueda afectar positiva o negativamente tu caso.',
  },
  {
    titulo: 'Posibilidad real de éxito',
    descripcion: 'Al final del análisis, te decimos con honestidad si el caso vale la pena. Si no hay sustento, no te recomendamos avanzar y no cobramos nada.',
  },
]

export const queNoPrometemos = [
  {
    titulo: 'No prometemos ganar todos los casos',
    descripcion: 'Ningún abogado serio puede prometer eso. Lo que prometemos es hacer el mejor análisis posible y gestionar tu caso con rigor. Si no hay base para ganar, te lo decimos.',
  },
  {
    titulo: 'No prometemos resultados inmediatos',
    descripcion: 'Los procesos de tránsito en Colombia toman tiempo. No trabajamos con la promesa de "resultados en días". Lo que prometemos es dar seguimiento constante y mantenerte informado.',
  },
  {
    titulo: 'No prometemos exonerar multas sin sustento',
    descripcion: 'Si tu multa no tiene errores, vicios o causales de prescripción, no te recomendamos avanzar. No te cobramos por un proceso que no tiene fundamento.',
  },
  {
    titulo: 'No prometemos cobrar menos de lo que decimos',
    descripcion: 'El precio de $150.000 COP por multa es fijo y claro. No hay costos ocultos ni cobros adicionales. En alcoholemia, acordamos el precio antes de empezar.',
  },
  {
    titulo: 'No prometemos porcentajes de efectividad',
    descripcion: 'En internet vas a encontrar páginas que aseguran "97% de efectividad". Eso es marketing, no realidad. Nosotros mostramos casos reales documentados. No fabricamos porcentajes.',
  },
  {
    titulo: 'No prometemos que todos los recursos sean acogidos',
    descripcion: 'Las autoridades de tránsito evalúan los recursos según su propio criterio. Hacemos todo bien, pero el resultado depende de la autoridad competente. Lo que sí prometemos es presentar el mejor caso posible.',
  },
]

export const faqContent: PreguntaFAQ[] = [
  {
    pregunta: '¿Cuánto cuesta la primera revisión de mi multa?',
    respuesta: 'Nada. El diagnóstico inicial es completamente gratis para todo tipo de caso: comparendos, fotomultas, reincidencia y alcoholemia. Revisamos tu situación y te decimos si hay sustento para avanzar.',
  },
  {
    pregunta: '¿Cuánto cuesta gestionar una multa de tránsito?',
    respuesta: '$150.000 pesos colombianos por cada multa tramitada. Ese valor incluye análisis jurídico, preparación del expediente, radicación y seguimiento hasta resolución. No hay costos ocultos.',
  },
  {
    pregunta: '¿Y si mi multa no tiene argumentos para ser revocada?',
    respuesta: 'Si después de la revisión determinamos que no hay sustento jurídico para avanzar, te lo decimos y no cobramos nada. Preferimos perdernos una gestión antes que cobrarte por un caso sin fundamento.',
  },
  {
    pregunta: '¿Trabajan casos de alcoholemia?',
    respuesta: 'Sí. Trabajamos casos de alcoholemia. Como la complejidad varía mucho según el caso, el precio se acuerda después de la revisión inicial (gratis). No manejamos un monto fijo para alcoholemia.',
  },
  {
    pregunta: '¿Cuánto tiempo tarda el proceso?',
    respuesta: 'Depende del municipio, del tipo de multa y de la autoridad competente. Algunos casos se resuelven en semanas; otros pueden tomar meses. Lo que sí hacemos es dar seguimiento constante y mantenerte informado de cada avance.',
  },
  {
    pregunta: '¿Necesito tener todos los documentos para solicitar el diagnóstico?',
    respuesta: 'No. Con la información básica de tu comparendo o resolución alcanza para hacer una primera evaluación. Si vemos que hay sustento, te indicamos qué documentos adicionales necesitamos.',
  },
  {
    pregunta: '¿En qué ciudades trabajan?',
    respuesta: 'Trabajamos en todo Colombia. Cali, Bogotá, Medellín, Armenia, Bucaramanga, Palmira, Yumbo, Bello, Calarcá, Circasia, Piendamó, Zaragoza y cualquier otro municipio donde tengas tu caso.',
  },
  {
    pregunta: '¿Qué pasa si la autoridad de tránsito rechaza mi recurso?',
    respuesta: 'Si el recurso es rechazado, te informamos con claridad, te explicamos las opciones restantes y te decimos si tiene sentido continuar. No abandonamos el caso sin darte toda la información.',
  },
  {
    pregunta: '¿Cómo sé que sus casos son reales?',
    respuesta: 'Contamos con expedientes documentados con resoluciones favorables, paz y salvos y archivos de proceso. Cada caso que mostramos tiene soporte documental. No mostramos porcentajes inventados ni promesas vacías.',
  },
  {
    pregunta: '¿Qué incluye exactamente el servicio por $150.000 COP?',
    respuesta: 'Análisis jurídico completo de la multa, revisión de causales de impugnación, preparación del expediente, elaboración y radicación del recurso, seguimiento ante la autoridad competente, y comunicación de novedades hasta resolución definitiva.',
  },
  {
    pregunta: '¿Puedo gestionar varias multas a la vez?',
    respuesta: 'Sí. Cada multa se tramita de forma independiente. Si tienes tres multas, cobramos $150.000 COP por cada una.',
  },
  {
    pregunta: '¿Qué pasa si mi multa está prescrita?',
    respuesta: 'La prescripción es una causal de extinción de la obligación según el Art. 818 del Estatuto Tributario. Si detectamos que tu multa está prescrita, te lo informamos y tramitamos la declaratoria de prescripción.',
  },
  {
    pregunta: '¿Ustedes garantizan que mi multa sea revocada?',
    respuesta: 'No hacemos garantías. Hacemos análisis rigurosos y gestión profesional. Si hay sustento para ganar, hacemos todo lo posible por lograrlo. Si no lo hay, te lo decimos antes de empezar.',
  },
]

export const anunciosContent: Anuncio[] = [
  { texto: '¿Tienes multas de tránsito que crees injustas? Las revisamos gratis. Si hay sustento, te ayudamos desde $150.000 COP. Sin cobrarte si no hay caso.', tipo: 'principal' },
  { texto: 'Muchas multas de tránsito en Colombia ya están prescritas. Revísamos tu caso sin costo y te decimos si puedes librarte de la multa. Gestión desde $150.000 COP si hay sustento.', tipo: 'prescripcion' },
  { texto: '¿Tienes un caso por alcoholemia? Evaluamos tu situación sin costo. Si hay argumentos para pelearlo, gestionamos tu defensa. Precio acordado según tu caso particular.', tipo: 'alcoholemia' },
  { texto: '19 casos tramitados con resoluciones favorables. Multas de tránsito en Colombia. Diagnóstico inicial gratis. Gestión desde $150.000 COP por multa. Solo avanzamos si hay base.', tipo: 'prueba-social' },
  { texto: 'Comparendos de tránsito y fotomultas en Colombia. Las revisamos sin costo. Si tienen errores, vicios o están prescritas, te ayudamos a revocarlas. Desde $150.000 COP por multa.', tipo: 'precio' },
  { texto: 'Sabemos que pagar una multa de tránsito duele. Pero pagarla cuando no era legal duele doble. Evaluamos tu caso sin costo. Si encontramos cómo pelearla, la gestionamos por $150.000 COP.', tipo: 'emocional' },
]
