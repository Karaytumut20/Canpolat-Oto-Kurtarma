import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Clock3, MapPin, Phone, ShieldCheck, Star, Truck } from "lucide-react";
import { findArea, serviceAreas } from "@/lib/service-areas";

const phone = "+905418238815";

export function generateStaticParams() { return serviceAreas.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params;
  const area = findArea(slug);
  if (!area) return {};
  const place = area.type === "mahalle" ? `${area.name}, Ümraniye` : `${area.name}, İstanbul`;
  return {
    title: `${area.name} Oto Çekici | 7/24 Oto Kurtarma`,
    description: `${place} bölgesinde 7/24 oto çekici, ahtapot vinç ve yol yardım hizmeti. Canpolat Oto Kurtarma: 0541 823 88 15.`,
    alternates: { canonical: `/bolgeler/${area.slug}` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const area = findArea(slug);
  if (!area) notFound();
  const place = area.type === "mahalle" ? `${area.name} Mahallesi, Ümraniye` : `${area.name}, İstanbul`;
  const nearby = serviceAreas.filter(a => a.type === area.type && a.slug !== area.slug).slice(area.type === "mahalle" ? 0 : 34, area.type === "mahalle" ? 8 : 42);
  return <main className="area-page">
    <header className="site-header area-header"><Link className="brand" href="/" aria-label="Ana sayfa"><span className="brand-mark">C</span><span>CANPOLAT <b>OTO KURTARMA</b></span></Link><nav><Link href="/#hizmetler">Hizmetler</Link><Link href="/#bolgeler">Bölgeler</Link><Link href="/#yorumlar">Yorumlar</Link></nav><a className="header-call" href={`tel:${phone}`}><Phone size={18}/>0541 823 88 15</a></header>
    <section className="area-hero">
      <div className="area-grid" aria-hidden="true"/><div className="area-crumb"><Link href="/"><ArrowLeft size={16}/> Ana sayfa</Link><span>/</span><span>Hizmet bölgeleri</span></div>
      <div className="area-hero-copy"><div className="eyebrow"><span/> 7/24 AKTİF ÇEKİCİ</div><h1>{area.name}<br/><em>OTO ÇEKİCİ</em></h1><p>{place} bölgesinde aracınız arızalandıysa konumunuzu gönderin. Hidrolik kayar kasa ve ahtapot vinç donanımlı ekibimiz güvenli taşıma için yola çıksın.</p><div className="hero-actions"><a className="primary-cta" href={`tel:${phone}`}><Phone/> HEMEN ARA <ArrowUpRight/></a><a className="secondary-cta" href="https://wa.me/905418238815" target="_blank" rel="noreferrer">KONUM GÖNDER</a></div></div>
      <aside className="area-status"><span className="live-dot"/> ŞU AN AÇIK<div><Clock3/><b>7/24</b><small>Kesintisiz hizmet</small></div><div><Star/><b>5,0</b><small>85 Google yorumu</small></div></aside>
    </section>
    <section className="area-content section-pad"><article><small>{area.name.toLocaleUpperCase("tr-TR")} YOL YARDIM</small><h2>ARACINIZA UYGUN YÖNTEM,<br/>GÜVENLİ TRANSFER.</h2><p>{place} ve yakınında binek araç, SUV, motosiklet, minibüs ve hafif ticari araçlar için oto kurtarma hizmeti veriyoruz. Tekerlek kilitlenmesi, aks kırılması veya otomatik vites arızası gibi aracın yürüyemediği durumlarda uygun aparatları kullanıyoruz.</p><p>Aracın durumu, alınacağı nokta ve teslim adresini telefonda netleştirerek doğru ekipmanla yola çıkıyoruz. Ücreti işlemden önce paylaşıyor, aracınızı tercih ettiğiniz servis ya da adrese taşıyoruz.</p></article><aside><h3>HİZMETLER</h3><ul><li><Truck/>Hidrolik kayar kasa çekici</li><li><ShieldCheck/>Ahtapot vinç ile hasarsız yükleme</li><li><MapPin/>Şehir içi ve şehirler arası nakil</li><li><Check/>Akü takviyesi ve yol yardım</li></ul></aside></section>
    <section className="area-callout"><div><small>CANPOLAT OTO KURTARMA</small><h2>{area.name}&apos;da yolda mı kaldınız?</h2><p>Konumunuzu paylaşın, uygun aracı yönlendirelim.</p></div><a href={`tel:${phone}`}><Phone/>0541 823 88 15</a></section>
    <section className="nearby section-pad"><small>DİĞER HİZMET NOKTALARI</small><h2>YAKIN BÖLGELER</h2><div>{nearby.map(a=><Link key={a.slug} href={`/bolgeler/${a.slug}`}>{a.name} Oto Çekici <ArrowUpRight/></Link>)}</div></section>
    <footer className="footer"><div className="brand"><span className="brand-mark">C</span><span>CANPOLAT <b>OTO KURTARMA</b></span></div><address>Alemdağ Caddesi, Tepeüstü<br/>Öztürk Sk. No:44, Ümraniye / İstanbul</address><div><a href={`tel:${phone}`}>0541 823 88 15</a><small>7 gün 24 saat açık</small></div></footer><a className="mobile-call" href={`tel:${phone}`}><Phone size={20}/> Hemen ara</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Service",name:`${area.name} Oto Çekici`,serviceType:"Oto Kurtarma ve Yol Yardım",provider:{"@type":"AutomotiveBusiness",name:"Canpolat Oto Kurtarma",telephone:"+90 541 823 88 15"},areaServed:{"@type":area.type==="mahalle"?"Place":"City",name:place}})}}/>
  </main>;
}
