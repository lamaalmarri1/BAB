// قاعدة بيانات وهمية
const wordsDatabase = [
    "الإيمان",
    "الصبر",
    "التقوى",
    "الإحسان",
    "الزكاة",
    "الحج",
    "الصلاة"
  ];
  
  // وظيفة البحث
  function searchWord() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ""; // مسح النتائج السابقة
  
    // تصفية الكلمات بناءً على البحث
    const filteredWords = wordsDatabase.filter(word =>
      word.includes(query)
    );
  
    // عرض النتائج
    if (query && filteredWords.length > 0) {
      filteredWords.forEach(word => {
        const resultItem = document.createElement('div');
        resultItem.textContent = word;
        resultItem.classList.add('result-item');
        resultsContainer.appendChild(resultItem);
      });
    } else if (query) {
      resultsContainer.textContent = "لا توجد نتائج.";
    }
  }
  