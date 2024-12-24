import Link from "next/link";

export default function Page()
{
    return(
        <div className="p-8 font-sans bg-gray-50 text-gray-900">
  <header className="text-center mb-10">
    <h1 className="text-4xl font-bold">Income from the Head ‘Salaries’</h1>
    <p className="text-lg mt-2 text-gray-600">
      Explore the components, exemptions, and deductions under the head of 'Salaries' in income tax.
    </p>
  </header>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">What is Income from Salaries?</h2>
    <p className="text-lg">
      Income under the head 'Salaries' refers to remuneration received by an individual for services rendered as part of an employment contract. It includes wages, bonuses, pensions, gratuities, and other forms of compensation.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Components of Salary Income</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li><span className="font-semibold">Basic Salary:</span> The fixed component of salary as per the employment contract.</li>
      <li><span className="font-semibold">Allowances:</span> Payments made to meet specific requirements, such as HRA, conveyance allowance, and medical allowance.</li>
      <li><span className="font-semibold">Perquisites:</span> Benefits or facilities provided by the employer, such as rent-free accommodation or a company car.</li>
      <li><span className="font-semibold">Bonus and Commissions:</span> Additional income provided based on performance or company profits.</li>
      <li><span className="font-semibold">Pension:</span> Regular payments after retirement.</li>
      <li><span className="font-semibold">Gratuity:</span> A lump sum payment received on retirement or termination of employment.</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Exemptions under the Head 'Salaries'</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li><span className="font-semibold">House Rent Allowance (HRA):</span> Exempt up to a certain limit based on rent paid and the city of residence.</li>
      <li><span className="font-semibold">Leave Travel Allowance (LTA):</span> Exempt for travel expenses incurred on leave within India.</li>
      <li><span className="font-semibold">Gratuity:</span> Exempt up to a specified limit based on years of service.</li>
      <li><span className="font-semibold">Provident Fund Contributions:</span> Employer contributions to recognized provident funds are exempt within prescribed limits.</li>
      <li><span className="font-semibold">Retirement Benefits:</span> Certain retirement benefits like commuted pension may be exempt.</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Deductions from Salary Income</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li><span className="font-semibold">Standard Deduction:</span> A flat deduction of ₹50,000 for all salaried employees.</li>
      <li><span className="font-semibold">Professional Tax:</span> Deductible if paid to the state government.</li>
      <li><span className="font-semibold">Entertainment Allowance:</span> Deductible for government employees, subject to limits.</li>
    </ul>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Taxable Salary Calculation</h2>
    <p className="text-lg">
      Taxable salary is calculated as:
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
      Gross Salary
      - Exemptions (HRA, LTA, etc.)
      - Deductions (Standard deduction, Professional tax, etc.)
      = Taxable Salary
    </pre>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Examples of Taxable and Exempt Components</h2>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Component</th>
          <th className="py-2 px-4 border-b text-left">Taxability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b">Basic Salary</td>
          <td className="py-2 px-4 border-b">Fully Taxable</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">HRA</td>
          <td className="py-2 px-4 border-b">Partly Exempt</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">Perquisites (e.g., Rent-Free Accommodation)</td>
          <td className="py-2 px-4 border-b">Taxable</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border-b">Gratuity</td>
          <td className="py-2 px-4 border-b">Partly Exempt</td>
        </tr>
      </tbody>
    </table>
  </section>
  <Link href="/" className="bg-white text-black flex justify-center font-serif text-2xl p-4 border-dashed	border-2 border-red-900">Back To Home</Link>

  
</div>

    )
}