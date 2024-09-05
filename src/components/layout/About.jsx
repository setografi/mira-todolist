import React from "react";

function About() {
  return (
    <section className="w-full p-[30px] rounded-lg shadow-md">
      <h2 className="text-3xl font-futura-bold text-gray-800 mb-4">
        Apa itu MIRA?
      </h2>
      <p className="font-roboto text-gray-700 mb-4">
        MIRA (Motivational Interactive Reward Assistant) adalah aplikasi web
        yang dirancang untuk membantu Anda mengatur waktu dan meningkatkan
        produktivitas dengan cara yang menyenangkan. Aplikasi ini menggabungkan
        elemen-elemen gamifikasi seperti XP, level up, dan pencapaian untuk
        membuat manajemen tugas menjadi lebih menarik dan memotivasi.
      </p>
      <h3 className="text-2xl font-futura-medium text-gray-800 mb-2">
        Untuk Apa Aplikasi Ini?
      </h3>
      <p className="font-roboto text-gray-700 mb-4">
        Aplikasi ini cocok untuk siapa saja yang ingin meningkatkan
        produktivitas sehari-hari dengan cara yang lebih interaktif. Dengan
        MIRA, Anda bisa melacak durasi tugas yang Anda selesaikan, mengumpulkan
        XP, dan naik level, sehingga setiap tugas yang Anda lakukan terasa
        seperti pencapaian dalam sebuah permainan.
      </p>
      <h3 className="text-2xl font-futura-medium text-gray-800 mb-2">
        Cara Menggunakan MIRA
      </h3>
      <ul className="list-disc list-inside font-roboto text-gray-700">
        <li className="mb-2">
          <strong>Membuat Tugas:</strong> Buat daftar tugas harian Anda dengan
          memilih kategori yang sesuai.
        </li>
        <li className="mb-2">
          <strong>Melacak Progres:</strong> Saat Anda mulai mengerjakan tugas,
          MIRA akan mulai mencatat waktu dan mengumpulkan XP berdasarkan durasi
          aktivitas Anda.
        </li>
        <li className="mb-2">
          <strong>Level Up dan Pencapaian:</strong> Kumpulkan XP untuk naik
          level dan buka pencapaian baru yang akan memotivasi Anda untuk terus
          produktif.
        </li>
        <li>
          <strong>Sesi dan Penyimpanan Progres:</strong> Progres Anda akan
          disimpan secara lokal di browser, memungkinkan Anda melanjutkan tanpa
          kehilangan data meskipun halaman di-refresh atau browser ditutup
          sementara.
        </li>
      </ul>
    </section>
  );
}

export default About;
