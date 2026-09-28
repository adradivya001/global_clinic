const fs = require('fs');

const bgHtml = `
      {/* Abstract Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] bg-[#168DD0]/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute top-[10%] right-[-10%] w-[35%] h-[60%] bg-[#086B9F]/[0.02] rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-white rounded-full blur-[150px] opacity-80"></div>
        <div className="absolute bottom-[-10%] left-[20%] right-[20%] h-[40%] bg-[#086B9F]/[0.02] rounded-full blur-[120px]"></div>
        
        {/* Subtle Abstract Wave Effect */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply flex items-center justify-center">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full scale-[2] origin-center animate-[spin_120s_linear_infinite]">
            <path d="M0,50 Q25,25 50,50 T100,50" stroke="#086B9F" strokeWidth="0.5" fill="none" />
            <path d="M0,60 Q25,35 50,60 T100,60" stroke="#086B9F" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </div>`;

function replaceBg(file, pad) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace <section ...> with our new standard styling
  const secRegex = /<section[^>]*>/;
  content = content.replace(secRegex, (match) => {
    const idMatch = match.match(/id="[^"]*"/);
    const idStr = idMatch ? idMatch[0] + ' ' : '';
    return `<section ${idStr}className="${pad} bg-[#F7FAFD] relative overflow-hidden font-sans">`;
  });
  
  if (file.includes('PillarCards')) {
    content = content.replace(/\{\/\* Subtle Ambient Background Glows \*\/\}[\s\S]*?(?=<div className="max-w-\[1536px\])/, bgHtml + '\n\n      ');
  } else {
    content = content.replace(/(<section[^>]*>)/, '$1\n' + bgHtml);
  }
  
  fs.writeFileSync(file, content);
}

try {
  replaceBg('src/components/PatientProgress.tsx', 'py-24');
  replaceBg('src/components/DoctorSection.tsx', 'py-24');
  replaceBg('src/components/ClinicSection.tsx', 'py-24');
  replaceBg('src/components/KnowledgeSection.tsx', 'py-24');
  replaceBg('src/components/PillarCards.tsx', 'pt-16 pb-12');
  console.log("Successfully updated backgrounds.");
} catch(e) {
  console.error(e);
}
