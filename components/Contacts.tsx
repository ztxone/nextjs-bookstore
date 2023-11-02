import React from "react";

const Contacts: React.FC<{}> = () => {
  return (
    <div className="px-4 md:px-12 py-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          <strong>Team:</strong> 
          <br />
          <span className="cursor-pointer" onClick={(e) => {window.location.href ='mailto:ae9951@student.jamk.fi'}}>Awsaf uz zaman Ahmad</span><br/>
          <span className="cursor-pointer" onClick={(e) => {window.location.href ='mailto:ad9348@student.jamk.fi'}}>Fedor Vlasov</span><br/>
          <span className="cursor-pointer" onClick={(e) => {window.location.href ='mailto:ae9190@student.jamk.fi'}}>Mohajer Koohestani Ehsan</span><br/>
          <span className="cursor-pointer" onClick={(e) => {window.location.href ='mailto:ae9200@student.jamk.fi'}}>Md Nayeem Hasan Khan</span><br/>
        </p>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          <strong>Course:</strong> Modern Software development - Frontend
        </p>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          <strong>Stack:</strong> Next.js + Typescript + MongoDB
        </p>
      </div>
    </div>
  );
};

export default Contacts;
