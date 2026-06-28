// ── Places data ───────────────────────────────────────────────────────────────
export const PLACES = {
  train: {
    name:"Iron Ore Train", subtitle:"Zouerat → Choum → Nouadhibou", category:"transport", categoryColor:"#4a9db5",
    name_ar:"قطار الحديد", subtitle_ar:"ازويرات ← شوم ← نواذيبو",
    desc:"One of the longest and heaviest trains in the world — up to 3 km long. It hauls iron ore across the Sahara from the mines of Zouerat to the port of Nouadhibou, a 700 km journey taking 12–20 hours. Adventure travelers ride the open ore cars for free, sleeping under stars with the vast desert rolling by.",
    desc_ar:"واحد من أطول وأثقل القطارات في العالم — يصل طوله إلى 3 كيلومترات. ينقل خام الحديد عبر الصحراء من مناجم ازويرات إلى ميناء نواذيبو، في رحلة تمتدّ 700 كيلومتر وتستغرق من 12 إلى 20 ساعة. يمتطي المغامرون عربات الخام المكشوفة مجاناً، ينامون تحت النجوم بينما تتدحرج الصحراء الشاسعة من حولهم.",
    facts:[{label:"Length",value:"Up to 3 km"},{label:"Route",value:"700 km"},{label:"Cargo",value:"Iron Ore"},{label:"Journey",value:"~16 hours"}],
    facts_ar:[{label:"الطول",value:"حتى 3 كم"},{label:"المسار",value:"700 كم"},{label:"الحمولة",value:"خام الحديد"},{label:"الرحلة",value:"~16 ساعة"}],
    links:[{label:"Instagram",icon:"instagram",url:"https://www.instagram.com/explore/tags/mauritaniatrain/",style:"link-instagram"},{label:"YouTube",icon:"youtube",url:"https://www.youtube.com/results?search_query=mauritania+iron+ore+train",style:"link-youtube"},{label:"Wikipedia",icon:"wiki",url:"https://en.wikipedia.org/wiki/Mauritania_Railway",style:"link-wiki"},{label:"Google",icon:"google",url:"https://www.google.com/search?q=mauritania+iron+ore+train",style:"link-google"}]},
  richat: {
    name:"Eye of the Sahara", subtitle:"Richat Structure — Adrar Region", category:"nature", categoryColor:"#6a8c4f",
    name_ar:"عين الصحراء", subtitle_ar:"تكوين الريشات — منطقة آدرار",
    desc:"Known as the Richat Structure, this stunning geological dome spans 50 km in diameter. Once thought to be a meteor crater, scientists now believe it formed by volcanic uplift and erosion over hundreds of millions of years. Visible from space, it is one of Earth's most iconic natural landmarks.",
    desc_ar:"تُعرف بتكوين الريشات، وهي قبة جيولوجية مذهلة يبلغ قطرها 50 كيلومتراً. كان يُعتقد سابقاً أنها فوهة نيزك، لكنّ العلماء يرجّحون الآن أنها تشكّلت عبر الرفع البركاني والتعرية على مدى مئات الملايين من السنين. تُرى من الفضاء، وهي واحدة من أبرز المعالم الطبيعية على وجه الأرض.",
    facts:[{label:"Diameter",value:"50 km"},{label:"Type",value:"Geological dome"},{label:"Age",value:"~100M years"},{label:"Visible",value:"From space"}],
    facts_ar:[{label:"القطر",value:"50 كم"},{label:"النوع",value:"قبة جيولوجية"},{label:"العمر",value:"~100 مليون سنة"},{label:"الرؤية",value:"من الفضاء"}],
    links:[{label:"Instagram",icon:"instagram",url:"https://www.instagram.com/explore/tags/eyeofthesahara/",style:"link-instagram"},{label:"YouTube",icon:"youtube",url:"https://www.youtube.com/results?search_query=richat+structure+mauritania",style:"link-youtube"},{label:"Wikipedia",icon:"wiki",url:"https://en.wikipedia.org/wiki/Richat_Structure",style:"link-wiki"},{label:"NASA",icon:"google",url:"https://earthobservatory.nasa.gov/images/36852/richat-structure-mauritania",style:"link-google"}]},
  arguin: {
    name:"Banc d'Arguin", subtitle:"National Park — Atlantic Coast", category:"nature", categoryColor:"#6a8c4f",
    name_ar:"حوض آرغين", subtitle_ar:"حظيرة وطنية — الساحل الأطلسي",
    desc:"A UNESCO World Heritage site where the Sahara meets the Atlantic. Home to over 2 million migratory birds annually. The Imraguen people have fished these warm shallow waters for centuries using ancient methods — driving fish into nets with sail boats.",
    desc_ar:"موقع تراث عالمي لليونسكو حيث تلتقي الصحراء بالمحيط الأطلسي. موطن لأكثر من مليوني طائر مهاجر سنوياً. يصطاد شعب الإمراغن في هذه المياه الضحلة الدافئة منذ قرون بأساليب عريقة — يدفعون الأسماك نحو الشِّباك بقوارب شراعية.",
    facts:[{label:"Area",value:"12,000 km²"},{label:"Status",value:"UNESCO Heritage"},{label:"Birds",value:"2M+ migratory"},{label:"People",value:"Imraguen tribe"}],
    facts_ar:[{label:"المساحة",value:"12,000 كم²"},{label:"الحالة",value:"تراث اليونسكو"},{label:"الطيور",value:"أكثر من مليونين مهاجر"},{label:"السكان",value:"قبيلة الإمراغن"}],
    links:[{label:"Instagram",icon:"instagram",url:"https://www.instagram.com/explore/tags/bancdarguin/",style:"link-instagram"},{label:"YouTube",icon:"youtube",url:"https://www.youtube.com/results?search_query=banc+d+arguin+mauritania",style:"link-youtube"},{label:"UNESCO",icon:"wiki",url:"https://whc.unesco.org/en/list/506",style:"link-wiki"},{label:"Google Maps",icon:"maps",url:"https://maps.google.com/?q=Banc+d'Arguin",style:"link-maps"}]},
  chinguetti: {
    name:"Chinguetti", subtitle:"The 7th Holy City of Islam", category:"historic", categoryColor:"#c0622a",
    name_ar:"شنقيط", subtitle_ar:"مدينة الإسلام المقدّسة السابعة",
    desc:"Founded in the 13th century as a gathering point for Saharan caravans heading to Mecca. Its ancient libraries hold thousands of medieval manuscripts on astronomy, mathematics and theology. Today it is slowly being reclaimed by encroaching desert dunes — a UNESCO World Heritage site.",
    desc_ar:"تأسّست في القرن الثالث عشر كنقطة تجمّع للقوافل الصحراوية المتجهة إلى مكة. تحتفظ مكتباتها العريقة بآلاف المخطوطات في الفلك والرياضيات وعلوم الدين. تستردّها اليوم رمال الصحراء الزاحفة شيئاً فشيئاً — وهي موقع تراث عالمي لليونسكو.",
    facts:[{label:"Founded",value:"13th century"},{label:"Status",value:"UNESCO Heritage"},{label:"Manuscripts",value:"~1,300 preserved"},{label:"Known as",value:"7th Holy City"}],
    facts_ar:[{label:"التأسيس",value:"القرن 13"},{label:"الحالة",value:"تراث اليونسكو"},{label:"المخطوطات",value:"~1,300 محفوظة"},{label:"تُعرف بـ",value:"المدينة المقدّسة السابعة"}],
    links:[{label:"Instagram",icon:"instagram",url:"https://www.instagram.com/explore/tags/chinguetti/",style:"link-instagram"},{label:"YouTube",icon:"youtube",url:"https://www.youtube.com/results?search_query=chinguetti+mauritania",style:"link-youtube"},{label:"Wikipedia",icon:"wiki",url:"https://en.wikipedia.org/wiki/Chinguetti",style:"link-wiki"},{label:"Google Maps",icon:"maps",url:"https://maps.google.com/?q=Chinguetti+Mauritania",style:"link-maps"}]},
  oualata: {
    name:"Oualata", subtitle:"Ancient Caravan City — UNESCO", category:"historic", categoryColor:"#c0622a",
    name_ar:"ولاتة", subtitle_ar:"مدينة القوافل العريقة — اليونسكو",
    desc:"One of the oldest cities in Mauritania — a major trans-Saharan trade terminus. Its red-painted houses decorated with intricate geometric patterns are unique in the world. Holds precious medieval manuscripts alongside Chinguetti and Tichit as UNESCO World Heritage sites.",
    desc_ar:"واحدة من أقدم مدن موريتانيا — ومحطة رئيسية للتجارة العابرة للصحراء. تتميّز بيوتها المطلية بالأحمر والمزيّنة بزخارف هندسية دقيقة بطابع فريد في العالم. تحفظ مخطوطات قروسطية ثمينة إلى جانب شنقيط وتيشيت كموقع تراث عالمي لليونسكو.",
    facts:[{label:"Founded",value:"11th century"},{label:"Status",value:"UNESCO Heritage"},{label:"Known for",value:"Manuscripts & art"},{label:"Location",value:"Eastern Mauritania"}],
    facts_ar:[{label:"التأسيس",value:"القرن 11"},{label:"الحالة",value:"تراث اليونسكو"},{label:"تشتهر بـ",value:"المخطوطات والفنون"},{label:"الموقع",value:"شرق موريتانيا"}],
    links:[{label:"Instagram",icon:"instagram",url:"https://www.instagram.com/explore/tags/oualata/",style:"link-instagram"},{label:"YouTube",icon:"youtube",url:"https://www.youtube.com/results?search_query=oualata+mauritania",style:"link-youtube"},{label:"Wikipedia",icon:"wiki",url:"https://en.wikipedia.org/wiki/Oualata",style:"link-wiki"},{label:"Google Maps",icon:"maps",url:"https://maps.google.com/?q=Oualata+Mauritania",style:"link-maps"}]},
  atar: {
    name:"Atar", subtitle:"Gateway to the Adrar", category:"city", categoryColor:"#9e8b6e",
    name_ar:"أطار", subtitle_ar:"بوابة آدرار",
    desc:"The main city of the Adrar region and gateway to Mauritania's most stunning landscapes — ancient ksour, palm groves and dramatic desert plateaux. A base for trekking, camel riding and visiting the nearby Terjit oasis. The old market and traditional mud-brick architecture are a living snapshot of Saharan life.",
    desc_ar:"المدينة الرئيسية في منطقة آدرار وبوابة أجمل مناظر موريتانيا الطبيعية — القصور العتيقة وبساتين النخيل والهضاب الصحراوية المهيبة. تُعدّ قاعدة للترحال وركوب الجمال وزيارة واحة ترجيت القريبة. سوقها القديم وعمارتها الطينية التقليدية لقطة حيّة من حياة الصحراء.",
    facts:[{label:"Altitude",value:"~260 m"},{label:"Region",value:"Adrar"},{label:"Known for",value:"Desert gateway"},{label:"Nearby",value:"Terjit oasis"}],
    facts_ar:[{label:"الارتفاع",value:"~260 م"},{label:"المنطقة",value:"آدرار"},{label:"تشتهر بـ",value:"بوابة الصحراء"},{label:"القريب",value:"واحة ترجيت"}],
    links:[{label:"Instagram",icon:"instagram",url:"https://www.instagram.com/explore/tags/atar_mauritania/",style:"link-instagram"},{label:"YouTube",icon:"youtube",url:"https://www.youtube.com/results?search_query=atar+mauritania",style:"link-youtube"},{label:"Wikipedia",icon:"wiki",url:"https://en.wikipedia.org/wiki/Atar,_Mauritania",style:"link-wiki"},{label:"Google Maps",icon:"maps",url:"https://maps.google.com/?q=Atar+Mauritania",style:"link-maps"}]},
  terjit: {
    name:"Terjit Oasis", subtitle:"Hidden Jewel of the Sahara", category:"nature", categoryColor:"#6a8c4f",
    name_ar:"واحة ترجيت", subtitle_ar:"جوهرة الصحراء الخفية",
    desc:"Mauritania's most magical spot — a narrow canyon with palm trees and crystal-clear natural pools fed by mountain springs, hidden in the heart of the Sahara. The contrast between scorching desert above and cool green oasis below is breathtaking. Accessible by 4x4 from Atar, about 45 km away.",
    desc_ar:"أكثر بقاع موريتانيا سحراً — وادٍ ضيّق تكسوه أشجار النخيل وبِرَك مائية صافية تغذّيها ينابيع الجبال، مختبئة في قلب الصحراء. التباين بين الصحراء الحارقة في الأعلى والواحة الخضراء المنعشة في الأسفل يخطف الأنفاس. يُوصَل إليها بسيارات الدفع الرباعي من أطار على بُعد نحو 45 كيلومتراً.",
    facts:[{label:"From Atar",value:"45 km (4x4)"},{label:"Type",value:"Spring oasis"},{label:"Terrain",value:"Canyon palmeraie"},{label:"Best time",value:"Nov – Feb"}],
    facts_ar:[{label:"من أطار",value:"45 كم (دفع رباعي)"},{label:"النوع",value:"واحة ينابيع"},{label:"التضاريس",value:"وادٍ ونخيل"},{label:"أفضل وقت",value:"نوفمبر – فبراير"}],
    links:[{label:"Instagram",icon:"instagram",url:"https://www.instagram.com/explore/tags/terjit/",style:"link-instagram"},{label:"YouTube",icon:"youtube",url:"https://www.youtube.com/results?search_query=terjit+oasis+mauritania",style:"link-youtube"},{label:"Google",icon:"google",url:"https://www.google.com/search?q=terjit+oasis+mauritania",style:"link-google"},{label:"Google Maps",icon:"maps",url:"https://maps.google.com/?q=Terjit+Oasis+Mauritania",style:"link-maps"}]},
  tichit: {
    name:"Tichit", subtitle:"Ancient Neolithic Settlement", category:"historic", categoryColor:"#c0622a",
    name_ar:"تيشيت", subtitle_ar:"مستوطنة من العصر الحجري الحديث",
    desc:"One of the oldest known cities in West Africa, Tichit was a thriving urban centre as far back as 1500 BCE. The region contains remarkable Neolithic stone monuments and ancient granaries. Today a quiet UNESCO World Heritage village — crumbling earth houses and a lone mosque stand against an ocean of golden desert.",
    desc_ar:"واحدة من أقدم المدن المعروفة في غرب أفريقيا، كانت تيشيت مركزاً حضرياً مزدهراً منذ نحو 1500 قبل الميلاد. تضمّ المنطقة آثاراً حجرية مدهشة من العصر الحجري الحديث ومخازن غلال قديمة. هي اليوم قرية هادئة مدرجة في تراث اليونسكو — بيوت طينية متهالكة ومسجد منفرد يقفان في وجه محيط من الرمال الذهبية.",
    facts:[{label:"Founded",value:"~1500 BCE"},{label:"Status",value:"UNESCO Heritage"},{label:"Known for",value:"Neolithic ruins"},{label:"Region",value:"Tagant"}],
    facts_ar:[{label:"التأسيس",value:"~1500 ق.م"},{label:"الحالة",value:"تراث اليونسكو"},{label:"تشتهر بـ",value:"آثار حجرية حديثة"},{label:"المنطقة",value:"تكانت"}],
    links:[{label:"Instagram",icon:"instagram",url:"https://www.instagram.com/explore/tags/tichit/",style:"link-instagram"},{label:"YouTube",icon:"youtube",url:"https://www.youtube.com/results?search_query=tichit+mauritania",style:"link-youtube"},{label:"Wikipedia",icon:"wiki",url:"https://en.wikipedia.org/wiki/Tichit",style:"link-wiki"},{label:"Google Maps",icon:"maps",url:"https://maps.google.com/?q=Tichit+Mauritania",style:"link-maps"}]},
  benamera: {
    name:"Ben Amera", subtitle:"World's Second Largest Monolith", category:"nature", categoryColor:"#9e8b6e",
    name_ar:"بن عميرة", subtitle_ar:"ثاني أكبر صخرة منفردة في العالم",
    desc:"Rising 633 metres from the flat Saharan plain, Ben Amera is the second largest monolith on Earth after Uluru in Australia. This colossal granite inselberg in northwestern Mauritania towers over a surreal lunar landscape near the town of Bir Moghrein. Almost unknown to the outside world, it is one of Africa's most spectacular and least-visited natural wonders.",
    desc_ar:"ترتفع 633 متراً فوق سهل الصحراء المنبسط، وبن عميرة هي ثاني أكبر صخرة منفردة على الأرض بعد أولورو في أستراليا. تتربّع هذه الكتلة الغرانيتية الهائلة شمال غرب موريتانيا فوق منظر يشبه سطح القمر قرب بلدة بير أم اكرين. تكاد تكون مجهولة للعالم الخارجي، وهي من أروع عجائب أفريقيا الطبيعية وأقلّها زيارة.",
    facts:[{label:"Height",value:"633 m"},{label:"Rank",value:"2nd largest monolith"},{label:"Type",value:"Granite inselberg"},{label:"Region",value:"Tiris Zemmour"}],
    facts_ar:[{label:"الارتفاع",value:"633 م"},{label:"الترتيب",value:"ثاني أكبر صخرة منفردة"},{label:"النوع",value:"جبل غرانيتي منعزل"},{label:"المنطقة",value:"تيرس زمور"}],
    links:[{label:"Instagram",icon:"instagram",url:"https://www.instagram.com/explore/tags/benamera/",style:"link-instagram"},{label:"YouTube",icon:"youtube",url:"https://www.youtube.com/results?search_query=ben+amera+mauritania+monolith",style:"link-youtube"},{label:"Google",icon:"google",url:"https://www.google.com/search?q=ben+amera+monolith+mauritania",style:"link-google"},{label:"Google Maps",icon:"maps",url:"https://maps.google.com/?q=Ben+Amera+Mauritania",style:"link-maps"}]},
  nouakchott: {
    name:"Nouakchott", subtitle:"Capital City ★", category:"city", categoryColor:"#9e8b6e",
    name_ar:"نواكشوط", subtitle_ar:"العاصمة ★",
    desc:"One of the youngest capital cities in the world — barely a village when Mauritania gained independence in 1960. Today home to over 1 million people. The famous Fish Market at sunset is a vibrant spectacle where hundreds of painted pirogues land their catch on the beach.",
    desc_ar:"من أحدث عواصم العالم — لم تكن سوى قرية صغيرة حين نالت موريتانيا استقلالها عام 1960. تضمّ اليوم أكثر من مليون نسمة. سوق السمك الشهير عند الغروب مشهد نابض بالحياة حيث تُنزل مئات القوارب الملوّنة صيدها على الشاطئ.",
    facts:[{label:"Population",value:"~1.2 million"},{label:"Founded",value:"1960"},{label:"Elevation",value:"5 m (sea level)"},{label:"Known for",value:"Fish market"}],
    facts_ar:[{label:"السكان",value:"~1.2 مليون"},{label:"التأسيس",value:"1960"},{label:"الارتفاع",value:"5 م (مستوى البحر)"},{label:"تشتهر بـ",value:"سوق السمك"}],
    links:[{label:"Instagram",icon:"instagram",url:"https://www.instagram.com/explore/tags/nouakchott/",style:"link-instagram"},{label:"YouTube",icon:"youtube",url:"https://www.youtube.com/results?search_query=nouakchott+mauritania",style:"link-youtube"},{label:"Wikipedia",icon:"wiki",url:"https://en.wikipedia.org/wiki/Nouakchott",style:"link-wiki"},{label:"Google Maps",icon:"maps",url:"https://maps.google.com/?q=Nouakchott+Mauritania",style:"link-maps"}]},
  nouadhibou: {
    name:"Nouadhibou", subtitle:"Port City & Train Terminus", category:"city", categoryColor:"#4a9db5",
    name_ar:"نواذيبو", subtitle_ar:"مدينة الميناء ومحطة القطار",
    desc:"Mauritania's second city and economic capital — a narrow peninsula jutting between the Atlantic and the Bay of Lévrier. The Iron Ore Train terminates here, offloading millions of tonnes annually at one of Africa's largest iron ore export terminals. The ship graveyard on Cap Blanc beach, with dozens of rusting wrecks stretching along the coast, is one of the world's most surreal and photogenic sights.",
    desc_ar:"ثاني مدن موريتانيا وعاصمتها الاقتصادية — شبه جزيرة ضيّقة تمتدّ بين المحيط الأطلسي وخليج لِفرييه. ينتهي قطار الحديد هنا، مفرّغاً ملايين الأطنان سنوياً في واحد من أكبر موانئ تصدير خام الحديد في أفريقيا. مقبرة السفن على شاطئ الرأس الأبيض، بعشرات الحطام الصدئ الممتدّ على طول الساحل، من أكثر المشاهد سوريالية وجمالاً في العالم.",
    facts:[{label:"Population",value:"~120,000"},{label:"Port",value:"Iron ore terminal"},{label:"Known for",value:"Ship graveyard"},{label:"Coast",value:"Atlantic & Bay"}],
    facts_ar:[{label:"السكان",value:"~120,000"},{label:"الميناء",value:"محطة خام الحديد"},{label:"تشتهر بـ",value:"مقبرة السفن"},{label:"الساحل",value:"الأطلسي والخليج"}],
    links:[{label:"Instagram",icon:"instagram",url:"https://www.instagram.com/explore/tags/nouadhibou/",style:"link-instagram"},{label:"YouTube",icon:"youtube",url:"https://www.youtube.com/results?search_query=nouadhibou+mauritania",style:"link-youtube"},{label:"Wikipedia",icon:"wiki",url:"https://en.wikipedia.org/wiki/Nouadhibou",style:"link-wiki"},{label:"Google Maps",icon:"maps",url:"https://maps.google.com/?q=Nouadhibou+Mauritania",style:"link-maps"}]},
};

