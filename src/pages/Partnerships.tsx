
import Footer from "@/components/Footer";

const Partnerships = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with new background */}
      <section className="relative section-padding min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/72f32702-b826-4dbb-97cc-d3282b2e80ad.png"
            alt="Partnership Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h1>
          <p className="text-lg md:text-xl">
            Join us in creating meaningful impact through strategic partnerships
          </p>
        </div>
      </section>

      {/* Bank Account Details */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Bank Account Details</h2>
          
          <div className="space-y-10">
            {/* USD Account */}
            <div className="glass p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">USD</h3>
              <div className="space-y-2">
                <p><strong>Beneficiary bank:</strong> Access Bank Plc</p>
                <p><strong>Account Name:</strong> Remnant Christian Network Theological Seminary - Adullam</p>
                <p><strong>Account No:</strong> 1665250883</p>
                <p><strong>Swift Code:</strong> ABNGNGLA</p>
                <p><strong>Routing Number:</strong> 021000089</p>
                <p><strong>Intermediary bank:</strong> Citibank...CITIUS33</p>
              </div>
            </div>
            
            {/* NAIRA Account */}
            <div className="glass p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">NAIRA</h3>
              <div className="space-y-2">
                <p><strong>Beneficiary bank:</strong> Access Bank Plc</p>
                <p><strong>Account Name:</strong> Remnant Christian Network Theological Seminary - Adullam</p>
                <p><strong>Account No:</strong> 1652191540</p>
              </div>
            </div>
            
            {/* GBP Account */}
            <div className="glass p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">GBP</h3>
              <div className="space-y-2">
                <p><strong>Beneficiary bank:</strong> Access Bank Plc</p>
                <p><strong>Account Name:</strong> Remnant Christian Network Theological Seminary - Adullam</p>
                <p><strong>Account No:</strong> 1667594370</p>
                <p><strong>Banks Swift code:</strong> ABNGNGLA</p>
                <p><strong>Beneficiary banks IBAN NO:</strong> GB27CITI18500811071211</p>
                <p><strong>Intermediary Bank Swift code:</strong> CITIGB2L</p>
                <p><strong>Sort code:</strong> 185008</p>
              </div>
            </div>
            
            {/* EURO Account */}
            <div className="glass p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">EURO</h3>
              <div className="space-y-2">
                <p><strong>Beneficiary bank:</strong> Access Bank Plc</p>
                <p><strong>Account Name:</strong> Remnant Christian Network Theological Seminary - Adullam</p>
                <p><strong>Account No:</strong> 1664879355</p>
                <p><strong>Banks Swift code:</strong> ABNGNGLA</p>
                <p><strong>Beneficiary banks IBAN NO:</strong> GB74CITI18500811071238</p>
                <p><strong>Intermediary Bank Swift code:</strong> CITIGB2L</p>
                <p><strong>Sort code:</strong> 185008</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnerships;
