// بيانات عقارات ذمار (نفس البيانات في main.js مع إضافات)
const allProperties = [
    // العقارات الأساسية
    {
        id: 1,
        title: "فيلا فاخرة في حي السلام",
        location: "ذمار - حي السلام",
        price: "350,000,000 ريال",
        type: "بيع",
        propertyType: "فيلا",
        rooms: 4,
        bathrooms: 3,
        area: "350 م²",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "فيلا فاخرة في أفضل مناطق ذمار، تتكون من 4 غرف نوم و3 حمامات وصالة كبيرة ومطبخ حديث.",
        phone: "785097990"
    },
    {
        id: 2,
        title: "شقة راقية للإيجار في المنتزه",
        location: "ذمار - حي المنتزه",
        price: "150,000 ريال/شهر",
        type: "تأجير",
        propertyType: "شقة",
        rooms: 3,
        bathrooms: 2,
        area: "180 م²",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "شقة مفروشة حديثة في حي المنتزه، مجهزة بكافة الخدمات والمرافق.",
        phone: "785097990"
    },
    {
        id: 3,
        title: "أرض سكنية في الحالية",
        location: "ذمار - الحالية",
        price: "200,000,000 ريال",
        type: "بيع",
        propertyType: "أرض",
        rooms: 0,
        bathrooms: 0,
        area: "500 م²",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "أرض سكنية ممتازة في منطقة الحالية، صالحة للبناء الفوري.",
        phone: "777789123"
    },
    {
        id: 4,
        title: "بيت شعبي للبيع في القديمة",
        location: "ذمار - القديمة",
        price: "180,000,000 ريال",
        type: "بيع",
        propertyType: "بيت",
        rooms: 3,
        bathrooms: 2,
        area: "250 م²",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "بيت شعبي تقليدي مع حديقة، في حي القديمة بالقرب من الخدمات.",
        phone: "780206428"
    },
    {
        id: 5,
        title: "شقة دوبلكس للإيجار في الصحوة",
        location: "ذمار - حي الصحوة",
        price: "120,000 ريال/شهر",
        type: "تأجير",
        propertyType: "شقة",
        rooms: 2,
        bathrooms: 2,
        area: "140 م²",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "شقة دوبلكس مفروشة بالكامل، مطلة على شارع رئيسي.",
        phone: "780206428"
    },
    {
        id: 6,
        title: "محل تجاري للإيجار في السوق القديم",
        location: "ذمار - السوق القديم",
        price: "80,000 ريال/شهر",
        type: "تأجير",
        propertyType: "محل",
        rooms: 1,
        bathrooms: 1,
        area: "60 م²",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "محل تجاري في موقع ممتاز في السوق القديم، مناسب لأنواع مختلفة من التجارة.",
        phone: "780206428"
    },
    {
        id: 7,
        title: "فيلا حديثة للبيع في الحصبة",
        location: "ذمار - الحصبة",
        price: "450,000,000 ريال",
        type: "بيع",
        propertyType: "فيلا",
        rooms: 5,
        bathrooms: 4,
        area: "400 م²",
        image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "فيلا حديثة التصميم مع مسبح وحديقة، في منطقة هادئة.",
        phone: "780206428"
    }
];

