
import { Leaf, Scale, GraduationCap, Target, Users, Zap, Clock, ShieldCheck,
    BarChart3, Settings, PieChart, Rocket,  TrendingUp, Search,
    Calculator,LayoutDashboard,Database,
    Cpu, FileText, Shield, FileCheck, Cookie, Lock,
    Trophy, Lightbulb, Handshake } from 'lucide-react';
import partnerMyReport from '@/../public/images/homePage/partner-myreport.png'
import partnerKatech from '@/../public/images/homePage/partner-katech.png'
import partnerAgycap from '@/../public/images/homePage/partner-agycap.png'
import partnerFinthesis from '@/../public/images/homePage/partner-finthesis.png'
import partnerFygr from '@/../public/images/homePage/partner-fygr.png'
import partnerPennylane from '@/../public/images/homePage/partner-pennylane.png'
import partnerRegate from '@/../public/images/homePage/partner-regate.png'
import partnerSage from '@/../public/images/homePage/partner-sage.png'
import partnerSpendesk from '@/../public/images/homePage/partner-spendesk.png'
import partnerYooz from '@/../public/images/homePage/partner-yooz.png'
import copilotLogo from '@/../public/images/homePage/copilot-logo.png'
import openaiLogo from '@/../public/images/homePage/openai-logo.png'
import claudaiLogo from '@/../public/images/homePage/partner-claudai.png'
import homeOptimisation from '../../public/images/homePage/homeOptimisation.png'
import homeDigitalisation from '../../public/images/homePage/homeDigitalisation.png'
import structurationFinanciere from '../../public/images/homePage/structurationFinanciere.png'
import diagnosticImg from '@/../public/images/methodePage/Diagnostic.png'
import propositionImg from '@/../public/images/methodePage/propositionCadrage.jpg'
import formationImg from '../../public/images/methodePage/formationAccompagnement.jpg'
import auditHeroImg from '@/../public/images/expertisePage/auditHero.png'
import structurationHeroImg from '@/../public/images/expertisePage/structurationHero.png'
import digitalisationHeroImg from '@/../public/images/expertisePage/digitalisationHero.png'
import pilotageHeroImg from '../../public/images/expertisePage/pilotageHero.jpg'
import expertisesHeroImg from '@/../public/images/expertisePage/expertisesHero.png'
import integrationImg from '@/../public/images/partenairesPage/integration.webp'
import reportingImg from '@/../public/images/partenairesPage/reporting.png'
import analytiqueImg from '@/../public/images/partenairesPage/analytique.webp'
import accompagnementImg from '../../public/images/partenairesPage/accompagnement.png'
import geoffroyImg from '@/../public/images/testimonials/Geoffroy.png'
import ramiImg from '@/../public/images/testimonials/Rami.jpg'
import imanImg from '@/../public/images/testimonials/Imane.png'
import claireImg from '@/../public/images/testimonials/Claire.jpg'
import michaelImg from '@/../public/images/testimonials/Michael.jpg'
import thierryImg from '@/../public/images/testimonials/Thierry.png'
import RefonteReportingImg from '@/../public/images/homePage/RefonteReporting.png'
import AutomatisationImg from '@/../public/images/homePage/Automatisation.png'
import virginieImg from '@/../public/images/aboutPage/VirginieAudrain.png'
import nadiaImg from '@/../public/images/aboutPage/Nadia.png'
import deploiementImg from '../../public/images/methodePage/Deploiement.png'
import suiviImg from '@/../public/images/methodePage/Suivi.png'
import auditCtaImage from '@/../public/images/expertisePage/auditctaImage.jpeg'
import structurationCtaImage from '../../public/images/expertisePage/structurationCta.jpeg'
import digitalisationCtaImg from '../../public/images/expertisePage/digitalisationCta.jpeg'
import pilotageCtaImg from '@/../public/images/expertisePage/pilotageCta.jpeg'
import expertisesCtaImg from '@/../public/images/expertisePage/expertisesCta.png'


export const PARTNERS = [
    { name: 'My Report', url: partnerMyReport },
    { name: 'Katech', url: partnerKatech },
    { name: 'Sage', url: partnerSage },
    { name: 'Pennylane', url: partnerPennylane },
    { name: 'Spendesk', url: partnerSpendesk },
    { name: 'Agycap', url: partnerAgycap },
    { name: 'Regate', url: partnerRegate },
    { name: 'Yooz', url: partnerYooz },
    { name: 'Finthesis', url: partnerFinthesis },
    { name: 'Fygr', url: partnerFygr },
];

export const METRICS = [
    {
        value: '+100',
        label: 'PROJETS RÉALISÉS',
        color: 'bg-[linear-gradient(to_right,#23135f_15%,#d0006f_100%)] bg-clip-text text-transparent',
        details: ['Secteurs variés', 'PME & ETI', 'International']
    },
    {
        value: '98%',
        label: 'SATISFACTION CLIENTS ',
        color: 'bg-[linear-gradient(to_right,#23135f_15%,#d0006f_100%)] bg-clip-text text-transparent',
        details: ['Fidélisation forte', 'Recommandation', 'Suivi long terme']
    },
    {
        value: '+30%',
        label: 'gain de temps moyen pour les équipes finance après nos missions',
        color: 'bg-[linear-gradient(to_right,#23135f_15%,#d0006f_100%)] bg-clip-text text-transparent',
        details: ['Productivité', 'Gain de temps', 'Rentabilité']
    }
];

export const SERVICE_CATEGORIES = [
    { id: 'all', label: 'Tout voir' },
    { id: 'strategy', label: 'Stratégie & Organisation' },
    { id: 'tech', label: 'Digital & Outils' },
    { id: 'performance', label: 'Pilotage & Croissance' }
];

export const SERVICES = [
    {
        id: 1,
        category: 'strategy',
        title: "Audit & Diagnostic des Processus Financier",
        icon: BarChart3,
        link: "/expertises/audit",
        description: "Une analyse approfondie de votre organisation actuelle pour évaluer la maturité de votre direction finance, identifier les risques, les leviers d’efficacité et prioriser les actions.",
        benefits: ["Cartographie des risques", "Plan d'action priorisé", "Vision claire à 360°"]
    },
    {
        id: 2,
        category: 'strategy',
        title: "Structuration de la Fonction Finance",
        icon: Settings,
        link: "/expertises/structuration-finance",
        description: "Organisation des équipes, définition des processus et mise en place des bonnes pratiques pour une direction financière robuste et agile.",
        benefits: ["Processus fiabilisés", "Clôtures accélérées", "Equipes autonomes"]
    },
    {
        id: 3,
        category: 'tech',
        title: "Digitalisation et Automatisation",
        icon: Zap,
        link: "/expertises/digitalisation",
        description: "Digitalisation et automatisation de votre fonction finance, avec un accompagnement complet pour se conformer à la réglementation de la facturation électronique obligatoire dès septembre 2026, et l'intégration d'outils d'automatisation et d'lA pour fiabiliser vos données et libérer vos équipes des tâches répétitives.",
        benefits: ["Gain de productivité", "Conformité règlementaire ", "Données temps réel"]
    },
    {
        id: 4,
        category: 'performance',
        title: "Pilotage Financier et Performance",
        icon: PieChart,
        link: "/expertises/pilotage-financier",
        description: "Mise en place de tableaux de bord dynamiques et de KPIs pertinents pour piloter votre activité avec précision et anticiper l'avenir.",
        benefits: ["Dashboards automatisés", "Culture du cash", "Prévisions fiables"]
    },
    {
        id: 5,
        category: 'performance',
        title: "Expertises Financières et Opérations Stratégiques",
        icon: Rocket,
        link: "/expertises/expertises-avancees",
        description: "Accompagnement sur mesure dans la préparation et la sécurisation de vos opérations structurantes : levées de fonds, croissance externe, refinancement ou exigences réglementaires spécifiques.\n" +
            "Nous intervenons en amont pour fiabiliser vos données, structurer et renforcer votre crédibilité auprès de vos partenaires.",
        benefits: ["Fiabilité et conformité ", "Crédibilité renforcée ", "Pilotage financier sécurisé "]
    }
];

