import { s as useCookie } from './server.mjs';
import 'vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@iconify/vue';
import 'vue/server-renderer';

const hello$1 = "hello";
const welcome$1 = "welcome";
const about$1 = "about";
const Speakers$1 = "Speakers";
const TITLE$1 = "The Annual Gulf Insurance Forum";
const min$1 = "min";
const Minivan$1 = "minivan";
const home$1 = "Home";
const AboutUs$1 = "About Us";
const Program$1 = "Program";
const HotelBooking$1 = "Hotel Booking";
const Sponsers$1 = "Sponsers";
const Participants$1 = "Participants";
const Speackers$1 = "Speackers";
const Register$1 = "Register";
const Fees$1 = "Fees";
const MediaCenter$1 = "Media Center";
const ContactUs$1 = "Contact Us";
const News$1 = "News";
const PhotoAlbum$1 = "Photo Album";
const Video$1 = "Video";
const partners$1 = "Partners";
const mediapartners$1 = "Media Partners";
const sponsors$1 = "Sponsors";
const nameEn$1 = "Full Name in English";
const nameAr$1 = "Full Name in Arabic";
const jopTitle$1 = "Jop Title";
const email$1 = "E-Mail Address";
const MobilePhone$1 = " Mobile Phone";
const City$1 = "City";
const fullname$1 = "Full Name Ar";
const Company$1 = "Company";
const JopTitle$1 = "Jop Title";
const Mobile$1 = "Mobile";
const PaymentMethod$1 = "Payment Method";
const login$1 = "register";
const Send$1 = "Send Request";
const fullnameEn$1 = "Full Name En";
const Gender$1 = "Gender";
const typemember$1 = "Member Type";
const Message$1 = "Message";
const country$1 = "Country";
const phone$1 = "phone";
const message$1 = "message";
const Registering$1 = "Registering";
const Join$1 = "Join";
const ReadMore$1 = "Read More";
const program$1 = "program";
const en = {
  hello: hello$1,
  welcome: welcome$1,
  about: about$1,
  "back-to-home": "back to home",
  "page-not-found": "page not found",
  "could-not-find-page-msg": "could not find the page",
  "error-occurred-msg": "an error occurred",
  "server-error": "server error",
  Speakers: Speakers$1,
  "Contact Us": "Contact Us",
  TITLE: TITLE$1,
  min: min$1,
  Minivan: Minivan$1,
  home: home$1,
  AboutUs: AboutUs$1,
  Program: Program$1,
  HotelBooking: HotelBooking$1,
  Sponsers: Sponsers$1,
  Participants: Participants$1,
  Speackers: Speackers$1,
  Register: Register$1,
  Fees: Fees$1,
  MediaCenter: MediaCenter$1,
  ContactUs: ContactUs$1,
  News: News$1,
  PhotoAlbum: PhotoAlbum$1,
  Video: Video$1,
  partners: partners$1,
  mediapartners: mediapartners$1,
  "Number of visitors to the site": "Number of visitors to the site",
  "Number of participants in the forum": "Number of participants in the forum",
  "Countries participating in the Forum": "Countries participating in the Forum",
  "Days to hold the forum": "Days to hold the forum",
  "Hotel Booking": "Hotel Booking",
  "Download Conference brochure": "Download Conference brochure",
  sponsors: sponsors$1,
  nameEn: nameEn$1,
  nameAr: nameAr$1,
  jopTitle: jopTitle$1,
  email: email$1,
  MobilePhone: MobilePhone$1,
  City: City$1,
  fullname: fullname$1,
  Company: Company$1,
  JopTitle: JopTitle$1,
  Mobile: Mobile$1,
  PaymentMethod: PaymentMethod$1,
  login: login$1,
  Send: Send$1,
  fullnameEn: fullnameEn$1,
  Gender: Gender$1,
  typemember: typemember$1,
  "Request send succesfully": "Request send succesfully",
  Message: Message$1,
  country: country$1,
  phone: phone$1,
  message: message$1,
  Registering: Registering$1,
  Join: Join$1,
  ReadMore: ReadMore$1,
  program: program$1,
  "Main Sponsors": "Main Sponsors"
};
const hello = "\u0645\u0631\u062D\u0628\u0627";
const welcome = "\u0645\u0631\u062D\u0628\u064B\u0627";
const about = "\u062D\u0648\u0644";
const Speakers = "\u0627\u0644\u0645\u062A\u062D\u062F\u062B\u0648\u0646";
const TITLE = "\u0645\u0644\u062A\u0642\u0649 \u0627\u0644\u062A\u0623\u0645\u064A\u0646 \u0627\u0644\u062E\u0644\u064A\u062C\u064A";
const min = "\u0627\u0635\u063A\u0631";
const Minivan = "\u0645\u0627";
const home = "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629";
const AboutUs = "\u0645\u0646 \u0646\u062D\u0646";
const Program = "\u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C";
const HotelBooking = "\u0627\u0644\u062D\u062C\u0632 \u0627\u0644\u0641\u0646\u062F\u0642\u064A";
const Sponsers = "\u0627\u0644\u0631\u0639\u0627\u0629";
const Speackers = "\u0627\u0644\u0645\u062A\u062D\u062F\u062B\u0648\u0646";
const Register = "\u062A\u0633\u062C\u064A\u0644";
const Fees = "\u0627\u0644\u0631\u0633\u0648\u0645";
const Participants = "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0648\u0646";
const Video = "\u0627\u0644\u0641\u064A\u062F\u064A\u0648";
const PhotoAlbum = "\u0623\u0644\u0628\u0648\u0645 \u0627\u0644\u0635\u0648\u0631";
const News = "\u0627\u0644\u0623\u062E\u0628\u0627\u0631";
const MediaCenter = "\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A";
const ContactUs = "\u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0646\u0627";
const partners = "\u0634\u0631\u0643\u0627\u0624\u0646\u0627";
const mediapartners = "\u0634\u0631\u0643\u0627\u0624\u0646\u0627 \u0627\u0644\u0627\u0639\u0644\u0627\u0645\u064A\u0648\u0646";
const sponsors = "\u0627\u0644\u0631\u0639\u0627\u0629";
const nameAr = "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629";
const nameEn = "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u0643\u0644\u064A\u0632\u064A\u0629";
const jopTitle = "\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064A\u0641\u064A";
const email = "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";
const MobilePhone = "\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644";
const City = "\u0627\u0644\u0645\u062F\u064A\u0646\u0629";
const fullname = "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0628\u0627\u0644\u0639\u0631\u0628\u064A";
const Company = "\u0627\u0644\u0634\u0631\u0643\u0629";
const JopTitle = "\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0648\u0638\u064A\u0641\u064A";
const Mobile = "\u0645\u0648\u0628\u0627\u064A\u0644";
const PaymentMethod = "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639";
const login = "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644";
const Send = "\u0627\u0631\u0633\u0627\u0644 \u0637\u0644\u0628";
const fullnameEn = "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0628\u0627\u0644\u0627\u0646\u0643\u0644\u064A\u0632\u064A";
const Gender = "\u0627\u0644\u062C\u0646\u0633";
const typemember = "\u0646\u0648\u0639 \u0627\u0644\u0645\u0634\u062A\u0631\u0643";
const Message = "\u0627\u0644\u0631\u0633\u0627\u0644\u0629";
const country = "\u0627\u0644\u062F\u0648\u0644\u0629";
const phone = "\u0627\u0644\u0647\u0627\u062A\u0641";
const message = "\u0627\u0644\u0631\u0633\u0627\u0644\u0629";
const Registering = "\u062A\u0633\u062C\u064A\u0644";
const Join = "\u0625\u0646\u0636\u0645\u0627\u0645";
const ReadMore = "\u0627\u0644\u0645\u0632\u064A\u062F ";
const program = "\u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C";
const ar = {
  hello,
  welcome,
  about,
  "back-to-home": "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
  "page-not-found": "\u0627\u0644\u0635\u0641\u062D\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629",
  "could-not-find-page-msg": "\u062A\u0639\u0630\u0631 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629",
  "error-occurred-msg": "\u062D\u062F\u062B \u062E\u0637\u0623",
  "server-error": "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0644\u062D\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0629!",
  Speakers,
  "Contact Us": "\u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0646\u0627",
  TITLE,
  min,
  Minivan,
  home,
  AboutUs,
  Program,
  HotelBooking,
  Sponsers,
  Speackers,
  Register,
  Fees,
  Participants,
  Video,
  PhotoAlbum,
  News,
  MediaCenter,
  ContactUs,
  partners,
  mediapartners,
  "Number of visitors to the site": "\u0639\u062F\u062F \u0632\u0648\u0627\u0631 \u0627\u0644\u0645\u0648\u0642\u0639",
  "Number of participants in the forum": "\u0639\u062F\u062F \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u0641\u064A \u0627\u0644\u0645\u0644\u062A\u0642\u0649",
  "Number of Speakers": "\u0639\u062F\u062F \u0627\u0644\u0645\u062A\u062D\u062F\u062B\u0648\u0646",
  "Countries participating in the Forum": "\u0627\u0644\u062F\u0648\u0644 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0641\u064A \u0627\u0644\u0645\u0644\u062A\u0642\u0649",
  "Days to hold the forum": "\u0627\u0644\u0623\u064A\u0627\u0645 \u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629 \u0644\u0639\u0642\u062F \u0627\u0644\u0645\u0644\u062A\u0642\u0649",
  "Hotel Booking": "\u0627\u0644\u062D\u062C\u0632 \u0627\u0644\u0641\u0646\u062F\u0642\u064A",
  "Download Conference brochure": "\u062A\u062D\u0645\u064A\u0644 \u0628\u0631\u0648\u0634\u0648\u0631 \u0627\u0644\u0645\u0644\u062A\u0642\u0649",
  sponsors,
  nameAr,
  nameEn,
  jopTitle,
  email,
  MobilePhone,
  City,
  fullname,
  Company,
  JopTitle,
  Mobile,
  PaymentMethod,
  login,
  Send,
  fullnameEn,
  Gender,
  typemember,
  "Request send succesfully": "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D",
  Message,
  country,
  phone,
  message,
  Registering,
  Join,
  ReadMore,
  program,
  "Main Sponsors": "\u0627\u0644\u0631\u0639\u0627\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0648\u0646"
};
const i18n_config = () => {
  var _a;
  return {
    legacy: true,
    // defaultLocale: 'ar',
    locale: (_a = useCookie("lang").value) != null ? _a : "en",
    // locale: localStorage.getItem('lang') ?? 'ar',
    messages: {
      en,
      ar
    }
  };
};

export { i18n_config as default };
//# sourceMappingURL=i18n.config-fIVs13pr.mjs.map
