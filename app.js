// Marketing Agency Website JavaScript

// Data from JSON
const appData = {
  "services": [
    {
      "id": 1,
      "name": "SEO Optimization",
      "description": "Boost your website's ranking on Google with data-driven SEO strategies",
      "icon": "🚀",
      "features": ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO"],
      "price": "₹15,000 - ₹40,000/month"
    },
    {
      "id": 2, 
      "name": "Social Media Marketing",
      "description": "Engage your audience across all social platforms with creative campaigns",
      "icon": "📱",
      "features": ["Content Creation", "Community Management", "Social Ads", "Analytics"],
      "price": "₹12,000 - ₹35,000/month"
    },
    {
      "id": 3,
      "name": "Google Ads & PPC",
      "description": "Drive targeted traffic instantly with optimized pay-per-click campaigns",
      "icon": "🎯",
      "features": ["Campaign Setup", "Keyword Bidding", "Ad Creation", "Performance Tracking"],
      "price": "₹10,000 - ₹30,000/month"
    },
    {
      "id": 4,
      "name": "Content Marketing", 
      "description": "Tell your brand story effectively with compelling content strategies",
      "icon": "✍️",
      "features": ["Blog Writing", "Video Scripts", "Content Strategy", "Distribution"],
      "price": "₹20,000 - ₹50,000/month"
    },
    {
      "id": 5,
      "name": "Web Design & Development",
      "description": "Beautiful, functional websites that convert visitors into customers",
      "icon": "💻",
      "features": ["Responsive Design", "E-commerce Setup", "CMS Integration", "Performance Optimization"],
      "price": "₹40,000 - ₹1,00,000/project"
    },
    {
      "id": 6,
      "name": "Email Marketing",
      "description": "Nurture leads with targeted email campaigns that drive conversions",
      "icon": "📧",
      "features": ["List Building", "Automation", "Design Templates", "A/B Testing"],
      "price": "₹8,000 - ₹25,000/month"
    },
    {
      "id": 7,
      "name": "Analytics & Reporting",
      "description": "Data-driven insights for growth with comprehensive performance tracking",
      "icon": "📊",
      "features": ["Google Analytics Setup", "Custom Dashboards", "Monthly Reports", "ROI Tracking"],
      "price": "₹10,000 - ₹30,000/month"
    },
    {
      "id": 8,
      "name": "Influencer Marketing",
      "description": "Reach new audiences through strategic partnerships with relevant influencers",
      "icon": "🌟",
      "features": ["Influencer Outreach", "Campaign Management", "Content Collaboration", "Performance Tracking"],
      "price": "₹25,000 - ₹75,000/month"
    }
  ],
  "packages": [
    {
      "name": "Starter",
      "price": "₹25,000/month",
      "description": "Perfect for small businesses starting their digital journey",
      "services": ["SEO Optimization", "Social Media Marketing"],
      "features": ["Basic SEO audit", "2 social platforms", "Monthly reporting", "Email support"]
    },
    {
      "name": "Growth", 
      "price": "₹50,000/month",
      "description": "Ideal for growing businesses ready to scale",
      "services": ["SEO Optimization", "Social Media Marketing", "Content Marketing", "Analytics & Reporting"],
      "features": ["Advanced SEO", "4 social platforms", "Blog content", "Bi-weekly calls", "Custom reports"]
    },
    {
      "name": "Professional",
      "price": "₹1,00,000/month", 
      "description": "Comprehensive solution for established businesses",
      "services": ["SEO", "SMM", "Google Ads", "Content Marketing", "Email Marketing", "Analytics"],
      "features": ["Full-service marketing", "PPC campaigns", "Email automation", "Weekly calls", "Dedicated manager"]
    },
    {
      "name": "Enterprise",
      "price": "₹2,00,000/month",
      "description": "Complete 360° marketing for large enterprises",
      "services": ["All Services Included"],
      "features": ["Full-service suite", "Influencer partnerships", "Custom strategies", "Priority support", "Quarterly reviews"]
    }
  ],
  "testimonials": [
    {
      "name": "Rajesh Sharma",
      "company": "TechStart Solutions",
      "text": "Our website traffic increased by 300% within 6 months. The SEO and content strategy was exactly what we needed.",
      "rating": 5
    },
    {
      "name": "Priya Mehta", 
      "company": "Fashion Forward Boutique",
      "text": "Social media engagement skyrocketed! Their creative campaigns perfectly captured our brand essence.",
      "rating": 5
    },
    {
      "name": "Amit Kumar",
      "company": "Local Eats Restaurant", 
      "text": "Google Ads campaign delivered 150% ROI in the first month. Couldn't ask for better results!",
      "rating": 5
    },
    {
      "name": "Sarah Johnson",
      "company": "Global Imports Ltd",
      "text": "Professional team, data-driven approach, and exceptional results. Highly recommend their services!",
      "rating": 5
    },
    {
      "name": "Vikash Singh",
      "company": "Fitness Hub Gym",
      "text": "From web design to marketing campaigns, they handled everything seamlessly. Our membership doubled!",
      "rating": 5
    }
  ],
  "whatsappNumber": "919876543210",
  "companyInfo": {
    "name": "Digital Growth Agency",
    "tagline": "Grow Your Business with 360° Digital Marketing", 
    "description": "We are a full-service digital marketing agency specializing in SEO, social media marketing, PPC advertising, and more. Our data-driven approach helps businesses achieve measurable growth.",
    "email": "hello@digitalgrowthagency.com",
    "phone": "+91 98765 43210",
    "address": "123 Business District, Mumbai, India",
    "founded": "2018",
    "clients": "500+",
    "projects": "1000+"
  },
  "whyChooseUs": [
    {
      "title": "Data-Driven Results",
      "description": "Every strategy is backed by comprehensive analytics and real-time performance tracking",
      "icon": "📈"
    },
    {
      "title": "Creative Excellence", 
      "description": "Award-winning creative team that brings your brand vision to life",
      "icon": "🎨"
    },
    {
      "title": "Proven Track Record",
      "description": "500+ successful campaigns with an average ROI increase of 250%",
      "icon": "🏆"
    },
    {
      "title": "24/7 Support",
      "description": "Dedicated account managers available around the clock for your success",
      "icon": "🎧"
    }
  ]
};

