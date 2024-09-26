import HeaderCover from "../assets/Images/Cover/NewsCover.png";
import FooterLogo from "../assets/Images/Logo/LogoBlack.png";
import image1 from "../assets/Images/About.jpg";
import image2 from "../assets/Images/Vision.jpg";
const AboutUs = () => {
  const AboutText = [
    "تهدف الكلية إلى تنمية قدرات الطلاب بشكل شامل، من خلال تطبيق مبدأ التعلم الذاتي الذي يعزز من قدرة الطالب على التعلم المستمر والتكيف مع بيئات العمل المتنوعة في النظام الصحي المتكامل. يتضمن هذا الهدف تطوير مهارات حل المشكلات الطبية، حيث يتعلم الطلاب كيفية تقييم الحالات الصحية المعقدة والتوصل إلى حلول فعالة تتناسب مع احتياجات المرضى. كما يتم التركيز على تنمية المهارات المهنية والإكلينيكية الأساسية منذ بداية الدراسة، مما يوفر للطلاب الأساس القوي الذي يحتاجونه للتفوق في مجالاتهم. وتتحقق هذه الأهداف من خلال دراسة تكاملية للجسم البشري، حيث يتم التعرف على الأنظمة البيولوجية المختلفة وعلاقتها بالصحة العامة. هذا النهج يضمن أن يكون الطلاب مستعدين لمواجهة التحديات التي قد يواجهونها في مسيرتهم المهنية المستقبلية.",

    "تتجسد رسالة الكلية في تخريج أطباء مؤهلين يحملون شهادات علمية معتمدة دوليًا، مما يمكنهم من العمل في أي من المراكز العلمية أو الصحية المرموقة في مختلف أنحاء العالم. تسعى الكلية جاهدة لتأهيل الطلاب أكاديميًا وإكلينيكيًا وفقًا لأعلى المعايير الدولية، وهذا يُعدّ ضروريًا لتزويدهم بالقدرات اللازمة للتنافس في سوق العمل الإقليمي والدولي. بالإضافة إلى ذلك، تُعزز الكلية قدرة الطلاب على التعلم الذاتي المستمر عبر إدماج أحدث الممارسات التعليمية وأساليب التعلم النشط، مما يمنح الطلاب الأدوات اللازمة لتحقيق أهدافهم التعليمية والمهنية.",

    "تتمحور رؤية الكلية حول تقديم برامج تعليمية ذات جودة عالية تدعم البحث العلمي وتعزز التعاون والشراكة مع المجتمع. تهدف هذه البرامج إلى تخريج أطباء مهرة قادرين على التكيف مع التطورات السريعة في الممارسة العملية والبحث العلمي، مما يعكس التزام الكلية بتدريب جيل جديد من المهنيين الذين يسعون لخدمة المجتمع والبيئة. تُعتبر هذه الشراكات جزءًا أساسيًا من استراتيجية الكلية، حيث تُعزز من فرص التفاعل بين الطلاب والمجتمع وتساهم في تقديم حلول مبتكرة للتحديات الصحية والاجتماعية. إن تطوير هذه الشراكات يعد ضروريًا لضمان أن يظل التعليم مرتبطًا بالاحتياجات الفعلية للمجتمع.",

    "في النهاية، تضع الكلية نصب عينيها مسؤوليتها تجاه تخريج قادة المستقبل في مجال الطب، الذين سيكون لهم دور فعّال في تعزيز الصحة العامة وتقديم رعاية صحية متميزة للمجتمعات التي يخدمونها. وهذا يتطلب التزامًا طويل الأمد من قبل الكلية لضمان أن يحصل كل طالب على التعليم والتدريب اللازمين ليكون قادرًا على إحداث تأثير إيجابي في مجاله.",

    "تعتمد الكلية على أحدث التقنيات والابتكارات في العملية التعليمية، مما يضمن أن يتلقى الطلاب تعليماً محدثاً يتماشى مع المعايير العالمية. كما تدعم الكلية أنشطة البحث العلمي من خلال توفير بيئة تعليمية محفزة ومجهزة بأحدث المعامل والمرافق. وتهدف الكلية إلى تشجيع الطلاب على المشاركة في أبحاث مبتكرة ومشاريع تنموية تعود بالفائدة على المجتمع.",

    "تسعى الكلية أيضاً إلى تعزيز وعي الطلاب بأهمية الصحة العامة والوقاية من الأمراض، من خلال برامج توعية مجتمعية تشمل ورش عمل ومحاضرات في المدارس والمراكز الصحية. وتؤكد الكلية على أهمية دور الأطباء في تحسين الصحة العامة من خلال التثقيف والوقاية، مما يساهم في تقليل الأمراض وتعزيز جودة الحياة في المجتمع.",

    "بالإضافة إلى ذلك، تلتزم الكلية بتقديم دعم أكاديمي ونفسي متكامل للطلاب، مما يساهم في تحسين تجربتهم التعليمية ويعزز من نجاحهم الأكاديمي. تتضمن هذه الدعم برامج توجيه وإرشاد أكاديمي، بالإضافة إلى خدمات الصحة النفسية التي تساعد الطلاب على التغلب على التحديات التي قد يواجهونها خلال دراستهم.",
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

          <div className="text-right leading-loose px-20 text-gray-500 dark:text-gray-400 pb-20" style={{ direction: "rtl" }}>
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

            <br />
            <br />
            <hr />
            <br />
            {AboutText[4]}
            <br />
            <br />
            {AboutText[5]}
            <br />
            <br />
            <hr />
            <br />
            {AboutText[6]}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
