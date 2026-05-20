**MediFind — Base de Sprint**

Módulo de doctores / clínicas: agenda, configuración y perfil público

**Objetivo del sprint:** construir el MVP funcional del panel para doctores y clínicas, priorizando gestión de agenda, solicitudes de citas, disponibilidad, servicios/precios y edición del perfil público. El sistema debe ser vendible como SaaS básico, sin caer todavía en expediente clínico completo, chat avanzado o red social médica.

# 1. Alcance del sprint

Este sprint se concentra en tres pestañas principales: Agenda, Configuración y Perfil público. La meta es entregar una experiencia usable para un doctor independiente o una clínica pequeña que necesita organizar citas, aceptar reservas desde la web y mantener su perfil actualizado.

|  |  |
| --- | --- |
| **Incluido en MVP** | **Fuera de este sprint** |
| Agenda semanal/diaria con citas por hora | Expediente clínico completo con imágenes, radiografías y videos |
| Panel lateral con detalle de cita/paciente | Chat médico avanzado con archivos o videollamada |
| Solicitudes de citas desde web: aceptar, rechazar o proponer otra hora | Feed tipo red social o publicaciones públicas |
| Configuración de horarios, bloqueos, servicios, precios y reglas de citas | Sistema complejo de reputación o verificación avanzada |
| Edición de perfil público del doctor/clínica | Módulo móvil avanzado para expediente clínico |

# 2. Estructura general del módulo

La navegación principal del módulo debe tener tres pestañas grandes. Cada una puede tener subtabs internas para no saturar la pantalla.

**Agenda:** Pantalla operativa diaria. Muestra calendario mensual, agenda semanal/diaria y detalle de cita seleccionada.

**Configuración:** Centro de control del calendario: solicitudes, horarios, bloqueos, servicios, precios, recordatorios y reglas.

**Perfil público:** Edición de la información visible para pacientes: datos profesionales, especialidades, ubicación, servicios visibles y preview.

# 3. Pestaña 1 — Agenda

La Agenda debe funcionar como el tablero principal del doctor. Debe permitir ver el día/semana, seleccionar una cita y tomar acciones rápidas sin navegar a otra pantalla.

## 3.1 Layout recomendado

|  |  |
| --- | --- |
| **Zona** | **Contenido** |
| Columna izquierda | Mini calendario mensual, botón Hoy, filtros rápidos, conteo de solicitudes pendientes y selector de vista. |
| Columna central | Calendario semanal o diario por hora, con bloques de citas coloreados por estado o modalidad. |
| Columna derecha | Detalle de la cita/paciente seleccionado. Debe ser scrolleable y permitir acciones rápidas. |

## 3.2 Filtros rápidos

* Hoy
* Pendientes
* Confirmadas
* Canceladas
* Online
* Presencial
* Primera vez
* Seguimiento
* Sin confirmar

## 3.3 Información mínima en cada bloque de cita

* Nombre del paciente
* Hora de inicio y fin
* Tipo de servicio
* Estado de la cita
* Modalidad: online, clínica, consultorio, domicilio
* Precio o badge económico si aplica
* Indicador visual si tiene notas internas

## 3.4 Panel derecho: detalle de cita/paciente

* Datos básicos del paciente.
* Servicio seleccionado, duración y precio congelado al momento de reservar.
* Lugar/modalidad de atención.
* Estado de la cita con acciones disponibles.
* Botones: confirmar, cancelar, marcar completada, reagendar.
* Botón de enviar recordatorio manual.
* Botón de repetir cita.
* Notas internas retraíbles para no ocupar demasiado espacio.
* Historial breve: última cita, cantidad de citas, faltas/no-show y servicios anteriores.

## 3.5 Recurrencia de citas

En lugar de mostrar un botón aislado llamado “No se repite”, usar un bloque de repetición dentro del detalle o modal de reagendar. Opciones sugeridas:

* No se repite
* Semanal
* Cada 15 días
* Mensual
* Personalizado
* Fecha final opcional
* Validación automática de choques de horario

# 4. Pestaña 2 — Configuración

Configuración debe funcionar como el centro de control operativo del doctor o clínica. No debe ser una pantalla gigante; debe estar dividida por subtabs.

## Bandeja de solicitudes

* Lista de citas creadas desde la web.
* Acciones rápidas: aceptar, rechazar, proponer otra hora.
* Mostrar paciente, servicio, fecha/hora, modalidad y motivo breve.
* Contador visible de solicitudes pendientes.

## Horarios de atención

