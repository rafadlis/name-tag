import { NameTag } from "@/components/name-tag";
import { data } from "@/components/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8 print:p-0 print:bg-white">
      {/* A4 Container */}
      <div className="mx-auto bg-white shadow-lg print:shadow-none">
        {/* A4 Size Indicator */}
        <div className="border-2 border-blue-300 print:border-0 relative">
          <span className="absolute -top-6 left-0 text-sm text-blue-500 print:hidden">
            A4 Size (210mm × 297mm)
          </span>
          <div
            className="w-[210mm] min-h-[297mm] p-[10mm] grid grid-cols-2 gap-[8mm] auto-rows-max 
              print:p-0 
              print:w-[210mm] 
              print:min-h-[297mm]
              print:m-0
              print:bg-white"
          >
            {data.map((person, index) => (
              <div
                key={index}
                className="flex items-center justify-center print:break-inside-avoid"
              >
                <NameTag
                  name={person.nama}
                  position={person.ket}
                  eventTitle="Bimbingan Teknis Pengawasan dan Pemeriksaan Pajak Daerah"
                  eventDate="18-19 November 2024"
                  eventTime="08:00 - Sampai Selesai"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
