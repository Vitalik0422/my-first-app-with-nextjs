import { Schema } from "joi"

export const useJoiValidationResolver = <T>(validationSchema:Schema) => {
    return async(data: T)=> {
        try {
            const values = await validationSchema.validateAsync(data,{
                abortEarly: false
            })
            console.log(values)
            return {
            values,
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (errors: any) {
            console.log(errors)
            return errors

        }
        
    }
    
}