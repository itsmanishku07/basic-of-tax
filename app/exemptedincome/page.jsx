import Link from "next/link";

export default function Page() {
    return(
        <div className="p-8 font-sans bg-gray-50 text-gray-900">
  <header className="text-center mb-10">
    <h1 className="text-4xl font-bold">Exempted Income</h1>
    <p className="text-lg mt-2 text-gray-600">
      A guide to understanding incomes exempt from taxation under the Income Tax Act.
    </p>
  </header>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">What is Exempted Income?</h2>
    <p className="text-lg">
      Exempted income refers to income that is not subject to taxation under specific provisions of the Income Tax Act. Such income is excluded while calculating the total taxable income of an individual or entity.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">List of Exempted Incomes</h2>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Type of Income</th>
          <th className="py-2 px-4 border-b text-left">Description</th>
          <th className="py-2 px-4 border-b text-left">Section</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b">Agricultural Income</td>
          <td className="py-2 px-4 border-b">
            Income derived from agricultural activities, such as farming, forestry, or horticulture.
          </td>
          <td className="py-2 px-4 border-b">Section 10(1)</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Share of Profit from Partnership Firm</td>
          <td className="py-2 px-4 border-b">
            The partner’s share of profit from a partnership firm.
          </td>
          <td className="py-2 px-4 border-b">Section 10(2A)</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">Income from Hindu Undivided Family (HUF)</td>
          <td className="py-2 px-4 border-b">
            Amount received by a member from the HUF is exempt.
          </td>
          <td className="py-2 px-4 border-b">Section 10(2)</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Leave Travel Concession (LTC)</td>
          <td className="py-2 px-4 border-b">
            LTC for travel expenses within India is exempt up to a certain limit.
          </td>
          <td className="py-2 px-4 border-b">Section 10(5)</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">Gratuity</td>
          <td className="py-2 px-4 border-b">
            Gratuity received by an employee under certain conditions is exempt.
          </td>
          <td className="py-2 px-4 border-b">Section 10(10)</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Pension</td>
          <td className="py-2 px-4 border-b">
            Commuted pension received by certain individuals is exempt.
          </td>
          <td className="py-2 px-4 border-b">Section 10(10A)</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">Income from Provident Fund</td>
          <td className="py-2 px-4 border-b">
            Amount received from a recognized Provident Fund under specific conditions.
          </td>
          <td className="py-2 px-4 border-b">Section 10(11) & 10(12)</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Scholarships</td>
          <td className="py-2 px-4 border-b">
            Scholarships granted to meet the cost of education are fully exempt.
          </td>
          <td className="py-2 px-4 border-b">Section 10(16)</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">Dividends</td>
          <td className="py-2 px-4 border-b">
            Dividends received from an Indian company (conditions apply).
          </td>
          <td className="py-2 px-4 border-b">Section 10(34)</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Income of Minor Child</td>
          <td className="py-2 px-4 border-b">
            Income of a minor child up to a certain limit is exempt.
          </td>
          <td className="py-2 px-4 border-b">Section 10(32)</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Conditions for Exemption</h2>
    <p className="text-lg">
      To qualify for exemption, the income must fulfill specific conditions outlined under the respective sections of the Income Tax Act. For example:
    </p>
    <ul className="list-disc list-inside text-lg space-y-2 mt-4">
      <li>
        Agricultural income must be from land located in India and used for agricultural purposes.
      </li>
      <li>
        Provident fund withdrawals are exempt only if the employee has completed 5 years of continuous service.
      </li>
      <li>
        Gratuity and pension exemptions are subject to limits and conditions based on the employment terms.
      </li>
    </ul>
  </section>
  <Link href="/" className="bg-white text-black flex justify-center font-serif text-2xl p-4 border-dashed	border-2 border-red-900">Back To Home</Link>
</div>

    )
}