export const CASE_STUDIES = [
    {
        title: "Optimisation de la Trésorerie",
        image: homeOptimisation,
        points: [
            "Audit complet des flux",
            "Mise en place de Agicap",
            "Réduction du BFR de 20%"
        ]
    },
    {
        title: "Refonte du Reporting",
        image: RefonteReportingImg,
        points: [
            "Implémentation de Finthesis ",
            "Tableaux de bord KPIs automatisés",
            "Gain de 5 jours sur la clôture"
        ]
    },
    {
        title: "Digitalisation Factures",
        image: homeDigitalisation,
        points: [
            "Intégration Yooz et Spendesk",
            "Workflow de validation Factures et note de frais",
            "Facturation électronique conforme"
        ]
    },
    {
        title: "Automatisation Paie",
        image: AutomatisationImg,
        points: [
            "Migration vers Silae",
            "Connexion comptable native",
            "Fiabilité des bulletins assurée"
        ]
    },
    {
        title: "Structuration Financière",
        image: structurationFinanciere,
        points: [
            "Mise en place de procédures",
            "Sécurisation des paiements",
            "Audit interne renforcé"
        ]
    }
];

export const TESTIMONIALS = [
    {
        text: "L’accompagnement de Finavia a été décisif pour sécuriser et structurer l’intégration des entreprises rachetées, dans un contexte de multi-acquisitions sur des périmètres et modèles économiques distincts.",
        author: "Geoffroy D.",
        role: "CFO, ETI – Groupe Cybersécurité",
        image: geoffroyImg
    },
    {
        text: "Grâce à l'automatisation mise en place, nous avons gagné 4 jours sur nos clôtures mensuelles. Une efficacité redoutable.",
        author: "Rami M.",
        role: "RAF, Grand Groupe – Industrie jeu-vidéo",
        image: ramiImg
    },
    {
        text: "La gestion de la paie est enfin fiabilisée. Les outils connectés nous font gagner un temps précieux chaque mois.",
        author: "Imane Y.",
        role: "DRH, PME – Industrie et bâtiment",
        image: imanImg
    },
    {
        text: "L'implémentation de Pennylane s'est faite sans douleur grâce à l'expertise de l'équipe. Nos processus sont désormais fluides et sécurisés.",
        author: "Claire G.",
        role: "DAF, PME – Solutions numériques innovantes",
        image: claireImg
    },
    {
        text: "Une vision stratégique qui nous manquait cruellement. Les tableaux de bord mis en place nous permettent enfin de piloter nos marges.",
        author: "Michael L.",
        role: "CEO, Franchise automobile",
        image: michaelImg
    },
    {
        text: "Une clarté retrouvée dans nos flux de trésorerie. Nous pouvons enfin anticiper nos besoins de financement avec sérénité.",
        author: "Thierry D.",
        role: "DAF, ETI – Sport et bien-être",
        image: thierryImg
    }
];

export const FAQ_DATA: Record<string, { q: string; a: string }[]> = {
    'Général': [
        { q: "Quels types d'entreprises accompagnez-vous ?", a: "Finavia accompagne des PME, ETI et startups en forte croissance de tous secteurs pour structurer leur fonction finance, améliorer leur performance et gagner en visibilité." },
        { q: "Combien de temps dure une mission type ?", a: "La durée varie selon le périmètre : de quelques semaines pour un audit à plusieurs mois pour une restructuration complète. Chaque mission est construite sur mesure, selon vos priorités, votre organisation et votre stade de croissance, avec des formats ponctuels ou récurrents." },
        { q: "Intervenez-vous partout en France ?", a: "Oui. Finavia intervient partout en France, à distance et/ou sur site selon les besoins de la mission et le contexte de l’entreprise." },
        { q: "Qu’est-ce qui vous différencie d’un cabinet de conseil classique ?", a: "Finavia combine expertise finance de terrain, exécution opérationnelle, maîtrise des outils et IA appliquée. Nous ne livrons pas des recommandations théoriques : nous structurons les process, déployons les outils et intégrons l’IA là où elle crée un impact réel, pour une fonction finance plus fiable, plus rapide et réellement pilotable." }
    ],
    'Direction Financière': [
        { q: "Intervenez-vous comme un renfort opérationnel de la direction financière ?", a: "Oui. Finavia intervient en renfort des équipes finance ou de la direction financière existante, pour structurer, organiser et faire avancer les sujets clés. Nous ne nous positionnons pas comme un DAF externalisé, mais comme un partenaire opérationnel, capable de s'adapter au niveau de maturité de l'entreprise et à ses enjeux." },
        { q: "Pouvez-vous nous aider à fiabiliser nos données financières pour prendre de meilleures décisions ?", a: "Oui. Finavia aide les entreprises à fiabiliser leurs données financières dès la source : détection et correction des anomalies comptables, structuration d'un plan comptable cohérent et mise en place d'un plan analytique. Grâce à ces bases solides, vos décisions reposent sur des informations fiables et directement exploitables." },
        { q: "Pouvez-vous nous accompagner dans la structuration financière avant une levée de fonds ?", a: "Oui. Nous accompagnons les entreprises dans la structuration de leur fonction finance en amont d’une levée de fonds : fiabilisation des données, mise en place des outils de pilotage, structuration des reportings et préparation aux échanges avec les investisseurs. L’objectif : arriver prêt, clair et crédible, sans approche théorique." }
    ],
    'Automatisation et IA': [
        { q: "Quels outils utilisez-vous ?", a: "Nous utilisons des outils modernes et reconnus du marché, sélectionnés en fonction de vos enjeux et de votre organisation. Beaucoup intègrent des fonctionnalités d'IA pour automatiser les tâches répétitives, fiabiliser les données et améliorer la productivité. Notre rôle est de vous orienter vers les solutions les plus pertinentes et de vous accompagner dans leur déploiement et leur adoption par vos équipes." },
        { q: "L'automatisation va-t-elle remplacer mon équipe financière ?", a: "Non. L'automatisation et les agents/assistants IA ne remplacent pas le comptable : elles lui permettent de se concentrer sur des tâches à plus forte valeur ajoutée. En automatisant les tâches répétitives et chronophages, les équipes gagnent en fiabilité, en temps et en visibilité. L'humain reste central, l'automatisation pilotée par l'IA est un levier d'efficacité, pas une fin en soi." },
        { q: "Par où commencer quand on veut automatiser sa fonction finance ?", a: "Le point de départ dépend de votre organisation et de vos priorités. En général, nous commençons par identifier les tâches répétitives et chronophages, puis nous évaluons les outils et les processus existants. Ensuite, nous définissons un plan d'automatisation progressif, qui peut inclure la facturation, la gestion des dépenses, la comptabilité ou le reporting. L'objectif : gagner en fiabilité et en efficacité tout en accompagnant vos équipes pour que la transition se fasse en douceur." },
        { q: "Comment utiliser l'IA dans mon service financier ?", a: "Chez Finavia, l'IA est un levier opérationnel, pas un gadget. Elle est parfois déjà intégrée nativement dans les outils, parfois déployée sous forme d'assistants ou d'agents IA complémentaires. Dans tous les cas, nous l'intégrons directement dans les processus finance (clôture, trésorerie, reporting, contrôle) pour automatiser les tâches chronophages, fiabiliser la donnée et améliorer le pilotage, avec des usages concrets, sécurisés et maîtrisés par les équipes." }
    ],
    'Digitalisation': [
        { q: "Comment se passe la migration vers un nouvel outil ?", a: "La migration est réalisée de manière progressive et sécurisée. Finavia vous accompagne à chaque étape : cadrage du besoin, préparation des données, paramétrage de l'outil, tests, puis accompagnement des équipes à la prise en main. L'objectif est d'assurer une transition fluide, sans rupture pour vos équipes ni perte d'information." },
        { q: "Mes données sont-elles sécurisées ?", a: "Oui. La sécurité des données est une priorité pour Finavia. Nous ne travaillons qu'avec des éditeurs de logiciels certifiés (ISO 27001, RGPD) et mettons en place les meilleures pratiques de sécurité. Finavia veille également à la bonne gestion des accès et à la fiabilité des données tout au long du projet, en collaboration avec vos équipes et vos partenaires." },
        { q: "Combien de temps prend une migration ?", a: "La durée d'une migration dépend de la taille de l'entreprise, du volume de données et de la complexité des processus. En général, elle peut varier de quelques jours à quelques semaines. Finavia accompagne chaque étape pour assurer une transition fluide et sécurisée, avec un impact minimal sur vos équipes et vos activités quotidiennes." },
        { q: "Est-ce que vous pouvez nous aider avec la réglementation de la facturation électronique ?", a: "Oui. Finavia accompagne les entreprises pour se conformer à la réglementation en matière de facturation électronique. Nous vous aidons à comprendre vos obligations légales, à mettre en place des outils conformes et sécurisés, et à former vos équipes pour que vos flux de facturation respectent la législation tout en restant fluides et efficaces." }
    ]
};

