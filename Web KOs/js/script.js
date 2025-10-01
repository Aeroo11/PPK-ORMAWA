// ITS STAY - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Generate Kosan Cards
    generateKosanCards();
    
    // Generate Testimonials
    generateTestimonials();
    
    // Filter functionality
    initializeFilters();
    
    // Mobile menu
    initializeMobileMenu();
});

// Tambahkan kosan card styles untuk tampilan yang lebih baik
function generateKosanCards() {
    const kosanCards = document.querySelector('.kosan-cards');
    if (!kosanCards) return;
    
    const kosanData = [
        {
            id: 1,
            title: "Kos Permata ITS",
            location: "Keputih, 500m dari ITS",
            price: "1.500.000",
            type: "putra",
            image: "https://cdn-2.tstatic.net/jatim/foto/bank/images/ilustrasi-kamar-kost.jpg",
            features: {
                size: "3x4m",
                bathroom: "Dalam", 
                ac: true
            }
        },
        {
            id: 2,
            title: "Kos Putri Safira",
            location: "Gebang, 800m dari ITS",
            price: "1.200.000",
            type: "putri",
            image: "https://i.pinimg.com/originals/79/af/2c/79af2c45d4f3e07ac8712967be46d3b5.jpg",
            features: {
                size: "3x4m",
                bathroom: "Dalam",
                ac: false
            }
        },
        {
            id: 3,
            title: "Kos Exclusive Mulyosari",
            location: "Mulyosari, 1.2km dari ITS",
            price: "1.800.000",
            type: "campur",
            image: "https://ruangarsitek.id/wp-content/uploads/2020/10/Desain-Kamar-Kost-Minimalis-Modern-Terbaru.jpg",
            features: {
                size: "4x5m",
                bathroom: "Luar",
                ac: true
            }
        }
    ];
    
    let html = '';
    kosanData.forEach(kos => {
        html += `
            <div class="kosan-card" data-type="${kos.type}">
                <div class="kosan-image">
                    <img src="${kos.image}" alt="${kos.title}">
                    <div class="kosan-type">${kos.type === 'putra' ? 'Khusus Putra' : kos.type === 'putri' ? 'Khusus Putri' : 'Campur'}</div>
                </div>
                <div class="kosan-body">
                    <h3 class="kosan-title">${kos.title}</h3>
                    <div class="kosan-location">
                        <i class="fas fa-map-marker-alt"></i> ${kos.location}
                    </div>
                    <div class="kosan-features">
                        <div class="kosan-feature">
                            <i class="fas fa-expand-arrows-alt"></i> ${kos.features.size}
                        </div>
                        <div class="kosan-feature">
                            <i class="fas fa-shower"></i> ${kos.features.bathroom}
                        </div>
                        ${kos.features.ac ? 
                            `<div class="kosan-feature">
                                <i class="fas fa-snowflake"></i> AC
                            </div>` : ''}
                    </div>
                    <div class="kosan-footer">
                        <div class="kosan-price">
                            Rp ${kos.price} <span>/ bulan</span>
                        </div>
                        <a href="detail-kosan.html?id=${kos.id}" class="btn btn-outline-primary">Detail</a>
                    </div>
                </div>
            </div>
        `;
    });
    
    kosanCards.innerHTML = html;
}

// Filter functionality
function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const kosanCards = document.querySelectorAll('.kosan-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            kosanCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-type') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        });
    }
}

// Generate Testimonials
function generateTestimonials() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    if (!testimonialSlider) return;
    
    const testimonialData = [
        {
            name: "Ahmad Fauzi",
            position: "Mahasiswa Teknik Informatika",
            content: "ITS STAY membantu saya menemukan kos yang nyaman dan terjangkau. Virtual tournya sangat membantu karena saya bisa melihat kondisi kamar tanpa harus datang langsung.",
            image: "https://i.pravatar.cc/150?img=11",
            rating: 5
        },
        {
            name: "Dinda Rahmawati",
            position: "Mahasiswa Teknik Lingkungan",
            content: "Sebagai mahasiswi baru, saya khawatir mencari kos yang aman dan nyaman. Dengan ITS STAY, proses pencarian jadi lebih mudah dan saya bisa fokus belajar adaptasi di kampus baru.",
            image: "https://i.pravatar.cc/150?img=5",
            rating: 4
        },
        {
            name: "Rizky Pratama",
            position: "Mahasiswa Teknik Elektro",
            content: "Program komunitas dari ITS STAY membuat saya bisa adaptasi lebih cepat dengan lingkungan sekitar kampus. Saya juga mendapat banyak teman baru dari berbagai jurusan.",
            image: "https://i.pravatar.cc/150?img=8",
            rating: 5
        }
    ];

    let currentSlide = 0;
    
    function renderTestimonial() {
        const testimonial = testimonialData[currentSlide];
        let stars = '';
        
        for (let i = 0; i < testimonial.rating; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        testimonialSlider.innerHTML = `
            <div class="testimonial-slide">
                <div class="testimonial-image">
                    <img src="${testimonial.image}" alt="${testimonial.name}">
                </div>
                <p class="testimonial-content">"${testimonial.content}"</p>
                <h4 class="testimonial-name">${testimonial.name}</h4>
                <p class="testimonial-position">${testimonial.position}</p>
                <div class="testimonial-rating">
                    ${stars}
                </div>
            </div>
            <div class="testimonial-controls">
                <button class="prev-btn"><i class="fas fa-chevron-left"></i></button>
                <button class="next-btn"><i class="fas fa-chevron-right"></i></button>
            </div>
        `;
        
        // Add event listeners for previous and next buttons
        document.querySelector('.prev-btn').addEventListener('click', prevSlide);
        document.querySelector('.next-btn').addEventListener('click', nextSlide);
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialData.length;
        renderTestimonial();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialData.length) % testimonialData.length;
        renderTestimonial();
    }
    
    // Auto slide
    renderTestimonial();
    setInterval(nextSlide, 5000);
}

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
