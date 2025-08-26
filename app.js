// Multi-page Marketing Agency Website JavaScript

// Data from JSON
const appData = {
  "services": [
    {
      "id": 1,
      "name": "SEO Optimization",
      "description": "Boost your website's ranking on Google with data-driven SEO strategies",
      "detailedDescription": "Our comprehensive SEO services help businesses improve their search engine visibility through keyword research, on-page optimization, technical SEO, and link building strategies.",
      "icon": "🚀",
      "features": ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO", "Local SEO", "SEO Audits"],
      "price": "₹15,000 - ₹40,000/month",
      "category": "Search Marketing"
    },
    {
      "id": 2, 
      "name": "Social Media Marketing",
      "description": "Engage your audience across all social platforms with creative campaigns",
      "detailedDescription": "Build your brand presence across social media platforms with engaging content, community management, and targeted advertising campaigns.",
      "icon": "📱",
      "features": ["Content Creation", "Community Management", "Social Ads", "Analytics", "Influencer Outreach", "Brand Monitoring"],
      "price": "₹12,000 - ₹35,000/month",
      "category": "Social Media"
    },
    {
      "id": 3,
      "name": "Google Ads & PPC",
      "description": "Drive targeted traffic instantly with optimized pay-per-click campaigns",
      "detailedDescription": "Generate immediate results with strategic PPC campaigns across Google Ads, Bing Ads, and social media platforms.",
      "icon": "🎯",
      "features": ["Campaign Setup", "Keyword Bidding", "Ad Creation", "Performance Tracking", "Landing Page Optimization", "Conversion Tracking"],
      "price": "₹10,000 - ₹30,000/month",
      "category": "Paid Advertising"
    },
    {
      "id": 4,
      "name": "Content Marketing", 
      "description": "Tell your brand story effectively with compelling content strategies",
      "detailedDescription": "Create valuable, relevant content that attracts and engages your target audience while driving profitable customer action.",
      "icon": "✍️",
      "features": ["Blog Writing", "Video Scripts", "Content Strategy", "Distribution", "Content Calendar", "SEO Content"],
      "price": "₹20,000 - ₹50,000/month",
      "category": "Content Strategy"
    },
    {
      "id": 5,
      "name": "Web Design & Development",
      "description": "Beautiful, functional websites that convert visitors into customers",
      "detailedDescription": "Design and develop responsive, user-friendly websites that not only look great but also drive conversions and business growth.",
      "icon": "💻",
      "features": ["Responsive Design", "E-commerce Setup", "CMS Integration", "Performance Optimization", "UI/UX Design", "Mobile Optimization"],
      "price": "₹40,000 - ₹1,00,000/project",
      "category": "Web Development"
    },
    {
      "id": 6,
      "name": "Email Marketing",
      "description": "Nurture leads with targeted email campaigns that drive conversions",
      "detailedDescription": "Build and maintain relationships with your audience through strategic email marketing campaigns and automated nurture sequences.",
      "icon": "📧",
      "features": ["List Building", "Automation", "Design Templates", "A/B Testing", "Segmentation", "Analytics"],
      "price": "₹8,000 - ₹25,000/month",
      "category": "Email Marketing"
    },
    {
      "id": 7,
      "name": "Analytics & Reporting",
      "description": "Data-driven insights for growth with comprehensive performance tracking",
      "detailedDescription": "Make informed decisions with detailed analytics, reporting, and insights across all your digital marketing channels.",
      "icon": "📊",
      "features": ["Google Analytics Setup", "Custom Dashboards", "Monthly Reports", "ROI Tracking", "Conversion Analysis", "Competitor Analysis"],
      "price": "₹10,000 - ₹30,000/month",
      "category": "Analytics"
    },
    {
      "id": 8,
      "name": "Influencer Marketing",
      "description": "Reach new audiences through strategic partnerships with relevant influencers",
      "detailedDescription": "Connect with your target audience through authentic influencer partnerships and sponsored content campaigns.",
      "icon": "🌟",
      "features": ["Influencer Outreach", "Campaign Management", "Content Collaboration", "Performance Tracking", "Contract Management", "ROI Analysis"],
      "price": "₹25,000 - ₹75,000/month",
      "category": "Influencer Marketing"
    }
  ],
  "packages": [
    {
      "name": "Starter",
      "price": "₹25,000/month",
      "description": "Perfect for small businesses starting their digital journey",
      "services": ["SEO Optimization", "Social Media Marketing"],
      "features": ["Basic SEO audit", "2 social platforms", "Monthly reporting", "Email support", "Basic analytics"],
      "ideal": "Small businesses, startups, local services"
    },
    {
      "name": "Growth", 
      "price": "₹50,000/month",
      "description": "Ideal for growing businesses ready to scale",
      "services": ["SEO Optimization", "Social Media Marketing", "Content Marketing", "Analytics & Reporting"],
      "features": ["Advanced SEO", "4 social platforms", "Blog content", "Bi-weekly calls", "Custom reports", "Email campaigns"],
      "ideal": "Growing businesses, established companies"
    },
    {
      "name": "Professional",
      "price": "₹1,00,000/month", 
      "description": "Comprehensive solution for established businesses",
      "services": ["SEO", "SMM", "Google Ads", "Content Marketing", "Email Marketing", "Analytics"],
      "features": ["Full-service marketing", "PPC campaigns", "Email automation", "Weekly calls", "Dedicated manager", "Advanced reporting"],
      "ideal": "Established businesses, e-commerce companies"
    },
    {
      "name": "Enterprise",
      "price": "₹2,00,000/month",
      "description": "Complete 360° marketing for large enterprises",
      "services": ["All Services Included"],
      "features": ["Full-service suite", "Influencer partnerships", "Custom strategies", "Priority support", "Quarterly reviews", "Custom integrations"],
      "ideal": "Large enterprises, multi-location businesses"
    }
  ],
  "testimonials": [
    {
      "name": "Rajesh Sharma",
      "company": "TechStart Solutions",
      "position": "CEO",
      "text": "Our website traffic increased by 300% within 6 months. The SEO and content strategy was exactly what we needed to reach our target audience.",
      "rating": 5,
      "service": "SEO Optimization"
    },
    {
      "name": "Priya Mehta", 
      "company": "Fashion Forward Boutique",
      "position": "Founder",
      "text": "Social media engagement skyrocketed! Their creative campaigns perfectly captured our brand essence and drove real sales.",
      "rating": 5,
      "service": "Social Media Marketing"
    },
    {
      "name": "Amit Kumar",
      "company": "Local Eats Restaurant", 
      "position": "Owner",
      "text": "Google Ads campaign delivered 150% ROI in the first month. The team understood our local market perfectly.",
      "rating": 5,
      "service": "Google Ads & PPC"
    },
    {
      "name": "Sarah Johnson",
      "company": "Global Imports Ltd",
      "position": "Marketing Director",
      "text": "Professional team, data-driven approach, and exceptional results. Our B2B lead generation improved dramatically.",
      "rating": 5,
      "service": "Content Marketing"
    },
    {
      "name": "Vikash Singh",
      "company": "Fitness Hub Gym",
      "position": "General Manager",
      "text": "From web design to marketing campaigns, they handled everything seamlessly. Our membership doubled in 8 months!",
      "rating": 5,
      "service": "Web Design"
    }
  ],
  "team": [
    {
      "name": "Arjun Patel",
      "position": "Founder & CEO",
      "description": "10+ years in digital marketing with expertise in SEO and PPC",
      "image": "👨‍💼"
    },
    {
      "name": "Sneha Sharma",
      "position": "Creative Director",
      "description": "Award-winning designer specializing in brand identity and social media",
      "image": "👩‍🎨"
    },
    {
      "name": "Rahul Kumar",
      "position": "Technical Lead", 
      "description": "Full-stack developer with focus on performance and user experience",
      "image": "👨‍💻"
    },
    {
      "name": "Meera Singh",
      "position": "Analytics Manager",
      "description": "Data analyst with expertise in Google Analytics and marketing insights",
      "image": "👩‍💼"
    }
  ],
  "whatsappNumber": "918871225929",
  "companyInfo": {
    "name": "Digital Growth Agency",
    "tagline": "Grow Your Business with 360° Digital Marketing", 
    "description": "We are a full-service digital marketing agency specializing in SEO, social media marketing, PPC advertising, and more. Our data-driven approach helps businesses achieve measurable growth.",
    "mission": "To empower businesses of all sizes with innovative digital marketing strategies that drive real, measurable results.",
    "vision": "To be India's leading digital marketing agency, known for creativity, innovation, and exceptional client success.",
    "email": "hello@digitalgrowthagency.com",
    "phone": "+91 98765 43210",
    "address": "123 Business District, Mumbai, Maharashtra 400001",
    "founded": "2018",
    "clients": "500+",
    "projects": "1000+",
    "teamSize": "25+"
  },
  "whyChooseUs": [
    {
      "title": "Data-Driven Results",
      "description": "Every strategy is backed by comprehensive analytics and real-time performance tracking for measurable ROI",
      "icon": "📈"
    },
    {
      "title": "Creative Excellence", 
      "description": "Award-winning creative team that brings your brand vision to life with innovative campaigns",
      "icon": "🎨"
    },
    {
      "title": "Proven Track Record",
      "description": "500+ successful campaigns with an average ROI increase of 250% across diverse industries",
      "icon": "🏆"
    },
    {
      "title": "24/7 Support",
      "description": "Dedicated account managers and support team available around the clock for your success",
      "icon": "🎧"
    }
  ],
  "timeline": [
    {
      "year": "2018",
      "title": "Agency Founded",
      "description": "Started with a vision to transform digital marketing in India"
    },
    {
      "year": "2019", 
      "title": "50+ Happy Clients",
      "description": "Achieved first major milestone with diverse client portfolio"
    },
    {
      "year": "2021",
      "title": "200+ Projects Completed",
      "description": "Expanded services and team to meet growing demand"
    },
    {
      "year": "2023",
      "title": "500+ Clients Milestone",
      "description": "Became one of India's fastest-growing digital agencies"
    },
    {
      "year": "2025",
      "title": "Industry Recognition",
      "description": "Awarded 'Digital Agency of the Year' by Marketing Excellence Awards"
    }
  ]
};

