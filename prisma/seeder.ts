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
            brandDescription: 'Az Intel a "Core i" sorozattal határozza meg a piaci szinteket (i3, i5, i7, i9). A proceszor név után a generáció száma jön, ami minnél nagyon annál erőssebb.  A "K" a tuningot, az "F" a grafika hiányát jelzi.',
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
            brandDescription: 'Az RTX széria megalkotoja (20XX, 30XX, 40XX és a 50XX) és a DLSS technológia úttörője. A "Ti" és "Super" jelzések az erősebb változatokat takarják.',
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

  const FullPCData = [
    {
      buildName: 'Kezdő Office vagy otthoni összeállítás',
      buildDescription: 'CPU: Intel Core i3-i5 8-12. generációs,\nGPU: belső integrált grafika,\nRAM: 8-16 GB DDR4,\nStorage: 256-512 GB NVMe SSD,\nPSU: 450-550W 80 Plus Bronze,\nCase: kompakt, jó légáramlású ház.',
      buildVisible: true,
    },
    {
      buildName: 'Középkategoriás Office vagy otthoni összeállítás',
      buildDescription: 'CPU: Intel Core i7-i8 8-12. generációs,\nGPU: belső integrált grafika,\nRAM: 8-16 GB DDR4,\nStorage: 512-1024 GB NVMe SSD,\nPSU: 450-550W 80 Plus Bronze,\nCase: kompakt, jó légáramlású ház.',
      buildVisible: true,
    },
    {
      buildName: 'Prémium Office vagy otthoni összeállítás',
      buildDescription: 'CPU: Intel Core i7-i9 10-14. generációs,\nGPU: NVIDIA RTX A2000,\nRAM: 8-16 GB DDR4,\nStorage: 1024-2048 GB NVMe SSD,\nPSU: 450-550W 80 Plus Bronze,\nCase: kompakt, jó légáramlású ház.',
      buildVisible: true,
    },
    {
      buildName: 'Belépő szintű Gamer összeállítás',
      buildDescription: 'CPU: Intel Core i3-i5 12-14. generációs,\nGPU: NVIDIA RTX 3050 - 4060 vagy AMD RX 6600,\nRAM: 16 GB DDR4/DDR5,\nStorage: 512-1024 GB NVMe SSD,\nPSU: 550-600W 80 Plus Bronze/Gold,\nCase: ATX ház, jó légáramlással (mesh front).',
      buildVisible: true,
    },
    {
      buildName: 'Középkategóriás Gamer összeállítás',
      buildDescription: 'CPU: Intel Core i5-i7 13-14. generációs,\nGPU: NVIDIA RTX 4060 Ti - 4070 Super,\nRAM: 16-32 GB DDR5,\nStorage: 1024-2048 GB NVMe Gen4 SSD,\nPSU: 650-750W 80 Plus Gold,\nCase: Prémium ATX ház, optimalizált hűtéssel.',
      buildVisible: true,
    },
    {
      buildName: 'High-End / Prémium Gamer összeállítás',
      buildDescription: 'CPU: Intel Core i7-i9 14. generációs,\nGPU: NVIDIA RTX 4080 Super - 4090,\nRAM: 32-64 GB DDR5 (6000MHz+),\nStorage: 2048-4096 GB NVMe Gen4/Gen5 SSD,\nPSU: 850-1000W+ 80 Plus Gold/Platinum,\nCase: High-end toronyház, 360mm-es folyadékhűtéssel.',
      buildVisible: true,
    },
  ]

  for (const item of fullData) {
    await prisma.parts.create({
      data: item,
    });
  }

  
  for (const item of FullPCData) {
    await prisma.builds.create(
      {
        data: item,
      }
    )
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
