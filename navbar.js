// R G International - Global Navigation Component
const navTemplate = `
<header class="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="text-2xl font-bold tracking-wider">
            <span class="text-blue-300">R G</span> INTERNATIONAL
        </div>

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
                    
                    <div class="group/cert relative mt-1">
                        <a href="/RGI/Services/Certifications/certifications" class="flex justify-between items-center px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-bold">
                            Certifications & Licences
                            <span class="text-slate-400 text-xs">▶</span>
                        </a>
                        <div class="absolute top-0 left-full hidden group-hover/cert:block bg-white text-slate-800 shadow-xl rounded py-2 w-64 border border-slate-200 -ml-1">
                            <a href="/RGI/Services/Certifications/aeo-certification" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm">AEO Certification</a>
                            <a href="/RGI/Services/Certifications/svb-registration" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm">SVB Registration</a>
                            <a href="/RGI/Services/Certifications/epcg-licences" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm">EPCG / Advance Licences</a>
                            <a href="/RGI/Services/Certifications/moowr-scheme" class="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm">MOOWR Scheme</a>
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

// 2. GLOBAL FOOTER COMPONENT
const footerTemplate = `
    <footer class="bg-slate-900 text-slate-400 py-8 text-center mt-auto w-full">
        <div class="container mx-auto px-4">
            <p>&copy; 2026 R G International. All rights reserved.</p>
            <p class="text-sm mt-2">Customs House Agent | Freight Forwarding | Licensing</p>
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