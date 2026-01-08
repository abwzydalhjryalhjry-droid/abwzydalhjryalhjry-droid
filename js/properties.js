// بيانات إضافية للعقارات
const allProperties = [
    // العقارات المميزة من الملف السابق
    ...properties,
    // عقارات إضافية
    {
        id: 5,
        title: "شقة دوبلكس للبيع",
        location: "بغداد - الكرادة",
        price: "180,000,000 دينار",
        type: "بيع",
        propertyType: "شقة",
        rooms: 3,
        bathrooms: 2,
        area: "180 م²",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featured: false
    },
    {
        id: 6,
        title: "بيت حديث للإيجار",
        location: "النجف - حي الحنانة",
        price: "1,200,000 دينار/شهر",
        type: "تأجير",
        propertyType: "بيت",
        rooms: 4,
        bathrooms: 3,
        area: "220 م²",
        image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w-1350&q=80",
        featured: false
    },
    {
        id: 7,
        title: "أرض تجارية للبيع",
        location: "كربلاء - وسط المدينة",
        price: "750,000,000 دينار",
        type: "بيع",
        propertyType: "أرض",
        rooms: 0,
        bathrooms: 0,
        area: "500 م²",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featured: false
    },
    {
        id: 8,
        title: "شقة فاخرة للإيجار",
        location: "بغداد - الجادرية",
        price: "2,500,000 دينار/شهر",
        type: "تأجير",
        propertyType: "شقة",
        rooms: 4,
        bathrooms: 3,
        area: "200 م²",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featured: false
    }
];

// عرض جميع العقارات
function displayAllProperties() {
    const container = document.getElementById('allProperties');
    if (!container) return;
    
    // الحصول على معاملات البحث من الرابط
    const urlParams = new URLSearchParams(window.location.search);
    const typeFilter = urlParams.get('type');
    const propertyTypeFilter = urlParams.get('propertyType');
    const locationFilter = urlParams.get('location');
    
    let filteredProperties = allProperties;
    
    // تطبيق الفلاتر
    if (typeFilter) {
        filteredProperties = filteredProperties.filter(property => property.type === typeFilter);
    }
    
    if (propertyTypeFilter) {
        filteredProperties = filteredProperties.filter(property => property.propertyType === propertyTypeFilter);
    }
    
    if (locationFilter) {
        filteredProperties = filteredProperties.filter(property => 
            property.location.toLowerCase().includes(locationFilter.toLowerCase()));
    }
    
    // عرض العقارات المصفاة
    let html = '';
    
    if (filteredProperties.length === 0) {
        html = '<div class="no-results"><h3>لا توجد عقارات تطابق بحثك</h3></div>';
    } else {
        filteredProperties.forEach(property => {
            const typeText = property.type === 'rent' ? 'تأجير' : 'بيع';
            const typeClass = property.type === 'rent' ? 'rent' : 'sale';
            
            html += `
            <div class="property-card">
                <div class="property-img" style="background-image: url('${property.image}')"></div>
                <div class="property-info">
                    <div class="property-price">${property.price}</div>
                    <div class="property-type ${typeClass}">${typeText}</div>
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
    }
    
    container.innerHTML = html;
}

// إعداد فلاتر البحث
function setupFilters() {
    const filterForm = document.getElementById('filterForm');
    if (!filterForm) return;
    
    // تعيين القيم الحالية من الرابط
    const urlParams = new URLSearchParams(window.location.search);
    
    const typeFilter = document.getElementById('filterType');
    const propertyTypeFilter = document.getElementById('filterPropertyType');
    const locationFilter = document.getElementById('filterLocation');
    
    if (typeFilter && urlParams.get('type')) {
        typeFilter.value = urlParams.get('type');
    }
    
    if (propertyTypeFilter && urlParams.get('propertyType')) {
        propertyTypeFilter.value = urlParams.get('propertyType');
    }
    
    if (locationFilter && urlParams.get('location')) {
        locationFilter.value = urlParams.get('location');
    }
    
    // إرسال النموذج
    filterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const type = typeFilter ? typeFilter.value : '';
        const propertyType = propertyTypeFilter ? propertyTypeFilter.value : '';
        const location = locationFilter ? locationFilter.value : '';
        
        let url = 'properties.html?';
        let params = [];
        
        if (type) params.push(`type=${type}`);
        if (propertyType) params.push(`propertyType=${propertyType}`);
        if (location) params.push(`location=${encodeURIComponent(location)}`);
        
        if (params.length > 0) {
            url += params.join('&');
        }
        
        window.location.href = url;
    });
}

// تهيئة كل شيء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    displayAllProperties();
    setupFilters();
    setupMobileMenu();
});