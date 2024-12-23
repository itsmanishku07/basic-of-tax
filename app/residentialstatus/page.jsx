import Link from "next/link";

export default function Page() {
    return(
        <div className="p-8 font-sans bg-gray-50 text-gray-900">
  <header className="text-center mb-10">
    <h1 className="text-4xl font-bold">Residential Status of an Individual</h1>
    <p className="text-lg mt-2 text-gray-600">
      Learn about the residential status and its implications under income tax laws.
    </p>
  </header>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">What is Residential Status?</h2>
    <p className="text-lg">
      The residential status of an individual determines their tax liability in a financial year. It is assessed based on their physical presence in India during the relevant year and preceding years.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Types of Residential Status</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>
        <span className="font-semibold">Resident:</span> An individual who meets specific conditions of stay in India.
      </li>
      <li>
        <span className="font-semibold">Non-Resident (NR):</span> An individual who does not meet the conditions to be a resident.
      </li>
      <li>
        <span className="font-semibold">Resident but Not Ordinarily Resident (RNOR):</span> A transitional status for individuals who meet the residency criteria but have limited connections to India.
      </li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Conditions for Determining Residential Status</h2>
    <p className="text-lg mb-4">
      The determination of residential status depends on the number of days an individual spends in India:
    </p>
    <h3 className="text-xl font-semibold mb-2">Basic Conditions</h3>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>
        An individual is in India for at least <span className="font-semibold">182 days</span> during the financial year.
      </li>
      <li>
        An individual is in India for at least <span className="font-semibold">60 days</span> during the financial year and <span className="font-semibold">365 days</span> or more in the preceding 4 years.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mt-4 mb-2">Additional Conditions for RNOR</h3>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>
        The individual has been a non-resident for at least 9 out of the 10 preceding years.
      </li>
      <li>
        The individual has been in India for <span className="font-semibold">729 days or less</span> during the preceding 7 years.
      </li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Tax Implications Based on Residential Status</h2>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Status</th>
          <th className="py-2 px-4 border-b text-left">Scope of Taxation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b">Resident</td>
          <td className="py-2 px-4 border-b">
            Taxable on global income (income earned in India and abroad).
          </td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Non-Resident (NR)</td>
          <td className="py-2 px-4 border-b">
            Taxable only on income earned or accrued in India.
          </td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">RNOR</td>
          <td className="py-2 px-4 border-b">
            Taxable on income earned in India and income derived from a business controlled or profession set up in India.
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Examples of Residential Status Calculation</h2>
    <p className="text-lg mb-4">
      Here are some examples to understand how residential status is determined:
    </p>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>
        <span className="font-semibold">Example 1:</span> An individual stays in India for 200 days during the financial year. Status: Resident.
      </li>
      <li>
        <span className="font-semibold">Example 2:</span> An individual stays in India for 50 days during the financial year and 400 days in the preceding 4 years. Status: Non-Resident.
      </li>
      <li>
        <span className="font-semibold">Example 3:</span> An individual stays in India for 80 days during the financial year and has been a non-resident for 9 out of the last 10 years. Status: RNOR.
      </li>
    </ul>
  </section>
  <Link href="/" className="bg-white text-black flex justify-center font-serif text-2xl p-4 border-dashed	border-2 border-red-900">Back To Home</Link>
</div>

    )
}