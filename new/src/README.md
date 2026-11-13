# EMD Business — مكتبة الأكواد

المصدر الوحيد للنسخة الجديدة. لا تعدّل stage1/index.html ولا new/index.html مباشرة: عدّل الملف المناسب هنا ثم شغّل:

    sh test-all.sh            # يختبر ثم يبني ../stage1/index.html
    sh test-all.sh <مجلد>      # يبني في مجلد آخر (مثل new/ في المستودع)

- lib/: القواعد (store التخزين، util أدوات، ui النوافذ والتنبيه، orders الطلبات والحالات، products المنتجات والأسعار، money المال، stock المخزون، customers العملاء، wa رسائل واتساب)
- screens/: الشاشات
- app/: الأحداث (مستمع واحد) والتشغيل
- parser/: مصدر parse.js واختباراته (python3 parser/build.py)
- static/: الملفات التي تُنسخ كما هي (parse.js، logo.svg)
- ORDER.txt: ترتيب الملفات في البناء
- shell.html: هيكل الصفحة والتنسيق

قواعد يفحصها build.py: كل دالة تُعرّف مرة واحدة، لا MutationObserver، لا setInterval إلا الساعة.

# اختبارات الواجهة (Playwright): شغّل خادمًا على مجلد stage1 بالمنفذ 8131 ثم: node tests/ui-import.js و tests/ui-new-order.js و tests/ui-screens.js و tests/ui-store*.js
