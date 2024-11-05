const FeeStructure = () => {

    const fees = [
        { class: 'Class 1', admissionFee: '500 BDT' },
        { class: 'Class 2', admissionFee: '600 BDT' },
        { class: 'Class 3', admissionFee: '700 BDT' },
        { class: 'Class 4', admissionFee: '800 BDT' },
        { class: 'Class 5', admissionFee: '900 BDT' },
    ];
    return (
        <div className="mb-8 max-w-7xl mx-auto px-4">
                <h1 className="text-2xl font-semibold mb-4">Admission Fee Structure</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-3 px-6 bg-gray-100 text-left text-gray-600 font-bold">Class</th>
                            <th className="py-3 px-6 bg-gray-100 text-left text-gray-600 font-bold">Admission Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fees.map((fee, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                <td className="py-4 px-6 text-gray-700">{fee.class}</td>
                                <td className="py-4 px-6 text-gray-700">{fee.admissionFee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeeStructure;