export default function createReportObject(employeesList) {
    return {
        AllEmployees: employeesList,
        getNumberOfDepartements(employeesList) {
            return Object.keys(employeesList).length;
        },
    };

}
