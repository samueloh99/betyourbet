import React from 'react'

function NftDetails({}) {
  return (
    <div className="w-full">
      <p className="text-lg text-white py-5">Manchester United F.C.</p>

      <div className=" columns-2  gap-4">
        <div>
          <img
            style={{ width: '400px', height: '400px' }}
            src="./man.png"
            alt="logo"
          />
        </div>

        <div className="card">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Wallets{' '}
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Tokens
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">0xh...123</td>
                <td className="px-6 py-4">0.1 Matic</td>
                <td className="px-6 py-4">2000</td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">0xh...123</td>
                <td className="px-6 py-4">0.1 Matic</td>
                <td className="px-6 py-4">2000</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">0xh...123</td>
                <td className="px-6 py-4">0.1 Matic</td>
                <td className="px-6 py-4">2000</td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">0xh...123</td>
                <td className="px-6 py-4">0.1 Matic</td>
                <td className="px-6 py-4">2000</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">0xh...123</td>
                <td className="px-6 py-4">0.1 Matic</td>
                <td className="px-6 py-4">2000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          type="button"
          className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-8"
        >
          But Token
        </button>
      </div>

      <p className="text-lg text-white py-5">
        The current probability of Manchester United F.C being
        <br /> the champion is 14.5%
        <br />
        The projected value is 99.90 Matic
      </p>

      <button
        type="button"
        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:focus:ring-yellow-900"
      >
        Mint Token
      </button>
    </div>
  )
}

export default NftDetails
