export default function qr() {
return(
    <main className="h-screen flex flex-col items-center bg-[hsl(212,45%,89%)]">
    <div className="w-[300px] h-full flex flex-col">
      <div className="bg-white m-auto rounded-lg">
        <div className="p-4">
          <img className="rounded-md" src="/qr-code-component/image-qr-code.png" alt="qr"/>
          <h1 className="text-center text-xl font-bold" style={{color: 'hsl(218, 44%, 22%)'}}> Improve your Front-end skills by building projects</h1>
          <p className="text-center" style={{color: 'hsl(220, 15%, 55%)'}}>
            Scan the QR code to visit Fronted Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    
    </div>
  </main>
);
}