export const FAQ_DOMAINS = Object.keys(FAQ_DATA);

export const NAVIGATION_LINKS = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Notre méthode", href: "/methode" },
    { name: "Nos expertises", href: "/expertises" },
    { name: "Enjeux clients", href: "/enjeux-clients" },
    { name: "Partenaires", href: "/partenaires" },
];

export const EXPERTISE_LINKS = [
    { name: "Audit", href: "/expertises/audit" },
    { name: "Structuration de la Fonction Finance", href: "/expertises/structuration-finance" },
    { name: "Digitalisation et Automatisation", href: "/expertises/digitalisation" },
    { name: "Pilotage Financier et Performance", href: "/expertises/pilotage-financier" },
    { name: "Expertises Financières Avancées", href: "/expertises/expertises-avancees" },
];

export const LEGAL_LINKS = [
    { name: "Informations légales", href: "/legales" },
    { name: "Contact", href: "/contact" },
];

export const ABOUT_PAGE_DATA = {
    founders: [
        {
            name: "Virginie Audrain",
            role: "Co-fondatrice & Associée",
            desc: "Plus de 15 ans d'expérience en Direction comptable et transformation digitale des fonctions finance. Experte en structuration de processus comptable, déploiement d'outils finance et management d'équipes dans des environnements en forte croissance. Passionnée par l'optimisation opérationnelle des Direction finance dans la modernisation.",
            image: virginieImg,
            linkedin: "https://www.linkedin.com/in/virginie-audrain-35796348"
        },
        {
            name: "Nadia Souissi",
            role: "Co-fondatrice & Associée",
            desc: "Plus de 15 ans d'expérience en comptabilité générale et transformation digitale des services financiers. Experte en structuration de processus, dématérialisation et optimisation des systèmes comptables. Passionnée par l'automatisation intelligente et l'accompagnement des équipes vers plus d'efficacité opérationnelle.",
            image: nadiaImg,
            linkedin: "https://www.linkedin.com/in/nadia-souissi-b98bb0199"
        }
    ],
    values: [
        {
            title: "Excellence",
            text: "Nous visons la perfection dans chaque mission, en apportant une expertise technique irréprochable et des solutions concrètes.",
            icon: Trophy
        },
        {
            title: "Innovation",
            text: "Nous repoussons les limites de la finance traditionnelle en intégrant les meilleures technologies d'automatisation.",
            icon: Lightbulb
        },
        {
            title: "Proximité",
            text: "Nous travaillons main dans la main avec vos équipes pour garantir une adoption fluide et durable des nouveaux processus.",
            icon: Handshake
        },
        {
            title: "Intégrité",
            text: "La confiance est notre capital le plus précieux. Nous agissons avec transparence, éthique et confidentialité absolue.",
            icon: ShieldCheck
        }
    ],
    commitments: [
        {
            title: "Accessibilité & Handicap",
            text: "Nous veillons à rendre nos solutions et recommandations accessibles à tous, en favorisant l'inclusion des personnes en situation de handicap dans les organisations que nous accompagnons.",
            icon: Leaf,
            bgClass: "bg-green-100",
            iconClass: "text-[#2d5a27]"
        },
        {
            title: "Égalité & Diversité",
            text: "Nous promouvons un environnement inclusif et garantissons l'égalité des chances, en intégrant systématiquement les principes de diversité dans nos interventions et dans les processus RH de nos clients.",
            icon: Scale,
            bgClass: "bg-pink-100",
            iconClass: "text-[#e51990]"
        },
        {
            title: "Responsabilité Environnementale",
            text: "Nous réduisons l'impact carbone par la dématérialisation des processus financiers et accompagnons nos clients vers des pratiques durables intégrant des critères ESG et des indicateurs de performance responsable.",
            icon: GraduationCap,
            bgClass: "bg-blue-100",
            iconClass: "text-[#07036e]"
        }
    ]
};

export const METHODOLOGY_PAGE_DATA = {
    steps: [
        {
            id: 1,
            title: "Diagnostic",
            subtitle: "État des lieux & Audit",
            description: "Nous réalisons une analyse 360° de votre existant : processus comptables, outils, compétences équipes et fiabilité des données. L'objectif est d'identifier les goulets d'étranglement et les zones de risques immédiats.",
            benefits: ["Cartographie des flux", "Matrice des risques", "Diagnostic de maturité"],
            imgSrc: diagnosticImg
        },
        {
            id: 2,
            title: "Proposition et Cadrage",
            subtitle: "Feuille de route stratégique",
            description: "Nous co-construisons le plan d'action. Pas de catalogue standard, mais une réponse précise à vos enjeux : choix des outils (ERP, reporting), définition du calendrier et allocation des ressources nécessaires.",
            benefits: ["Planning détaillé", "Budget validé", "KPIs de succès définis"],
            imgSrc: propositionImg
        },
        {
            id: 3,
            title: "Déploiement Opérationnel",
            subtitle: "Mise en œuvre technique",
            description: "Phase active de transformation : nettoyage des données, paramétrage des nouveaux outils, rédaction des procédures et mise en place des automatismes. Nous travaillons en immersion avec vos équipes.",
            benefits: ["Migration des données", "Configuration outils", "Documentation process"],
            imgSrc: deploiementImg
        },
        {
            id: 4,
            title: "Formation et Accompagnement",
            subtitle: "Conduite du changement",
            description: "Le meilleur outil ne sert à rien s'il n'est pas utilisé. Nous formons vos collaborateurs pour garantir une adoption rapide et durable des nouvelles méthodes de travail.",
            benefits: ["Ateliers pratiques", "Support utilisateurs", "Coaching managers"],
            imgSrc: formationImg
        },
        {
            id: 5,
            title: "Suivi & Performance",
            subtitle: "Amélioration continue",
            description: "La mission ne s'arrête pas au déploiement. Nous assurons un suivi mensuel pour analyser les premiers résultats, ajuster les paramétrages et ancrer les bonnes pratiques dans la durée.",
            benefits: ["Comités de pilotage", "Audit post-démarrage", "Plan de progrès"],
            imgSrc: suiviImg
        }
    ],
    advantages: [
        { icon: Target, title: "Processus clairs", desc: "Un plan d'action structuré, adapté à vos enjeux et priorités." },
        { icon: Users, title: "Solutions clés en main", desc: "Des méthodes et outils éprouvés, immédiatement opérationnels." },
        { icon: ShieldCheck, title: "Exécution opérationnelle", desc: "Nous prenons en charge la réalisation concrète : process, documentation, pilotage." },
        { icon: Clock, title: "Co-construction", desc: "Nous travaillons main dans la main avec vos équipes métiers et projets." },
        { icon: Zap, title: "Déploiement terrain", desc: "Nous garantissons l'adoption par un accompagnement au changement ciblé." }
    ],
    poles: [
        { title: "Audit", icon: BarChart3, path: "/expertises/audit" },
        { title: "Structuration", icon: Settings, path: "/expertises/structuration-finance" },
        { title: "Automatisation", icon: Zap, path: "/expertises/digitalisation" },
        { title: "Pilotage", icon: PieChart, path: "/expertises/pilotage-financier" },
        { title: "Expertises Avancées", icon: Rocket, path: "/expertises/expertises-avancees" }
    ]
};


