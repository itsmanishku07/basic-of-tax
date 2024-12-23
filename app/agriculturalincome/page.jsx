import Link from 'next/link';
import React from 'react';

const AgriculturalIncomePage = () => {
    return (
        <div className="p-8 font-sans bg-white text-black">
  <header className="text-center mb-10">
    <h1 className="text-4xl font-bold">Agricultural Income</h1>
  </header>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">What is Agricultural Income?</h2>
    <p className="text-lg">
      Agricultural income refers to revenue derived from farming, forestry, horticulture, and related agricultural activities. This income is typically exempt from taxation under certain conditions.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Conditions for Agricultural Income</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>The income must be derived from land situated in India.</li>
      <li>The land must be used for agricultural purposes.</li>
      <li>The income must arise from actual agricultural activities like cultivation and harvesting.</li>
      <li>Income from the sale of agricultural produce qualifies as agricultural income.</li>
      <li>Rent or revenue derived from agricultural land is also considered agricultural income.</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Exemptions and Taxation</h2>
    <p className="text-lg">
      Agricultural income is exempt from tax under Section 10(1) of the Income Tax Act. However, if it exceeds a certain limit, it may be considered for tax calculation under the partial integration method.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Taxation on Specific Crops</h2>
    <p className="text-lg mb-4">
      The taxation for specific crops such as tea, coffee, and rubber is calculated as a composite income, where only a part of the income is taxed as non-agricultural income. The following table shows the percentages applicable:
    </p>
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Crop</th>
          <th className="py-2 px-4 border-b text-left">Agricultural Component (%)</th>
          <th className="py-2 px-4 border-b text-left">Non-Agricultural Component (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b">Tea</td>
          <td className="py-2 px-4 border-b">60%</td>
          <td className="py-2 px-4 border-b">40%</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Coffee (Cured and Processed)</td>
          <td className="py-2 px-4 border-b">25%</td>
          <td className="py-2 px-4 border-b">75%</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">Coffee (Grown and Sold Unprocessed)</td>
          <td className="py-2 px-4 border-b">100%</td>
          <td className="py-2 px-4 border-b">0%</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Rubber</td>
          <td className="py-2 px-4 border-b">65%</td>
          <td className="py-2 px-4 border-b">35%</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Partly Agricultural and Partly Non-Agricultural Income</h2>
    <p className="text-lg">
      Some income may be partly agricultural and partly non-agricultural. For instance, income from processing agricultural produce to make it marketable is partly agricultural if the process is ordinarily employed by cultivators or rent receivers. The non-agricultural part of the income is taxable.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Examples of Partly Agricultural and Partly Non-Agricultural Income</h2>
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Type of Income</th>
          <th className="py-2 px-4 border-b text-left">Description</th>
          <th className="py-2 px-4 border-b text-left">Taxability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b">Processing of Agricultural Produce</td>
          <td className="py-2 px-4 border-b">Income from processing agricultural produce to make it marketable.</td>
          <td className="py-2 px-4 border-b">Partly Agricultural, Partly Non-Agricultural</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Sale of Processed Produce</td>
          <td className="py-2 px-4 border-b">Income from the sale of processed agricultural produce.</td>
          <td className="py-2 px-4 border-b">Non-Agricultural</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">Rent from Agricultural Land</td>
          <td className="py-2 px-4 border-b">Rent received from leasing out agricultural land.</td>
          <td className="py-2 px-4 border-b">Agricultural</td>
        </tr>
      </tbody>
    </table>
  </section>
  <Link href="/" className="bg-white text-black flex justify-center font-serif text-2xl p-4 border-dashed	border-2 border-red-900">Back To Home</Link>
</div>

    );
};

export default AgriculturalIncomePage;