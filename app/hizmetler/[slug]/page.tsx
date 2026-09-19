import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPage } from "@/components/seo-page";
import { findSeoEntry, problemPages, servicePages } from "@/lib/seo-content";

export function generateStaticParams(){ return servicePages.map(({slug})=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const e=findSeoEntry(servicePages,slug); if(!e)return{}; return{title:`${e.name} | İstanbul 7/24`,description:`${e.short} Canpolat Oto Kurtarma 0541 823 88 15.`,alternates:{canonical:`/hizmetler/${slug}`}}; }
export default async function Page({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const entry=findSeoEntry(servicePages,slug);if(!entry)notFound();return <SeoPage entry={entry} eyebrow="OTO KURTARMA HİZMETİ" related={problemPages.map(x=>({name:x.name,href:`/cozumler/${x.slug}`}))}/>}
