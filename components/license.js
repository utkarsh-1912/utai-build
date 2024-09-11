import Head from 'next/head';

export default function Licensing() {
  return (
    <div className='w-full'>
      <Head>
        <title>License | Utkristi AI Labs</title>
      </Head>
      <div className="p-8 md:p-12 bg-black mx-auto w-full max-w-screen-xl">
        <h1 className="text-4xl font-bold mb-4 gradient-title text-center">License</h1>
        <p className="mb-6 text-center text-gray-300">Effective Date: <strong className='text-yellow-600'>01/12/2024</strong> | Last Updated: <strong className='text-yellow-600'>09/10/2024</strong></p>

        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-6">
          This Licensing Agreement governs the use of any software, data, or intellectual property created, distributed,
          or provided by <strong>Utkristi AI Labs</strong>, an innovation lab of <strong>Utkristi LLC</strong>. By accessing,
          downloading, or using our products, you agree to comply with and be bound by the terms of this Licensing Agreement.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. License Grant</h2>

        <h3 className="text-xl font-semibold mb-2">2.1 Scope of License</h3>
        <p className="mb-6">
          We grant you a non-exclusive, non-transferable, and limited license to use our products for personal or
          commercial purposes, subject to the terms and conditions of this agreement.
        </p>

        <h3 className="text-xl font-semibold mb-2">2.2 Restrictions</h3>
        <ul className="list-disc list-inside mb-4">
          <li>You may not copy, modify, or distribute our software without express written consent.</li>
          <li>Reverse engineering, decompiling, or disassembling the software is prohibited.</li>
          <li>You cannot sublicense or transfer the license to any third party without permission.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property Rights</h2>
        <p className="mb-6">
          All intellectual property rights, including trademarks, copyrights, and patents associated with our software
          and products, are the sole property of <strong>Utkristi AI Labs</strong>. This agreement does not grant any rights
          to you other than the limited use rights specified under this license.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Updates and Upgrades</h2>
        <p className="mb-6">
          We may provide updates, patches, or upgrades to the software. These updates may be subject to additional terms,
          and by accepting and using them, you agree to comply with those terms. We reserve the right to modify or
          discontinue any product or service without prior notice.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
        <p className="mb-6">
          We may terminate this license at any time if you violate any terms of this agreement. Upon termination, you
          must cease all use of the software and destroy any copies in your possession.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Warranty Disclaimer</h2>
        <p className="mb-6">
          The software is provided "as is" without any warranties of any kind, whether express or implied, including,
          but not limited to, implied warranties of merchantability or fitness for a particular purpose. We do not
          warrant that the software will meet your requirements or that it will operate without interruptions or errors.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
        <p className="mb-6">
          Under no circumstances shall <strong>Utkristi AI Labs</strong> or its affiliates be liable for any indirect,
          incidental, or consequential damages arising from the use of our software, including, but not limited to, loss
          of data, profits, or business interruptions, even if we have been advised of the possibility of such damages.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
        <p className="mb-6">
          This Licensing Agreement is governed by the laws of India. Any disputes arising under or related to this
          agreement shall be subject to the exclusive jurisdiction of the courts located in [Insert Jurisdiction].
        </p>

        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
        <p className="mb-6">
          If you have any questions regarding this Licensing Agreement, please contact us at:
        </p>
        <p>
          <strong className='text-yellow-600'>Email:</strong> legal@utkristi-labs.io
        </p>
        <p>
          <strong className='text-yellow-600'>Address:</strong> Utkristi AI Labs, Electronic City, Bengaluru, India
        </p>
      </div>
    </div>
  );
}
