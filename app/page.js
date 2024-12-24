import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
  <header className="bg-yellow-700 text-white p-4 text-center">
    <h1 className="text-3xl font-bold font-mono">Basics of Taxation</h1>
    
  </header>

  <div className="container mx-auto p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-semibold text-red-900">
          Module 1: 
        </h2>
        <ul className=" flex flex-col font-serifs mt-4 list-inside text-black" >
          <Link href="/whatistax" className="py-1">1. Intro to Tax</Link>
          <Link href="/agriculturalincome" className="py-1">3. Agricultural Income</Link>
          <Link href="/canonsoftaxation" className="py-1">2. Canons of Taxation</Link>
          <Link href="/schemeoftaxation" className="py-1">4. Scheme of Taxation</Link>
          <Link href="/capitalandrevenue" className="py-1">5. Capital and Revenue</Link>
          <Link href="/residentialstatus" className="py-1">6. Residential Status of Individual</Link>
          <Link href="/exemptedincome" className="py-1">7. Exempted Incomes</Link>
          <Link href="/taxplanning" className="py-1">8. Concept of Tax Planning</Link>
          <Link href="/taxavoidance" className="py-1">9. Tax Avoidance</Link>
          <Link href="/taxevasion" className="py-1">10. Tax Evasion and Tax Management</Link>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-semibold text-red-900">
          Module 2: 
        </h2>
        <ul className=" flex flex-col font-serifs mt-4 list-inside text-black" >
          <Link href="/incomefromtheheadsalaries" className="py-1">1. Income from the Head ‘Salaries’</Link>
          <Link href="/incomefromtheheadhouseproperty" className="py-1">2. Income from the Head ‘House Property’</Link>
          <Link href="/incomeundertheheadprofitsandgains" className="py-1">3. Income under the Head ‘Profits and Gains of Business or Profession’</Link>
          <Link href="/incomeundertheheadcapitalgains" className="py-1">4. Income under the Head ‘Capital Gains’</Link>
          <Link href="/incomeundertheheadincomefromothersources" className="py-1">5. Income under the Head ‘Income from other sources’</Link>
        </ul>
      </div>
    
    </div>
  </div>
</div>

  );
}