export const EXPERTISE_DETAIL_DATA: Record<string, any> = {
    'audit': {
        title: "Audit",
        icon: BarChart3,
        heroImage: auditHeroImg,
        ctaImage: auditCtaImage,
        description: "Un audit complet de votre fonction finance, conçu pour révéler les causes réelles des dysfonctionnements et proposer des solutions immédiatement activables. Nous identifions les points de friction, les risques, les faiblesses structurelles et les leviers de performance pour sécuriser vos opérations et accélérer vos clôtures.",
        objectives: [
            { title: "Évaluation des processus", detail: "Identification immédiate des points de friction" },
            { title: "Analyse des risques & contrôles internes", detail: "Sécurisation sans lourdeur additionnelle" },
            { title: "Recommandations priorisées", detail: "Actions activables en 30 / 90 jours" },
            { title: "Cartographie des irritants", detail: "Vision claire pour décider vite" }
        ],
        deliverables: [
            "Rapport d'audit détaillé",
            "Cartographie des flux, outils et risques ",
            "Plan d'action opérationnel",
            "Analyse de la maturité"
        ],
        benefits: [
            "Vision claire & priorisée",
            "Données plus fiables pour piloter",
            "Risques maîtrisés",
            "Leviers de performance identifiés"
        ],
        suitability: {
            title: "Cet audit est pertinent si…",
            items: [
                "votre clôture est trop longue ou inexistante",
                "vos données sont peu fiables ou contradictoires",
                "vos équipes manquent de bande passante",
                "vous préparez une levée / un contrôle CAC / une fusion ou un changement outils",
                "vous avez des doutes sur vos processus (validation, facturation, trésorerie, flux…)"
            ]
        }
    },
    'structuration-finance': {
        title: "Structuration de la Fonction Finance",
        icon: Settings,
        heroImage: structurationHeroImg,
        ctaImage: structurationCtaImage,
        description: "Structuration, organisation et montée en maturité de la direction financière pour fiabiliser la donnée et passer de clôtures J+15 à J+5",
        objectives: [
            { title: "Cartographie et optimisation des processus", detail: "Réduction immédiate des irritants et doublons" },
            { title: "Documentation et référentiels", detail: "Continuité et montée en autonomie des équipes" },
            { title: "Contrôle interne", detail: "Sécurisation sans complexité inutile" },
            { title: "Accompagnement au changement", detail: "Adoption rapide et durable des nouveaux process" }
        ],
        deliverables: [
            "Déploiement d’un calendrier de clôture (mensuel ou trimestriel) ",
            "Rapprochement entre la compta et les reportings de gestion",
            "Mise en place de process métier",
            "(Re)définition des rôles "
        ],
        benefits: [
            "Fiabilité de l'information financière",
            "Gain de temps pour les équipes",
            "Autonomie et professionnalisation",
            "Sécurisation des délais de reporting"
        ],
        suitability: {
            title: "Cette expertise est pertinente si…",
            items: [
                "clôtures sont trop longues ou imprévisibles",
                "dépendance à une ou deux personnes clés",
                "reporting bricolé en fin de mois",
                "outils sous-exploités ou mal intégrés",
                "croissance, rachat ou changement d'outil"
            ]
        }
    },
    'digitalisation': {
        title: "Digitalisation et Automatisation",
        icon: Zap,
        heroImage: digitalisationHeroImg,
        ctaImage: digitalisationCtaImg,
        description: "Optimisation des outils finance, automatisation des tâches répétitives et mise en conformité avec les futures obligations de dématérialisation, pour une fonction finance plus rapide, plus fiable et plus moderne.",
        objectives: [
            { title: "Sélection & implémentation d'outils finance", detail: "Choix pragmatique, adapté à votre contexte" },
            { title: "Automatisation & digitalisation métiers", detail: "Réduction massive des tâches répétitives" },
            { title: "Réduction des tâches manuelles", detail: "Gain de temps immédiat pour les équipes" },
            { title: "Fiabilisation & qualité des données", detail: "Moins d'erreurs, meilleure décision" }
        ],
        deliverables: [
            "Préparation à la facturation électronique 2026 ",
            "Intégration de l’IA dans les tâches répétitives ",
            "Sélection, paramétrage et déploiement d’outils finance adaptés ",
            "Formation des équipes aux nouveaux outils"
        ],
        benefits: [
            "Gains de productivité administrative",
            "Conformité réglementaire assurée",
            "Réduction des erreurs manuelles",
            "Modernisation des processus"
        ],
        suitability: {
            title: "Cette expertise est pertinente si…",
            items: [
                "Vos processus sont encore très manuels",
                "Vos outils ne communiquent pas entre eux",
                "Votre donnée est peu fiable ou difficile à exploiter",
                "Vos équipes perdent du temps sur des tâches à faible valeur",
                "Vous devez anticiper les obligations 2026 (facturation électronique)"
            ]
        }
    },
    'pilotage-financier': {
        title: "Pilotage Financier et Performance",
        icon: PieChart,
        heroImage: pilotageHeroImg,
        ctaImage: pilotageCtaImg,
        description: "Mise en place d'outils et de méthodes de pilotage permettant une vision claire, prédictive et orientée décision.",
        objectives: [
            { title: "Définition des rituels de pilotage", detail: "Décisions plus rapides, alignées et structurées" },
            { title: "Indicateurs clés (KPI, KRI, dashboards)", detail: "Vision immédiate de la performance et des risques" },
            { title: "Reporting fiabilisé & automatisé", detail: "Clôtures plus rapides, données plus fiables" },
            { title: "Processus de collecte & remontée d'information", detail: "Moins de retraitements, meilleure lisibilité CODIR" }
        ],
        deliverables: [
            "Alignement des KPI avec les priorités de la direction",
            "Suivi de la rentabilité (marge brute, EBITDA) ",
            "Analyse du BFR et plans d’action sur la trésorerie ",
            "Tableaux de bord sur mesure (Exemple : Power BI, MyReport, Finthesis) "
        ],
        benefits: [
            "Tableaux de bord de gestion dynamiques",
            "Budget prévisionnel et atterrissage",
            "Plan de trésorerie glissant",
            "Reporting mensuel automatisé"
        ],
        suitability: {
            title: "Cette expertise est pertinente si…",
            items: [
                "vous manquez de visibilité pour piloter",
                "vos KPI sont incohérents ou dispersés",
                "le reporting vous prend trop de temps",
                "la trésorerie est difficile à anticiper",
                "votre CODIR manque d'un pilotage commun"
            ]
        }
    },
    'expertises-avancees': {
        title: "Expertises Financières Avancées",
        icon: Rocket,
        heroImage: expertisesHeroImg,
        ctaImage: expertisesCtaImg,
        description: "Accompagnement dans les phases clés de croissance et de transformation : préparation à une levée de fonds, acquisition, fusion ou restructuration. Nous intervenons en amont, pendant et après ces opérations pour fiabiliser les données, structurer les processus et garantir une vision financière cohérente et maîtrisée.",
        objectives: [
            { title: "Restructuration de la fonction finance", detail: "Stabiliser, sécuriser, clarifier les rôles" },
            { title: "Fiabilisation de la donnée pour fonds et banques", detail: "Comptes propres, cohérents et exploitables" },
            { title: "Harmonisation lors de phases de croissance", detail: "Processus, outils, pratiques comptables, reporting" },
            { title: "Accélération de l'intégration et sécurisation des opérations stratégiques", detail: "Vision groupe homogène et workflows alignés" }
        ],
        deliverables: [
            "Mise en place d'une gouvernance finance groupe",
            "Harmonisation des référentiels et méthodes comptables multi-entités",
            "Déploiement d'un reporting consolidé fiable et structuré",
            "Stabilisation et sécurisation des flux financiers critiques (P2P, OTC, trésorerie)"
        ],
        benefits: [
            "Fonction finance stabilisée et opérationnelle",
            "Vision groupe unifiée, claire et exploitable",
            "Sécurisation des opérations complexes",
            "Conformité et attentes investisseurs maîtrisées"
        ],
        suitability: {
            title: "Cette expertise est pertinente si…",
            items: [
                "l'entreprise vient de lever et doit professionnaliser la finance",
                "une acquisition / fusion a créé du chaos organisationnel",
                "la donnée n'est pas fiable ou pas consolidée",
                "le fonds demande plus de structure, de visibilité et de rigueur",
                "les équipes ne sont pas dimensionnées ou manquent de méthode"
            ]
        }
    }
};

