import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BatteryCharging, CarFront, Check, Clock3, MapPin, Phone, ShieldCheck, Star, Truck } from "lucide-react";
import { priorityAreas, serviceAreas } from "@/lib/service-areas";

const phone = "+905418238815";
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

export default function Home() {
  const neighborhoods = serviceAreas.filter((a) => a.type === "mahalle");
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#anasayfa" aria-label="Canpolat Oto Kurtarma ana sayfa"><span className="brand-mark">C</span><span>CANPOLAT <b>OTO KURTARMA</b></span></a>
        <nav aria-label="Ana menü"><a href="#hizmetler">Hizmetler</a><a href="#bolgeler">Bölgeler</a><a href="#yorumlar">Yorumlar</a></nav>
        <a className="header-call" href={`tel:${phone}`}><Phone size={18} /> 0541 823 88 15</a>
      </header>

      <section className="hero" id="anasayfa">
        <Image className="hero-image" src="/canpolat-oto-kurtarma-hero.png" alt="Canpolat Oto Kurtarma hidrolik kayar kasa çekici ile araç taşıma" fill priority sizes="100vw" />
        <div className="hero-shade" /><div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span /> ÜMRANİYE · 7/24 AKTİF EKİP</div>
          <h1>YOLDA KALDIYSANIZ,<br /><em>YOL BİZİM İŞİMİZ.</em></h1>
          <p>Otomobil, SUV, motosiklet ve ticari araçlar için hasarsız oto kurtarma. Konumunuzu iletin; en yakın ekibimiz yola çıksın.</p>
          <div className="hero-actions"><a className="primary-cta" href={`tel:${phone}`}><Phone size={22} /> HEMEN ARA <ArrowUpRight size={20} /></a><a className="secondary-cta" href="https://wa.me/905418238815" target="_blank" rel="noreferrer">KONUM GÖNDER</a></div>
          <div className="trust-row"><span><Star size={16} fill="currentColor" /> <b>5.0</b> / 85 Google yorumu</span><span><Clock3 size={16} /> 7 gün 24 saat</span><span><MapPin size={16} /> Ümraniye merkezli</span></div>
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

      <section className="reviews section-pad" id="yorumlar">
        <div className="review-score"><small>GERÇEK DENEYİMLER</small><b>5,0</b><div>{[1,2,3,4,5].map(n=><Star key={n} fill="currentColor" />)}</div><p>85 Google değerlendirmesi</p></div>
        <div className="review-list">{reviews.map(r=><blockquote key={r.name}><div className="quote-mark">“</div><p>{r.text}</p><footer><span>{r.name}<small>{r.route}</small></span><span className="stars">★★★★★</span></footer></blockquote>)}</div>
      </section>

      <section className="final-cta"><div><small>İHTİYACINIZ OLDUĞUNDA</small><h2>TEK TELEFON.<br /><em>NET ÇÖZÜM.</em></h2></div><a href={`tel:${phone}`}><Phone /> 0541 823 88 15 <ArrowUpRight /></a></section>
      <footer className="footer"><div className="brand"><span className="brand-mark">C</span><span>CANPOLAT <b>OTO KURTARMA</b></span></div><address>Alemdağ Caddesi, Tepeüstü<br />Öztürk Sk. No:44, Ümraniye / İstanbul</address><div><a href={`tel:${phone}`}>0541 823 88 15</a><small>7 gün 24 saat açık</small></div></footer>
      <a className="mobile-call" href={`tel:${phone}`}><Phone size={20}/> Hemen ara</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"AutomotiveBusiness",name:"Canpolat Oto Kurtarma",url:"https://canpolatotokurtarma.com",telephone:"+90 541 823 88 15",image:"https://canpolatotokurtarma.com/canpolat-oto-kurtarma-hero.png",priceRange:"$$",openingHours:"Mo-Su 00:00-23:59",aggregateRating:{"@type":"AggregateRating",ratingValue:"5.0",reviewCount:"85"},address:{"@type":"PostalAddress",streetAddress:"Alemdağ Caddesi, Tepeüstü, Öztürk Sk. No:44",addressLocality:"Ümraniye",addressRegion:"İstanbul",postalCode:"34764",addressCountry:"TR"},areaServed:"Istanbul"})}} />
    </main>
  );
}
