import HeaderCover from "../assets/Images/Cover/NewsCover.png";
import FooterLogo from "../assets/Images/Logo/LogoBlack.png";
import image1 from "../assets/Images/About.jpg";
import image2 from "../assets/Images/Vision.jpg";
const AboutUs = () => {
  const AboutText = [
    "تهدف الكلية إلى تنمية قدرات الطلاب بشكل شامل، من خلال تطبيق مبدأ التعلم الذاتي الذي يعزز من قدرة الطالب على التعلم المستمر والتكيف مع بيئات العمل المتنوعة في النظام الصحي المتكامل. يتضمن هذا الهدف تطوير مهارات حل المشكلات الطبية، حيث يتعلم الطلاب كيفية تقييم الحالات الصحية المعقدة والتوصل إلى حلول فعالة. كما يتم التركيز على تنمية المهارات المهنية والإكلينيكية الأساسية منذ بداية الدراسة، مما يوفر للطلاب الأساس القوي الذي يحتاجونه للتفوق في مجالاتهم. وتتحقق هذه الأهداف من خلال دراسة تكاملية للجسم البشري، حيث يتم التعرف على الأنظمة البيولوجية المختلفة وعلاقتها بالصحة العامة",
    "تتجسد رسالة الكلية في تخريج أطباء مؤهلين يحملون شهادات علمية معتمدة دوليًا، مما يمكنهم من العمل في أي من المراكز العلمية أو الصحية المرموقة في مختلف أنحاء العالم. تسعى الكلية جاهدة لتأهيل الطلاب أكاديميًا وإكلينيكيًا وفقًا لأعلى المعايير الدولية، وهذا يُعدّ ضروريًا لتزويدهم بالقدرات اللازمة للتنافس في سوق العمل الإقليمي والدولي. بالإضافة إلى ذلك، تُعزز الكلية قدرة الطلاب على التعلم الذاتي المستمر عبر إدماج أحدث الممارسات التعليمية وأساليب التعلم النشط.",
    "تتمحور رؤية الكلية حول تقديم برامج تعليمية ذات جودة عالية تدعم البحث العلمي وتعزز التعاون والشراكة مع المجتمع. تهدف هذه البرامج إلى تخريج أطباء مهرة قادرين على التكيف مع التطورات السريعة في الممارسة العملية والبحث العلمي، مما يعكس التزام الكلية بتدريب جيل جديد من المهنيين الذين يسعون لخدمة المجتمع والبيئة. تُعتبر هذه الشراكات جزءًا أساسيًا من استراتيجية الكلية، حيث تُعزز من فرص التفاعل بين الطلاب والمجتمع وتساهم في تقديم حلول مبتكرة للتحديات الصحية والاجتماعية.",
    "في النهاية، تضع الكلية نصب عينيها مسؤوليتها تجاه تخريج قادة المستقبل في مجال الطب، الذين سيكون لهم دور فعّال في تعزيز الصحة العامة وتقديم رعاية صحية متميزة للمجتمعات التي يخدمونها.",
  ];

  const images = ["src/assets/Images/News/2.jpg", image1, image2];
  const spans = ["col-span-1", "col-span-2", "col-span-1"];
  return (
    <>
      <div>
        <div style={{ backgroundImage: `url(${HeaderCover})` }} className="bg-cover bg-center h-fit flex items-center justify-center bg-gray-200">
          <div className="bg-gradient-to-r from-[#3a1616dd] to-[#3a1616dd] w-full h-full">
            <div className="py-10 mx-2 lg:mx-32 container m-auto" style={{ direction: "rtl" }}>
              <div className="flex flex-row gap-10 mx-auto   items-start text-[30px] font-bold text-white text-right">
                <span className="flex flex-col items-center border-l-2 pl-10">
                  <img className="w-28" src={FooterLogo} alt="" />
                </span>
                {/* Display the title from data if available */}
                <span className="flex flex-col gap-3 items-center text-center">
                  <span className="text-5xl text-center">عن الكلية</span>
                  {/* <span className="text-sm font-normal max-w-[80ch] truncate ">ss</span> */}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto  text-right">
          <h1 className="max-w- text-3xl text-center font-semibold leading-normal my-10 text-gray-900 dark:text-white">{"كلية الطب جامعة الأقصر"}</h1>

          <div className="px-20 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div key={index} className={`relative rounded-xl ${spans[index]}`}>
                  <img
                    src={image}
                    alt=""
                    className="w-full h-[300px] object-cover rounded-xl shadow-md transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-right px-20 text-gray-500 dark:text-gray-400 pb-20" style={{ direction: "rtl" }}>
            {AboutText[0]}
            <br />
            <br />
            <hr />
            <br />
            {AboutText[1]}
            <br />
            <br />
            {AboutText[2]}
            <br />
            <br />
            <hr />
            <br />
            {AboutText[3]}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