export const ALL_EXPERTISES_NAV = [
    { icon: BarChart3, title: 'Audit', path: '/expertises/audit' },
    { icon: Settings, title: 'Structuration Finance', path: '/expertises/structuration-finance' },
    { icon: Zap, title: 'Digitalisation et Automatisation', path: '/expertises/digitalisation' },
    { icon: PieChart, title: 'Pilotage Financier', path: '/expertises/pilotage-financier' },
    { icon: Rocket, title: 'Expertises Avancées', path: '/expertises/expertises-avancees' }
];

export const CHALLENGES_DATA = [
    { title: "Fiabiliser les chiffres", icon: Database, desc: "Garantir une donnée financière exacte pour des décisions sûres." },
    { title: "Réduire le stress des clôtures", icon: Clock, desc: "Passer d'une course contre la montre à un processus maîtrisé." },
    { title: "Digitaliser les processus", icon: TrendingUp, desc: "Automatiser les tâches à faible valeur ajoutée." },
    { title: "Gagner en visibilité Tréso & BFR", icon: Search, desc: "Anticiper les besoins de cash avant qu'il ne soit trop tard." },
    { title: "Réussir une levée ou transmission", icon: Rocket, desc: "Présenter une mariée sous son meilleur jour aux investisseurs." }
];

export const PROBLEMS_DATA = [
    { title: "Deadlines non tenues", desc: "Des retards récurrents dans les reportings mensuels et les déclarations." },
    { title: "Données peu fiables", desc: "Des erreurs de saisie et des incohérences qui minent la confiance." },
    { title: "Absence de processus", desc: "Une organisation tribale où le savoir repose sur une seule person." },
    { title: "Pilotage cash instable", desc: "Une navigation à vue sans prévisionnel de trésorerie robuste." },
    { title: "Tâches chronophages", desc: "80% du temps passé à produire la donnée, 20% à l'analyser." },
    { title: "Urgence réforme 2026", desc: "La nécessité impérative de se préparer à la facturation électronique." }
];

export const BENEFITS_DATA = [
    { title: "Conformité Financière", desc: "Données sécurisées, risques fiscaux limités, auditabilité parfaite.", icon: ShieldCheck },
    { title: "Efficacité Opérationnelle", desc: "Processus fluides, moins d'erreurs manuelles, gain de temps.", icon: TrendingUp },
    { title: "Sérénité des Équipes", desc: "Fin du stress des clôtures, charge mentale allégée, rétention des talents.", icon: Users },
    { title: "ROI & Rentabilité", desc: "Fonction finance plus rentable, pilotage précis des marges.", icon: Calculator }
];

export const FAQ_SECTORS = [
    { id: 'cloture', label: 'Clôture & Fiabilité des Chiffres', icon: BarChart3 },
    { id: 'pilotage', label: 'Pilotage & Performance', icon: PieChart },
    { id: 'processus', label: 'Processus, Organisation & Contrôle Interne', icon: Settings },
    { id: 'digital', label: 'Digitalisation, Outils & Automatisation', icon: Zap },
    { id: 'croissance', label: 'Croissance, Levée & Acquisition', icon: Rocket }
];

