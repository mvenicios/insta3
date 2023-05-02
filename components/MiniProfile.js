export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="h-16 rounded-full border p-[2px]"
        src="https://s2.glbimg.com/bidN4ro-uEHAEJABM4Jx2bRO31w=/0x0:600x900/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/s/E/X5IaJTRRS3AcI1TFPYSw/2019-11-06-gettyimages-501312488.jpg"
        alt="usuario"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">maurosouza</h2>
        <h3 className="text-sm text-gray-400">Bem vindo ao VidaSnap</h3>
      </div>
      <div className="">
        <button className="font-semibold text-blue-400 text-sm">Sair</button>
      </div>
    </div>
  );
}
