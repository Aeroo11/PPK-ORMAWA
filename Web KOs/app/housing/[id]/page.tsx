import Script from "next/script";
import Link from "next/link";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Detail Kos - ITS STAY',
  description: 'Detail lengkap hunian pilihan Anda',
}

interface PageProps {
  params: {
    id: string
  }
}

export default function HousingDetailPage({ params }: PageProps) {
  return (
    <>
      {/* Header */}
      <header>
        <div className="container">
          <div className="logo">
            <img src="/assets/logoitsfix.jpg" alt="ITS STAY Logo" />
            <div className="logo-text">
              <h1>ITS STAY</h1>
              <p>Hunian Nyaman Mahasiswa ITS</p>
            </div>
          </div>
          <nav>
            <ul>
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="/housing" className="active">Cari Kos</Link></li>
              <li><a href="layanan.html">Layanan</a></li>
              <li><a href="tentang.html">Tentang</a></li>
              <li><a href="kontak.html">Kontak</a></li>
            </ul>
          </nav>
          <div className="header-right">
            <div className="search-icon">
              <i className="fas fa-search"></i>
            </div>
            <div className="language">
              <a href="#" className="active">ID</a> | <a href="#">EN</a>
            </div>
            <div className="auth-buttons">
              <a href="login.html" className="btn btn-outline">Masuk</a>
              <a href="register.html" className="btn btn-primary">Daftar</a>
            </div>
          </div>
          <div className="mobile-menu-toggle">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </header>

      {/* Breadcrumb & Title */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/housing">Cari Kos</Link>
            <span>/</span>
            <span className="active">Kos Permata ITS</span>
          </div>
          <h1>Detail Kos - ID: {params.id}</h1>
        </div>
      </section>

      {/* Kosan Detail Section */}
      <section className="kosan-detail">
        <div className="container">
          <div className="kosan-detail-container">
            <div className="kosan-detail-main">
              <div className="kosan-gallery">
                <div className="main-image">
                  <img src="https://cdn-2.tstatic.net/jatim/foto/bank/images/ilustrasi-kamar-kost.jpg" alt="Kos Permata ITS" id="mainImage" />
                </div>
                <div className="thumbnail-images">
                  <div className="thumbnail" onClick={() => {}}>
                    <img src="https://cdn-2.tstatic.net/jatim/foto/bank/images/ilustrasi-kamar-kost.jpg" alt="Kosan Thumbnail 1" />
                  </div>
                  <div className="thumbnail" onClick={() => {}}>
                    <img src="https://ruangarsitek.id/wp-content/uploads/2020/06/Inspirasi-Desain-Kamar-Kost-Dengan-Konsep-Minimalis-Sederhana-8.jpg" alt="Kosan Thumbnail 2" />
                  </div>
                  <div className="thumbnail" onClick={() => {}}>
                    <img src="https://cdn-cms.pgimgs.com/static/2020/07/1-Jenis-Kos-kosan-yang-Banyak-Dicari-Mahasiswa-Sekitar-Kampus.jpg" alt="Kosan Thumbnail 3" />
                  </div>
                  <div className="thumbnail" onClick={() => {}}>
                    <img src="https://images.ctfassets.net/uaddx06iwzdz/5IuBl78s0JOGMGgCKwUOOC/35a17f503a56fcbafcd4446be77e3ef9/32-Ide-Kreatif-Menata-Kamar-Kost-Agar-Nyaman-bagi-Mahasiswa.jpeg" alt="Kosan Thumbnail 4" />
                  </div>
                </div>
              </div>

              <div className="kosan-info">
                <h1>Kos Permata ITS</h1>
                <div className="kosan-meta">
                  <div className="meta-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Keputih, 500m dari ITS</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-expand-arrows-alt"></i>
                    <span>Ukuran Kamar: 3x4m</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Tersedia: Agustus 2023</span>
                  </div>
                </div>
                <div className="kosan-label">Khusus Putra</div>
                
                <div className="kosan-description">
                  <p>Kos Permata ITS merupakan hunian eksklusif untuk mahasiswa ITS dengan lokasi strategis hanya 500m dari gerbang utama kampus. Dengan desain modern dan fasilitas lengkap, kos ini menawarkan kenyamanan optimal untuk mendukung aktivitas perkuliahan Anda.</p>
                  <p>Kamar dilengkapi dengan berbagai fasilitas untuk menunjang aktivitas sehari-hari mahasiswa. Area bersama tersedia untuk memudahkan interaksi antar penghuni, menciptakan suasana kekeluargaan yang nyaman.</p>
                </div>
                
                <div className="amenities">
                  <h3 className="section-title">Fasilitas Kamar</h3>
                  <div className="amenities-list">
                    <div className="amenity-item">
                      <i className="fas fa-bed"></i>
                      <span>Kasur dan Lemari</span>
                    </div>
                    <div className="amenity-item">
                      <i className="fas fa-shower"></i>
                      <span>Kamar Mandi Dalam</span>
                    </div>
                    <div className="amenity-item">
                      <i className="fas fa-snowflake"></i>
                      <span>AC</span>
                    </div>
                    <div className="amenity-item">
                      <i className="fas fa-wifi"></i>
                      <span>WiFi Gratis</span>
                    </div>
                    <div className="amenity-item">
                      <i className="fas fa-desk"></i>
                      <span>Meja Belajar</span>
                    </div>
                    <div className="amenity-item">
                      <i className="fas fa-plug"></i>
                      <span>Stopkontak</span>
                    </div>
                  </div>
                </div>
                
                <div className="amenities">
                  <h3 className="section-title">Fasilitas Umum</h3>
                  <div className="amenities-list">
                    <div className="amenity-item">
                      <i className="fas fa-parking"></i>
                      <span>Parkir Motor</span>
                    </div>
                    <div className="amenity-item">
                      <i className="fas fa-utensils"></i>
                      <span>Dapur Bersama</span>
                    </div>
                    <div className="amenity-item">
                      <i className="fas fa-couch"></i>
                      <span>Ruang Tamu</span>
                    </div>
                    <div className="amenity-item">
                      <i className="fas fa-tshirt"></i>
                      <span>Ruang Jemur</span>
                    </div>
                    <div className="amenity-item">
                      <i className="fas fa-broom"></i>
                      <span>Cleaning Service</span>
                    </div>
                    <div className="amenity-item">
                      <i className="fas fa-shield-alt"></i>
                      <span>Keamanan 24 Jam</span>
                    </div>
                  </div>
                </div>
                
                <div className="kosan-rules">
                  <h3 className="section-title">Peraturan Kos</h3>
                  <ul className="rules-list">
                    <li>Khusus untuk mahasiswa putra</li>
                    <li>Tamu hanya diizinkan berkunjung hingga pukul 21.00</li>
                    <li>Tidak boleh membawa hewan peliharaan</li>
                    <li>Dilarang merokok di dalam kamar</li>
                    <li>Jam malam pukul 23.00</li>
                    <li>Biaya listrik ditanggung penghuni sesuai pemakaian</li>
                  </ul>
                </div>
                
                <div className="kosan-location">
                  <h3 className="section-title">Lokasi</h3>
                  <div className="map-container" id="mapContainer">
                    <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee'}}>
                      <p>Peta lokasi kos akan ditampilkan di sini</p>
                    </div>
                  </div>
                  <div className="location-details">
                    <h4>Tempat Terdekat:</h4>
                    <div className="amenities-list">
                      <div className="amenity-item">
                        <i className="fas fa-school"></i>
                        <span>Institut Teknologi Sepuluh Nopember (500m)</span>
                      </div>
                      <div className="amenity-item">
                        <i className="fas fa-store"></i>
                        <span>Minimarket (100m)</span>
                      </div>
                      <div className="amenity-item">
                        <i className="fas fa-utensils"></i>
                        <span>Warung Makan (50m)</span>
                      </div>
                      <div className="amenity-item">
                        <i className="fas fa-mosque"></i>
                        <span>Masjid (200m)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="kosan-sidebar">
              <div className="booking-card">
                <div className="price-info">
                  <div className="price">Rp 1.500.000</div>
                  <div className="price-period">per bulan</div>
                </div>
                <form className="booking-form">
                  <div className="form-group">
                    <label>Mulai Kos</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Durasi Sewa</label>
                    <select>
                      <option value="1">1 Bulan</option>
                      <option value="3">3 Bulan</option>
                      <option value="6">6 Bulan</option>
                      <option value="12">12 Bulan</option>
                    </select>
                  </div>
                  <div className="booking-action">
                    <button type="button" className="btn btn-primary">Pesan Sekarang</button>
                  </div>
                </form>
                <div className="contact-info">
                  <p>atau</p>
                  <p>Hubungi kami untuk informasi lebih lanjut</p>
                </div>
              </div>
              
              <div className="owner-card">
                <div className="owner-info">
                  <div className="owner-image">
                    <img src="https://i.pravatar.cc/150?img=70" alt="Pemilik Kos" />
                  </div>
                  <div>
                    <div className="owner-name">Budi Santoso</div>
                    <div className="owner-meta">Pemilik Kos</div>
                  </div>
                </div>
                <div className="contact-buttons">
                  <a href="https://wa.me/6281234567890" className="contact-btn whatsapp-btn">
                    <i className="fab fa-whatsapp"></i> Chat WhatsApp
                  </a>
                  <a href="tel:+6281234567890" className="contact-btn call-btn">
                    <i className="fas fa-phone-alt"></i> Telepon
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Reviews Section */}
          <div className="reviews-section">
            <h3 className="section-title">Ulasan Penghuni (12)</h3>
            <div className="review-list">
              <div className="review-card">
                <div className="review-header">
                  <div className="reviewer">
                    <div className="reviewer-image">
                      <img src="https://i.pravatar.cc/150?img=33" alt="Reviewer" />
                    </div>
                    <div>
                      <div className="reviewer-name">Ahmad Fauzi</div>
                      <div className="review-date">Juli 2023</div>
                    </div>
                  </div>
                  <div className="review-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <div className="review-content">
                  <p>Kos yang sangat nyaman dan strategis untuk mahasiswa ITS. Fasilitas lengkap dengan harga yang masih terjangkau. Pemilik kos juga sangat ramah dan selalu membantu jika ada masalah. Recommended!</p>
                </div>
              </div>
              
              <div className="review-card">
                <div className="review-header">
                  <div className="reviewer">
                    <div className="reviewer-image">
                      <img src="https://i.pravatar.cc/150?img=20" alt="Reviewer" />
                    </div>
                    <div>
                      <div className="reviewer-name">Rizky Pratama</div>
                      <div className="review-date">Juni 2023</div>
                    </div>
                  </div>
                  <div className="review-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <div className="review-content">
                  <p>WiFi kencang dan stabil, cocok untuk mengerjakan tugas kuliah online. Lokasi dekat dengan warung makan dan minimarket. Satu-satunya kekurangan mungkin dari segi parkiran yang agak sempit kalau lagi ramai.</p>
                </div>
              </div>
              
              <div className="review-card">
                <div className="review-header">
                  <div className="reviewer">
                    <div className="reviewer-image">
                      <img src="https://i.pravatar.cc/150?img=50" alt="Reviewer" />
                    </div>
                    <div>
                      <div className="reviewer-name">Dimas Anggara</div>
                      <div className="review-date">Mei 2023</div>
                    </div>
                  </div>
                  <div className="review-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
                <div className="review-content">
                  <p>Kamar yang nyaman dengan AC yang dingin. Lingkungan kos juga tenang, cocok untuk belajar. Suka dengan kebersihan yang selalu terjaga dan keamanan yang baik. Recommended untuk mahasiswa baru!</p>
                </div>
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '20px'}}>
              <a href="#" className="btn btn-outline-primary">Lihat Semua Ulasan</a>
            </div>
          </div>
          
          {/* Similar Kosan Section */}
          <div className="similar-kosan">
            <h3 className="section-title">Kos Serupa di Sekitar ITS</h3>
            <div className="similar-grid">
              <div className="kosan-card" data-type="putra">
                <div className="kosan-image">
                  <img src="https://cdn.shortpixel.ai/spai/w_1125+q_glossy+ret_img+to_webp/www.sewakost.com/wp-content/uploads/2022/06/Inspirasi-Kamar-Kost-Keren-Sederhana-9-1.jpg" alt="Kos Galaxy ITS" />
                  <div className="kosan-type">Khusus Putra</div>
                </div>
                <div className="kosan-body">
                  <h3 className="kosan-title">Kos Galaxy ITS</h3>
                  <div className="kosan-location">
                    <i className="fas fa-map-marker-alt"></i> Keputih, 600m dari ITS
                  </div>
                  <div className="kosan-features">
                    <div className="kosan-feature">
                      <i className="fas fa-expand-arrows-alt"></i> 3x3m
                    </div>
                    <div className="kosan-feature">
                      <i className="fas fa-shower"></i> Dalam
                    </div>
                    <div className="kosan-feature">
                      <i className="fas fa-snowflake"></i> AC
                    </div>
                  </div>
                  <div className="kosan-footer">
                    <div className="kosan-price">
                      Rp 1.400.000 <span>/ bulan</span>
                    </div>
                    <Link href="/housing/2" className="btn btn-outline-primary">Detail</Link>
                  </div>
                </div>
              </div>
              
              <div className="kosan-card" data-type="putra">
                <div className="kosan-image">
                  <img src="https://ruangmedia.id/wp-content/uploads/2022/08/Kos-Exclusive.jpg" alt="Kos Elite Gebang" />
                  <div className="kosan-type">Khusus Putra</div>
                </div>
                <div className="kosan-body">
                  <h3 className="kosan-title">Kos Elite Gebang</h3>
                  <div className="kosan-location">
                    <i className="fas fa-map-marker-alt"></i> Gebang, 1km dari ITS
                  </div>
                  <div className="kosan-features">
                    <div className="kosan-feature">
                      <i className="fas fa-expand-arrows-alt"></i> 4x3m
                    </div>
                    <div className="kosan-feature">
                      <i className="fas fa-shower"></i> Dalam
                    </div>
                    <div className="kosan-feature">
                      <i className="fas fa-snowflake"></i> AC
                    </div>
                  </div>
                  <div className="kosan-footer">
                    <div className="kosan-price">
                      Rp 1.600.000 <span>/ bulan</span>
                    </div>
                    <Link href="/housing/3" className="btn btn-outline-primary">Detail</Link>
                  </div>
                </div>
              </div>
              
              <div className="kosan-card" data-type="putra">
                <div className="kosan-image">
                  <img src="https://sewakost.com/files/09-2022/ad48493/kost-mulyosari-buana-indah-dengan-ka-422771059_large.jpeg" alt="Kos Mulyosari Indah" />
                  <div className="kosan-type">Khusus Putra</div>
                </div>
                <div className="kosan-body">
                  <h3 className="kosan-title">Kos Mulyosari Indah</h3>
                  <div className="kosan-location">
                    <i className="fas fa-map-marker-alt"></i> Mulyosari, 1.5km dari ITS
                  </div>
                  <div className="kosan-features">
                    <div className="kosan-feature">
                      <i className="fas fa-expand-arrows-alt"></i> 3.5x4m
                    </div>
                    <div className="kosan-feature">
                      <i className="fas fa-shower"></i> Dalam
                    </div>
                    <div className="kosan-feature">
                      <i className="fas fa-snowflake"></i> AC
                    </div>
                  </div>
                  <div className="kosan-footer">
                    <div className="kosan-price">
                      Rp 1.450.000 <span>/ bulan</span>
                    </div>
                    <Link href="/housing/4" className="btn btn-outline-primary">Detail</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/assets/logoitsfix.jpg" alt="ITS STAY Logo" />
              <p>Platform Terpadu Hunian Mahasiswa ITS</p>
              <div className="social-icons">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h3>Hunian</h3>
                <ul>
                  <li><a href="#">Kos Putra</a></li>
                  <li><a href="#">Kos Putri</a></li>
                  <li><a href="#">Kos Campur</a></li>
                  <li><a href="#">Apartment</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h3>Layanan</h3>
                <ul>
                  <li><a href="#">Pencarian Kos</a></li>
                  <li><a href="#">Virtual Tour</a></li>
                  <li><a href="#">Konsultasi</a></li>
                  <li><a href="#">Program Komunitas</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h3>Perusahaan</h3>
                <ul>
                  <li><a href="#">Tentang Kami</a></li>
                  <li><a href="#">Karir</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Hubungi Kami</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-newsletter">
              <h3>Berlangganan Newsletter</h3>
              <p>Dapatkan info terbaru seputar hunian dan program komunitas</p>
              <form>
                <input type="email" placeholder="Email anda..." />
                <button type="submit" className="btn btn-primary">Langganan</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 ITS STAY - All Rights Reserved</p>
            <div className="footer-bottom-links">
              <a href="#">Syarat & Ketentuan</a>
              <a href="#">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </footer>

      <Script src="/js/script.js" strategy="afterInteractive" />
    </>
  )
}