export const CAT = {
  nature:    { bg:'rgba(122,160,85,.2)',  text:'#aede86', border:'#7aa055' },
  historic:  { bg:'rgba(192,98,42,.2)',   text:'#f0a060', border:'#c0622a' },
  transport: { bg:'rgba(74,157,181,.2)',  text:'#80c8e8', border:'#4a9db5' },
  city:      { bg:'rgba(179,154,111,.2)', text:'#d8bd8e', border:'#b39a6f' },
};

export const COORDS = {
  richat:     [-11.402, 21.117],
  arguin:     [-16.404, 20.078],
  chinguetti: [-12.371, 20.463],
  oualata:    [-7.030,  17.298],
  atar:       [-13.050, 20.517],
  terjit:     [-13.094, 20.254],
  tichit:     [-9.494,  18.442],
  nouakchott: [-15.978, 18.086],
  benamera:   [-13.667, 21.233],
  nouadhibou: [-17.035, 20.931],
  // Choum railway junction (on the real SNIM rail line)
  train:      [-13.044, 21.299],
};

// Real Mauritania Railway path (Zouérat → Choum → Nouadhibou ore terminal),
// simplified from OpenStreetMap relation 2603116 (SNIM line). Index ~21 is Choum.
// Simplified Mauritania national border ring (closed), reduced from public
// boundary data (georgique/world-geojson) via Douglas-Peucker to ~58 points.
// Used to draw a glowing gold outline that highlights the country.
export const MAURITANIA_BORDER = [[-8.668,27.3129],[-8.67,25.9971],[-12.0041,25.994],[-11.9998,23.4557],[-12.5766,23.2918],[-13.1012,22.9078],[-13.1534,22.7635],[-13.0001,21.33],[-16.9372,21.3314],[-17.047,20.7605],[-16.9299,21.0281],[-16.6937,20.6019],[-16.463,20.5094],[-16.2927,20.2158],[-16.3037,20.0043],[-16.5399,19.6943],[-16.5674,19.3008],[-16.2378,18.9323],[-16.0785,18.2711],[-16.0895,17.5602],[-16.4534,16.6296],[-16.5131,16.0598],[-16.2804,16.5111],[-16.154,16.5493],[-15.6981,16.4743],[-15.4619,16.5862],[-15.1117,16.5796],[-15.0856,16.6796],[-14.3317,16.6415],[-13.9842,16.3465],[-13.8496,16.1065],[-13.7096,16.1843],[-13.6917,16.0999],[-13.4775,16.1395],[-13.2186,15.6091],[-12.9254,15.4431],[-12.8327,15.2822],[-12.8979,15.2497],[-12.5018,15.0204],[-12.4063,14.8479],[-12.0396,14.7244],[-11.8007,14.8944],[-11.8378,15.1729],[-11.7169,15.5397],[-11.5154,15.6392],[-11.4107,15.6359],[-10.9012,15.1106],[-10.7295,15.4391],[-9.4778,15.4211],[-9.4016,15.4365],[-9.4469,15.6072],[-9.3315,15.705],[-9.3329,15.5013],[-5.5042,15.5013],[-5.3394,16.336],[-5.6085,16.5046],[-6.3453,24.9969],[-4.8312,25.001],[-8.668,27.3129]];

