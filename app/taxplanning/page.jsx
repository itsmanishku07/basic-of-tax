import Link from "next/link";

export default function Page() {
    return(
        <div className="p-8 font-sans bg-gray-50 text-gray-900">
  <header className="text-center mb-10">
    <h1 className="text-4xl font-bold">Concept of Tax Planning</h1>
    <p className="text-lg mt-2 text-gray-600">
      Understanding the legal and efficient ways to minimize tax liabilities while adhering to the provisions of the law.
    </p>
  </header>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">What is Tax Planning?</h2>
    <p className="text-lg">
      Tax planning is the process of analyzing a financial situation or plan to ensure that all elements work together to allow for the payment of the lowest taxes possible. It involves making use of legal allowances, deductions, and exemptions to minimize tax liability.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Objectives of Tax Planning</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>Minimizing tax liability within the legal framework.</li>
      <li>Ensuring compliance with tax laws and regulations.</li>
      <li>Maximizing savings through effective financial planning.</li>
      <li>Channelizing investments in tax-saving instruments.</li>
      <li>Optimizing post-tax returns on investments.</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Types of Tax Planning</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>
        <span className="font-semibold">Short-term Tax Planning:</span> Planning for a specific financial year to reduce tax liability.
      </li>
      <li>
        <span className="font-semibold">Long-term Tax Planning:</span> Planning over multiple years to maximize tax benefits.
      </li>
      <li>
        <span className="font-semibold">Permissive Tax Planning:</span> Utilizing tax provisions, such as exemptions, deductions, and rebates, to reduce tax liability.
      </li>
      <li>
        <span className="font-semibold">Purposive Tax Planning:</span> Making investments in tax-saving schemes to achieve tax benefits.
      </li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Benefits of Tax Planning</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>Reduces overall tax liability.</li>
      <li>Helps in achieving financial stability and growth.</li>
      <li>Encourages savings and investment in productive avenues.</li>
      <li>Ensures compliance with legal and regulatory requirements.</li>
      <li>Optimizes retirement and wealth planning.</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Examples of Tax Planning</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>
        Investing in tax-saving instruments like Public Provident Fund (PPF), National Savings Certificate (NSC), and Equity Linked Savings Schemes (ELSS) under Section 80C.
      </li>
      <li>
        Claiming deductions for home loan interest under Section 24(b).
      </li>
      <li>
        Utilizing health insurance premium deductions under Section 80D.
      </li>
      <li>
        Availing exemptions on House Rent Allowance (HRA) as per Section 10(13A).
      </li>
    </ul>
  </section>

  <Link href="/" className="bg-white text-black flex justify-center font-serif text-2xl p-4 border-dashed	border-2 border-red-900">Back To Home</Link>
</div>

    )
}