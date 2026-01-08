// بيانات تجريبية للعقارات في اليمن - ذمار
console.log("✅ إصدار الملف: 1.1 - تم التحديث: " + new Date().toLocaleTimeString());
const properties = [
    {
        id: 1,
        title: " فيلا فاخرة في شارع المعارض للبيع ",
        location: " ذمار - جولة ابوصدام ",
        price: "350,000,000 ريال",
        type: "بيع",
        propertyType: "فيلا",
        rooms: 4,
        bathrooms: 3,
        area: "350 م²",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featured: true,
        description: "فيلا فاخرة في أفضل مناطق ذمار، تتكون من 4 غرف نوم و3 حمامات وصالة كبيرة ومطبخ حديث.",
        phone: "785097990"
    },
    {
        id: 2,
        title: "شقة راقية للإيجار في المنتزه",
        location: "ذمار - حي الفزعات",
        price: "150,000 ريال/شهر",
        type: "تأجير",
        propertyType: "شقة",
        rooms: 3,
        bathrooms: 2,
        area: "180 م²",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featured: true,
        description: "شقة مفروشة حديثة في حي المنتزه، مجهزة بكافة الخدمات والمرافق.",
        phone: "785097990"
    },
    {
        id: 3,
        title: "أرض سكنية في حوش الكهرباء",
        location: "ذمار - الكهرباء",
        price: "200,000,000 ريال",
        type: "بيع",
        propertyType: "أرض",
        rooms: 0,
        bathrooms: 0,
        area: "500 م²",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featured: true,
        description: "أرض سكنية ممتازة في منطقة الحالية، صالحة للبناء الفوري.",
        phone: "785097990"
    },
    {
        id: 4,
        title: "بيت شعبي للبيع في الميثالي",
        location: "ذمار - القديمة",
        price: "180,000,000 ريال",
        type: "بيع",
        propertyType: "بيت",
        rooms: 3,
        bathrooms: 2,
        area: "250 م²",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featured: true,
        description: "بيت شعبي تقليدي مع حديقة، في حي القديمة بالقرب من الخدمات.",
        phone: "785097990"
    },
    {
        id: 5,
        title: "شقة دوبلكس للإيجار في الصحوة",
        location: "ذمار - حي المنزل",
        price: "120,000 ريال/شهر",
        type: "تأجير",
        propertyType: "شقة",
        rooms: 2,
        bathrooms: 2,
        area: "140 م²",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featured: false,
        description: "شقة دوبلكس مفروشة بالكامل، مطلة على شارع رئيسي.",
        phone: "785097990"
    }
];

// عرض العقارات المميزة على الصفحة الرئيسية
function displayFeaturedProperties() {
    const container = document.getElementById('featuredProperties');
    if (!container) return;
    
    let html = '';
    const featuredProperties = properties.filter(property => property.featured);
    
    featuredProperties.forEach(property => {
        const typeText = property.type === 'تأجير' ? 'تأجير' : 'بيع';
        
        html += `
        <div class="property-card">
            <div class="property-img" style="background-image: url('${property.image}')"></div>
            <div class="property-info">
                <div class="property-price">${property.price}</div>
                <div class="property-type">${typeText}</div>
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

// عرض تفاصيل العقار
function showPropertyDetails(id) {
    const property = properties.find(p => p.id === id);
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

// إغلاق نافذة التفاصيل
function closeModal() {
    const modal = document.getElementById('propertyModal');
    if (modal) {
        modal.remove();
    }
}

// نسخ رقم الهاتف
function copyPhone(phone) {
    navigator.clipboard.writeText(phone)
        .then(() => {
            alert('تم نسخ الرقم: ' + phone);
        })
        .catch(err => {
            console.error('فشل نسخ الرقم: ', err);
        });
}

// الاتصال بالمالك
function contactOwner(phone) {
    if (confirm(`هل تريد الاتصال بالرقم ${phone}؟`)) {
        // في التطبيق الحقيقي، هنا نفتح تطبيق الهاتف
        window.location.href = `tel:${phone}`;
    }
}

// إضافة تنسيقات للنافذة المنبثقة
function addModalStyles() {
    const style = document.createElement('style');
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

// البحث عن عقارات
function setupSearch() {
    const searchForm = document.getElementById('searchForm');
    if (!searchForm) return;
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const type = document.getElementById('type').value;
        const propertyType = document.getElementById('propertyType').value;
        const location = document.getElementById('location').value.toLowerCase();
        
        // فلترة العقارات
        let filteredProperties = properties;
        
        if (type) {
            const typeMap = { 'rent': 'تأجير', 'sale': 'بيع' };
            filteredProperties = filteredProperties.filter(p => p.type === typeMap[type]);
        }
        
        if (propertyType) {
            const propertyTypeMap = { 
                'house': 'بيت', 
                'apartment': 'شقة', 
                'land': 'أرض',
                'villa': 'فيلا' 
            };
            filteredProperties = filteredProperties.filter(p => p.propertyType === propertyTypeMap[propertyType]);
        }
        
        if (location) {
            filteredProperties = filteredProperties.filter(p => 
                p.location.toLowerCase().includes(location)
            );
        }
        
        // تخزين النتائج في localStorage للوصول إليها في صفحة العقارات
        localStorage.setItem('searchResults', JSON.stringify(filteredProperties));
        
        // التوجيه لصفحة العقارات
        window.location.href = 'properties.html';
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
    displayFeaturedProperties();
    setupSearch();
    setupMobileMenu();
    
    // إغلاق النافذة المنبثقة عند الضغط على الزر ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    // دالة لعرض تفاصيل العقار في نافذة منبثقة
function showPropertyDetails(id) {
    const properties = [
        {
            id: 1,
            title: "فيلا فاخرة في حي الجنوبي",
            location: "ذمار - حي الجنوبي",
            price: "350,000,000 ريال",
            type: "بيع",
            propertyType: "فيلا",
            rooms: 4,
            bathrooms: 3,
            area: "350 م²",
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            phone: "785097990",
            description: "فيلا فاخرة في أفضل مناطق ذمار، تتكون من 4 غرف نوم و3 حمامات وصالة كبيرة ومطبخ حديث."
        }
        // ... إضافة باقي العقارات
    ];
    
    const property = properties.find(p => p.id === id);
    if (!property) return;
    
    // إنشاء نافذة منبثقة
    const modalHTML = `
    <div style="position:fixed; top:0; right:0; bottom:0; left:0; background:rgba(0,0,0,0.8); display:flex; justify-content:center; align-items:center; z-index:1000;">
        <div style="background:white; width:90%; max-width:500px; border-radius:10px; padding:20px;">
            <h2>${property.title}</h2>
            <p><strong>📍 ${property.location}</strong></p>
            <p><strong>💰 ${property.price}</strong></p>
            <p><strong>📞 ${property.phone}</strong></p>
            <button onclick="this.parentElement.parentElement.remove()" style="background:#e74c3c; color:white; border:none; padding:10px 20px; border-radius:5px; cursor:pointer; margin-top:20px;">
                إغلاق
            </button>
        </div>
    </div>
    `;
    
    // إضافة النافذة للصفحة
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML = modalHTML;
    document.body.appendChild(modalDiv);
}

});
