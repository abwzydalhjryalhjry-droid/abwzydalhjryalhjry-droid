// التحقق من النماذج وإرسالها

// وظيفة رفع الصور
function setupImageUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const imageUpload = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');
    
    if (!uploadArea || !imageUpload) return;
    
    // عند النقر على منطقة الرفع
    uploadArea.addEventListener('click', function() {
        imageUpload.click();
    });
    
    // عند اختيار الصور
    imageUpload.addEventListener('change', function(e) {
        const files = e.target.files;
        
        if (files.length > 10) {
            alert('يمكنك رفع 10 صور كحد أقصى');
            return;
        }
        
        imagePreview.innerHTML = '';
        
        Array.from(files).forEach(file => {
            if (!file.type.startsWith('image/')) {
                alert('يرجى رفع صور فقط');
                return;
            }
            
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'preview-image';
                imgContainer.innerHTML = `
                    <img src="${e.target.result}" alt="Preview">
                    <button type="button" class="remove-image">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                
                imagePreview.appendChild(imgContainer);
                
                // زر إزالة الصورة
                const removeBtn = imgContainer.querySelector('.remove-image');
                removeBtn.addEventListener('click', function() {
                    imgContainer.remove();
                });
            };
            
            reader.readAsDataURL(file);
        });
    });
    
    // سحب وإفلات الصور
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.style.backgroundColor = '#f0f7ff';
    });
    
    uploadArea.addEventListener('dragleave', function() {
        uploadArea.style.backgroundColor = '';
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.style.backgroundColor = '';
        
        const files = e.dataTransfer.files;
        imageUpload.files = files;
        
        // تشغيل حدث change يدوياً
        const event = new Event('change');
        imageUpload.dispatchEvent(event);
    });
}

// إظهار/إخفاء كلمة المرور
function setupPasswordToggle() {
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function() {
            const passwordInput = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.className = 'fas fa-eye-slash';
            } else {
                passwordInput.type = 'password';
                icon.className = 'fas fa-eye';
            }
        });
    });
}

// التحقق من نموذج التسجيل
function setupRegistrationForm() {
    const form = document.getElementById('registerForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // التحقق من كلمات المرور
        if (password !== confirmPassword) {
            alert('كلمات المرور غير متطابقة');
            return;
        }
        
        if (password.length < 8) {
            alert('كلمة المرور يجب أن تكون 8 أحرف على الأقل');
            return;
        }
        
        // هنا نرسل البيانات للخادم
        alert('تم إنشاء حسابك بنجاح! سيتم تحويلك إلى صفحة تسجيل الدخول.');
        window.location.href = 'login.html';
    });
}

// التحقق من نموذج الاتصال
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('message').value;
        
        if (!validateEmail(email)) {
            alert('يرجى إدخال بريد إلكتروني صحيح');
            return;
        }
        
        if (message.length < 10) {
            alert('يرجى كتابة رسالة مفصلة');
            return;
        }
        
        // هنا نرسل الرسالة للخادم
        alert('تم إرسال رسالتك بنجاح! سنرد عليك خلال 24 ساعة.');
        form.reset();
    });
}

// التحقق من البريد الإلكتروني
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// الأسئلة الشائعة التفاعلية
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // إغلاق جميع العناصر الأخرى
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // فتح/إغلاق العنصر الحالي
            item.classList.toggle('active');
        });
    });
}

// تهيئة كل الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    setupImageUpload();
    setupPasswordToggle();
    setupRegistrationForm();
    setupContactForm();
    setupFAQ();
    
    // تفعيل نموذج إضافة عقار
    const propertyForm = document.getElementById('addPropertyForm');
    if (propertyForm) {
        propertyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // التحقق من الحقول المطلوبة
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e74c3c';
                } else {
                    field.style.borderColor = '#ddd';
                }
            });
            
            if (!isValid) {
                alert('يرجى ملء جميع الحقول المطلوبة');
                return;
            }
            
            // التحقق من الصور
            const imageUpload = document.getElementById('imageUpload');
            if (imageUpload && imageUpload.files.length === 0) {
                alert('يرجى إضافة صورة واحدة على الأقل للعقار');
                return;
            }
            
            // هنا نرسل البيانات للخادم
            alert('تم إرسال بيانات العقار بنجاح! سنتصل بك خلال 24 ساعة لتأكيد الإضافة.');
            this.reset();
            
            // إعادة تعيين معاينة الصور
            const imagePreview = document.getElementById('imagePreview');
            if (imagePreview) {
                imagePreview.innerHTML = '';
            }
        });
    }
});