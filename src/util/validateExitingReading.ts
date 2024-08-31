import { RegisterRepository } from "../repositories/repositories";

export async function checkExistingReading(customer_code: string, measure_datetime: string, measure_type: 'WATER' | 'GAS'): Promise<boolean> {
    try {
        const monthStart = new Date(measure_datetime);
        monthStart.setDate(1);
        monthStart.setHours(0, 0, 0, 0);

        const monthEnd = new Date(monthStart);
        monthEnd.setMonth(monthEnd.getMonth() + 1);

        const existingReading = await RegisterRepository().findOne({
            where: {
                customer_code,
                measure_type
            }
        });

        return !!existingReading;
    } catch (error) {
        console.error("Error checking existing reading: ", error);
        throw new Error("Failed to check existing reading.");
    }
}
