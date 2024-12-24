import Link from "next/link";

export default function Page()
{
    return(
        <div className="p-8 font-sans bg-gray-50 text-gray-900">
  <header className="text-center mb-10">
    <h1 className="text-4xl font-bold">Income from the Head ‘House Property’</h1>
    <p className="text-lg mt-2 text-gray-600">
      A detailed guide to understanding income from house property, its computation, deductions, and tax implications.
    </p>
  </header>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">What is Income from House Property?</h2>
    <p className="text-lg">
      Income from house property refers to the income earned from owning a building or land appurtenant to the building. It includes rental income or deemed income from property that is not used for business or professional purposes.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Conditions for Taxation under this Head</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>The property must consist of a building or land appurtenant to it.</li>
      <li>The taxpayer must be the owner of the property.</li>
      <li>The property should not be used for business or professional purposes.</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Types of House Property</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li><span className="font-semibold">Self-Occupied Property:</span> Property used by the owner for their residence. Deemed annual value is considered as nil.</li>
      <li><span className="font-semibold">Let-Out Property:</span> Property rented out for earning income.</li>
      <li><span className="font-semibold">Deemed Let-Out Property:</span> If the taxpayer owns more than two self-occupied properties, the others are treated as deemed let-out properties.</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Computation of Income from House Property</h2>
    <ol className="list-decimal list-inside text-lg space-y-2">
      <li><span className="font-semibold">Determine Annual Value:</span> 
        <ul className="list-disc list-inside ml-6 space-y-1">
          <li>For self-occupied property: Deemed annual value is nil.</li>
          <li>For let-out property: Higher of municipal value or fair rental value, subject to standard rent.</li>
        </ul>
      </li>
      <li><span className="font-semibold">Less: Municipal Taxes Paid:</span> Deduct municipal taxes paid by the owner.</li>
      <li><span className="font-semibold">Less: Standard Deduction:</span> 30% of Net Annual Value (NAV).</li>
      <li><span className="font-semibold">Less: Interest on Borrowed Capital:</span> Deduction for interest paid on home loans.</li>
      <li><span className="font-semibold">Result:</span> Income from House Property.</li>
    </ol>
    <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
      Gross Annual Value (GAV)
      - Municipal Taxes Paid
      = Net Annual Value (NAV)
      - Standard Deduction (30% of NAV)
      - Interest on Borrowed Capital
      = Income from House Property
    </pre>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Deductions under Section 24</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li><span className="font-semibold">Standard Deduction:</span> 30% of the Net Annual Value (NAV).</li>
      <li><span className="font-semibold">Interest on Borrowed Capital:</span> Deduction for interest on home loans:
        <ul className="list-disc list-inside ml-6">
          <li>Up to ₹2,00,000 for self-occupied property.</li>
          <li>Unlimited for let-out property (subject to overall income capping rules).</li>
        </ul>
      </li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Taxability of Different Scenarios</h2>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Scenario</th>
          <th className="py-2 px-4 border-b text-left">Annual Value</th>
          <th className="py-2 px-4 border-b text-left">Tax Treatment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b">Self-Occupied Property</td>
          <td className="py-2 px-4 border-b">Nil</td>
          <td className="py-2 px-4 border-b">Interest deduction up to ₹2,00,000.</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Let-Out Property</td>
          <td className="py-2 px-4 border-b">Actual Rent Received</td>
          <td className="py-2 px-4 border-b">Deductions as per Section 24.</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">Deemed Let-Out Property</td>
          <td className="py-2 px-4 border-b">Higher of Municipal Value or Fair Rent</td>
          <td className="py-2 px-4 border-b">Standard deductions apply.</td>
        </tr>
      </tbody>
    </table>
  </section>

  <Link href="/" className="bg-white text-black flex justify-center font-serif text-2xl p-4 border-dashed	border-2 border-red-900">Back To Home</Link>

</div>

    )
}