// Global variables
let selectedServices = [];
let currentPage = 'home';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  console.log('Initializing app...');
  setupNavigation();
  setupMobileMenu();
  setupWhatsAppIntegration();
  populateContent();
  setupServiceSelection();
  setupModal();
  setupContactForm();
  updatePlanDisplay();
  
  // Show home page by default
  navigateToPage('home');
}

// Navigation Setup
function setupNavigation() {
  console.log('Setting up navigation...');
  
  // Handle main navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.getAttribute('data-page');
      console.log('Nav link clicked:', page);
      if (page) {
        navigateToPage(page);
      }
    });
  });

  // Handle footer navigation links
  const footerLinks = document.querySelectorAll('footer a[onclick*="navigateToPage"]');
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const onclickAttr = this.getAttribute('onclick');
      const match = onclickAttr.match(/navigateToPage\('([^']+)'\)/);
      if (match) {
        navigateToPage(match[1]);
      }
    });
  });
}

function navigateToPage(page) {
  console.log('Navigating to page:', page);
  
  // Hide all page contents
  const allPages = document.querySelectorAll('.page-content');
  allPages.forEach(p => {
    p.classList.remove('active');
    console.log('Hiding page:', p.id);
  });
  
  // Show selected page
  const targetPage = document.getElementById(`page-${page}`);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = page;
    console.log('Showing page:', targetPage.id);
    
    // Update navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === page) {
        link.classList.add('active');
      }
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Close mobile menu
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
      navMenu.classList.remove('active');
    }
    
    // Update WhatsApp message based on current page
    updateWhatsAppMessage();
    
    // If navigating to services or plan page, make sure content is populated
    if (page === 'services') {
      populateDetailedServices();
      populatePackages();
    } else if (page === 'plan') {
      updatePlanDisplay();
    }
  } else {
    console.error('Page not found:', `page-${page}`);
  }
}

