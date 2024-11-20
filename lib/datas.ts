import { Step } from "@/lib/types";
import { DropzoneOptions } from "react-dropzone";

//* Navbar links
//? Navbar about links
export const about = [
  {
    href: "/home#about",
    title: "Tentang",
    description: "Tentang website dan produk kami.",
  },
  {
    href: "/home#team",
    title: "Tim",
    description:
      "Orang-orang yang bekerja di situs web ini baik pembuatan situs web itu sendiri maupun ide bisnisnya.",
  },
  {
    href: "/home#social",
    title: "Sosial Media",
    description: "Tautan sosial media bisnis ini.",
  },
];

//? Navbar product links
export const navlinks = [
  {
    href: "/home",
    title: "Home",
  },
  {
    href: "/auth/login",
    title: "Mulai sekarang",
  },
  {
    href: "/how",
    title: "Panduan",
  },
];

//* Homepage
//? Team section
export const team = [
  {
    name: "Reyza Rahmatsyah",
    role: "Chief Executive Officer",
    image: "https://stbm7resourcesprod.blob.core.windows.net/profilepicture/c3b8778b-8052-4d3e-8d35-b3bcff029056.jpg",
  },
  {
    name: "Gregory Nicolla",
    role: "Chief Finance Officer",
    image: "https://stbm7resourcesprod.blob.core.windows.net/profilepicture/fd1a7502-3464-4924-8501-bbd50ac94031.jpg",
  },
  {
    name: "Rasyad Muhammad Ramdhanazuri",
    role: "Chief Operational Officer",
    image: "https://stbm7resourcesprod.blob.core.windows.net/profilepicture/941de166-db7d-485d-9d2c-29e58e8104c6.jpg",
  },
  {
    name: "Richard Gregorius",
    role: "Chief Technology Officer",
    image: "https://stbm7resourcesprod.blob.core.windows.net/profilepicture/91278233-b2d6-49ea-a8c6-b9bfd74ed814.jpg",
  },
  {
    name: "Zaphenath Paneah Joseph Irawan",
    role: "Chief Marketing Officer",
    image: "https://stbm7resourcesprod.blob.core.windows.net/profilepicture/543b9803-6d60-484f-8ed2-a06fd1be74be.jpg",
  },
];

//? Social media section
export const social = [
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: "https://img.icons8.com/color/48/tiktok--v1.png",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "https://img.icons8.com/fluency/48/instagram-new.png",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: "https://img.icons8.com/color/48/youtube-play.png",
  },
];

//* Help page
//? Steps
export const steps: Step[] = [
  {
    title: "Analisis Data",
    steps: [
      {
        title: "Lakukan Login",
        text: "Login dengan akun yang telah terdaftar",
        image: "/analisis_1.png",
      },
      {
        title: "Menuju Halaman Analisis",
        text: "Pilih menu analisis data",
        image: "/analisis_2.png",
      },
      {
        title: "Pastikan file yang diupload",
        text: "Pastikan file yang akan diupload memiliki nama variabel pada baris pertama lalu diikuti dengan datanya",
        image: "/analisis_3.png",
      },
      {
        title: "Masukkan file data anda",
        text: "Upload file data yang ingin dianalisis",
        image: "/analisis_4.png",
      },
      {
        title: "Pilih variabel yang ingin ditinjau",
        text: "Pilih variabel yang ingin ditinjau",
        image: "/analisis_5.png",
      },
      {
        title: "Klik tombol 'Tampilkan'",
        text: "Klik tombol 'Tampilkan' untuk melihat hasil analisis",
        image: "/analisis_6.png",
      },
      {
        title: "Hasil analisis beserta chart akan tampil dibagian bawah",
        text: "Hasil analisis akan tampil dibagian bawah",
      },
    ],
  },
  {
    title: "Laporan Pajak",
    steps: [
      {
        title: "Lakukan Login",
        text: "Login dengan akun yang telah terdaftar",
      },
      {
        title: "Menuju Halaman Laporan Pajak",
        text: "Pilih menu laporan pajak",
      },
      {
        title: "Masukkan informasi yang dibutuhkan",
        text: "Masukkan informasi yang dibutuhkan",
      },
      {
        title: "Klik tombol 'Kirim'",
        text: "Klik tombol 'Kirim' untuk membuat laporan pajak",
      },
      {
        title: "Tunggu hingga laporan pajak muncul",
        text: "Tunggu hingga laporan pajak muncul",
      },
      {
        title: "Download laporan pajak dengan menekan tombol 'Download'",
        text: "Download laporan pajak dengan menekan tombol 'Download'",
      },
    ],
  },
];

//* Dashboard page
//? Tax page
export const BUSINESS_TYPE = ["IDV", "CPR", "CV", "VOF", "PT"];

//? Analysis page
export const analysisDZOConfig: DropzoneOptions = {
  accept: {
    files: [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ],
  },
  maxFiles: 1,
  maxSize: 100 * 1024 * 1024,
  multiple: false,
};