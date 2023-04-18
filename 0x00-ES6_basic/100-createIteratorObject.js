export default function iterateThroughObject(reportWithIterator) {
    return (function* _() {
        for (const departement of Object.values(report.AllEmployees)) {
            for (const emploee of departement) {
                yield employee;
            }
        }
    }());
}