// Mobile Menu Setup
function setupMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      console.log('Mobile menu toggled');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (hamburger && navMenu && 
        !hamburger.contains(e.target) && 
        !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });
}

// WhatsApp Integration
function setupWhatsAppIntegration() {
  updateWhatsAppMessage();
}

function updateWhatsAppMessage() {
  let message = "Hi! I'm interested in your digital marketing services.";
  
  switch(currentPage) {
    case 'home':
      message = "Hi! I'm interested in your digital marketing services. Can we schedule a consultation?";
      break;
    case 'about':
      message = "Hi! I'd like to learn more about Digital Growth Agency and how you can help my business grow.";
      break;
    case 'services':
      message = "Hi! I'm interested in your digital marketing services. Can you tell me more about your packages?";
      break;
    case 'plan':
      if (selectedServices.length > 0) {
        const serviceNames = selectedServices.map(service => service.name);
        message = `Hi! I'm interested in the following services: ${serviceNames.join(', ')}. Can we schedule a consultation to discuss my requirements?`;
      } else {
        message = "Hi! I'd like to create a custom marketing plan for my business. Can we discuss my requirements?";
      }
      break;
    case 'contact':
      message = "Hi! I'm ready to start my digital marketing journey. Let's discuss how you can help my business grow.";
      break;
  }
  
  const whatsappUrl = `https://wa.me/${appData.whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  // Update floating WhatsApp button
  const whatsappFloat = document.getElementById('whatsapp-float');
  if (whatsappFloat) {
    whatsappFloat.href = whatsappUrl;
  }
  
  // Update hero WhatsApp button
  const whatsappHeroBtn = document.getElementById('whatsapp-hero-btn');
  if (whatsappHeroBtn) {
    whatsappHeroBtn.href = whatsappUrl;
  }

  // Update consultation button
  const bookConsultationBtn = document.getElementById('book-consultation-btn');
  if (bookConsultationBtn) {
    bookConsultationBtn.href = whatsappUrl;
  }
}

// Populate Content
function populateContent() {
  console.log('Populating content...');
  populateFeaturedServices();
  populateFeatures();
  populateTestimonials();
  populateDetailedServices();
  populatePackages();
  populateTimeline();
  populateTeam();
  populateServiceTestimonials();
}

function populateFeaturedServices() {
  const grid = document.getElementById('featured-services-grid');
  if (!grid) return;

  const featuredServices = appData.services.slice(0, 4);
  grid.innerHTML = featuredServices.map(service => `
    <div class="service-card">
      <span class="service-icon">${service.icon}</span>
      <h3>${service.name}</h3>
      <p>${service.description}</p>
      <button class="btn btn--primary" onclick="openServiceModal(${service.id})">Learn More</button>
    </div>
  `).join('');
}

function populateFeatures() {
  const grid = document.getElementById('features-grid');
  if (!grid) return;

  grid.innerHTML = appData.whyChooseUs.map(feature => `
    <div class="feature-card">
      <span class="feature-icon">${feature.icon}</span>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    </div>
  `).join('');
}

function populateTestimonials() {
  const slider = document.getElementById('testimonials-slider');
  if (!slider) return;

  slider.innerHTML = appData.testimonials.slice(0, 3).map(testimonial => `
    <div class="testimonial-card">
      <div class="testimonial-text">"${testimonial.text}"</div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${testimonial.name.charAt(0)}</div>
        <div class="testimonial-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.company}</p>
        </div>
      </div>
      <div class="testimonial-rating">
        ${'★'.repeat(testimonial.rating)}
      </div>
    </div>
  `).join('');
}

function populateDetailedServices() {
  const grid = document.getElementById('services-detailed-grid');
  if (!grid) return;

  grid.innerHTML = appData.services.map(service => `
    <div class="service-detailed-card">
      <span class="service-icon">${service.icon}</span>
      <h3>${service.name}</h3>
      <p>${service.detailedDescription || service.description}</p>
      <div class="service-price">${service.price}</div>
      <ul class="service-features">
        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      <div class="service-actions">
        <button class="btn--add" onclick="addToPlan(${service.id})" id="add-btn-${service.id}">
          + Add to My Plan
        </button>
        <button class="btn btn--outline" onclick="openServiceModal(${service.id})">Details</button>
      </div>
    </div>
  `).join('');

  // Update button states for already selected services
  updateAllAddButtons();
}

function populatePackages() {
  const grid = document.getElementById('packages-grid');
  if (!grid) return;

  grid.innerHTML = appData.packages.map((pkg, index) => `
    <div class="package-card ${index === 1 ? 'popular' : ''}">
      <h3 class="package-name">${pkg.name}</h3>
      <div class="package-price">${pkg.price}</div>
      <p class="package-description">${pkg.description}</p>
      <ul class="package-features">
        ${pkg.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      <button class="btn btn--primary btn--full-width" onclick="selectPackage('${pkg.name}')">
        Choose ${pkg.name}
      </button>
    </div>
  `).join('');
}

function populateTimeline() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.innerHTML = appData.timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-content">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </div>
    </div>
  `).join('');
}

function populateTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;

  grid.innerHTML = appData.team.map(member => `
    <div class="team-member">
      <span class="team-avatar">${member.image}</span>
      <h3>${member.name}</h3>
      <div class="team-position">${member.position}</div>
      <p>${member.description}</p>
    </div>
  `).join('');
}

function populateServiceTestimonials() {
  const grid = document.getElementById('service-testimonials-grid');
  if (!grid) return;

  // Show testimonials related to services
  const serviceTestimonials = appData.testimonials.filter(t => 
    appData.services.some(s => s.name.includes(t.service) || t.service.includes(s.name.split(' ')[0]))
  );

  grid.innerHTML = serviceTestimonials.map(testimonial => `
    <div class="testimonial-card">
      <div class="testimonial-text">"${testimonial.text}"</div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${testimonial.name.charAt(0)}</div>
        <div class="testimonial-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.company} • ${testimonial.position}</p>
        </div>
      </div>
      <div class="testimonial-rating">
        ${'★'.repeat(testimonial.rating)}
      </div>
    </div>
  `).join('');
}

// Service Selection
function setupServiceSelection() {
  updatePlanDisplay();
}

function addToPlan(serviceId) {
  console.log('Adding service to plan:', serviceId);
  const service = appData.services.find(s => s.id === serviceId);
  if (!service) return;

  // Check if service is already selected
  const isAlreadySelected = selectedServices.some(s => s.id === serviceId);
  if (isAlreadySelected) return;

  selectedServices.push(service);
  updatePlanDisplay();
  updateAddButton(serviceId, true);
  
  // Show success feedback
  showNotification(`${service.name} added to your plan!`);
  
  console.log('Selected services:', selectedServices);
}

