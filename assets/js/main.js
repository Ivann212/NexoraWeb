function loadPartial(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadPartial("nav", "/partials/nav.html");
loadPartial("footer", "/partials/footer.html");


var projects = [
          {
            id: 1,
            type: "Restaurant",
            category: "Restaurant",
            name: "Modèle Restaurant Gastronomique",
            legend: "Concept restauration haut de gamme",
            gradient: "from-amber-500 to-orange-600",
            desc: "Maquette présentant un design élégant avec menu interactif et système de réservation.",
            features: ["Menu digital", "Réservation", "Galerie"],
          },
          {
            id: 2,
            type: "Salon & Beauté",
            category: "Service",
            name: "Modèle Institut Beauté",
            legend: "Démonstration salon de coiffure / esthétique",
            gradient: "from-rose-500 to-pink-600",
            desc: "Concept design premium avec prise de rendez-vous intégrée.",
            features: ["Prise de RDV", "Portfolio", "Avis clients"],
          },
          {
            id: 3,
            type: "Commerce Alimentaire",
            category: "Commerce",
            name: "Modèle Boulangerie-Pâtisserie",
            legend: "Exemple commerce de bouche",
            gradient: "from-yellow-500 to-amber-600",
            desc: "Maquette vitrine gourmande avec fonctionnalité click & collect.",
            features: ["Click & Collect", "Carte produits", "Commandes"],
          },
          {
            id: 4,
            type: "Boutique Luxe",
            category: "Commerce",
            name: "Modèle E-commerce Premium",
            legend: "Concept bijouterie / luxe",
            gradient: "from-violet-500 to-purple-700",
            desc: "Démonstration boutique en ligne haut de gamme avec configurateur.",
            features: ["Boutique", "Configurateur", "Design luxe"],
          },
          {
            id: 5,
            type: "Artisan",
            category: "Artisan",
            name: "Modèle Artisan du Bâtiment",
            legend: "Exemple menuisier / ébéniste",
            gradient: "from-emerald-500 to-teal-600",
            desc: "Concept portfolio artisanal avec demande de devis en ligne.",
            features: ["Portfolio", "Devis en ligne", "Galerie travaux"],
          },
          {
            id: 6,
            type: "Restauration Rapide",
            category: "Restaurant",
            name: "Modèle Fast-Food Moderne",
            legend: "Démonstration restauration rapide",
            gradient: "from-red-500 to-orange-600",
            desc: "Maquette commande en ligne fluide et moderne.",
            features: ["Click & Collect", "Livraison", "Programme fidélité"],
          },
          {
            id: 7,
            type: "Bien-être",
            category: "Service",
            name: "Modèle Spa & Wellness",
            legend: "Concept institut de bien-être",
            gradient: "from-teal-400 to-cyan-600",
            desc: "Design zen avec système de réservation intégré.",
            features: ["Réservation", "Catalogue soins", "Cartes cadeaux"],
          },
          {
            id: 8,
            type: "Formation",
            category: "Service",
            name: "Modèle Centre de Formation",
            legend: "Exemple organisme de formation",
            gradient: "from-indigo-500 to-blue-700",
            desc: "Concept plateforme formation complète.",
            features: ["Catalogue formations", "Inscription", "Espace membre"],
          },
          {
            id: 9,
            type: "Pizzeria",
            category: "Restaurant",
            name: "Modèle Pizzeria Italienne",
            legend: "Démonstration restaurant italien",
            gradient: "from-orange-500 to-red-600",
            desc: "Maquette commande intuitive et personnalisable.",
            features: ["Personnalisation", "Livraison", "Fidélité"],
          },
        ];

var testimonials = [
  {
    name: "Marie D.",
    role: "Gérante - Salon de coiffure",
    city: "Lille",
    text: "Un travail remarquable ! Notre site reflète parfaitement notre image premium.",
  },
  {
    name: "Thomas L.",
    role: "Chef restaurateur",
    city: "Metz",
    text: "Le site est magnifique et les réservations ont augmenté de 40%.",
  },
  {
    name: "Sophie M.",
    role: "Propriétaire - Bijouterie",
    city: "Rouen",
    text: "Notre boutique en ligne est sublime et les ventes décollent !",
  },
  {
    name: "Pierre G.",
    role: "Artisan menuisier",
    city: "Grenoble",
    text: "Enfin un site à la hauteur de mon savoir-faire. Je recommande !",
  },
  {
    name: "Isabelle R.",
    role: "Directrice - Formation",
    city: "Fréjus",
    text: "Notre site est désormais une vraie vitrine professionnelle.",
  },
  {
    name: "Laurent B.",
    role: "Gérant - Fast-food",
    city: "Lille",
    text: "Design moderne, commandes fluides. Un game changer !",
  },
];

var services = [
  {
    title: "Site Vitrine Premium",
    subtitle: "Votre image professionnelle",
    desc: "Sites élégants et optimisés.",
    features: [
      "Design sur mesure",
      "Responsive",
      "SEO",
      "Formulaire",
      "Réseaux sociaux",
      "Hébergement",
    ],
    icon: "🖥️",
    gradient: "from-blue-500 to-indigo-600",
    price: "À partir de 800€",
  },
  {
    title: "Site Restaurant",
    subtitle: "Expérience gourmande",
    desc: "Menu digital et réservations.",
    features: [
      "Menu interactif",
      "Réservation",
      "Galerie",
      "Maps",
      "Horaires",
      "Click & Collect",
    ],
    icon: "🍽️",
    gradient: "from-amber-500 to-orange-600",
    price: "À partir de 1200€",
  },
  {
    title: "E-commerce",
    subtitle: "Vendez en ligne",
    desc: "Boutique performante.",
    features: [
      "Catalogue",
      "Paiement",
      "Stocks",
      "Livraison",
      "Dashboard",
      "Emails",
    ],
    icon: "🛒",
    gradient: "from-emerald-500 to-teal-600",
    price: "À partir de 1500€",
  },
  {
    title: "Refonte de Site",
    subtitle: "Modernisation",
    desc: "Transformation complète.",
    features: [
      "Audit",
      "Nouveau design",
      "Migration",
      "Vitesse",
      "SEO",
      "Formation",
    ],
    icon: "✨",
    gradient: "from-violet-500 to-purple-600",
    price: "Sur devis",
  },
  {
    title: "Image de Marque",
    subtitle: "Identité forte",
    desc: "Logo et charte graphique.",
    features: [
      "Logo",
      "Charte",
      "Couleurs",
      "Typos",
      "Guidelines",
      "Déclinaisons",
    ],
    icon: "🎨",
    gradient: "from-pink-500 to-rose-600",
    price: "À partir de 400€",
  },
  {
    title: "Maintenance",
    subtitle: "Site au top",
    desc: "Support continu.",
    features: [
      "Mises à jour",
      "Sauvegardes",
      "Sécurité",
      "Support",
      "Modifs",
      "Rapports",
    ],
    icon: "🔧",
    gradient: "from-cyan-500 to-blue-600",
    price: "Dès 50€/mois",
  },
];

var mobileMenuOpen = false;



function renderProjectCard(project) {
  var featuresHtml = "";
  for (var i = 0; i < project.features.length; i++) {
    featuresHtml +=
      '<span class="px-2 py-0.5 bg-white/10 rounded-full text-[10px] text-white">' +
      project.features[i] +
      "</span>";
  }
  return (
      '<div class="group cursor-pointer project-card" data-category="' +
      project.category +
      '">' +
      '<div class="relative h-64 bg-gradient-to-br ' +
      project.gradient +
      '/20 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300">' +
      '<div class="absolute inset-4 bg-slate-900/95 rounded-xl overflow-hidden border border-white/5">' +
      '<div class="h-6 bg-slate-800 flex items-center px-2 gap-1">' +
      '<div class="w-1.5 h-1.5 rounded-full bg-red-500"></div>' +
      '<div class="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>' +
      '<div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>' +
      '<span class="ml-2 text-[9px] text-slate-500">demo-nexoraweb.fr</span>' +
      "</div>" +
      '<div class="p-3">' +
      '<div class="w-full h-3 bg-gradient-to-r ' +
      project.gradient +
      '/30 rounded mb-2"></div>' +
      '<div class="w-3/4 h-2 bg-slate-700/50 rounded mb-1"></div>' +
      '<div class="w-1/2 h-2 bg-slate-700/30 rounded mb-2"></div>' +
      '<div class="grid grid-cols-2 gap-2"><div class="h-16 bg-slate-800 rounded"></div><div class="h-16 bg-slate-800/60 rounded"></div></div>' +
      "</div>" +
      "</div>" +
      '<div class="project-overlay absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300">' +
      '<p class="text-sm text-slate-300 mb-2">' +
      project.desc +
      "</p>" +
      '<div class="flex flex-wrap gap-1 mb-3">' +
      featuresHtml +
      "</div>" +
      '<span class="text-white text-sm font-medium">Découvrir ce modèle →</span>' +
      "</div>" +
      "</div>" +
      '<div class="mt-4">' +
      '<div class="flex items-center justify-between mb-1">' +
      '<span class="text-xs font-medium bg-gradient-to-r ' +
      project.gradient +
      ' bg-clip-text text-transparent">' +
      project.type +
      "</span>" +
      '<span class="text-slate-500 text-[10px] uppercase tracking-wide">Maquette</span>' +
      "</div>" +
      '<h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">' +
      project.name +
      "</h3>" +
      '<p class="text-slate-500 text-xs mt-1">' +
      project.legend +
      "</p>" +
      "</div>" +
      "</div>"
  );
}

function renderTestimonial(t) {
  return (
    '<div class="p-8 bg-slate-950/50 rounded-3xl border border-white/5">' +
    '<div class="flex gap-1 mb-4">' +
    '<svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>' +
    '<svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>' +
    '<svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>' +
    '<svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>' +
    '<svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>' +
    "</div>" +
    '<p class="text-slate-300 mb-6 leading-relaxed">"' +
    t.text +
    '"</p>' +
    '<div class="flex items-center gap-4 pt-6 border-t border-white/5">' +
    '<div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold">' +
    t.name.charAt(0) +
    "</div>" +
    '<div><div class="text-white font-semibold">' +
    t.name +
    '</div><div class="text-slate-500 text-sm">' +
    t.role +
    '</div><div class="text-blue-400 text-xs">' +
    t.city +
    "</div></div>" +
    "</div>" +
    "</div>"
  );
}

function renderServiceDetail(service, index) {
  var isReversed = index % 2 === 1;
  var featuresHtml = "";
  for (var i = 0; i < service.features.length; i++) {
    featuresHtml +=
      '<div class="flex items-center gap-2 text-slate-300"><svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-sm">' +
      service.features[i] +
      "</span></div>";
  }
  var previewFeaturesHtml = "";
  for (var j = 0; j < 3 && j < service.features.length; j++) {
    previewFeaturesHtml +=
      '<div class="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl"><div class="w-2 h-2 bg-gradient-to-r ' +
      service.gradient +
      ' rounded-full"></div><span class="text-slate-300 text-sm">' +
      service.features[j] +
      "</span></div>";
  }
  return (
    '<div class="grid lg:grid-cols-2 gap-12 items-center">' +
    '<div class="' +
    (isReversed ? "lg:order-2" : "") +
    '">' +
    '<div class="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r ' +
    service.gradient +
    '/10 border border-white/10 rounded-full mb-6">' +
    '<span class="text-2xl">' +
    service.icon +
    "</span>" +
    '<span class="font-semibold bg-gradient-to-r ' +
    service.gradient +
    ' bg-clip-text text-transparent">' +
    service.price +
    "</span>" +
    "</div>" +
    '<h2 class="text-3xl md:text-4xl font-black text-white mb-3">' +
    service.title +
    "</h2>" +
    '<p class="text-xl text-blue-400 mb-4">' +
    service.subtitle +
    "</p>" +
    '<p class="text-lg text-slate-400 mb-6">' +
    service.desc +
    "</p>" +
    '<div class="grid grid-cols-2 gap-3">' +
    featuresHtml +
    "</div>" +
    "</div>" +
    '<div class="' +
    (isReversed ? "lg:order-1" : "") +
    '">' +
    '<div class="p-8 bg-gradient-to-br ' +
    service.gradient +
    '/10 rounded-3xl border border-white/10">' +
    '<div class="text-7xl mb-6">' +
    service.icon +
    "</div>" +
    '<div class="space-y-3">' +
    previewFeaturesHtml +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>"
  );
}

// ===== INITIALIZE =====
function initGrids() {
  var homeGrid = document.getElementById("homeProjectsGrid");
  var realGrid = document.getElementById("realisationsGrid");
  var testGrid = document.getElementById("testimonialsGrid");
  var servGrid = document.getElementById("servicesDetailGrid");

  if (homeGrid) {
    var homeHtml = "";
    for (var i = 0; i < 6 && i < projects.length; i++) {
      homeHtml += renderProjectCard(projects[i]);
    }
    homeGrid.innerHTML = homeHtml;
  }

  if (realGrid) {
    var realHtml = "";
    for (var j = 0; j < projects.length; j++) {
      realHtml += renderProjectCard(projects[j]);
    }
    realGrid.innerHTML = realHtml;
  }

  if (testGrid) {
    var testHtml = "";
    for (var k = 0; k < testimonials.length; k++) {
      testHtml += renderTestimonial(testimonials[k]);
    }
    testGrid.innerHTML = testHtml;
  }

  if (servGrid) {
    var servHtml = "";
    for (var l = 0; l < services.length; l++) {
      servHtml += renderServiceDetail(services[l], l);
    }
    servGrid.innerHTML = servHtml;
  }
}

// ===== PAGE NAVIGATION =====


// ===== FILTER PROJECTS =====
function filterProjects(filter) {
  var buttons = document.querySelectorAll(".filter-btn");
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].getAttribute("data-filter") === filter) {
      buttons[i].className =
        "filter-btn px-6 py-3 rounded-full font-medium bg-blue-500 text-white";
    } else {
      buttons[i].className =
        "filter-btn px-6 py-3 rounded-full font-medium bg-slate-800 text-slate-400 hover:bg-slate-700";
    }
  }
  var filtered = [];
  for (var j = 0; j < projects.length; j++) {
    if (filter === "Tous" || projects[j].category === filter) {
      filtered.push(projects[j]);
    }
  }
  var grid = document.getElementById("realisationsGrid");
  if (grid) {
    var html = "";
    for (var k = 0; k < filtered.length; k++) {
      html += renderProjectCard(filtered[k]);
    }
    grid.innerHTML = html;
  }
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  var menu = document.getElementById("mobileMenu");
  var line1 = document.getElementById("menuLine1");
  var line2 = document.getElementById("menuLine2");
  var line3 = document.getElementById("menuLine3");
  if (mobileMenuOpen) {
    menu.style.maxHeight = "400px";
    line1.style.transform = "rotate(45deg) translateY(8px)";
    line2.style.opacity = "0";
    line3.style.transform = "rotate(-45deg) translateY(-8px)";
  } else {
    menu.style.maxHeight = "0";
    line1.style.transform = "none";
    line2.style.opacity = "1";
    line3.style.transform = "none";
  }
}

// ===== FORM SUBMIT =====
function submitForm() {
  var name = document.getElementById("formName").value;
  var email = document.getElementById("formEmail").value;
  var message = document.getElementById("formMessage").value;
  if (name && email && message) {
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("formSuccess").style.display = "block";
  } else {
    alert("Veuillez remplir tous les champs obligatoires (*)");
  }
  return false; // Empêche la soumission réelle du formulaire
}

// ===== NAVBAR SCROLL =====
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(2, 6, 23, 0.9)";
      navbar.style.backdropFilter = "blur(20px)";
      navbar.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.backdropFilter = "none";
      navbar.style.borderBottom = "none";
    }
  }
});

// ===== INIT ON LOAD =====
document.addEventListener("DOMContentLoaded", initGrids);