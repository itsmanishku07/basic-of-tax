import Link from "next/link";

export default function Page() {
  return (
    <div className="p-8 font-sans bg-gray-50 text-gray-900">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Income under the Head ‘Capital Gains’
        </h1>
        <p className="text-lg mt-2 text-gray-600">
          A comprehensive guide to understanding capital gains, their
          computation, and applicable exemptions.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What are Capital Gains?</h2>
        <p className="text-lg">
          Capital gains refer to the profits or gains arising from the transfer
          of a capital asset. These gains are taxable under the Income Tax Act,
          except in cases where specific exemptions apply.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Scope of Capital Gains</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            <strong>Capital Asset:</strong> Any property, whether movable or
            immovable, tangible or intangible, such as land, buildings, shares,
            bonds, patents, and trademarks.
          </li>
          <li>
            <strong>Transfer:</strong> Sale, exchange, relinquishment, or
            extinguishment of rights in a capital asset.
          </li>
          <li>
            <strong>Not Capital Assets:</strong> Personal effects like clothes,
            furniture, or vehicles used for personal purposes are excluded.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Types of Capital Gains</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Description</th>
              <th className="py-2 px-4 border-b text-left">Holding Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">
                Short-Term Capital Gains (STCG)
              </td>
              <td className="py-2 px-4 border-b">
                Gains from assets held for a short duration.
              </td>
              <td className="py-2 px-4 border-b">
                Up to 36 months (12 months for certain assets like shares).
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-2 px-4 border-b">
                Long-Term Capital Gains (LTCG)
              </td>
              <td className="py-2 px-4 border-b">
                Gains from assets held for a longer duration.
              </td>
              <td className="py-2 px-4 border-b">
                More than 36 months (12 months for certain assets like shares).
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Computation of Capital Gains
        </h2>
        <h3 className="text-xl font-semibold mb-2">
          1. Short-Term Capital Gains (STCG)
        </h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          Full Value of Consideration - Cost of Acquisition - Cost of
          Improvement - Expenses on Transfer = Short-Term Capital Gains
        </pre>

        <h3 className="text-xl font-semibold mb-2 mt-4">
          2. Long-Term Capital Gains (LTCG)
        </h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          Full Value of Consideration - Indexed Cost of Acquisition - Indexed
          Cost of Improvement - Expenses on Transfer = Long-Term Capital Gains
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Exemptions under Capital Gains
        </h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            <strong>Section 54:</strong> Exemption on sale of residential
            property if proceeds are reinvested in another residential property.
          </li>
          <li>
            <strong>Section 54F:</strong> Exemption on sale of any asset other
            than a residential house, provided the proceeds are invested in
            purchasing or constructing a residential house.
          </li>
          <li>
            <strong>Section 54EC:</strong> Exemption on sale of long-term assets
            if proceeds are invested in specified bonds like NHAI or REC bonds.
          </li>
          <li>
            <strong>Section 10(38):</strong> Exemption on LTCG from listed
            equity shares (subject to conditions).
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Examples of Capital Gains
        </h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            Sale of residential property held for more than 3 years (LTCG).
          </li>
          <li>
            Gains from sale of shares held for less than 12 months (STCG).
          </li>
          <li>Profit from sale of a trademark after 4 years (LTCG).</li>
        </ul>
      </section>

      <Link
        href="/"
        className="bg-white text-black flex justify-center font-serif text-2xl p-4 border-dashed	border-2 border-red-900"
      >
        Back To Home
      </Link>
    </div>
  );
}
