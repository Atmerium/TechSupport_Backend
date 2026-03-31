import {faker} from "@faker-js/faker"
import dotenv from 'dotenv'
import { PrismaClient }  from "../generated/prisma/client";
import { create } from "node:domain";

dotenv.config();

const prisma = new PrismaClient()

console.log("seeding...")

const main = async () => {
  const fullData = [
    {
      partName: 'Processzor (CPU)',
      partDescription: 'A számítógép központi feldolgozó egysége, az "agy", amely az összes számítási feladatot és utasítást vezérli.',
      brands: {
        create: [
          {
            brandName: 'Intel',
            brandDescription: 'Az Intel a "Core i" sorozattal határozza meg a piaci szinteket (i3, i5, i7, i9). A "K" a tuningot, az "F" a grafika hiányát jelzi.',
          },
          {
            brandName: 'AMD',
            brandDescription: 'A Ryzen széria gyártója. Az "X3D" modellek extra gyorsítótárral a legjobb gamer chipek, a "G" pedig az erős integrált grafikát jelöli.',
          },
        ],
      },
    },
    {
      partName: 'Alaplap (Motherboard)',
      partDescription: 'A rendszer fő áramköre, amely minden alkatrészt összeköt és árammal lát el.',
      brands: {
        create: [
          {
            brandName: 'ASUS',
            brandDescription: 'ROG (prémium), TUF Gaming (strapabíró) és Prime (irodai/általános) szériák gyártója.',
          },
          {
            brandName: 'MSI',
            brandDescription: 'A MEG (csúcs), MPG (gamer dizájn) és MAG/Tomahawk (ár-érték bajnok) alaplapok készítője.',
          },
          {
            brandName: 'Gigabyte',
            brandDescription: 'Az Aorus gamer vonalról és a tartós hűtőbordákkal szerelt alaplapjairól ismert.',
          },
        ],
      },
    },
    {
      partName: 'Videokártya (GPU)',
      partDescription: 'A grafikai számításokért és a képi megjelenítésért felelős egység.',
      brands: {
        create: [
          {
            brandName: 'NVIDIA',
            brandDescription: 'Az RTX széria és a DLSS technológia úttörője. A "Ti" és "Super" jelzések az erősebb változatokat takarják.',
          },
          {
            brandName: 'AMD Radeon',
            brandDescription: 'Kiváló nyers erejű kártyák (RX széria), amelyek gyakran több VRAM-ot kínálnak kedvezőbb áron.',
          },
        ],
      },
    },
    {
      partName: 'Memória (RAM)',
      partDescription: 'Ideiglenes tároló a futó programok számára. A sebesség (MHz) és kapacitás (GB) határozza meg a rendszer válaszidejét.',
      brands: {
        create: [
          {
            brandName: 'Kingston',
            brandDescription: 'A Fury Beast a megbízható standard, a Fury Renegade a magas sebességű prémium vonal.',
          },
          {
            brandName: 'Corsair',
            brandDescription: 'A Vengeance a legnépszerűbb középkategória, a Dominator Platinum pedig a luxus kivitel.',
          },
          {
            brandName: 'G.Skill',
            brandDescription: 'A Trident Z sorozat a tuningosok kedvence, extrém sebességű és alacsony késleltetésű modulokkal.',
          },
        ],
      },
    },
    {
      partName: 'Háttértár (SSD/HDD)',
      partDescription: 'Az adatok tartós tárolója. Az NVMe SSD-k a modern rendszerek alapkövei a sebességük miatt.',
      brands: {
        create: [
          {
            brandName: 'Samsung',
            brandDescription: 'Piacvezető NVMe SSD-k (980/990 Pro). Saját vezérlőik és chipjeik kiemelkedő stabilitást biztosítanak.',
          },
          {
            brandName: 'Western Digital',
            brandDescription: 'Színkódos megoldások: Blue (általános), Black (gamer/gyors), Red (NAS szerver).',
          },
        ],
      },
    },
    {
      partName: 'Tápegység (PSU)',
      partDescription: 'A gép stabil áramellátásáért felel. A hatékonyságot a 80 Plus minősítések jelzik.',
      brands: {
        create: [
          {
            brandName: 'Seasonic',
            brandDescription: 'A tápok egyik legelismertebb gyártója, legendás megbízhatósággal és hosszú garanciával.',
          },
          {
            brandName: 'be quiet!',
            brandDescription: 'Német precizitás, ahol a halk működés (Silent Wings ventilátorok) és a stabilitás az elsődleges.',
          },
        ],
      },
    },
    {
      partName: 'Számítógépház',
      partDescription: 'Az alkatrészek vázszerkezete, amely a védelmet és a megfelelő légáramlást (Airflow) biztosítja.',
      brands: {
        create: [
          {
            brandName: 'Fractal Design',
            brandDescription: 'Minimalista skandináv dizájn (North, Meshify, Define szériák), kiváló anyaghasználattal.',
          },
          {
            brandName: 'NZXT',
            brandDescription: 'Letisztult kocka forma (H-széria), integrált vezérlőkkel és látványos üvegfelületekkel.',
          },
        ],
      },
    },
    {
      partName: 'Hűtőrendszer',
      partDescription: 'A processzor és a ház hűtéséért felelős egységek (Léghűtés vagy Vízhűtés).',
      brands: {
        create: [
          {
            brandName: 'Noctua',
            brandDescription: 'Osztrák prémium hűtők. A világ leghalkabb és legtartósabb ventilátorait készítik.',
          },
          {
            brandName: 'Arctic',
            brandDescription: 'A legjobb ár-érték arányú hűtések (Liquid Freezer) és hővezető paszták (MX-széria) gyártója.',
          },
        ],
      },
    },
  ];

  for (const item of fullData) {
    await prisma.parts.create({
      data: item,
    });
  }
  

  console.log('Kategóriák és márkák sikeresen létrehozva és összekapcsolva!');
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
