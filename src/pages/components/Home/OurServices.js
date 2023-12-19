import TeamPic1 from "../../../assets/teamPic1.png";
import TeamPic2 from "../../../assets/teamPic2.png";
// import SlideShow from "../othercomponents/SlideShow";
import srv from '../../../assets/slideshow/services2.jpg'
const timeline = [
  {
    name: "Exhibitions Organizing",
    description:
      "أفكارنا غير تقليدية, من أجل نجاح عملائنا و تحقيق أهداف المؤتمرات, نوفر منظومة متكاملة من الخدمات التي تلبي احتياجات و متطلبات عملائنا و ضيوفهم",
    description1:
      "Our ideas are far from traditional thoughts. for our clients success, top lien event creates event-services deliver your targets and beyond.",
    date: "ﺗﻨﻈﻴﻢ اﻟﻤﻌﺎرض واﻟﻤﺆﺗﻤﺮات",
    dateTime: "2021-08",
  },

  {
    name: "Events Management",
    description1:
      "Ocean’s methods are rare which formed from our vision to event management. We cater for all your events needs, from planning to implementation.",
    description:
      "ﻧﻬﺠﻨــﺎ ﻓﺮﻳــﺪ ﻳﺘﺸــﻜﻞ ﻣــﻦ رؤﻳﺘﻨــﺎ ﻟﻠﻔﻌﺎﻟﻴــﺎت وإﺑﺪاﻋﻨـﺎ ﻓـﻲ اﻟﺨﺪﻣـﺔ واﻷداء ﺣﻠﻮل ﻣﺘﻜﺎﻣﻠﺔ .. ﺗﻤﺘـﺪ ﺧﺒﺮاﺗﻨـﺎ ﻟﺘﺸــﻤﻞ ﻛﺎﻓــﺔ ﺟﻮاﻧــﺐ اﻟﻔﻌﺎﻟﻴــﺔ",
    date: "إدارة وﺻﻨﺎﻋﺔ اﻟﻔﻌﺎﻟﻴﺎت",
    dateTime: "2021-12",
  },
  {
    name: "Organizing sports crowds",
    description:
      "نحافظ على ادارة الحشود الضخمة و الرياضية, لنضمن لحضورك السلامة, والراحة, فريق عملنا مدرب على اعلى المستويات و مجهز بأحدث التقنيات يشرف ببراعة على سير الفعاليات بسلاسة من مناطق الدخول حتى بوابات الخروج",
    description1:
      "We focus on managing large crowds to ensure the safety and comfort of your guests. our team ,trained to the highest standards and equipped with the latest technologies, skillfully oversees the smooth flow of events from entry points to exit gates",
    date: "ﺗﻨﻈﻴﻢ اﻟﺤﺸﻮد اﻟﺮﻳﺎﺿﻴﺔ",
    dateTime: "2022-02",
  },
  {
    name: "Services and Equipment",
    description:
      "يوفر توب لاين خدمات توريد و تركيب و تشغيل أحدث الأجهزة و التقنيات الخاصة بالفعاليات و الاحتفالات , وتقديم حلول متكاملة من الخدمات المساندة",
    description1:
      "Top Line provides services for supplying, installing and operating the latest equipment and technologies for events and celebrations, and providing integrated solutions of support services.",
    date: "ﺧﺪﻣﺎت وﺗﺠﻬﻴﺰات",
    dateTime: "2022-12",
  },
];

export default function OurServices() {
  return (
    <div className="bg-white" id="services">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl my-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                OUR SERVICES
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  ﻧﺤﻦ ﻣﻠﺘﺰﻣﻮن ﺑﺨﻠﻖ ﺛﻘﺎﻓﺔ ﺷﺎﻣﻠﺔ ﻣﻦ ﺷﺄﻧﻬﺎ أن ﺗﺴﺎﻋﺪﻧﺎ أن ﻧﺼﺒﺢ اﻷﻓﻀﻞ
                  وﻧﺤﺴﻦ اﻟﻤﺠﺘﻤﻌﺎت اﻟﺘﻲ ﻧﻌﻤﻞ ﻓﻴﻬﺎ
                </p>
                <p className="text-lg leading-8 text-gray-600">
                  Top line commits to creating a holistic culture in the events
                  management industry that shall ease the road for the
                  betterment of humans and their communities.
                </p>
              </div>
              {/* Comeback */}
              <img
                src={srv}
                alt=""
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
              {/* <SlideShow/> */}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Timeline section */}
        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                >
                  <svg
                    viewBox="0 0 4 4"
                    className="mr-4 h-1 w-1 flex-none"
                    aria-hidden="true"
                  >
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
                <p className="mt-1 text-base leading-7 text-gray-600">
                  {item.description1}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Content section */}
        <div className="mt-32 overflow-hidden sm:mt-40" id="team">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  OUR TEAM
                </h2>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  فريقنا
                </h2>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src={TeamPic1}
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      src={TeamPic1}
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      src={TeamPic2}
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      src={TeamPic1}
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