// Global variables
let selectedServices = [];
let currentTestimonial = 0;
let testimonialInterval;

// DOM Elements
const elements = {
  navLinks: document.querySelectorAll('.nav-link'),
  hamburger: document.querySelector('.hamburger'),
  navMenu: document.querySelector('.nav-menu'),
  servicesGrid: document.getElementById('services-grid'),
  featuresGrid: document.getElementById('features-grid'),
  testimonialsSlider: document.getElementById('testimonials-slider'),
  servicesDetailedGrid: document.getElementById('services-detailed-grid'),
  packagesGrid: document.getElementById('packages-grid'),
  selectedServicesContainer: document.getElementById('selected-services'),
  planCount: document.getElementById('plan-count'),
  planActions: document.getElementById('plan-actions'),
  serviceModal: document.getElementById('service-modal'),
  modalBody: document.getElementById('modal-body'),
  contactForm: document.getElementById('contact-form'),
  bookConsultationBtn: document.getElementById('book-consultation-btn')
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupMobileMenu();
  setupWhatsAppIntegration();
  populateServices();
  populateFeatures();
  populateTestimonials();
  populateDetailedServices();
  populatePackages();
  setupServiceSelection();
  setupModal();
  setupScrollAnimations();
  setupContactForm();
  startTestimonialsSlider();
  updatePlanDisplay();
}

// Navigation Setup
function setupNavigation() {
  // Smooth scrolling for navigation links
  elements.navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update active nav link
        elements.navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        // Close mobile menu if open
        elements.navMenu.classList.remove('active');
      }
    });
  });

  // Update active nav link on scroll
  window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`a[href="#${sectionId}"]`);

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      elements.navLinks.forEach(link => link.classList.remove('active'));
      if (navLink) navLink.classList.add('active');
    }
  });
}

// Mobile Menu Setup
function setupMobileMenu() {
  elements.hamburger.addEventListener('click', function() {
    elements.navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!elements.hamburger.contains(e.target) && !elements.navMenu.contains(e.target)) {
      elements.navMenu.classList.remove('active');
    }
  });
}