function removeFromPlan(serviceId) {
  console.log('Removing service from plan:', serviceId);
  selectedServices = selectedServices.filter(s => s.id !== serviceId);
  updatePlanDisplay();
  updateAddButton(serviceId, false);
  
  // Show feedback
  const service = appData.services.find(s => s.id === serviceId);
  if (service) {
    showNotification(`${service.name} removed from your plan.`);
  }
  
  console.log('Selected services:', selectedServices);
}

function updateAddButton(serviceId, isAdded) {
  const addBtn = document.getElementById(`add-btn-${serviceId}`);
  if (!addBtn) return;

  if (isAdded) {
    addBtn.textContent = '✓ Added';
    addBtn.disabled = true;
    addBtn.style.background = 'rgba(16, 185, 129, 0.2)';
    addBtn.style.color = '#10b981';
  } else {
    addBtn.textContent = '+ Add to My Plan';
    addBtn.disabled = false;
    addBtn.style.background = '';
    addBtn.style.color = '';
  }
}

function updateAllAddButtons() {
  appData.services.forEach(service => {
    const isSelected = selectedServices.some(s => s.id === service.id);
    updateAddButton(service.id, isSelected);
  });
}

function updatePlanDisplay() {
  console.log('Updating plan display. Selected services:', selectedServices);
  
  // Update plan count in navigation
  const planCount = document.getElementById('plan-count');
  if (planCount) {
    if (selectedServices.length > 0) {
      planCount.textContent = selectedServices.length;
      planCount.classList.remove('hidden');
      console.log('Plan count updated:', selectedServices.length);
    } else {
      planCount.classList.add('hidden');
    }
  }

  // Update selected services display
  const selectedServicesContainer = document.getElementById('selected-services');
  const planActions = document.getElementById('plan-actions');
  
  if (!selectedServicesContainer) return;

  if (selectedServices.length === 0) {
    selectedServicesContainer.innerHTML = `
      <div class="empty-plan">
        <div class="empty-icon">📋</div>
        <h3>No services selected yet</h3>
        <p>Browse our services and add them to create your custom plan</p>
        <button class="btn btn--primary" onclick="navigateToPage('services')">Browse Services</button>
      </div>
    `;

    if (planActions) {
      planActions.style.display = 'none';
    }
  } else {
    selectedServicesContainer.innerHTML = `
      <div class="selected-services-list">
        ${selectedServices.map(service => `
          <div class="selected-service-item">
            <div class="selected-service-info">
              <span class="selected-service-icon">${service.icon}</span>
              <div class="selected-service-details">
                <h4>${service.name}</h4>
                <p>${service.price}</p>
              </div>
            </div>
            <button class="remove-service" onclick="removeFromPlan(${service.id})" title="Remove service">
              ×
            </button>
          </div>
        `).join('')}
      </div>
    `;

    if (planActions) {
      planActions.style.display = 'block';
    }
  }

  // Update all add buttons
  updateAllAddButtons();

  // Update WhatsApp message
  updateWhatsAppMessage();
}

