// بيانات تجريبية للعقارات
const properties = [
    {
        id: 1,
        title: "فيلا فاخرة في شارع المعارض",
        location: "ذمار - جولة ابوصدام",
        price: "250,000,000 ريال",
        type: "بيع",
        propertyType: "فيلا",
        rooms: 5,
        bathrooms: 4,
        area: "400 م²",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featured: true
    },
    {
        id: 2,
        title: "شقة حديثة للإيجار",
        location: "ذمار - جوار المعهد المهني",
        price: "1,500,000 ريال/شهر",
        type: "تأجير",
        propertyType: "شقة",
        rooms: 3,
        bathrooms: 2,
        area: "150 م²",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featured: true
    },
    {
        id: 3,
        title: "أرض سكنية للبيع",
        location: "ذمار - الجدد",
        price: "500,000,000 ريال",
        type: "بيع",
        propertyType: "أرض",
        rooms: 0,
        bathrooms: 0,
        area: "1000 م²",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featured: true
    },
    {
        id: 4,
        title: "بيت عائلي للإيجار",
        location: "ذمار - حي المنزل",
        price: "200000ريال/شهر",
        type: "تأجير",
        propertyType: "بيت",
        rooms: 4,
        bathrooms: 3,
        area: "250 م²",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featured: true
    }
];

// عرض العقارات المميزة
function displayFeaturedProperties() {
    const container = document.getElementById('featuredProperties');
    if (!container) return;
    
    let html = '';
    const featuredProperties = properties.filter(property => property.featured);
    
    featuredProperties.forEach(property => {
        html += `
        <div class="property-card">
            <div class="property-img" style="background-image: url('${property.image}')"></div>
            <div class="property-info">
                <div class="property-price">${property.price}</div>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i> ${property.location}
                </div>
                <div class="property-features">
                    <div class="feature">
                        <i class="fas fa-bed"></i>
                        <span>${property.rooms} غرف</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-bath"></i>
                        <span>${property.bathrooms} حمامات</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-vector-square"></i>
                        <span>${property.area}</span>
                    </div>
                </div>
                <a href="property-details.html?id=${property.id}" class="btn-details">عرض التفاصيل</a>
            </div>
        </div>
        `;
    });
    
    container.innerHTML = html;
}

// البحث عن عقارات
function setupSearch() {
    const searchForm = document.getElementById('searchForm');
    if (!searchForm) return;
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const type = document.getElementById('type').value;
        const propertyType = document.getElementById('propertyType').value;
        const location = document.getElementById('location').value;
        
        // هنا نوجه المستخدم لصفحة العقارات مع معاملات البحث
        let url = 'properties.html?';
        let params = [];
        
        if (type) params.push(`type=${type}`);
        if (propertyType) params.push(`propertyType=${propertyType}`);
        if (location) params.push(`location=${encodeURIComponent(location)}`);
        
        if (params.length > 0) {
            url += params.join('&');
            window.location.href = url;
        } else {
            window.location.href = 'properties.html';
        }
    });
}

// إظهار/إخفاء القائمة في الهواتف
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    }
}

// إرسال نموذج إضافة عقار
function setupPropertyForm() {
    const form = document.getElementById('addPropertyForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // هنا نأخذ البيانات من النموذج
        const propertyData = {
            title: document.getElementById('title').value,
            type: document.getElementById('type').value,
            propertyType: document.getElementById('propertyType').value,
            price: document.getElementById('price').value,
            location: document.getElementById('location').value,
            rooms: document.getElementById('rooms').value,
            bathrooms: document.getElementById('bathrooms').value,
            area: document.getElementById('area').value,
            description: document.getElementById('description').value
        };
        
        // في التطبيق الحقيقي، هنا نرسل البيانات للخادم
        // الآن نعرض رسالة نجاح
        alert('تم إرسال بيانات العقار بنجاح! سنتصل بك قريباً.');
        form.reset();
    });
}

// تسجيل الدخول
function setupLoginForm() {
    const form = document.getElementById('loginForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // في التطبيق الحقيقي، هنا نتحقق من بيانات المستخدم
        // الآن نعرض رسالة
        alert('تم تسجيل الدخول بنجاح!');
    });
}

// تهيئة كل شيء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    displayFeaturedProperties();
    setupSearch();
    setupMobileMenu();
    setupPropertyForm();
    setupLoginForm();
});