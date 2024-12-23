import Link from "next/link";

export default function Page() {
    return(
        <div className="p-8 font-sans bg-gray-50 text-gray-900">
  <header className="text-center mb-10">
    <h1 className="text-4xl font-bold">Concept of Tax Avoidance</h1>
    <p className="text-lg mt-2 text-gray-600">
      Understanding the practice of minimizing tax liabilities within the boundaries of the law but against its intent.
    </p>
  </header>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">What is Tax Avoidance?</h2>
    <p className="text-lg">
      Tax avoidance refers to the use of legal methods to minimize tax liability by exploiting loopholes in tax laws. While it is not illegal, tax avoidance is often considered unethical as it goes against the spirit of the law.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Characteristics of Tax Avoidance</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>Legally minimizes tax liability.</li>
      <li>Involves exploiting loopholes or ambiguities in tax laws.</li>
      <li>May lead to future litigation or scrutiny by tax authorities.</li>
      <li>Considered against the intent of tax legislation.</li>
      <li>Ethical concerns often surround the practice.</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Examples of Tax Avoidance</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>
        Setting up a company in a low-tax jurisdiction (tax haven) to reduce overall tax liability.
      </li>
      <li>
        Structuring salaries with higher allowances that are exempt from tax instead of taxable basic pay.
      </li>
      <li>
        Using complex financial arrangements, such as transfer pricing, to shift profits to jurisdictions with lower tax rates.
      </li>
      <li>
        Claiming depreciation or capital allowances on assets not actively used for business.
      </li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Distinction Between Tax Avoidance and Tax Evasion</h2>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Aspect</th>
          <th className="py-2 px-4 border-b text-left">Tax Avoidance</th>
          <th className="py-2 px-4 border-b text-left">Tax Evasion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b">Definition</td>
          <td className="py-2 px-4 border-b">
            Minimizing tax liability through legal means, often exploiting loopholes.
          </td>
          <td className="py-2 px-4 border-b">
            Illegally avoiding taxes by falsifying or hiding information.
          </td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Legality</td>
          <td className="py-2 px-4 border-b">Legal but unethical.</td>
          <td className="py-2 px-4 border-b">Illegal and punishable.</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">Intent</td>
          <td className="py-2 px-4 border-b">
            To exploit ambiguities in tax laws to reduce liability.
          </td>
          <td className="py-2 px-4 border-b">
            To deliberately evade tax payments.
          </td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Examples</td>
          <td className="py-2 px-4 border-b">
            Setting up operations in tax havens, restructuring salaries.
          </td>
          <td className="py-2 px-4 border-b">
            Underreporting income, falsifying documents.
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Impact of Tax Avoidance</h2>
    <p className="text-lg">
      While tax avoidance is legal, it can have several implications:
    </p>
    <ul className="list-disc list-inside text-lg space-y-2 mt-4">
      <li>Reduces government revenue, impacting public services and infrastructure development.</li>
      <li>Creates an uneven playing field between individuals and companies.</li>
      <li>Often leads to stricter tax laws and regulations, impacting genuine taxpayers.</li>
      <li>May attract scrutiny and reputational damage for businesses.</li>
    </ul>
  </section>
  <Link href="/" className="bg-white text-black flex justify-center font-serif text-2xl p-4 border-dashed	border-2 border-red-900">Back To Home</Link>
</div>

    )
}