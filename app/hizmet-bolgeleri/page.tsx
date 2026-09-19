import type { Metadata } from "next";
import { SeoDirectory } from "@/components/seo-directory";
import { serviceAreas } from "@/lib/service-areas";
export const metadata:Metadata={title:"İstanbul Oto Çekici Hizmet Bölgeleri",description:"İstanbul'un 39 ilçesi ve mahallelerinde 7/24 oto çekici ve yol yardım hizmet noktaları."};
export default function Page(){const districts=serviceAreas.filter(x=>x.type==="ilce");return <SeoDirectory eyebrow="1.000+ YEREL SAYFA" title="İSTANBUL HİZMET BÖLGELERİ" intro="İlçenizi seçerek mahalle bazındaki oto çekici ve yol yardım sayfalarına ulaşın." groups={districts.map(d=>({title:`${d.name} mahalleleri`,links:[{name:`${d.name} Oto Çekici`,href:`/bolgeler/${d.slug}`,detail:"İlçe hizmet sayfası"},...serviceAreas.filter(x=>x.type==="mahalle"&&x.district===d.name).map(x=>({name:`${x.name} Oto Çekici`,href:`/bolgeler/${x.slug}`}))]}))}/>}
