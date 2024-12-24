import Link from "next/link";

export default function Page() {
    return(
        <div className="p-8 font-sans bg-gray-50 text-gray-900">
  <header className="text-center mb-10">
    <h1 className="text-4xl font-bold">Income under the Head ‘Profits and Gains of Business or Profession’</h1>
    <p className="text-lg mt-2 text-gray-600">
      A comprehensive guide to understanding income from business or profession, its computation, and deductions.
    </p>
  </header>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">What is Income from Business or Profession?</h2>
    <p className="text-lg">
      Income under this head includes profits and gains derived from any trade, commerce, manufacturing, or professional services. This head encompasses earnings from a sole proprietorship, partnership, or professional practice.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Scope of Income under this Head</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>Profits from trade, commerce, or manufacturing activities.</li>
      <li>Income from professional services such as legal, medical, engineering, or consulting professions.</li>
      <li>Rental income from the use of business assets like machinery.</li>
      <li>Any speculative income (e.g., share trading).</li>
      <li>Profits from export incentives, government subsidies, or duty drawbacks.</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Computation of Income</h2>
    <ol className="list-decimal list-inside text-lg space-y-2">
      <li><span className="font-semibold">Gross Receipts or Turnover:</span> Total revenue generated during the financial year.</li>
      <li><span className="font-semibold">Less: Expenses:</span> Deduct all allowable expenses incurred wholly and exclusively for the business or profession.</li>
      <li><span className="font-semibold">Add: Other Income:</span> Include any non-operating income like rent or interest.</li>
      <li><span className="font-semibold">Result:</span> Profits and Gains of Business or Profession.</li>
    </ol>
    <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
      Gross Receipts or Turnover
      - Allowable Expenses
      + Other Income
      = Profits and Gains of Business or Profession
    </pre>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Allowable Expenses</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>Rent, electricity, and utilities for business premises.</li>
      <li>Salaries, wages, and bonuses paid to employees.</li>
      <li>Depreciation on assets used for business purposes.</li>
      <li>Interest on loans taken for business purposes.</li>
      <li>Advertising, marketing, and promotional expenses.</li>
      <li>Legal and professional fees.</li>
      <li>Bad debts written off (subject to conditions).</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Deductions Available</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li><span className="font-semibold">Section 32:</span> Depreciation on fixed assets.</li>
      <li><span className="font-semibold">Section 35:</span> Expenditure on scientific research.</li>
      <li><span className="font-semibold">Section 36:</span> Insurance premium, bad debts, and interest on borrowed capital.</li>
      <li><span className="font-semibold">Section 37:</span> General business expenses.</li>
      <li><span className="font-semibold">Section 40:</span> Expenses disallowed for non-compliance (e.g., non-payment of TDS).</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Taxable and Exempt Income</h2>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Type of Income</th>
          <th className="py-2 px-4 border-b text-left">Tax Treatment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b">Operating Profits</td>
          <td className="py-2 px-4 border-b">Taxable</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Speculative Profits</td>
          <td className="py-2 px-4 border-b">Taxable</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">Export Incentives</td>
          <td className="py-2 px-4 border-b">Taxable</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Exempt Subsidies</td>
          <td className="py-2 px-4 border-b">Exempt (specific cases)</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Examples of Business and Professional Income</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>Income from operating a retail store or manufacturing unit.</li>
      <li>Fees earned by a doctor, lawyer, or consultant.</li>
      <li>Rental income from business assets like warehouses.</li>
      <li>Profits from speculative trading activities.</li>
    </ul>
  </section>

  <Link href="/" className="bg-white text-black flex justify-center font-serif text-2xl p-4 border-dashed	border-2 border-red-900">Back To Home</Link>

</div>

    )
}