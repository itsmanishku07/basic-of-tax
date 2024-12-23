
import Head from 'next/head';
import Link from 'next/link';

const CanonsOfTaxation = () => {
    return (
        <>
            <Head>
                <title>Canons of Taxation</title>
                <meta name="description" content="Learn about the canons of taxation, including equity, certainty, convenience, and economy." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="min-h-screen bg-gray-100 p-4 w-full">
                <header className="text-center py-6 bg-white text-black">
                    <h1 className="text-3xl font-bold">Canons of Taxation</h1>
                </header>
                <main className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-black">1. Canon of Equity</h2>
                        <p className="text-gray-700">
                            The tax system should be fair and equitable. Taxes should be based on the taxpayer's ability to pay.
                        </p>
                    </section>
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-black">2. Canon of Certainty</h2>
                        <p className="text-gray-700">
                            The tax which each individual is bound to pay ought to be certain and not arbitrary. The time of payment, the manner of payment, the quantity to be paid, ought all to be clear and plain.
                        </p>
                    </section>
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-black">3. Canon of Convenience</h2>
                        <p className="text-gray-700">
                            Every tax ought to be levied at the time or in the manner in which it is most likely to be convenient for the contributor to pay it.
                        </p>
                    </section>
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-black">4. Canon of Economy</h2>
                        <p className="text-gray-700">
                            Every tax ought to be contrived as both to take out and to keep out of the pockets of the people as little as possible over and above what it brings into the public treasury of the state.
                        </p>
                    </section>
                </main>
            </div>
            <Link href="/" className="bg-white text-black flex justify-center font-serif text-2xl p-4 border-dashed	border-2 border-red-900">Back To Home</Link>
        </>
    );
};

export default CanonsOfTaxation;