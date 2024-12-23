import Link from "next/link";

export default function Page() {
    return (
        <div className="p-8 font-sans bg-gray-50 text-gray-900">
  <header className="text-center mb-10">
    <h1 className="text-4xl font-bold">Tax Evasion and Tax Management</h1>
    <p className="text-lg mt-2 text-gray-600">
      Learn about the illegal practice of tax evasion and the legal ways to manage and optimize tax liabilities.
    </p>
  </header>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">What is Tax Evasion?</h2>
    <p className="text-lg">
      Tax evasion is the illegal act of deliberately falsifying information to reduce tax liabilities. This may include underreporting income, inflating deductions, or hiding assets to avoid paying the taxes owed. Tax evasion is considered a crime and is punishable by law.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Characteristics of Tax Evasion</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>Deliberate attempt to evade paying taxes.</li>
      <li>Involves illegal actions such as falsifying income or deductions.</li>
      <li>Usually carried out with the intent to avoid paying due taxes.</li>
      <li>Can result in severe legal consequences, including fines and imprisonment.</li>
      <li>Undermines the fairness of the tax system.</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Examples of Tax Evasion</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>Underreporting income or overstating expenses on tax returns.</li>
      <li>Hiding assets in offshore accounts or shell companies.</li>
      <li>Claiming false deductions or exemptions.</li>
      <li>Using fake invoices or receipts to reduce taxable income.</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Consequences of Tax Evasion</h2>
    <p className="text-lg">
      The legal consequences of tax evasion can be severe, including:
    </p>
    <ul className="list-disc list-inside text-lg space-y-2 mt-4">
      <li>Imposition of hefty fines.</li>
      <li>Interest on unpaid taxes.</li>
      <li>Criminal charges leading to potential imprisonment.</li>
      <li>Loss of reputation and business credibility.</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">What is Tax Management?</h2>
    <p className="text-lg">
      Tax management refers to the strategies and practices adopted by individuals or businesses to comply with tax laws while optimizing their tax liabilities. It includes proper documentation, planning, and using available exemptions, deductions, and credits to minimize tax payments legally.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Key Strategies for Tax Management</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li><span className="font-semibold">Tax Planning:</span> Proactively organizing finances to reduce taxable income using deductions, exemptions, and credits.</li>
      <li><span className="font-semibold">Investment in Tax-saving Instruments:</span> Using schemes like PPF, EPF, ELSS, and tax-free bonds to reduce taxable income.</li>
      <li><span className="font-semibold">Claiming Tax Deductions and Exemptions:</span> Deductions under Section 80C, Section 24(b), and exemptions like HRA or capital gains exemptions.</li>
      <li><span className="font-semibold">Record-Keeping and Compliance:</span> Maintaining accurate financial records, filing returns on time, and ensuring tax payment compliance.</li>
      <li><span className="font-semibold">Hiring a Tax Consultant:</span> Consulting professionals for optimized tax strategies and timely compliance with regulations.</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Distinction Between Tax Evasion and Tax Management</h2>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Aspect</th>
          <th className="py-2 px-4 border-b text-left">Tax Evasion</th>
          <th className="py-2 px-4 border-b text-left">Tax Management</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b">Definition</td>
          <td className="py-2 px-4 border-b">
            Illegal actions to avoid paying taxes.
          </td>
          <td className="py-2 px-4 border-b">
            Legal and ethical planning to reduce tax liability.
          </td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Legality</td>
          <td className="py-2 px-4 border-b">
            Illegal and punishable by law.
          </td>
          <td className="py-2 px-4 border-b">
            Legal and complies with tax laws.
          </td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">Intent</td>
          <td className="py-2 px-4 border-b">
            To avoid paying taxes altogether.
          </td>
          <td className="py-2 px-4 border-b">
            To optimize tax liability within legal limits.
          </td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Examples</td>
          <td className="py-2 px-4 border-b">
            Underreporting income, falsifying records.
          </td>
          <td className="py-2 px-4 border-b">
            Investment in tax-saving instruments, claiming deductions.
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  <Link href="/" className="bg-white text-black flex justify-center font-serif text-2xl p-4 border-dashed	border-2 border-red-900">Back To Home</Link>
</div>

    )
}