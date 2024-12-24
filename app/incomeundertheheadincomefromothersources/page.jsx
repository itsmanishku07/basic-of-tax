import Link from "next/link";

export default function Page() {
  return (
    <div className="p-8 font-sans bg-gray-50 text-gray-900">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Income under the Head ‘Income from Other Sources’
        </h1>
        <p className="text-lg mt-2 text-gray-600">
          A guide to understanding the taxation of incomes that do not fall
          under other heads of income.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          What is ‘Income from Other Sources’?
        </h2>
        <p className="text-lg">
          This is a residual category of income that includes all incomes that
          are not specifically taxable under the other heads of income such as
          Salaries, House Property, Profits and Gains of Business or Profession,
          or Capital Gains. It is governed by **Sections 56 to 59** of the
          Income Tax Act.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Scope of Income under this Head
        </h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            Interest income from savings accounts, fixed deposits, or bonds.
          </li>
          <li>
            Dividend income exceeding the exempt limit under Section 10(34).
          </li>
          <li>
            Rental income from machinery, plant, or furniture (not related to
            business/profession).
          </li>
          <li>
            Gifts exceeding specified monetary limits under Section 56(2).
          </li>
          <li>
            Family pension received by the legal heirs of a deceased employee.
          </li>
          <li>
            Income from winnings in lotteries, crossword puzzles, horse races,
            and other games of chance.
          </li>
          <li>Any other income not taxable under other heads.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Examples of Income from Other Sources
        </h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Interest earned on fixed deposits or recurring deposits.</li>
          <li>
            Gifts received on occasions other than specified exemptions (e.g.,
            weddings).
          </li>
          <li>Winnings from a TV game show or online gaming platform.</li>
          <li>Income from letting out machinery or furniture.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Computation of Income under this Head
        </h2>
        <p className="text-lg">
          Income from other sources is computed by adding gross receipts under
          this head and deducting allowable expenses. The formula is:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          Gross Income - Allowable Expenses (if any) = Income from Other Sources
        </pre>
        <h3 className="text-xl font-semibold mt-4 mb-2">Allowable Expenses</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            Expenses incurred to earn interest income (e.g., commission or
            collection charges).
          </li>
          <li>
            Repairs and depreciation on machinery or furniture let out on rent.
          </li>
          <li>
            Standard deduction for family pension: ₹15,000 or 33.33% of the
            income, whichever is lower.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Taxation of Specific Incomes
        </h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Type of Income</th>
              <th className="py-2 px-4 border-b text-left">Tax Treatment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">
                Winnings from Lotteries or Games
              </td>
              <td className="py-2 px-4 border-b">
                Taxed at 30% without deductions (Section 115BB).
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-2 px-4 border-b">Dividend Income</td>
              <td className="py-2 px-4 border-b">
                Taxable if exceeding ₹10 lakh under Section 10(34).
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Family Pension</td>
              <td className="py-2 px-4 border-b">
                Standard deduction allowed as mentioned above.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-2 px-4 border-b">Interest Income</td>
              <td className="py-2 px-4 border-b">Taxable at slab rates.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Exemptions and Deductions
        </h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            <strong>Section 10(34):</strong> Dividend income from domestic
            companies (up to ₹10 lakh).
          </li>
          <li>
            <strong>Section 10(15):</strong> Interest income from specific
            securities and savings bonds.
          </li>
          <li>
            <strong>Section 56(2)(vii):</strong> Gifts from relatives, marriage
            occasions, or inheritance are exempt.
          </li>
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
