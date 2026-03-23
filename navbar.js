// R G International - Global Navigation Component
const navTemplate = `
<header class="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <!-- CLICKABLE LOGO & NAME -->
        <a href="/RGI/" class="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
            <img src="/RGI/Logo.png" alt="R G International Logo" class="h-10 md:h-12 w-auto object-contain">
            <img src="/RGI/Name.png" alt="R G International" class="h-6 md:h-8 w-auto object-contain">
        </a>

        <!-- Hamburger Button for Mobile -->
        <button id="mobile-menu-btn" class="md:hidden text-blue-300 hover:text-white focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-6 text-sm font-semibold items-center">
            <a href="/RGI/" class="hover:text-blue-300 transition">HOME</a>
            
            <!-- About Us Dropdown -->
            <div class="relative dropdown group py-2">
                <a href="/RGI/About/about-us" class="hover:text-blue-300 transition flex items-center">ABOUT US ▾</a>
                <div class="dropdown-menu absolute hidden bg-white text-slate-800 shadow-xl rounded mt-2 py-2 w-48 border border-slate-200">
                    <a href="/RGI/About/about-us#who-we-are" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Who We Are</a>
                    <a href="/RGI/About/about-us#mission" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Mission/Vision</a>
                    <a href="/RGI/About/about-us#clients" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Clients</a>
                </div>
            </div>

            <!-- Services Dropdown with Flyout -->
            <div class="relative dropdown group py-2">
                <a href="/RGI/Services/services" class="hover:text-blue-300 transition flex items-center">SERVICES ▾</a>
                <div class="dropdown-menu absolute hidden bg-white text-slate-800 shadow-xl rounded mt-2 py-2 w-72 border border-slate-200">
                    <a href="/RGI/Services/customs-clearance" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-bold">Customs Clearance</a>
                    
                    <div class="block px-4 py-2 font-bold text-slate-400 text-xs uppercase tracking-wider mt-1">Logistics</div>
                    <a href="/RGI/Services/logistics#freight" class="block px-4 py-1 pl-8 hover:bg-blue-50 hover:text-blue-700 text-sm">- Freight (Air/Ocean)</a>
                    <a href="/RGI/Services/logistics#domestic" class="block px-4 py-1 pl-8 hover:bg-blue-50 hover:text-blue-700 text-sm">- Domestic</a>
                    
                    <!-- EXPANDED CERTIFICATIONS FLYOUT -->
                    <div class="group/cert relative mt-1">
                        <a href="/RGI/Services/Certifications/certifications" class="flex justify-between items-center px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-bold">
                            Certifications & Licences
                            <span class="text-slate-400 text-xs">▶</span>
                        </a>
                        <div class="absolute top-0 left-full hidden group-hover/cert:block bg-white text-slate-800 shadow-xl rounded py-2 w-64 border border-slate-200 -ml-1">
                            <a href="/RGI/Services/Certifications/epcg-licences" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm">EPCG / Advance Licences</a>
                            <a href="/RGI/Services/Certifications/epr-certification" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm">EPR Certification</a>
                            <a href="/RGI/Services/Certifications/aeo-certification" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm">AEO Certification</a>
                            <a href="/RGI/Services/Certifications/svb-registration" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm">SVB Registration</a>
                            <a href="/RGI/Services/Certifications/moowr-scheme" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm">MOOWR Scheme</a>
                            <a href="/RGI/Services/Certifications/self-sealing-permission" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm">Self-Sealing Permission</a>
                            <div class="border-t border-slate-100 my-1"></div>
                            <a href="/RGI/Services/Certifications/other-certifications" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm font-semibold">Other Certifications</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Network Dropdown -->
            <div class="relative dropdown group py-2">
                <a href="/RGI/Network/network" class="hover:text-blue-300 transition flex items-center">NETWORK ▾</a>
                <div class="dropdown-menu absolute hidden bg-white text-slate-800 shadow-xl rounded mt-2 py-2 w-48 border border-slate-200">
                    <a href="/RGI/Network/presence" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Presence</a>
                    <a href="/RGI/Network/ports-serviced" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Ports Serviced</a>
                </div>
            </div>

            <a href="/RGI/Consultancy/consultancy" class="hover:text-blue-300 transition py-2">CONSULTANCY</a>
            <a href="/RGI/Resources/resources" class="hover:text-blue-300 transition py-2">RESOURCES</a>
            <a href="/RGI/Gallery/gallery" class="hover:text-blue-300 transition py-2">GALLERY</a>
            <a href="/RGI/Testimonials/testimonials" class="hover:text-blue-300 transition py-2">TESTIMONIALS</a>
            <a href="/RGI/Contact/contact-us" class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded shadow transition">CONTACT US</a>
        </nav>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-blue-800 border-t border-blue-700">
        <nav class="flex flex-col px-4 py-4 space-y-4 text-sm font-semibold">
            <a href="/RGI/" class="hover:text-blue-300">HOME</a>
            <a href="/RGI/About/about-us" class="hover:text-blue-300">ABOUT US</a>
            <a href="/RGI/Services/services" class="hover:text-blue-300">SERVICES</a>
            <a href="/RGI/Network/network" class="hover:text-blue-300">NETWORK</a>
            <a href="/RGI/Consultancy/consultancy" class="hover:text-blue-300">CONSULTANCY</a>
            <a href="/RGI/Resources/resources" class="hover:text-blue-300">RESOURCES</a>
            <a href="/RGI/Gallery/gallery" class="hover:text-blue-300">GALLERY</a>
            <a href="/RGI/Testimonials/testimonials" class="hover:text-blue-300">TESTIMONIALS</a>
            <a href="/RGI/Contact/contact-us" class="bg-blue-600 text-white px-4 py-2 rounded text-center w-full">CONTACT US</a>
        </nav>
    </div>
</header>
`;