export const FAQ_CONTENT: Record<string, { q: string, a: string }[]> = {
    'Clôture & Fiabilité des Chiffres': [
        { q: "Comment réduire nos délais de clôture ?", a: "On cartographie vos processus, identifie les blocages et met en place des checklists, un calendrier de clôture et des automatisations simples pour respecter les deadlines sans stress." },
        { q: "Comment fiabiliser nos chiffres et supprimer les écarts ?", a: "On travaille sur les données sources : détection d'anomalies, plan comptable structuré, plan analytique cohérent et contrôles réguliers pour des chiffres fiables." },
        { q: "Comment structurer un processus de révision robuste ?", a: "On définit qui vérifie quoi et quand, documente les flux, responsabilise les équipes et met en place des contrôles ciblés pour réduire les erreurs et garantir un suivi transparent." },
        { q: "Comment éviter la dépendance à une seule personne ?", a: "On documente les processus, on répartit les rôles, on crée des checklists accessibles et forme plusieurs personnes pour sécuriser la continuité sans alourdir l'équipe." },
        { q: "Pourquoi mon reporting n'est jamais aligné avec la compta ?", a: "On aligne plan comptable et axes analytiques, automatise la récupération des chiffres et garantit que reporting et compta parlent le même langage." }
    ],
    'Pilotage & Performance': [
        { q: "Comment structurer efficacement la fonction finance ?", a: "On définit les missions clés, met en place des processus clairs et responsabilise les équipes pour une fonction finance organisée, réactive et alignée sur les besoins opérationnels." },
        { q: "Quels processus documenter en priorité ?", a: "On identifie les processus critiques (clôture, reporting, trésorerie, commandes et facturation) et les documente pour sécuriser les flux et faciliter la continuité." },
        { q: "Comment clarifier les rôles et responsabilités ?", a: "On répartit les missions critiques, crée des checklists et formalise les responsabilités pour que chacun sache exactement ce qu'il doit faire." },
        { q: "Comment renforcer le contrôle interne sans alourdir les équipes ?", a: "On met en place des contrôles ciblés et automatisés, des doubles regards et des checklists accessibles pour sécuriser les opérations tout en gardant l'équipe agile." },
        { q: "Comment cartographier et optimiser nos workflows ?", a: "On visualise chaque flux, identifie les points de blocage et met en place des optimisations concrètes et automatisations simples pour gagner en temps et en fiabilité." }
    ],
    'Processus, Organisation & Contrôle Interne': [
        { q: "Quels KPIs suivre selon notre activité ?", a: "On identifie les KPIs vraiment pertinents pour votre entreprise : trésorerie, BFR, marge par produit, DSO, coûts unitaires, taux de croissance ou CAC/LTV selon votre modèle. Ces indicateurs permettent de suivre la performance, détecter les écarts et prendre des décisions éclairées." },
        { q: "Comment automatiser un reporting clair et fiable ?", a: "En fiabilisant la donnée source, on met en place des outils et processus qui récupèrent automatiquement les informations, vérifient leur cohérence et produisent des reportings clairs, précis et disponibles en temps réel." },
        { q: "Comment piloter la trésorerie et le BFR ?", a: "On structure un prévisionnel glissant et des rituels de pilotage hebdomadaires avec des outils simples, alertes automatiques et prévisions régulières, pour anticiper les besoins et sécuriser la liquidité." },
        { q: "Comment construire un budget et un forecast robustes ?", a: "On définit une méthodologie claire, aligne les hypothèses avec les équipes opérationnelles et automatise la consolidation pour créer des budgets et prévisions fiables et rapidement actualisables." },
        { q: "Comment piloter la performance quand la donnée est peu fiable ?", a: "On commence par fiabiliser la donnée source, corrige les anomalies et structure les flux pour que les indicateurs reflètent la réalité, permettant un pilotage précis et des décisions éclairées." }
    ],
    'Digitalisation, Outils & Automatisation': [
        { q: "Comment choisir les bons outils finance ?", a: "On identifie vos besoins, votre organisation et vos flux, puis on sélectionne des outils modernes et intelligents, incluant l'IA si besoin, pour automatiser, fiabiliser et faciliter le pilotage de votre finance." },
        { q: "Quelles tâches automatiser pour gagner du temps immédiatement ?", a: "On cible les tâches répétitives et chronophages : OCR factures, rapprochements bancaires, validations de factures, reportings, suivi de trésorerie, notes de frais et TVA. L'IA peut assister pour détecter les anomalies et accélérer les contrôles." },
        { q: "Comment intégrer l'IA sans complexifier ?", a: "On intègre l'IA sur des tâches simples et récurrentes pour augmenter l'équipe, pas la remplacer." },
        { q: "Comment préparer la réforme facture électronique 2026 ?", a: "On réalise un diagnostic de vos flux actuels (émission, réception, validation, archivage), identifie les écarts avec la réforme 2026 et vous accompagne dans le choix et l'intégration d'une solution conforme. L'objectif : assurer votre conformité dès septembre 2026 tout en optimisant vos processus de facturation et de contrôle." },
        { q: "Comment réussir une migration ERP / outil comptable ?", a: "On planifie et cartographie vos données, sécurise la continuité des processus, forme les équipes et accompagne la mise en production pour que la migration soit fluide et fiable." }
    ],
    'Croissance, Levée & Acquisition': [
        { q: "Que mettre en place avant ou après une levée ?", a: "Avant une levée, on structure un pilotage clair : budget solide, prévisions fiables, data financière propre et reporting structuré pour rassurer les investisseurs. Après la levée, on sécurise l'exécution : suivi du cash, contrôle des dépenses, reporting investisseurs et renforcement des processus internes." },
        { q: "Comment harmoniser la finance après une acquisition ou fusion ?", a: "On aligne les plans comptables, harmonise les outils et les processus et clarifie les responsabilités pour créer une organisation cohérente et pilotable." },
        { q: "Comment consolider plusieurs entités proprement ?", a: "On met en place un cadre de consolidation clair (périmètre, retraitements, intra-groupes), fiabilise la donnée et automatise la remontée d'informations pour produire des comptes consolidés fiables et exploitables." },
        { q: "Que faire quand la donnée est instable après un rachat ?", a: "On réalise un audit rapide des flux et des données, corrige les incohérences, restructure le plan comptable et sécurise les interfaces entre outils pour retrouver une base fiable." },
        { q: "Comment structurer la finance d'une scale-up en hypercroissance ?", a: "On pose des fondations solides : processus documentés, outils adaptés, automatisation des tâches clés, pilotage cash et KPIs structurés pour accompagner la croissance sans perte de contrôle." }
    ]
};


export const CONTACT_INFO = {
    phone: "01 64 62 08 64",
    email: "contact@finavia.fr",
    address: "12 Avenue de la Grande Armée, Paris",
};

export const CONTACT_SERVICES = [
    "Audit",
    "Structuration de la Fonction Finance",
    "Digitalisation et Automatisation",
    "Pilotage Financier et Performance",
    "Expertises Financières Avancées",
    "Autre"
];

export const PARTNER_LOGOS = {
    pennylane: partnerPennylane,
    spendesk: partnerSpendesk,
    agicap: partnerAgycap,
    regate: partnerRegate,
    fygr: partnerFygr,
    sage: partnerSage,
    finthesis: partnerFinthesis,
    myreport: partnerMyReport,
    yooz: partnerYooz,
    katech: partnerKatech,
    copilot: copilotLogo,
    openai: openaiLogo,
    claudai: claudaiLogo,
};

export const TRANSFORMATION_OBJECTIVES = [
    {
        icon: Rocket,
        title: "Conformité à la facturation électronique",
        desc: "Assurez la conformité à la réglementation de la facturation électronique (obligatoire à partir de septembre 2026) tout en automatisant vos flux, sans mobiliser toute l'équipe finance.",
        logos: [
            PARTNER_LOGOS.pennylane,
            PARTNER_LOGOS.agicap,
            PARTNER_LOGOS.fygr,
            PARTNER_LOGOS.yooz,
            PARTNER_LOGOS.finthesis
        ]
    },
    {
        icon: LayoutDashboard,
        title: "Structurer la direction financière",
        desc: "Automatisez vos tâches répétitives et vos workflows avec des outils intelligents et des agents IA, pour plus de fiabilité et de temps pour piloter.",
        logos: [
            PARTNER_LOGOS.yooz,
            PARTNER_LOGOS.pennylane,
            PARTNER_LOGOS.sage
        ]
    },
    {
        icon: Zap,
        title: "Digitaliser les workflows et automatiser",
        desc: "Produisez des reportings précis et fiables, accessibles en temps réel, pour piloter votre activité avec confiance.",
        logos: [
            PARTNER_LOGOS.yooz,
            PARTNER_LOGOS.pennylane,
            PARTNER_LOGOS.spendesk,
            PARTNER_LOGOS.copilot,
            PARTNER_LOGOS.openai,
            PARTNER_LOGOS.claudai
        ]
    },
    {
        icon: Database,
        title: "Fiabiliser le pilotage et le reporting",
        desc: "Gagnez en visibilité avec des reportings fiables, précis et disponibles en temps réel.",
        logos: [
            PARTNER_LOGOS.finthesis,
            PARTNER_LOGOS.myreport,
            PARTNER_LOGOS.agicap,
            PARTNER_LOGOS.fygr
        ]
    }
];

export const INTEGRATION_STEPS = [
    { step: "01", title: "Diagnostic rapide" },
    { step: "02", title: "Architecture outillée" },
    { step: "03", title: "Intégration & Paramétrage" },
    { step: "04", title: "Mise en production" },
    { step: "05", title: "Montée en compétences" },
    { step: "06", title: "Optimisation continue" }
];

