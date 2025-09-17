import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAppSelector } from "@/hooks/useAppSelector";
import type { RootState } from "@/store/ProStore";

const faqs = {
  en: [
    {
      question: "What is Netflix?",
      answer: (
        <>
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices. <br /> <br /> You can watch
          as much as you want, whenever you want, without a single ad – all for
          one low monthly price. There's always something new to discover, and
          new TV shows and movies are added every week!
        </>
      ),
    },
    {
      question: "How much does Netflix cost?",
      answer: (
        <>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
          streaming device, all for one fixed monthly fee. Plans range from ₹149
          to ₹649 a month. No extra costs, no contracts.
        </>
      ),
    },
    {
      question: "Where can I watch?",
      answer: (
        <>
          Watch anywhere, anytime. Sign in with your Netflix account to watch
          instantly on the web at netflix.com from your personal computer or on
          any internet-connected device that offers the Netflix app, including
          smart TVs, smartphones, tablets, streaming media players and game
          consoles. <br /> <br /> You can also download your favourite shows
          with the iOS or Android app. Use downloads to watch while you're on
          the go and without an internet connection. Take Netflix with you
          anywhere.
        </>
      ),
    },
    {
      question: "How do I cancel?",
      answer: (
        <>
          Netflix is flexible. There are no annoying contracts and no
          commitments. You can easily cancel your account online in two clicks.
          There are no cancellation fees – start or stop your account anytime.
        </>
      ),
    },
    {
      question: "What can I watch on Netflix?",
      answer: (
        <>
          Netflix has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning Netflix originals, and more. Watch as much
          as you want, anytime you want.
        </>
      ),
    },
    {
      question: "Is Netflix good for kids?",
      answer: (
        <>
          The Netflix Kids experience is included in your membership to give
          parents control while kids enjoy family-friendly TV shows and films in
          their own space. <br /> <br /> Kids profiles come with PIN-protected
          parental controls that let you restrict the maturity rating of content
          kids can watch and block specific titles you don’t want kids to see.
        </>
      ),
    },
  ],
  hi: [
    {
      question: "Netflix क्या है?",
      answer: (
        <>
          Netflix एक स्ट्रीमिंग सेवा है जो विभिन्न प्रकार के पुरस्कार विजेता
          टीवी शो, फिल्में, एनीमे, डॉक्यूमेंट्री और बहुत कुछ प्रदान करती है –
          हजारों इंटरनेट-संचालित उपकरणों पर। <br /> <br /> आप जितना चाहें उतना
          देख सकते हैं, जब चाहें, बिना किसी विज्ञापन के – यह सब एक कम मासिक
          मूल्य में। हमेशा कुछ नया खोजने के लिए होता है, और नए टीवी शो और
          फिल्में हर सप्ताह जोड़ी जाती हैं!
        </>
      ),
    },
    {
      question: "Netflix की कीमत कितनी है?",
      answer: (
        <>
          अपने स्मार्टफोन, टैबलेट, स्मार्ट टीवी, लैपटॉप या स्ट्रीमिंग डिवाइस पर
          Netflix देखें, सब एक निश्चित मासिक शुल्क में। योजनाएँ ₹149 से ₹649
          प्रति माह तक हैं। कोई अतिरिक्त लागत नहीं, कोई अनुबंध नहीं。
        </>
      ),
    },
    {
      question: "मैं कहाँ देख सकता हूँ?",
      answer: (
        <>
          कहीं भी, कभी भी देखें। अपनी Netflix खाता में साइन इन करें और तुरंत वेब
          पर netflix.com से अपने व्यक्तिगत कंप्यूटर या किसी भी इंटरनेट-संचालित
          डिवाइस पर देखें जिसमें Netflix ऐप उपलब्ध है, जैसे स्मार्ट टीवी,
          स्मार्टफोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल। <br />{" "}
          <br />
          आप अपने पसंदीदा शो iOS या Android ऐप के साथ डाउनलोड भी कर सकते हैं।
          डाउनलोड का उपयोग करते हुए चलते-फिरते और बिना इंटरनेट कनेक्शन के भी
          देखें। Netflix को कहीं भी ले जाएँ。
        </>
      ),
    },
    {
      question: "मैं कैसे रद्द कर सकता हूँ?",
      answer: (
        <>
          Netflix लचीला है। कोई परेशान करने वाले अनुबंध और प्रतिबद्धताएँ नहीं
          हैं। आप आसानी से अपने खाते को ऑनलाइन दो क्लिक में रद्द कर सकते हैं।
          कोई रद्द करने का शुल्क नहीं है – कभी भी अपना खाता शुरू या बंद करें。
        </>
      ),
    },
    {
      question: "Netflix पर मैं क्या देख सकता हूँ?",
      answer: (
        <>
          Netflix में फीचर फिल्में, डॉक्यूमेंट्री, टीवी शो, एनीमे, पुरस्कार
          विजेता Netflix Originals और बहुत कुछ शामिल हैं। जितना चाहें उतना
          देखें, जब चाहें。
        </>
      ),
    },
    {
      question: "क्या Netflix बच्चों के लिए अच्छा है?",
      answer: (
        <>
          Netflix Kids अनुभव आपके सदस्यता में शामिल है ताकि माता-पिता को
          नियंत्रण मिल सके जबकि बच्चे परिवार-हितैषी टीवी शो और फिल्मों का आनंद
          अपने स्पेस में लें। <br /> <br />
          बच्चों की प्रोफाइल में PIN-प्रोटेक्टेड पैरेंटल कंट्रोल शामिल हैं, जो
          आपको कंटेंट की उम्र सीमा तय करने और विशिष्ट शीर्षक ब्लॉक करने की
          अनुमति देते हैं。
        </>
      ),
    },
  ],
};

export default function FAQSection() {
  type LangKey = keyof typeof faqs;
  const lang = useAppSelector(
    (state: RootState) => state.language.code
  ) as LangKey;
  const faqs2 = faqs[lang] || faqs.en;
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-8">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs2.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border-none rounded-sm overflow-hidden"
            >
              <AccordionTrigger className="bg-neutral-800 w-full px-6 py-8 text-2xl md:text-3xl font-light hover:no-underline justify-between hover:bg-neutral-700">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="bg-neutral-800 px-6 py-6 mt-0.5 text-gray-300 font-light text-xl md:text-2xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