// عرض جميع العقارات مع الفلترة
function displayAllProperties() {
    const container = document.getElementById('allProperties');
    const noResults = document.getElementById('noResults');
    
    if (!container) return;
    
    // الحصول على معاملات البحث من localStorage أو استخدام الكل
    let filteredProperties = allProperties;
    
    try {
        const searchResults = localStorage.getItem('searchResults');
        if (searchResults) {
            filteredProperties = JSON.parse(searchResults);
            localStorage.removeItem('searchResults'); // مسح بعد الاستخدام
        }
    } catch (e) {
        console.error('Error loading search results:', e);
    }
    
    // عرض العقارات المصفاة
    let html = '';
    
    if (filteredProperties.length === 0) {
        container.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    } else {
        container.style.display = 'grid';
        if (noResults) noResults.style.display = 'none';
    }
    
    filteredProperties.forEach(property => {
        const typeText = property.type;
        const typeClass = property.type === 'تأجير' ? 'rent' : 'sale';
        
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
                <button onclick="showPropertyDetails(${property.id})" class="btn-details">عرض التفاصيل</button>
            </div>
        </div>
        `;
    });
    
    container.innerHTML = html;
}

// عرض تفاصيل العقار (نفس الدالة في main.js)
function showPropertyDetails(id) {
    const property = allProperties.find(p => p.id === id);
    if (!property) return;
    
    // إنشاء نافذة تفاصيل
    const modalHTML = `
    <div class="modal-overlay" id="propertyModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>${property.title}</h2>
                <button onclick="closeModal()" class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="modal-image" style="background-image: url('${property.image}')"></div>
                <div class="modal-details">
                    <div class="detail-item">
                        <strong>المكان:</strong>
                        <span>${property.location}</span>
                    </div>
                    <div class="detail-item">
                        <strong>السعر:</strong>
                        <span class="price">${property.price}</span>
                    </div>
                    <div class="detail-item">
                        <strong>نوع العقار:</strong>
                        <span>${property.propertyType}</span>
                    </div>
                    <div class="detail-item">
                        <strong>نوع العملية:</strong>
                        <span>${property.type}</span>
                    </div>
                    <div class="detail-item">
                        <strong>المساحة:</strong>
                        <span>${property.area}</span>
                    </div>
                    <div class="detail-item">
                        <strong>الغرف:</strong>
                        <span>${property.rooms}</span>
                    </div>
                    <div class="detail-item">
                        <strong>الحمامات:</strong>
                        <span>${property.bathrooms}</span>
                    </div>
                    <div class="detail-item full-width">
                        <strong>الوصف:</strong>
                        <p>${property.description}</p>
                    </div>
                    <div class="detail-item contact-info">
                        <strong>للتواصل:</strong>
                        <span class="phone">${property.phone}</span>
                        <button onclick="copyPhone('${property.phone}')" class="btn-copy">
                            <i class="fas fa-copy"></i> نسخ الرقم
                        </button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button onclick="closeModal()" class="btn-close">إغلاق</button>
                <button onclick="contactOwner('${property.phone}')" class="btn-contact">
                    <i class="fas fa-phone"></i> الاتصال الآن
                </button>
            </div>
        </div>
    </div>
    `;
    
    // إضافة النافذة إلى الصفحة
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // إضافة تنسيقات للنافذة
    addModalStyles();
}

// نفس الدوال المساعدة من main.js
function closeModal() {
    const modal = document.getElementById('propertyModal');
    if (modal) modal.remove();
}

function copyPhone(phone) {
    navigator.clipboard.writeText(phone)
        .then(() => alert('تم نسخ الرقم: ' + phone))
        .catch(err => console.error('فشل نسخ الرقم: ', err));
}

function contactOwner(phone) {
    if (confirm(`هل تريد الاتصال بالرقم ${phone}؟`)) {
        window.location.href = `tel:${phone}`;
    }
}

function addModalStyles() {
    // نفس التنسيقات في main.js
    const existingStyle = document.getElementById('modal-styles');
    if (existingStyle) return;
    
    const style = document.createElement('style');
    style.id = 'modal-styles';
    style.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .modal-content {
            background-color: white;
            border-radius: 10px;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #eee;
        }
        
        .modal-header h2 {
            margin: 0;
            color: #2c3e50;
        }
        
        .close-modal {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #7f8c8d;
        }
        
        .modal-body {
            display: flex;
            flex-direction: column;
            padding: 20px;
        }
        
        @media (min-width: 768px) {
            .modal-body {
                flex-direction: row;
            }
        }
        
        .modal-image {
            height: 300px;
            background-size: cover;
            background-position: center;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        
        @media (min-width: 768px) {
            .modal-image {
                width: 50%;
                margin-bottom: 0;
                margin-left: 20px;
            }
        }
        
        .modal-details {
            flex: 1;
        }
        
        .detail-item {
            margin-bottom: 15px;
            display: flex;
            align-items: flex-start;
        }
        
        .detail-item strong {
            width: 120px;
            color: #2c3e50;
        }
        
        .detail-item.full-width {
            flex-direction: column;
        }
        
        .price {
            color: #e74c3c;
            font-weight: bold;
            font-size: 1.2rem;
        }
        
        .contact-info {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
        }
        
        .phone {
            font-size: 1.3rem;
            color: #27ae60;
            font-weight: bold;
            margin: 0 10px;
        }
        
        .btn-copy {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .modal-footer {
            display: flex;
            justify-content: flex-end;
            padding: 20px;
            border-top: 1px solid #eee;
            gap: 10px;
        }
        
        .btn-close, .btn-contact {
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            border: none;
            font-size: 1rem;
        }
        
        .btn-close {
            background-color: #95a5a6;
            color: white;
        }
        
        .btn-contact {
            background-color: #27ae60;
            color: white;
        }
    `;
    
    document.head.appendChild(style);
}

// إعداد فلاتر البحث
function setupFilters() {
    const filterForm = document.getElementById('filterForm');
    if (!filterForm) return;
    
    filterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const type = document.getElementById('filterType').value;
        const propertyType = document.getElementById('filterPropertyType').value;
        const rooms = document.getElementById('filterRooms').value;
        const location = document.getElementById('filterLocation').value.toLowerCase();
        
        // فلترة العقارات
        let filteredProperties = allProperties;
        
        if (type) {
            filteredProperties = filteredProperties.filter(p => p.type === type);
        }
        
        if (propertyType) {
            filteredProperties = filteredProperties.filter(p => p.propertyType === propertyType);
        }
        
        if (rooms) {
            const roomsNum = parseInt(rooms);
            if (roomsNum === 4) {
                filteredProperties = filteredProperties.filter(p => p.rooms >= 4);
            } else {
                filteredProperties = filteredProperties.filter(p => p.rooms == roomsNum);
            }
        }
        
        if (location) {
            filteredProperties = filteredProperties.filter(p => 
                p.location.toLowerCase().includes(location)
            );
        }
        
        // عرض النتائج المصفاة
        const container = document.getElementById('allProperties');
        const noResults = document.getElementById('noResults');
        
        if (filteredProperties.length === 0) {
            if (container) container.style.display = 'none';
            if (noResults) noResults.style.display = 'block';
            return;
        }
        
        if (noResults) noResults.style.display = 'none';
        if (container) container.style.display = 'grid';
        
        let html = '';
        filteredProperties.forEach(property => {
            const typeText = property.type;
            const typeClass = property.type === 'تأجير' ? 'rent' : 'sale';
            
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
                    <button onclick="showPropertyDetails(${property.id})" class="btn-details">عرض التفاصيل</button>
                </div>
            </div>
            `;
        });
        
        if (container) container.innerHTML = html;
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

// تهيئة كل شيء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    displayAllProperties();
    setupFilters();
    setupMobileMenu();
    
    // إغلاق النافذة المنبثقة عند الضغط على الزر ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }

    });

    // كود بسيط لصفحة العقارات
console.log("تم تحميل properties.js");

document.addEventListener('DOMContentLoaded', function() {
    console.log("صفحة العقارات جاهزة");
    
    // عرض رسالة بسيطة
    const container = document.getElementById('allProperties');
    if (container) {
        container.innerHTML = `
        <div class="property-card">
            <div class="property-img" style="background-image: url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"></div>
            <div class="property-info">
                <div class="property-price">350,000,000 ريال</div>
                <div class="property-type">بيع</div>
                <h3 class="property-title">فيلا فاخرة في  شارع المعارض - ذمار</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>  ذمار - جولة ابوصدام
                </div>
                <div class="property-features">
                    <div class="feature">
                        <i class="fas fa-bed"></i>
                        <span>4 غرف</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-bath"></i>
                        <span>3 حمامات</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-vector-square"></i>
                        <span>350 م²</span>
                    </div>
                </div>
                <button onclick="alert('رقم المالك: 785097990')" class="btn-details">عرض التفاصيل</button>
            </div>
        </div>
        `;
    }
});
});


