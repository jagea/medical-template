export const clinic = {
  name: "Centro Médico Salud Integral",
  tagline: "Tu salud, nuestra prioridad",
  cta: "Reservar cita",
  phone: "+1 (555) 123-4567",
  email: "contacto@saludintegral.com",
  colors: {
    primary: "#0ea5e9",   // cambia este valor para personalizar el color principal
    secondary: "#0369a1",
  },

  services: [
    { title: "Medicina General", description: "Atención primaria y revisiones preventivas para toda la familia.", icon: "🩺" },
    { title: "Cardiología", description: "Diagnóstico y tratamiento de enfermedades del corazón.", icon: "❤️" },
    { title: "Pediatría", description: "Cuidado especializado para niños desde el nacimiento.", icon: "👶" },
    { title: "Dermatología", description: "Tratamientos para la piel, cabello y uñas.", icon: "🔬" },
  ],

  team: [
    { name: "Dra. Ana López", specialty: "Directora Médica · Medicina General", photo: "/team/ana.jpg" },
    { name: "Dr. Carlos Ruiz", specialty: "Cardiólogo", photo: "/team/carlos.jpg" },
    { name: "Dra. María Torres", specialty: "Pediatra", photo: "/team/maria.jpg" },
  ],

  offices: [
    {
      name: "Sede Norte",
      address: "Av. Principal 123, Piso 2",
      hours: "Lun–Vie 8:00–18:00",
      lat: 40.4168,
      lng: -3.7038,
    },
    {
      name: "Sede Sur",
      address: "Calle Secundaria 456",
      hours: "Lun–Sáb 9:00–17:00",
      lat: 40.3900,
      lng: -3.6900,
    },
  ],
};