export const TRAIN_LINE = [[-12.4851,22.772],[-12.5977,22.7277],[-12.6375,22.7031],[-12.6903,22.6797],[-12.699,22.6719],[-12.7052,22.6348],[-12.6894,22.5587],[-12.6791,22.5377],[-12.6704,22.5],[-12.6688,22.4313],[-12.6827,22.294],[-12.6764,22.2757],[-12.6659,22.2066],[-12.7019,22.0563],[-12.7219,21.9318],[-12.7359,21.9067],[-12.8118,21.723],[-12.8409,21.6865],[-12.9767,21.3969],[-13.0038,21.3731],[-13.0334,21.3087],[-13.044,21.2991],[-13.2391,21.292],[-13.3853,21.2693],[-13.5623,21.2106],[-13.5882,21.197],[-13.6664,21.2002],[-13.8388,21.1861],[-13.8889,21.1936],[-14.1218,21.1947],[-14.1848,21.2065],[-14.2561,21.2113],[-14.2808,21.2206],[-14.4294,21.2433],[-14.5306,21.2679],[-14.748,21.2739],[-14.8533,21.2802],[-14.9256,21.2889],[-15.2563,21.2856],[-15.4615,21.2893],[-15.4968,21.2914],[-15.5188,21.2973],[-15.7581,21.2877],[-15.8037,21.2951],[-15.8281,21.291],[-15.8839,21.296],[-15.998,21.2965],[-16.0771,21.3065],[-16.2356,21.3144],[-16.2993,21.3229],[-16.3348,21.3197],[-16.3917,21.3],[-16.43,21.294],[-16.4818,21.2971],[-16.4992,21.2916],[-16.5401,21.3019],[-16.5931,21.2984],[-16.6176,21.2889],[-16.6385,21.2902],[-16.6502,21.2857],[-16.7759,21.2804],[-16.9066,21.2874],[-16.9211,21.2774],[-16.9314,21.2553],[-16.9499,21.2345],[-16.9904,21.143],[-16.9992,21.0975],[-17.0197,21.0678],[-17.0326,21.0339],[-17.0331,20.9981],[-17.0413,20.9611],[-17.063,20.8969],[-17.0592,20.8709],[-17.0474,20.8522],[-17.0428,20.8334],[-17.0429,20.8182],[-17.051,20.806]];
