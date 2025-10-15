export interface ServiceDetail {
    slug: string;
    title: string;
    shortTitle?: string;
    icon: string;
    summary: string;
    description: string[];
    whatWeDo: string[];
    benefits: string[];
    differentiators: string[];
    useCases?: string[];
    technologies: string[];
    cta?: { label: string; secondary?: string };
    seo?: { keywords?: string[] };
}

export const services: ServiceDetail[] = [
    {
        slug: 'desarrollo-web',
        title: 'Desarrollo de Productos Web',
        shortTitle: 'Desarrollo Web',
        icon: 'Globe',
        summary: 'Construimos productos web completos desde la idea hasta el lanzamiento, escalando tu negocio digital.',
        description: [
            'Desarrollamos plataformas web completas que resuelven problemas reales de negocio. Desde el concepto inicial hasta la versión que tus usuarios aman, nos enfocamos en crear productos que generen valor y crezcan con tu empresa.',
            'Nuestro enfoque integral abarca desde la experiencia de usuario hasta la arquitectura backend, asegurando que tu producto web sea robusto, rápido y fácil de mantener a largo plazo.'
        ],
        whatWeDo: [
            'Desarrollo de plataformas web completas de principio a fin',
            'Diseño de experiencias de usuario que convierten',
            'Integración con sistemas existentes y APIs externas',
            'Optimización para buscadores y velocidad de carga'
        ],
        benefits: ['Mayor conversión de usuarios', 'Producto escalable y mantenible', 'Time-to-market optimizado', 'Visibilidad en buscadores'],
        differentiators: ['Enfoque en producto completo, no solo código', 'Metodología ágil con entregas continuas', 'Análisis de métricas y optimización constante', 'Documentación y transferencia de conocimiento'],
        useCases: ['E-commerce y tiendas online', 'Plataformas SaaS', 'Portales corporativos', 'Sistemas de gestión empresarial'],
        technologies: ['React', 'Next.js', 'Node.js', '.NET', 'Python', 'Azure', 'Microfrontends'],
        cta: { label: 'Desarrollar mi producto web', secondary: 'Consultar viabilidad' },
        seo: { keywords: ['desarrollo web', 'plataforma web', 'producto digital', 'ecommerce'] }
    },
    {
        slug: 'apps-moviles',
        title: 'Desarrollo de Aplicaciones Móviles',
        shortTitle: 'Apps Móviles',
        icon: 'Smartphone',
        summary: 'Creamos aplicaciones móviles completas para iOS y Android que tus usuarios usarán todos los días.',
        description: [
            'Desarrollamos aplicaciones móviles que resuelven necesidades reales de tu audiencia. Desde la conceptualización hasta el lanzamiento en las tiendas, creamos apps que destacan por su usabilidad y rendimiento.',
            'Nuestro proceso incluye investigación de usuarios, diseño de interfaz, desarrollo nativo multiplataforma y estrategias de lanzamiento para maximizar las descargas y retención de usuarios.'
        ],
        whatWeDo: [
            'Desarrollo completo de aplicaciones iOS y Android',
            'Diseño de experiencia móvil optimizada',
            'Integración con servicios backend y APIs',
            'Publicación y optimización en App Store y Play Store'
        ],
        benefits: ['Presencia móvil profesional', 'Acceso directo a tus clientes', 'Notificaciones y engagement', 'Nuevos canales de ingresos'],
        differentiators: ['Una sola app para ambas plataformas', 'Proceso completo desde idea a tienda', 'Optimización para retención de usuarios', 'Soporte post-lanzamiento incluido'],
        useCases: ['Apps de servicios y delivery', 'Plataformas de contenido', 'Apps corporativas internas', 'Aplicaciones de e-learning'],
        technologies: ['React Native', 'Superapp', 'Firebase', 'App Store Connect', 'Google Play Console', 'Analytics'],
        cta: { label: 'Crear mi aplicación móvil', secondary: 'Evaluar mi idea' },
        seo: { keywords: ['aplicación móvil', 'app ios android', 'desarrollo app', 'aplicación empresa'] }
    },
    {
        slug: 'consulting-it',
        title: 'Consultoría en Desarrollo de Software',
        shortTitle: 'Consulting IT',
        icon: 'Settings',
        summary: 'Optimizamos tu proceso de desarrollo y arquitectura de software para acelerar la entrega de productos.',
        description: [
            'Ayudamos a equipos y empresas a mejorar sus procesos de desarrollo de software. Evaluamos tu situación actual y diseñamos un plan para acelerar la entrega de funcionalidades sin sacrificar calidad.',
            'Nuestro enfoque se centra en optimizar el flujo de desarrollo, mejorar la colaboración entre equipos y establecer prácticas que permitan escalar tu capacidad de construcción de productos digitales.'
        ],
        whatWeDo: [
            'Evaluación de procesos de desarrollo existentes',
            'Diseño de arquitecturas escalables para productos digitales',
            'Implementación de flujos de trabajo eficientes',
            'Capacitación de equipos en mejores prácticas'
        ],
        benefits: ['Desarrollo más rápido y confiable', 'Menos errores en producción', 'Equipos más productivos', 'Mayor capacidad de innovación'],
        differentiators: ['Enfoque práctico en resultados de negocio', 'Implementación gradual sin disrupciones', 'Transferencia de conocimiento al equipo interno', 'Métricas claras de mejora'],
        useCases: ['Optimización de equipos de desarrollo', 'Migración de sistemas legacy', 'Establecimiento de buenas prácticas', 'Preparación para crecimiento rápido'],
        technologies: ['Git & GitHub', 'Metodologías Ágiles', 'Arquitecturas Cloud', 'Testing Automatizado', 'Monitoreo', 'CI/CD'],
        cta: { label: 'Optimizar mi desarrollo', secondary: 'Evaluar mi situación' },
        seo: { keywords: ['consultoría desarrollo', 'optimización equipos', 'arquitectura software', 'procesos desarrollo'] }
    },
    {
        slug: 'inteligencia-artificial',
        title: 'Integración de Inteligencia Artificial',
        shortTitle: 'Inteligencia Artificial',
        icon: 'Brain',
        summary: 'Incorporamos IA en tus productos y procesos para automatizar tareas y mejorar la experiencia de usuario.',
        description: [
            'Integramos capacidades de inteligencia artificial en productos existentes o nuevos para automatizar procesos, mejorar la toma de decisiones y crear experiencias más inteligentes para tus usuarios.',
            'Nos enfocamos en implementaciones prácticas de IA que generen valor inmediato: desde chatbots inteligentes hasta sistemas de recomendación y automatización de tareas repetitivas.'
        ],
        whatWeDo: [
            'Desarrollo de asistentes virtuales y chatbots',
            'Sistemas de recomendación personalizados',
            'Automatización inteligente de procesos',
            'Análisis de datos y generación de insights'
        ],
        benefits: ['Automatización de tareas repetitivas', 'Mejor experiencia de usuario', 'Decisiones más informadas', 'Ventaja competitiva sostenible'],
        differentiators: ['IA aplicada a problemas reales de negocio', 'Implementación gradual y medible', 'Integración con sistemas existentes', 'Capacitación del equipo interno'],
        useCases: ['Atención al cliente automatizada', 'Sistemas de recomendación', 'Análisis predictivo de ventas', 'Procesamiento inteligente de documentos'],
        technologies: ['OpenAI GPT', 'Claude AI', 'Machine Learning', 'Procesamiento de Lenguaje Natural', 'Análisis de Datos', 'APIs de IA'],
        cta: { label: 'Integrar IA en mi negocio', secondary: 'Ver casos de uso' },
        seo: { keywords: ['inteligencia artificial', 'chatbots', 'automatización ia', 'asistente virtual'] }
    }
];

export function getServiceBySlug(slug: string) {
    return services.find(s => s.slug === slug);
}