class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = navTemplate;
        
        // Mobile menu toggle logic
        const btn = this.querySelector('#mobile-menu-btn');
        const menu = this.querySelector('#mobile-menu');

        if (btn && menu) {
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });
        }
    }
}

if (!customElements.get('main-navbar')) {
    customElements.define('main-navbar', Navbar);
}

// 1. GLOBAL HEAD INJECTIONS (Favicon)
const globalHeadTags = `
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚢</text></svg>">
`;
document.head.insertAdjacentHTML('beforeend', globalHeadTags);

// 2. GLOBAL EXPANDED FOOTER COMPONENT
const footerTemplate = `
    <footer class="bg-slate-900 text-slate-300 mt-auto w-full border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <!-- Column 1: Company Info -->
                <div>
                    <div class="flex items-center gap-3 mb-6">
                        <img src="/RGI/Logo.png" alt="R G International Logo" class="h-8 w-auto object-contain bg-white rounded p-1">
                        <span class="text-xl font-bold text-white tracking-wider"><span class="text-blue-400">R G</span> INTERNATIONAL</span>
                    </div>
                    <p class="text-sm text-slate-400 mb-6 leading-relaxed">
                        Your trusted Customs House Agent and logistics partner for seamless global trade, regulatory compliance, and end-to-end freight forwarding.
                    </p>
                    <div class="space-y-3 text-sm text-slate-400">
                        <p class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> 
                            <span>123 Logistics Park, C-Scheme,<br>Jaipur, Rajasthan 302001</span>
                        </p>
                        <p class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 
                            <a href="mailto:info@rginternational.com" class="hover:text-blue-400 transition">info@rginternational.com</a>
                        </p>
                        <p class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> 
                            <span>+91 (141) 123-4567</span>
                        </p>
                    </div>
                </div>

                <!-- Column 2: Quick Links -->
                <div class="md:pl-8">
                    <h3 class="text-white font-bold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">Quick Links</h3>
                    <ul class="space-y-3 text-sm">
                        <li><a href="/RGI/" class="hover:text-blue-400 transition flex items-center gap-2"><span class="text-blue-600">▸</span> Home</a></li>
                        <li><a href="/RGI/About/about-us" class="hover:text-blue-400 transition flex items-center gap-2"><span class="text-blue-600">▸</span> About Us</a></li>
                        <li><a href="/RGI/Services/services" class="hover:text-blue-400 transition flex items-center gap-2"><span class="text-blue-600">▸</span> All Services</a></li>
                        <li><a href="/RGI/Network/network" class="hover:text-blue-400 transition flex items-center gap-2"><span class="text-blue-600">▸</span> Our Network</a></li>
                        <li><a href="/RGI/Consultancy/consultancy" class="hover:text-blue-400 transition flex items-center gap-2"><span class="text-blue-600">▸</span> Consultancy (BCG)</a></li>
                        <li><a href="/RGI/Contact/contact-us" class="hover:text-blue-400 transition flex items-center gap-2"><span class="text-blue-600">▸</span> Contact Us</a></li>
                    </ul>
                </div>

                <!-- Column 3: Core Expertise -->
                <div>
                    <h3 class="text-white font-bold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">Core Expertise</h3>
                    <ul class="space-y-3 text-sm">
                        <li><a href="/RGI/Services/customs-clearance" class="hover:text-blue-400 transition flex items-center gap-2"><span class="text-blue-600">▸</span> Customs Clearance</a></li>
                        <li><a href="/RGI/Services/logistics" class="hover:text-blue-400 transition flex items-center gap-2"><span class="text-blue-600">▸</span> Freight & Logistics</a></li>
                        <li><a href="/RGI/Services/Certifications/certifications" class="hover:text-blue-400 transition flex items-center gap-2"><span class="text-blue-600">▸</span> DGFT Certifications</a></li>
                        <li><a href="/RGI/Services/Certifications/aeo-certification" class="hover:text-blue-400 transition flex items-center gap-2"><span class="text-blue-600">▸</span> AEO Certification</a></li>
                        <li><a href="/RGI/Services/Certifications/svb-registration" class="hover:text-blue-400 transition flex items-center gap-2"><span class="text-blue-600">▸</span> SVB Registration</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Bottom Copyright Bar -->
        <div class="bg-slate-950 py-4 border-t border-slate-800">
            <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                <p>&copy; 2026 R G International. All rights reserved.</p>
                <p class="mt-2 md:mt-0">Customs House Agent | Freight Forwarding | Regulatory Compliance</p>
            </div>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = footerTemplate;
    }
}

if (!customElements.get('main-footer')) {
    customElements.define('main-footer', Footer);
}