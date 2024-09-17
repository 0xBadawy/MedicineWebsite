import { useState } from "react";

const DepartmentSection = () => {
  const [departments] = useState([
    {
      nameAr: "التشريح",
      nameEn: "Anatomy",
      description: "دراسة بنية الجسم البشري.",
      doctor: "عبد الله نصر",
      doctor2: "",
      image: "src/assets/Images/Department/Image (8).jpg", 
    },
    {
      nameAr: "الهستولوجي",
      nameEn: "Histology",
      description: "دراسة التركيب المجهري للأنسجة.",
      doctor: "هالة محمد",
      doctor2: "",
      image: "src/assets/Images/Department/Image (2).jpg", 
    },
    {
      nameAr: "الفسيولوجي",
      nameEn: "Physiology",
      description: "فهم وظائف الأعضاء والأنسجة.",
      doctor: "سارة ظريف",
      doctor2: "",
      image: "src/assets/Images/Department/Image (10).jpg", 
    },
    {
      nameAr: "الكيمياء الحيوية",
      nameEn: "Biochemistry",
      description: "فهم التفاعلات الكيميائية داخل الجسم.",
      doctor: "زينب عياد",
      doctor2: "",
      image: "src/assets/Images/Department/Image (9).jpg", 
    },
    {
      nameAr: "الباثولوجي",
      nameEn: "Pathology",
      description: "دراسة الأمراض وأسبابها.",
      doctor: "دينا بدوي",
      doctor2: "",
      image: "src/assets/Images/Department/Image (1).jpg", 
    },
    {
      nameAr: "الباثولوجي",
      nameEn: "Pathology",
      description: "دراسة الأمراض وأسبابها.",
      doctor: "سارة ربيع",
      doctor2: "",
      image: "src/assets/Images/Department/Image (1).jpg", 
    },
    {
      nameAr: "الميكروبيولوجيا",
      nameEn: "Microbiology",
      description: "دراسة الكائنات الدقيقة وتأثيرها على الإنسان.",
      doctor: "إيمان زهران",
      doctor2: "",
      image: "src/assets/Images/Department/Image (5).jpg", 
    },
    {
      nameAr: "الفارماكولوجي",
      nameEn: "Pharmacology",
      description: "دراسة الأدوية وتأثيراتها على الجسم.",
      doctor: "إيمان أحمد",
      doctor2: "ميرنا محروس",
      image: "src/assets/Images/Department/Image (6).jpg", 
    },
    {
      nameAr: "الطفيليات",
      nameEn: "Parasitology",
      description: "دراسة الطفيليات التي تصيب الإنسان.",
      doctor: "صابرين مصطفى",
      doctor2: "",
      image: "src/assets/Images/Department/Image (7).jpg", 
    },
    {
      nameAr: "الصحة العامة",
      nameEn: "Public Health",
      description: "تعزيز الصحة العامة والوقاية من الأمراض.",
      doctor: "آية جمال",
      doctor2: "",
      image: "src/assets/Images/Department/Image (3).jpg", 
    },
  ]);

  return (
    <>
      <h3 className="text-3xl font-bold text-center my-8">أقسام الكلية</h3>
      <div className="container mx-auto " style={{ direction: "rtl" }}>
        <div className="flex flex-wrap gap-8 mx-auto p-4">
          {departments.map((department, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-60 mx-auto ScrollEffectApper ">
              <img
                src={department.image}
                alt={department.nameEn}
                className="w-full h-32 object-cover transition duration-500 ease-in-out transform hover:scale-110 hover:brightness-50 "
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  <span className="block text-gray-700">{department.nameAr}</span>
                  <span className="block text-gray-500 text-sm">{department.nameEn}</span>
                </h3>
                <p className="text-gray-600 mb-2">{department.description}</p>
                <p className="font-semibold text-[15px]">الدكتور: {department.doctor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DepartmentSection;