function selectPackage(packageName) {
  const pkg = appData.packages.find(p => p.name === packageName);
  if (!pkg) return;

  let message = `Hi! I'm interested in the ${pkg.name} package (${pkg.price}). `;
  
  if (pkg.services.includes('All Services Included')) {
    message += 'I would like to discuss all your digital marketing services.';
  } else {
    message += `The services included are: ${pkg.services.join(', ')}. `;
  }
  
  message += ' Can we schedule a consultation?';
  
  const whatsappUrl = `https://wa.me/${appData.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Modal Setup
function setupModal() {
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');

  if (modalClose) {
    modalClose.addEventListener('click', closeServiceModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeServiceModal);
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const serviceModal = document.getElementById('service-modal');
      if (serviceModal && !serviceModal.classList.contains('hidden')) {
        closeServiceModal();
      }
    }
  });
}

function openServiceModal(serviceId) {
  const service = appData.services.find(s => s.id === serviceId);
  const serviceModal = document.getElementById('service-modal');
  const modalBody = document.getElementById('modal-body');
  
  if (!service || !serviceModal || !modalBody) return;

  const isSelected = selectedServices.some(s => s.id === serviceId);

  modalBody.innerHTML = `
    <div class="modal-service-icon">${service.icon}</div>
    <h2 class="modal-service-title">${service.name}</h2>
    <p class="modal-service-description">${service.detailedDescription || service.description}</p>
    <div class="modal-service-price">${service.price}</div>
    <ul class="modal-service-features">
      ${service.features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
    <div class="modal-actions">
      <button class="btn btn--primary" onclick="addToPlan(${service.id}); closeServiceModal();" ${isSelected ? 'disabled' : ''}>
        ${isSelected ? '✓ Added to Plan' : '+ Add to My Plan'}
      </button>
      <button class="btn btn--outline" onclick="closeServiceModal()">Close</button>
    </div>
  `;

  serviceModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  const serviceModal = document.getElementById('service-modal');
  if (serviceModal) {
    serviceModal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Contact Form
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');

    // Create WhatsApp message
    let whatsappMessage = `Hi! I'm ${name} (${email}).`;
    if (phone) whatsappMessage += ` Phone: ${phone}.`;
    if (service) whatsappMessage += ` I'm interested in ${service}.`;
    whatsappMessage += ` Message: ${message}`;
    
    const whatsappUrl = `https://wa.me/${appData.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    showNotification('Message prepared for WhatsApp!');
    
    // Reset form
    e.target.reset();
  });
}

// Utility Functions
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: rgba(16, 185, 129, 0.9);
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    z-index: 10000;
    font-weight: 500;
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
    backdrop-filter: blur(10px);
    animation: slideInRight 0.3s ease-out;
  `;
  notification.textContent = message;

  // Add animation keyframes
  if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOutRight {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  // Auto remove after 3 seconds
  setTimeout(function() {
    notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
    setTimeout(function() {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Export functions for global access
window.navigateToPage = navigateToPage;
window.addToPlan = addToPlan;
window.removeFromPlan = removeFromPlan;
window.openServiceModal = openServiceModal;
window.closeServiceModal = closeServiceModal;
window.selectPackage = selectPackage;
