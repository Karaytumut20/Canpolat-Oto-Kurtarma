import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BatteryCharging, CarFront, Check, Clock3, MapPin, Navigation, Phone, PhoneCall, ShieldCheck, Star, Truck } from "lucide-react";
import { priorityAreas, serviceAreas } from "@/lib/service-areas";
import { problemPages, routePages, servicePages } from "@/lib/seo-content";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";

const phone = "+905418238815";
const mapsUrl = "https://maps.app.goo.gl/ptUMNrqeF2E79wwt6?g_st=iwb";
const services = [
  { n:"01", icon:Truck, title:"Oto kurtarma", text:"Arızalı veya kazalı aracınızı hidrolik kayar kasa ile güvenle yüklüyoruz." },
  { n:"02", icon:CarFront, title:"Ahtapot vinç", text:"Tekerleği kilitli ve yürümeyen araçları dört noktadan, kaportaya temas etmeden alıyoruz." },
  { n:"03", icon:BatteryCharging, title:"Yol yardım", text:"Akü takviyesi, lastik arızası ve acil teknik destek için 7/24 yola çıkıyoruz." },
];
const reviews = [
  { name:"Alperen Takıcak", route:"Kuzey Marmara Otoyolu → Sakarya", text:"Şanzıman kilitlendi, ön tekerler dönmüyordu. Gerekli aparatlarla aracı zarar vermeden yükleyip servise ulaştırdılar." },
  { name:"Ataşehir Britishcity", route:"Çakmak Mahallesi", text:"Telefonda ilgili davrandılar, kısa sürede konuma ulaşıp aracı dikkatlice çekiciye yüklediler." },
  { name:"Seyit Bulut", route:"Üsküdar · Kısıklı", text:"Kamyonumuz arıza yapınca kısa sürede geldiler. Süreci baştan sona profesyonelce yönettiler." },
];
const faqs = [
  { q: "Çekici ne kadar sürede gelir?", a: "Varış süresi bulunduğunuz konuma, trafik durumuna ve uygun ekibin mesafesine göre değişir. Konumunuzu ilettiğinizde tahmini süreyi telefonda paylaşıyoruz." },
  { q: "Tekerlekleri kilitli araç nasıl yüklenir?", a: "Tekerlekleri dönmeyen araçlarda lastiklerden kavrayan ahtapot vinç veya kaydırıcı aparatlar kullanıyoruz. Aracı kasaya zorlayarak sürüklemiyoruz." },
  { q: "Gece ve hafta sonu hizmet veriyor musunuz?", a: "Evet. Canpolat Oto Kurtarma haftanın 7 günü, 24 saat oto çekici ve yol yardım hizmeti verir." },
  { q: "Şehirler arası araç taşıyor musunuz?", a: "Evet. İstanbul’dan Türkiye’nin farklı illerine planlı araç transferi yapıyoruz. Teslim adresi ve araç bilgisine göre fiyatlandırma sunuyoruz." },
  { q: "Çekici fiyatı nasıl belirlenir?", a: "Fiyat; alınacak konum, teslim adresi, araç tipi, yürür durumu ve gereken ekipmana göre belirlenir. İşleme başlamadan önce ücreti netleştiriyoruz." },
];