// WhatsApp Integration
function setupWhatsAppIntegration() {
  // Explore services button
  const exploreServicesBtn = document.getElementById('explore-services-btn');
  if (exploreServicesBtn) {
    exploreServicesBtn.addEventListener('click', function() {
      document.getElementById('services').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

  // Browse services button
  const browseServicesBtn = document.getElementById('browse-services-btn');
  if (browseServicesBtn) {
    browseServicesBtn.addEventListener('click', function() {
      document.getElementById('services').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
}

function generateWhatsAppLink(serviceNames = null) {
  let message;
  
  if (serviceNames && serviceNames.length > 0) {
    message = `Hi! I'm interested in the following services: ${serviceNames.join(', ')}. Can we schedule a consultation to discuss my requirements?`;
  } else {
    message = "Hi! I'm interested in your digital marketing services. Can we schedule a consultation?";
  }
  
  return `https://wa.me/${appData.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Populate Services Grid
function populateServices() {
  if (!elements.servicesGrid) return;

  elements.servicesGrid.innerHTML = appData.services.slice(0, 6).map(service => `
    <div class="service-card fade-in" data-service-id="${service.id}">
      <span class="service-icon">${service.icon}</span>
      <h3>${service.name}</h3>
      <p>${service.description}</p>
      <button class="btn btn--primary" onclick="openServiceModal(${service.id})">Learn More</button>
    </div>
  `).join('');
}

// Populate Features Grid
function populateFeatures() {
  if (!elements.featuresGrid) return;

  elements.featuresGrid.innerHTML = appData.whyChooseUs.map(feature => `
    <div class="feature-card fade-in">
      <span class="feature-icon">${feature.icon}</span>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    </div>
  `).join('');
}

// Populate Testimonials
function populateTestimonials() {
  if (!elements.testimonialsSlider) return;

  elements.testimonialsSlider.innerHTML = appData.testimonials.map(testimonial => `
    <div class="testimonial-card fade-in">
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

// Populate Detailed Services
function populateDetailedServices() {
  if (!elements.servicesDetailedGrid) return;

  elements.servicesDetailedGrid.innerHTML = appData.services.map(service => `
    <div class="service-detailed-card fade-in">
      <span class="service-icon">${service.icon}</span>
      <h3>${service.name}</h3>
      <p>${service.description}</p>
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
}

// Populate Packages
function populatePackages() {
  if (!elements.packagesGrid) return;

  elements.packagesGrid.innerHTML = appData.packages.map((pkg, index) => `
    <div class="package-card fade-in ${index === 1 ? 'popular' : ''}">
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

// Service Selection
function setupServiceSelection() {
  updatePlanDisplay();
}

function addToPlan(serviceId) {
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
}

function removeFromPlan(serviceId) {
  selectedServices = selectedServices.filter(s => s.id !== serviceId);
  updatePlanDisplay();
  updateAddButton(serviceId, false);
  
  // Show feedback
  const service = appData.services.find(s => s.id === serviceId);
  if (service) {
    showNotification(`${service.name} removed from your plan.`);
  }
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

function updatePlanDisplay() {
  // Update plan count in navigation
  if (elements.planCount) {
    if (selectedServices.length > 0) {
      elements.planCount.textContent = selectedServices.length;
      elements.planCount.classList.remove('hidden');
    } else {
      elements.planCount.classList.add('hidden');
    }
  }

  // Update WhatsApp consultation button with selected services
  if (elements.bookConsultationBtn) {
    const serviceNames = selectedServices.map(service => service.name);
    elements.bookConsultationBtn.href = generateWhatsAppLink(serviceNames);
  }

  // Update selected services display
  if (!elements.selectedServicesContainer) return;

  if (selectedServices.length === 0) {
    elements.selectedServicesContainer.innerHTML = `
      <div class="empty-plan">
        <div class="empty-icon">📋</div>
        <h3>No services selected yet</h3>
        <p>Browse our services and add them to create your custom plan</p>
        <button class="btn btn--primary" id="browse-services-btn">Browse Services</button>
      </div>
    `;
    
    // Re-attach event listener
    const browseBtn = document.getElementById('browse-services-btn');
    if (browseBtn) {
      browseBtn.addEventListener('click', function() {
        document.getElementById('services').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }

    if (elements.planActions) {
      elements.planActions.style.display = 'none';
    }
  } else {
    elements.selectedServicesContainer.innerHTML = `
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

    if (elements.planActions) {
      elements.planActions.style.display = 'block';
    }
  }

  // Update all add buttons
  appData.services.forEach(service => {
    const isSelected = selectedServices.some(s => s.id === service.id);
    updateAddButton(service.id, isSelected);
  });
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
    if (e.key === 'Escape' && elements.serviceModal && !elements.serviceModal.classList.contains('hidden')) {
      closeServiceModal();
    }
  });
}

function openServiceModal(serviceId) {
  const service = appData.services.find(s => s.id === serviceId);
  if (!service || !elements.serviceModal || !elements.modalBody) return;

  const isSelected = selectedServices.some(s => s.id === serviceId);

  elements.modalBody.innerHTML = `
    <div class="modal-service-icon">${service.icon}</div>
    <h2 class="modal-service-title">${service.name}</h2>
    <p class="modal-service-description">${service.description}</p>
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

  elements.serviceModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  if (elements.serviceModal) {
    elements.serviceModal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Testimonials Slider
function startTestimonialsSlider() {
  if (appData.testimonials.length <= 1) return;

  testimonialInterval = setInterval(function() {
    currentTestimonial = (currentTestimonial + 1) % appData.testimonials.length;
    // You can add sliding animation logic here if needed
  }, 5000);
}

// Scroll Animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in class
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Contact Form
function setupContactForm() {
  if (!elements.contactForm) return;

  elements.contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;

    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm ${name} (${email}). ${message}`;
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

// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = function() {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll event
window.addEventListener('scroll', debounce(updateActiveNavLink, 100));

// Handle page visibility change
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    if (testimonialInterval) {
      clearInterval(testimonialInterval);
    }
  } else {
    startTestimonialsSlider();
  }
});

// Export functions for global access
window.addToPlan = addToPlan;
window.removeFromPlan = removeFromPlan;
window.openServiceModal = openServiceModal;
window.closeServiceModal = closeServiceModal;
window.selectPackage = selectPackage;