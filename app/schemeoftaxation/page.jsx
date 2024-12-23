import Link from "next/link";

export default function Page() {
    return(
        <div className="p-8 font-sans bg-gray-50 text-gray-900">
  <header className="text-center mb-10">
    <h1 className="text-4xl font-bold">Scheme of Taxation</h1>
    <p className="text-lg mt-2 text-gray-600">
      Understanding the structure, classifications, and methodology of taxation.
    </p>
  </header>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">What is Taxation?</h2>
    <p className="text-lg">
      Taxation is a means by which governments finance their expenditure by imposing charges on citizens and corporate entities. It includes various taxes such as income tax, corporate tax, GST, and more. Taxation is critical for funding public services and infrastructure.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Types of Taxes</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>
        <span className="font-semibold">Direct Taxes:</span> Levied directly on an individual's or organization's income, such as Income Tax and Corporate Tax.
      </li>
      <li>
        <span className="font-semibold">Indirect Taxes:</span> Collected on goods and services, such as GST, VAT, and customs duties.
      </li>
      <li>
        <span className="font-semibold">Other Taxes:</span> Includes property tax, wealth tax, and professional tax.
      </li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Taxation Process</h2>
    <p className="text-lg mb-4">
      The taxation process involves several key steps, from assessment to payment and filing:
    </p>
    <ol className="list-decimal list-inside text-lg space-y-2">
      <li>Income or transaction is assessed for tax liability.</li>
      <li>Tax returns are prepared and filed with the appropriate authority.</li>
      <li>Taxes are paid based on the calculated liability.</li>
      <li>Audits and verifications may be conducted to ensure compliance.</li>
    </ol>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Tax Slabs and Rates</h2>
    <p className="text-lg mb-4">
      Tax rates vary based on income levels, entity type, and location. Below is an example of income tax slabs for individuals in India for the financial year 2023-2024:
    </p>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Income Range</th>
          <th className="py-2 px-4 border-b text-left">Tax Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b">Up to ₹2,50,000</td>
          <td className="py-2 px-4 border-b">Nil</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">₹2,50,001 - ₹5,00,000</td>
          <td className="py-2 px-4 border-b">5%</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">₹5,00,001 - ₹10,00,000</td>
          <td className="py-2 px-4 border-b">20%</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Above ₹10,00,000</td>
          <td className="py-2 px-4 border-b">30%</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Benefits of Taxation</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>Funds public infrastructure and services like healthcare and education.</li>
      <li>Reduces economic inequality through progressive tax systems.</li>
      <li>Encourages compliance and discipline in financial management.</li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-4">Challenges in Taxation</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>Tax evasion and avoidance reduce revenue collection.</li>
      <li>Complex tax systems can lead to non-compliance.</li>
      <li>Inefficiencies in collection and enforcement mechanisms.</li>
    </ul>
  </section>
  <Link href="/" className="bg-white text-black flex justify-center font-serif text-2xl p-4 border-dashed	border-2 border-red-900">Back To Home</Link>
</div>

    )
}