export const INTEGRATION_BLOCKS = [
    {
        id: "01",
        tag: "SÉLECTION DE LA SOLUTION",
        title: "Identifier l'outil adapté à vos besoins spécifiques ",
        image: integrationImg,
        color: "bg-[#07036e]/10",
        actions: "Analyser les besoins métiers, établir un cahier des charges, comparer les solutions du marché et négocier les conditions contractuelles.",
        benefits: "Garantir un investissement aligné avec les priorités de l'entreprise et minimiser les risques d'inadéquation fonctionnelle."
    },
    {
        id: "02",
        tag: "PARAMÉTRAGE",
        title: "Configurer l'outil selon les processus et les référentiels financiers",
        image: reportingImg,
        color: "bg-[#e51990]/10",
        actions: "Définir les plans comptables, créer les workflows de validation,  établir les connexions avec les systèmes existants.",
        benefits: "Assurer la cohérence des données financières et l’adaptation de l'outil aux spécificités métiers de l'organisation."
    },
    {
        id: "03",
        tag: "DÉPLOIEMENT",
        title: "Accompagner la transition et la mise en production de la nouvelle solution",
        image: analytiqueImg,
        color: "bg-[#07036e]/10",
        actions: "Migrer les données historiques, mettre en place le support utilisateurs et valider le bon fonctionnement opérationnel.",
        benefits: "Garantir la continuité opérationnelle et sécuriser l'intégrité des données."
    },
    {
        id: "04",
        tag: "FORMATION",
        title: "Développer les compétences des utilisateurs ",
        image: accompagnementImg,
        color: "bg-[#e51990]/10",
        actions: "Animer des parcours de formation adaptés aux profils et évaluer la montée en compétence.",
        benefits: "Maximiser l'adoption de l'outil grâce à des supports de référence et réduire la dépendance aux supports externes."
    }
];

export const TECH_PARTNERS_LIST = [
    {
        category: "Outils de Trésorerie",
        icon: BarChart3,
        partners: [
            { name: "AGICAP", logo: PARTNER_LOGOS.agicap },
            { name: "FYGR", logo: PARTNER_LOGOS.fygr }
        ]
    },
    {
        category: "Outils de Comptabilité",
        icon: Database,
        partners: [
            { name: "Pennylane", logo: PARTNER_LOGOS.pennylane },
            { name: "SAGE", logo: PARTNER_LOGOS.sage }
        ]
    },
    {
        category: "Outils de Reporting & BI",
        icon: LayoutDashboard,
        partners: [
            { name: "Finthesis", logo: PARTNER_LOGOS.finthesis },
            { name: "My Report", logo: PARTNER_LOGOS.myreport }
        ]
    },
    {
        category: "Dépenses & Pré-comptabilité",
        icon: ShieldCheck,
        partners: [
            { name: "Yooz", logo: PARTNER_LOGOS.yooz },
            { name: "Spendesk", logo: PARTNER_LOGOS.spendesk },
            { name: "Regate", logo: PARTNER_LOGOS.regate }
        ]
    },
    {
        category: "Automation & IA",
        icon: Cpu,
        partners: [
            { name: "Microsoft Copilot", logo: PARTNER_LOGOS.copilot },
            { name: "Open AI", logo: PARTNER_LOGOS.openai }
        ]
    }
];

// Legal Pages Data
export const LEGAL_PAGES = [
    {
        slug: 'mentions-legales',
        title: 'Mentions Légales',
        description: 'Informations légales sur l\'éditeur du site, l\'hébergement et la propriété intellectuelle.',
        icon: FileText,
        path: '/legales/mentions-legales'
    },
    {
        slug: 'politique-confidentialite',
        title: 'Politique de Confidentialité',
        description: 'Comment nous collectons, utilisons et protégeons vos données personnelles.',
        icon: Shield,
        path: '/legales/politique-confidentialite'
    },
    {
        slug: 'conditions-utilisation',
        title: 'Conditions d\'Utilisation',
        description: 'Règles et conditions d\'utilisation de notre site web et de nos services.',
        icon: FileCheck,
        path: '/legales/conditions-utilisation'
    },
    {
        slug: 'politique-cookies',
        title: 'Politique Cookies',
        description: 'Informations sur les cookies utilisés sur notre site et comment les gérer.',
        icon: Cookie,
        path: '/legales/politique-cookies'
    },
    {
        slug: 'rgpd',
        title: 'RGPD',
        description: 'Vos droits concernant la protection de vos données personnelles selon le RGPD.',
        icon: Lock,
        path: '/legales/rgpd'
    }
];