export default function Home() {
  const neighborhoods = serviceAreas.filter((a) => a.type === "mahalle" && a.district === "Ümraniye");
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#anasayfa" aria-label="Canpolat Oto Kurtarma ana sayfa"><BrandLogo /></a>
        <nav aria-label="Ana menü"><a href="#hizmetler">Hizmetler</a><a href="#bolgeler">Bölgeler</a><a href="#yorumlar">Yorumlar</a></nav>
        <a className="header-call" href={`tel:${phone}`}><Phone size={18} /> 0541 823 88 15</a>
        <MobileMenu links={[{href:"/#hizmetler",label:"Hizmetler"},{href:"/#bolgeler",label:"Hizmet bölgeleri"},{href:"/#yorumlar",label:"Yorumlar"},{href:"/#iletisim",label:"İletişim ve konum"}]} />
      </header>

      <section className="hero" id="anasayfa">
        <Image className="hero-image" src="/canpolat-hero-bg.jpg" alt="Canpolat Oto Kurtarma hidrolik kayar kasa çekici ile araç taşıma" fill priority sizes="100vw" />
        <div className="hero-shade" /><div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <h1>
            YOLDA KALDIYSANIZ,<br />
            <em>YOL BİZİM İŞİMİZ.</em>
          </h1>

          <p className="hero-lead">
            Ümraniye ve İstanbul genelinde binek, SUV ve ticari araçlara 7/24 hasarsız oto kurtarma.
            Aracı komisyoncu yok; doğrudan sahadaki çekici ustasıyla görüşün.
          </p>

          <div className="hero-actions">
            <a className="hero-primary-call" href={`tel:${phone}`} aria-label="0541 823 88 15 numarasını hemen ara">
              <div className="hero-call-glow" aria-hidden="true" />
              <PhoneCall size={24} className="hero-call-icon" />
              <span className="hero-call-num">0541 823 88 15</span>
            </a>

            <a
              className="hero-whatsapp-btn"
              href="https://wa.me/905418238815?text=Merhaba,%20yolda%20kald%C4%B1m,%20oto%20%C3%A7ekici%20laz%C4%B1m.%20Konumumu%20payla%C5%9F%C4%B1yorum."
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp ile konum gönder"
            >
              <svg className="hero-wp-svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.201-.351.226-.652.075s-1.274-.469-2.427-1.498c-.897-.799-1.503-1.787-1.679-2.088-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526s-.677-1.633-.928-2.235c-.244-.587-.492-.507-.677-.516l-.577-.01c-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.079 2.91 1.229 3.11c.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.379.197 1.9-.12.581-.353 1.78-1.092 2.031-2.148.25-1.055.25-1.956.175-2.148-.075-.192-.275-.301-.576-.451z" />
                <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.551 4.183 1.6 6.002L.055 24l6.172-1.618a11.96 11.96 0 0 0 5.777 1.488h.005c6.625 0 12.004-5.378 12.004-12.005C24.013 5.378 18.632 0 12.004 0zm0 21.821h-.004a9.94 9.94 0 0 1-5.068-1.393l-.364-.216-3.766.988 1.006-3.673-.237-.377a9.92 9.92 0 0 1-1.523-5.216c0-5.503 4.478-9.98 9.986-9.98 2.666 0 5.172 1.039 7.058 2.925a9.92 9.92 0 0 1 2.922 7.061c0 5.504-4.478 9.981-9.98 9.981z" />
              </svg>
              <span className="hero-wp-title">WHATSAPP KONUM AT</span>
            </a>
          </div>

          <div className="hero-quick-shortcuts" aria-label="Mobil Hızlı Menü">
            <a href="#hizmetler" className="hero-shortcut-pill">
              <Truck size={14} /> Hizmetler
            </a>
            <a href="#bolgeler" className="hero-shortcut-pill">
              <MapPin size={14} /> Bölgeler
            </a>
            <a href="#yorumlar" className="hero-shortcut-pill">
              <Star size={14} /> Yorumlar (5.0)
            </a>
            <a href="#iletisim" className="hero-shortcut-pill">
              <Navigation size={14} /> Yol Tarifi & Konum
            </a>
          </div>

          <div className="trust-row">
            <span><Star size={16} fill="currentColor" /> <b>5.0</b> / 85 Google yorumu</span>
            <span><ShieldCheck size={16} /> Kaskolu & Sabit Fiyat</span>
            <span><MapPin size={16} /> Ümraniye Merkezli</span>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true"><b>24</b><span>/ 07</span></div><a href="#hizmetler" className="scroll-cue" aria-label="Hizmetlere geç"><ArrowDown /></a>
      </section>

      <section className="proof-strip" aria-label="Hizmet özellikleri"><span><Check /> KASKOLU TAŞIMA</span><span><Check /> HİDROLİK KAYAR KASA</span><span><Check /> AHTAPOT VİNÇ</span><span><Check /> ŞEHİRLER ARASI NAKİL</span></section>

      <section className="services section-pad" id="hizmetler">
        <div className="section-heading"><div><small>SAHADA NE YAPIYORUZ?</small><h2>ARACIN DURUMUNA GÖRE<br />DOĞRU EKİPMAN.</h2></div><p>Her araca aynı yöntem uygulanmaz. Durumu telefonda netleştirir, uygun kasa ve aparatla geliriz.</p></div>
        <div className="service-grid">{services.map(({n,icon:Icon,title,text}) => <article className="service-card" key={title}><span className="service-no">{n}</span><Icon /><h3>{title}</h3><p>{text}</p><a href={`tel:${phone}`}>Bu hizmet için ara <ArrowUpRight size={17}/></a></article>)}</div>
      </section>

      <section className="process section-pad">
        <div className="process-copy"><small>3 ADIMDA YARDIM</small><h2>BEKLEMEYİ DEĞİL,<br />YOLU KISALTIYORUZ.</h2><p>Telefon görüşmesinde aracınızın durumunu, bulunduğunuz noktayı ve gideceği adresi netleştiriyoruz. Fiyatı önceden konuşuyoruz.</p><a className="text-link" href={`tel:${phone}`}>0541 823 88 15 <ArrowUpRight /></a></div>
        <ol><li><b>01</b><div><h3>Konumu gönderin</h3><p>WhatsApp’tan canlı konumunuzu ve aracın fotoğrafını iletin.</p></div></li><li><b>02</b><div><h3>Ekip yola çıksın</h3><p>En yakın aracımızı uygun ekipmanla bulunduğunuz noktaya yönlendirelim.</p></div></li><li><b>03</b><div><h3>Güvenle teslim edelim</h3><p>Aracınızı istediğiniz servise veya adrese hasarsız ulaştıralım.</p></div></li></ol>
      </section>

      <section className="areas section-pad" id="bolgeler">
        <div className="section-heading"><div><small>HİZMET AĞI</small><h2>ÜMRANİYE’DEN<br />İSTANBUL’A.</h2></div><p>Şile Yolu, TEM ve Kuzey Marmara bağlantılarına yakın merkezimizden Anadolu Yakası başta olmak üzere tüm İstanbul’a ulaşıyoruz.</p></div>
        <div className="priority-areas">{priorityAreas.map((a,i)=><Link href={`/bolgeler/${a.slug}`} key={a.slug}><span>0{i+1}</span>{a.name} Oto Çekici<ArrowUpRight /></Link>)}</div>
        <div className="neighborhoods"><h3>Ümraniye mahalleleri</h3><div>{neighborhoods.map(a=><Link href={`/bolgeler/${a.slug}`} key={a.slug}>{a.name}</Link>)}</div></div>
        <details className="all-districts"><summary>Tüm İstanbul ilçelerini gör <span>+</span></summary><div>{serviceAreas.filter(a=>a.type==="ilce").map(a=><Link href={`/bolgeler/${a.slug}`} key={a.slug}>{a.name} Oto Çekici</Link>)}</div></details>
      </section>

      <section className="search-intents section-pad">
        <div className="section-heading"><div><small>NE ARIYORSUNUZ?</small><h2>DURUMA GÖRE<br />DOĞRU SAYFA.</h2></div><p>Hizmet türüne, yaşadığınız arızaya veya yolda kaldığınız güzergâha göre doğrudan ilgili bilgiye ulaşın.</p></div>
        <div className="intent-columns"><article><span>01</span><h3>Hizmete göre</h3>{servicePages.slice(0,6).map(x=><Link href={`/hizmetler/${x.slug}`} key={x.slug}>{x.name}<ArrowUpRight/></Link>)}<Link className="intent-all" href="/hizmetler">Tüm hizmetler</Link></article><article><span>02</span><h3>Arızaya göre</h3>{problemPages.slice(0,6).map(x=><Link href={`/cozumler/${x.slug}`} key={x.slug}>{x.name}<ArrowUpRight/></Link>)}<Link className="intent-all" href="/cozumler">Tüm acil durumlar</Link></article><article><span>03</span><h3>Yola göre</h3>{routePages.slice(0,6).map(x=><Link href={`/guzergahlar/${x.slug}`} key={x.slug}>{x.name}<ArrowUpRight/></Link>)}<Link className="intent-all" href="/guzergahlar">Tüm güzergâhlar</Link></article></div>
        <Link className="area-directory-link" href="/hizmet-bolgeleri"><span><b>1.000+ yerel sayfa</b>İstanbul’un tüm ilçe ve mahalleleri</span><ArrowUpRight/></Link>
      </section>

      <section className="reviews section-pad" id="yorumlar">
        <div className="review-score"><small>GERÇEK DENEYİMLER</small><b>5,0</b><div>{[1,2,3,4,5].map(n=><Star key={n} fill="currentColor" />)}</div><p>85 Google değerlendirmesi</p></div>
        <div className="review-list">{reviews.map(r=><blockquote key={r.name}><div className="quote-mark">“</div><p>{r.text}</p><footer><span>{r.name}<small>{r.route}</small></span><span className="stars">★★★★★</span></footer></blockquote>)}</div>
      </section>

      <section className="location-section section-pad" id="iletisim">
        <div className="location-copy"><small>KONUMLA GELİN</small><h2>TEPEÜSTÜ,<br />ÜMRANİYE.</h2><p>Alemdağ Caddesi, Tepeüstü, Öztürk Sokak No:44. Haritayı kullanın veya tek dokunuşla yol tarifini başlatın.</p><a className="map-directions" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin /> YOL TARİFİ AL <ArrowUpRight /></a><div className="map-nap"><span><b>Telefon</b><a href={`tel:${phone}`}>0541 823 88 15</a></span><span><b>Çalışma saatleri</b>7 gün 24 saat açık</span></div></div>
        <div className="map-frame"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.4951867261657!2d29.1347147!3d41.0144211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9cecced9033%3A0x89c0b802aa950ac5!2sCanpolat%20Oto%20Kurtarma!5e0!3m2!1str!2sus!4v1789825146876!5m2!1str!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="eager" referrerPolicy="strict-origin-when-cross-origin" title="Canpolat Oto Kurtarma konumu" /><a href={mapsUrl} target="_blank" rel="noreferrer">Google Haritalar’da aç <ArrowUpRight /></a></div>
      </section>

      <section className="faq-section section-pad"><div className="section-heading"><div><small>SIK SORULANLAR</small><h2>YOLA ÇIKMADAN<br />NETLEŞTİRELİM.</h2></div><p>Çekici çağırmadan önce en çok merak edilen konular.</p></div><div className="faq-list">{faqs.map((faq,i)=><details key={faq.q}><summary><span>0{i+1}</span>{faq.q}<b>+</b></summary><p>{faq.a}</p></details>)}</div></section>

      <section className="final-cta"><div><small>İHTİYACINIZ OLDUĞUNDA</small><h2>TEK TELEFON.<br /><em>NET ÇÖZÜM.</em></h2></div><a href={`tel:${phone}`}><Phone /> 0541 823 88 15 <ArrowUpRight /></a></section>
      <footer className="footer"><div className="brand"><BrandLogo footer /></div><address><a href={mapsUrl} target="_blank" rel="noreferrer">Alemdağ Caddesi, Tepeüstü<br />Öztürk Sk. No:44, Ümraniye / İstanbul</a></address><div><a href={`tel:${phone}`}>0541 823 88 15</a><small>7 gün 24 saat açık</small></div></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"AutomotiveBusiness","@id":"https://canpolatotokurtarma.com/#business",name:"Canpolat Oto Kurtarma",url:"https://canpolatotokurtarma.com",telephone:"+90 541 823 88 15",logo:"https://canpolatotokurtarma.com/canpolat-logo-transparent.png",image:"https://canpolatotokurtarma.com/canpolat-oto-kurtarma-hero.png",priceRange:"$$",openingHours:"Mo-Su 00:00-23:59",openingHoursSpecification:{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],opens:"00:00",closes:"23:59"},geo:{"@type":"GeoCoordinates",latitude:41.0144211,longitude:29.1347147},hasMap:mapsUrl,aggregateRating:{"@type":"AggregateRating",ratingValue:"5.0",reviewCount:"85"},address:{"@type":"PostalAddress",streetAddress:"Alemdağ Caddesi, Tepeüstü, Öztürk Sk. No:44",addressLocality:"Ümraniye",addressRegion:"İstanbul",postalCode:"34764",addressCountry:"TR"},areaServed:{"@type":"City",name:"İstanbul"},contactPoint:{"@type":"ContactPoint",telephone:"+90 541 823 88 15",contactType:"customer service",availableLanguage:"Turkish"}})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(faq=>({"@type":"Question",name:faq.q,acceptedAnswer:{"@type":"Answer",text:faq.a}}))})}} />
    </main>
  );
}
