import Link from "next/link";

export default function Page() {
    return(
        <div className="p-8 font-sans bg-gray-50 text-gray-900">
  <header className="text-center mb-10">
    <h1 className="text-4xl font-bold">Capital and Revenue</h1>
    <p className="text-lg mt-2 text-gray-600">
      Understanding the distinction between capital and revenue in financial and accounting terms.
    </p>
  </header>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">What is Capital?</h2>
    <p className="text-lg">
      Capital refers to resources invested in a business to generate long-term benefits. These include assets, funds, and investments that contribute to building and expanding the enterprise.
    </p>
    <ul className="list-disc list-inside text-lg space-y-2 mt-4">
      <li>
        Examples: Purchase of machinery, construction of buildings, acquisition of land, etc.
      </li>
      <li>
        Nature: Long-term and non-recurring.
      </li>
      <li>
        Accounting Treatment: Shown on the balance sheet as assets or equity.
      </li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">What is Revenue?</h2>
    <p className="text-lg">
      Revenue refers to the income or earnings generated from the core activities of a business, such as sales or services. Revenue also includes operational expenses incurred to sustain regular business operations.
    </p>
    <ul className="list-disc list-inside text-lg space-y-2 mt-4">
      <li>
        Examples: Sale of goods, commission earned, rent received, etc.
      </li>
      <li>
        Nature: Short-term and recurring.
      </li>
      <li>
        Accounting Treatment: Reported on the profit and loss statement.
      </li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Differences Between Capital and Revenue</h2>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Aspect</th>
          <th className="py-2 px-4 border-b text-left">Capital</th>
          <th className="py-2 px-4 border-b text-left">Revenue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b">Definition</td>
          <td className="py-2 px-4 border-b">
            Refers to funds or resources invested for long-term benefits.
          </td>
          <td className="py-2 px-4 border-b">
            Refers to income generated from regular business operations.
          </td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Nature</td>
          <td className="py-2 px-4 border-b">Non-recurring</td>
          <td className="py-2 px-4 border-b">Recurring</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">Examples</td>
          <td className="py-2 px-4 border-b">
            Buying land, constructing a factory, investing in technology.
          </td>
          <td className="py-2 px-4 border-b">
            Selling products, receiving interest income, earning commissions.
          </td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Accounting Treatment</td>
          <td className="py-2 px-4 border-b">
            Shown on the balance sheet as an asset or liability.
          </td>
          <td className="py-2 px-4 border-b">
            Recorded in the income statement (profit and loss account).
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Examples of Capital and Revenue Transactions</h2>
    <p className="text-lg mb-4">
      To better understand, here are some examples of capital and revenue transactions:
    </p>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Type</th>
          <th className="py-2 px-4 border-b text-left">Example</th>
          <th className="py-2 px-4 border-b text-left">Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b">Purchase of Land</td>
          <td className="py-2 px-4 border-b">
            Buying a plot for business expansion.
          </td>
          <td className="py-2 px-4 border-b">Capital</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Sale of Products</td>
          <td className="py-2 px-4 border-b">
            Revenue from selling manufactured goods.
          </td>
          <td className="py-2 px-4 border-b">Revenue</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">Renovation of Office</td>
          <td className="py-2 px-4 border-b">
            Expenses incurred in improving office facilities.
          </td>
          <td className="py-2 px-4 border-b">Capital</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Rent Received</td>
          <td className="py-2 px-4 border-b">
            Income from leasing company property.
          </td>
          <td className="py-2 px-4 border-b">Revenue</td>
        </tr>
      </tbody>
    </table>
  </section>
  <Link href="/" className="bg-white text-black flex justify-center font-serif text-2xl p-4 border-dashed	border-2 border-red-900">Back To Home</Link>
</div>

    )
}