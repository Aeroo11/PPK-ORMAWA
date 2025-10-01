import Script from "next/script";
import Link from "next/link";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cari Kos - ITS STAY',
  description: 'Temukan hunian terbaik sesuai kebutuhan dan budgetmu',
}

export default function HousingPage() {
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
              <li><Link href="/layanan">Layanan</Link></li>
              <li><Link href="/tentang">Tentang</Link></li>
              <li><Link href="/kontak">Kontak</Link></li>
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

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Cari Kos di Sekitar ITS</h1>
          <p>Temukan hunian terbaik sesuai kebutuhan dan budgetmu</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="search-content">
        <div className="container">
          <div className="search-filters">
            <div className="filter-row">
              <div className="filter-group">
                <label>Lokasi</label>
                <select>
                  <option value="">Semua Lokasi</option>
                  <option value="keputih">Keputih</option>
                  <option value="gebang">Gebang</option>
                  <option value="mulyosari">Mulyosari</option>
                  <option value="sutorejo">Sutorejo</option>
                  <option value="kejawan">Kejawan</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Tipe Kos</label>
                <select>
                  <option value="">Semua Tipe</option>
                  <option value="putra">Khusus Putra</option>
                  <option value="putri">Khusus Putri</option>
                  <option value="campur">Campur</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Harga Bulanan</label>
                <div className="price-inputs">
                  <input type="number" placeholder="Min" />
                  <input type="number" placeholder="Max" />
                </div>
              </div>
            </div>
            <div className="filter-row">
              <div className="filter-group">
                <label>Fasilitas</label>
                <select>
                  <option value="">Semua Fasilitas</option>
                  <option value="ac">AC</option>
                  <option value="kamar-mandi-dalam">Kamar Mandi Dalam</option>
                  <option value="wifi">WiFi</option>
                  <option value="furnished">Furnished</option>
                  <option value="dapur">Dapur</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Jarak ke Kampus</label>
                <select>
                  <option value="">Semua Jarak</option>
                  <option value="500">&lt; 500m</option>
                  <option value="1000">500m - 1km</option>
                  <option value="2000">1km - 2km</option>
                  <option value="3000">2km - 3km</option>
                  <option value="more">3km+</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Ukuran Kamar</label>
                <select>
                  <option value="">Semua Ukuran</option>
                  <option value="small">Kecil (&lt; 3x3m)</option>
                  <option value="medium">Sedang (3x3m - 4x4m)</option>
                  <option value="large">Besar (&gt; 4x4m)</option>
                </select>
              </div>
            </div>
            <div className="filter-actions">
              <button className="btn btn-outline">Reset Filter</button>
              <button className="btn btn-primary">Terapkan Filter</button>
            </div>
          </div>
          
          <div className="view-toggle">
            <button className="active" data-view="grid"><i className="fas fa-th-large"></i> Grid</button>
            <button data-view="map"><i className="fas fa-map-marker-alt"></i> Map</button>
          </div>
          
          <div className="map-view" id="mapView">
            {/* Map will be loaded here */}
          </div>
          
          <div className="results-count">
            <p>Menampilkan 12 dari 42 kos-kosan</p>
          </div>
          
          <div className="results-grid" id="gridView">
            {/* Kosan results will be dynamically loaded here */}
          </div>
          
          <div className="pagination">
            <a href="#" className="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#"><i className="fas fa-chevron-right"></i></a>
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