export const LEGAL_PAGE_CONTENT: Record<string, {
    title: string;
    description: string;
    sections: Array<{
        title: string;
        content: string | string[];
        highlight?: boolean;
    }>;
}> = {
    'mentions-legales': {
        title: 'Mentions Légales',
        description: 'Informations légales sur l\'éditeur du site, l\'hébergement et la propriété intellectuelle.',
        sections: [
            {
                title: 'Éditeur du site',
                content: 'FINAVIA\nSAS au capital de 2 000 €\nRCS Meaux 988 065 876\nSiège social : 56 RUE DU JEU DE PAUME, 77200 TORCY\nTéléphone : 01 64 62 08 64\nEmail : contact@finavia.fr',
                highlight: true
            },
            {
                title: 'Directeur de publication',
                content: 'Le directeur de la publication est le représentant légal de FINAVIA.'
            },
            {
                title: 'Hébergement',
                content: 'Le site est hébergé par Vercel Inc.\n340 S Lemon Ave #4133\nWalnut, CA 91789, USA'
            },
            {
                title: 'Propriété intellectuelle',
                content: [
                    'L\'ensemble de ce site relève de la législation française et internationale sur le droit d\'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.',
                    'La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement interdite sauf autorisation expresse de l\'éditeur.'
                ]
            },
            {
                title: 'Responsabilité',
                content: 'Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. FINAVIA ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l\'utilisateur, lors de l\'accès au site.'
            }
        ]
    },
    'politique-confidentialite': {
        title: 'Politique de Confidentialité',
        description: 'Comment nous collectons, utilisons et protégeons vos données personnelles.',
        sections: [
            {
                title: 'Introduction',
                content: 'FINAVIA s\'engage à protéger la confidentialité et la sécurité des informations personnelles que vous nous confiez. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos données personnelles.'
            },
            {
                title: 'Données collectées',
                content: [
                    'Nous collectons les données suivantes :',
                    '• Nom et prénom',
                    '• Adresse email',
                    '• Numéro de téléphone',
                    '• Nom de l\'entreprise',
                    '• Fonction',
                    '• Informations fournies dans les formulaires de contact'
                ]
            },
            {
                title: 'Utilisation des données',
                content: [
                    'Vos données personnelles sont utilisées pour :',
                    '• Répondre à vos demandes de contact',
                    '• Vous envoyer des informations sur nos services',
                    '• Améliorer nos services et notre site web',
                    '• Respecter nos obligations légales et réglementaires'
                ]
            },
            {
                title: 'Partage des données',
                content: [
                    'Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, sauf dans les cas suivants :',
                    '• Avec votre consentement explicite',
                    '• Pour respecter une obligation légale',
                    '• Avec nos prestataires de services sous contrat de confidentialité'
                ]
            },
            {
                title: 'Sécurité des données',
                content: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, destruction ou altération.'
            },
            {
                title: 'Durée de conservation',
                content: 'Vos données personnelles sont conservées pendant une durée de 3 ans à compter du dernier contact, sauf obligation légale de conservation plus longue.'
            }
        ]
    },
    'conditions-utilisation': {
        title: 'Conditions d\'Utilisation',
        description: 'Règles et conditions d\'utilisation de notre site web et de nos services.',
        sections: [
            {
                title: 'Acceptation des conditions',
                content: 'L\'utilisation du site web de FINAVIA implique l\'acceptation pleine et entière des présentes conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser ce site.'
            },
            {
                title: 'Utilisation du site',
                content: [
                    'Vous vous engagez à utiliser ce site de manière licite et conformément aux présentes conditions. Il est notamment interdit de :',
                    '• Utiliser le site à des fins illégales ou non autorisées',
                    '• Reproduire, copier ou vendre tout ou partie du site',
                    '• Tenter d\'accéder de manière non autorisée au site ou à ses systèmes',
                    '• Transmettre des virus ou tout code malveillant',
                    '• Usurper l\'identité d\'une autre personne'
                ]
            },
            {
                title: 'Propriété intellectuelle',
                content: 'Tous les contenus présents sur ce site (textes, images, logos, vidéos, etc.) sont la propriété exclusive de FINAVIA ou de ses partenaires et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.'
            },
            {
                title: 'Limitation de responsabilité',
                content: 'FINAVIA ne pourra être tenu responsable des dommages directs ou indirects résultant de l\'utilisation ou de l\'impossibilité d\'utiliser ce site, notamment en cas d\'interruption, de bug, d\'erreur, d\'omission, de suppression de fichiers, de virus ou de tout autre problème.'
            },
            {
                title: 'Modification des conditions',
                content: 'FINAVIA se réserve le droit de modifier à tout moment les présentes conditions d\'utilisation. Les modifications prennent effet dès leur publication sur le site. Il est recommandé de consulter régulièrement cette page.'
            },
            {
                title: 'Droit applicable',
                content: 'Les présentes conditions d\'utilisation sont régies par le droit français. Tout litige relatif à leur interprétation ou à leur exécution relève de la compétence exclusive des tribunaux français.'
            }
        ]
    },
    'politique-cookies': {
        title: 'Politique Cookies',
        description: 'Informations sur les cookies utilisés sur notre site et comment les gérer.',
        sections: [
            {
                title: 'Qu\'est-ce qu\'un cookie ?',
                content: 'Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d\'un site web. Il permet au site de reconnaître votre navigateur et de mémoriser certaines informations vous concernant.'
            },
            {
                title: 'Types de cookies utilisés',
                content: [
                    'Cookies strictement nécessaires : Ces cookies sont indispensables au fonctionnement du site. Ils permettent notamment de mémoriser vos préférences et de maintenir votre session active.',
                    'Cookies de performance : Ces cookies nous permettent d\'analyser l\'utilisation du site pour améliorer ses performances et votre expérience utilisateur.',
                    'Cookies de fonctionnalité : Ces cookies permettent d\'améliorer les fonctionnalités du site en mémorisant vos choix et préférences.'
                ]
            },
            {
                title: 'Gestion des cookies',
                content: [
                    'Vous pouvez à tout moment gérer et supprimer les cookies via les paramètres de votre navigateur. Voici les liens vers les pages d\'aide des principaux navigateurs :',
                    '• Google Chrome : https://support.google.com/chrome/answer/95647',
                    '• Mozilla Firefox : https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences',
                    '• Safari : https://support.apple.com/fr-fr/guide/safari/sfri11471/mac',
                    '• Microsoft Edge : https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-995b-8337f5e2e44b',
                    'Attention : La désactivation de certains cookies peut affecter le fonctionnement du site.'
                ]
            },
            {
                title: 'Cookies tiers',
                content: 'Notre site peut contenir des cookies provenant de services tiers (analytics, réseaux sociaux, etc.). Ces cookies sont soumis aux politiques de confidentialité de ces tiers.'
            },
            {
                title: 'Durée de conservation',
                content: 'Les cookies sont conservés pour une durée maximale de 13 mois à compter de leur dépôt sur votre terminal.'
            }
        ]
    },
    'rgpd': {
        title: 'RGPD - Protection des Données Personnelles',
        description: 'Vos droits concernant la protection de vos données personnelles selon le RGPD.',
        sections: [
            {
                title: 'Responsable du traitement',
                content: [
                    'Le responsable du traitement des données personnelles est FINAVIA, SAS au capital de 2 000 €, RCS Meaux 988 065 876.',
                    'Pour toute question relative au traitement de vos données personnelles, vous pouvez nous contacter à l\'adresse : contact@finavia.fr'
                ],
                highlight: true
            },
            {
                title: 'Base légale du traitement',
                content: [
                    'Le traitement de vos données personnelles est fondé sur :',
                    '• Votre consentement (formulaires de contact, newsletter)',
                    '• L\'exécution d\'un contrat ou de mesures précontractuelles',
                    '• Le respect d\'une obligation légale',
                    '• Notre intérêt légitime (amélioration de nos services)'
                ]
            },
            {
                title: 'Finalités du traitement',
                content: [
                    'Vos données personnelles sont traitées pour les finalités suivantes :',
                    '• Gestion de la relation client et commerciale',
                    '• Réponse à vos demandes de contact et de devis',
                    '• Envoi d\'informations sur nos services',
                    '• Amélioration de nos services et de notre site web',
                    '• Respect de nos obligations légales et réglementaires',
                    '• Gestion des réclamations'
                ]
            },
            {
                title: 'Destinataires des données',
                content: [
                    'Vos données personnelles peuvent être communiquées aux destinataires suivants :',
                    '• Personnel autorisé de FINAVIA',
                    '• Prestataires techniques (hébergement, maintenance)',
                    '• Prestataires de services (envoi d\'emails, analytics)',
                    '• Autorités compétentes en cas d\'obligation légale'
                ]
            },
            {
                title: 'Durée de conservation',
                content: 'Les données personnelles sont conservées pendant une durée de 3 ans à compter du dernier contact avec vous, sauf obligation légale de conservation plus longue ou demande de suppression de votre part.'
            },
            {
                title: 'Vos droits',
                content: [
                    'Conformément au RGPD, vous disposez des droits suivants :',
                    '• Droit d\'accès : Vous pouvez obtenir une copie de vos données personnelles',
                    '• Droit de rectification : Vous pouvez demander la correction de vos données inexactes',
                    '• Droit à l\'effacement : Vous pouvez demander la suppression de vos données',
                    '• Droit à la limitation : Vous pouvez demander la limitation du traitement de vos données',
                    '• Droit à la portabilité : Vous pouvez récupérer vos données dans un format structuré',
                    '• Droit d\'opposition : Vous pouvez vous opposer au traitement de vos données',
                    '• Droit de retirer votre consentement : À tout moment, si le traitement est basé sur votre consentement',
                    'Pour exercer ces droits, vous pouvez nous contacter à l\'adresse : contact@finavia.fr'
                ]
            },
            {
                title: 'Réclamation auprès de la CNIL',
                content: 'Si vous estimez que vos droits ne sont pas respectés, vous avez la possibilité d\'introduire une réclamation auprès de la Commission Nationale de l\'Informatique et des Libertés (CNIL) : www.cnil.fr'
            },
            {
                title: 'Sécurité des données',
                content: 'Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité et la confidentialité de vos données personnelles, notamment contre tout accès non autorisé, perte, destruction ou altération.'
            },
            {
                title: 'Transfert de données hors UE',
                content: 'Certaines de vos données peuvent être transférées vers des pays situés en dehors de l\'Union Européenne (notamment pour l\'hébergement). Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place pour protéger vos données.'
            }
        ]
    }
};
