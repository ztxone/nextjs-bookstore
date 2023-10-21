import React from "react";

const Contacts: React.FC<{}> = () => {
  return (
    <div className="px-4 md:px-12 py-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          <strong>Team:</strong> Awsaf uz zaman Ahmad, Khan Md Nayeem Hasan,
          Mohajer Koohestani Ehsan, Fedor Vlasov
        </p>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          <strong>Course:</strong> Modern Software development - Frontend
        </p>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          <strong>Stack:</strong> Next.js + Typescript + MongoBD + Zustand
        </p>
      </div>
    </div>
  );
};

export default Contacts;