* Horario por día.
* Activar/desactivar día.
* Soporte para múltiples bloques por día, ejemplo 8:00-12:00 y 14:00-17:00.
* Descanso/almuerzo.
* Duración por defecto.
* Buffer entre citas.
* Lugar de atención asociado.
* Modalidad disponible por día.
* Opción: mostrar horario en perfil público.

## Bloqueos de fechas

* Bloquear día completo.
* Bloquear rango de horas.
* Motivo interno.
* Bloqueo recurrente.
* Vacaciones, feriados o emergencia.
* Los bloqueos deben tener prioridad sobre horarios normales.

## Servicios y precios

* Nombre del servicio.
* Descripción.
* Duración.
* Precio.
* Modalidad permitida.
* Lugar donde aplica.
* Activo/inactivo.
* Visible en perfil.
* Requiere aprobación manual o confirmación automática.

## Recordatorios

* Recordatorio al paciente por email.
* Recordatorio al doctor.
* Tiempo antes: 24h, 12h, 2h.
* Mensaje editable.
* Confirmación de asistencia.
* Recordatorio manual desde la cita.

## Reglas de citas

* Permitir citas el mismo día.
* Mínimo de anticipación para reservar.
* Máximo de días hacia adelante.
* Permitir cancelación hasta X horas antes.
* Confirmación automática o manual.
* Permitir reprogramación por paciente.
* Límite de citas por día.
* Bloqueo o alerta si el paciente faltó varias veces.

# 5. Pestaña 3 — Perfil público

Esta pestaña controla cómo se verá el doctor o clínica en la búsqueda y en su página pública. Debe tener edición clara y un preview inmediato.

* Foto del doctor o logo de clínica
* Portada opcional
* Nombre profesional
* Especialidad principal y secundarias
* Biografía corta
* Experiencia
* Educación
* Número de licencia
* Ubicación y lugares de atención
* Modalidades: presencial, domicilio, online
* Servicios visibles y precios visibles/invisibles
* Galería opcional
* Contacto
* Redes/enlaces
* Estado verificado
* Botón: Ver cómo se ve mi perfil público

# 6. Estados de cita recomendados

|  |  |
| --- | --- |
| **Estado** | **Uso** |
| pendiente | Solicitud creada; aún no bloquea como cita final si requiere aprobación. |
| confirmada | Bloquea horario y se notifica al paciente. |
| en espera | Paciente llegó o está esperando atención. |
| en consulta | Consulta iniciada. |
| completada | Consulta cerrada; normalmente no se edita. |
| cancelada | Libera horario si corresponde. |
| no asistió | Paciente no llegó; útil para historial básico y reglas futuras. |

# 7. Reglas técnicas y seguridad mínima

* Cada usuario solo debe acceder a recursos propios.
* Validar rol y propiedad en cada endpoint.
* Evitar doble cita activa para el mismo doctor en el mismo horario.
* No permitir citas en fechas pasadas.
* Guardar precio y duración al momento de reservar para no alterar citas históricas.
* Sanitizar entradas contra XSS e inyección.
* Auditar acciones importantes: crear cita, cancelar, editar perfil, cambiar horario y cambiar precio.
* No exponer expediente clínico completo en este sprint.

# 8. Endpoints mínimos que soportan este sprint

* GET /doctors/me/appointments
* GET /clinics/me/appointments
* PATCH /appointments/:id/confirm
* PATCH /appointments/:id/cancel
* PATCH /appointments/:id/reschedule
* POST /availability
* GET /availability?doctorId=&locationId=&date=
* PATCH /availability/:id
* DELETE /availability/:id
* POST /availability/blocks
* POST /services
* GET /services?doctorId=&clinicId=
* PATCH /services/:id
* DELETE /services/:id
* PATCH /doctors/me/profile
* PATCH /clinics/me/profile
* GET /care-locations/me
* POST /care-locations
* PATCH /care-locations/:id

# 9. Criterios de aceptación del sprint

1. El doctor/clínica puede ver sus citas en calendario semanal y diario.
2. El usuario puede seleccionar una cita y ver detalles completos en panel lateral.
3. El panel lateral permite confirmar, cancelar, reagendar, completar y enviar recordatorio.
4. La agenda muestra estados visuales claros.
5. La configuración permite gestionar solicitudes pendientes.
6. La configuración permite crear/editar horarios por día.
7. La configuración permite bloquear fechas u horarios.
8. La configuración permite crear/editar servicios con precio, duración y modalidad.
9. El perfil público permite editar datos principales y ver preview.
10. El sistema valida propiedad, rol, horarios pasados y doble reserva.
11. El diseño respeta la paleta visual definida y no se siente saturado.
